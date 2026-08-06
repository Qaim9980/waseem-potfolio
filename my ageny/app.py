"""
Flask Web Application for AI/ML Engineer Agent
Professional web interface with real-time interaction
"""
from flask import Flask, render_template, request, jsonify, session
from flask_cors import CORS
import secrets
import os
from agent import ReActAgent
from config import Config

app = Flask(__name__)
app.secret_key = secrets.token_hex(16)
CORS(app)

# Initialize config
Config.initialize()

# Store agent instances per session (simple in-memory storage)
agents = {}


def get_agent(session_id: str, professional_mode: bool = False, enhanced_mode: bool = False) -> ReActAgent:
    """Get or create agent for session"""
    mode_key = 'enh' if enhanced_mode else ('pro' if professional_mode else 'std')
    agent_key = f"{session_id}_{mode_key}"
    if agent_key not in agents:
        agents[agent_key] = ReActAgent(
            verbose=False, 
            professional_mode=professional_mode,
            enhanced_mode=enhanced_mode
        )
    return agents[agent_key]


@app.route('/')
def index():
    """Main page"""
    return render_template('index.html')


@app.route('/api/query', methods=['POST'])
def process_query():
    """Process user query through the agent"""
    try:
        data = request.get_json()
        user_query = data.get('query', '').strip()
        professional_mode = data.get('professional', False)
        enhanced_mode = data.get('enhanced', False)
        
        if not user_query:
            return jsonify({
                'success': False,
                'error': 'Query cannot be empty'
            }), 400
        
        # Get session ID
        session_id = session.get('session_id')
        if not session_id:
            session_id = secrets.token_hex(8)
            session['session_id'] = session_id
        
        # Get agent and process
        agent = get_agent(session_id, professional_mode, enhanced_mode)
        result = agent.run(user_query)
        
        mode_name = 'enhanced' if enhanced_mode else ('professional' if professional_mode else 'standard')
        
        return jsonify({
            'success': True,
            'result': result,
            'session_id': session_id,
            'mode': mode_name
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/chat', methods=['POST'])
def chat():
    """Simple chat endpoint (non-ReAct)"""
    try:
        data = request.get_json()
        message = data.get('message', '').strip()
        
        if not message:
            return jsonify({
                'success': False,
                'error': 'Message cannot be empty'
            }), 400
        
        session_id = session.get('session_id', secrets.token_hex(8))
        session['session_id'] = session_id
        
        agent = get_agent(session_id)
        response = agent.chat(message)
        
        return jsonify({
            'success': True,
            'response': response
        })
        
    except Exception as e:
        return jsonify({
            'success': False,
            'error': str(e)
        }), 500


@app.route('/api/status', methods=['GET'])
def status():
    """Check system status"""
    return jsonify({
        'status': 'online',
        'model': Config.OLLAMA_MODEL,
        'ollama_url': Config.OLLAMA_BASE_URL,
        'active_sessions': len(agents)
    })


if __name__ == '__main__':
    print("="*60)
    print("🚀 AI/ML Engineer Agent - Web Interface")
    print("="*60)
    print(f"Model: {Config.OLLAMA_MODEL}")
    print(f"Ollama URL: {Config.OLLAMA_BASE_URL}")
    print(f"Access: http://localhost:5000")
    print("="*60)
    
    app.run(host='0.0.0.0', port=5000, debug=True)
