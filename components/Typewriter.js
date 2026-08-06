import { useEffect, useState } from 'react';

export default function Typewriter({ text, speed = 50 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(displayedText + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timer);
    }
  }, [index, displayedText, text, speed]);

  return <span>{displayedText}</span>;
}
