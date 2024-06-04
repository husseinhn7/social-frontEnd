import React, { useState, useRef } from 'react';

const Textarea = () => {
  const textareaRef = useRef(null);
  const [textareaValue, setTextareaValue] = useState('');

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
    adjustTextareaHeight();
  };

  const adjustTextareaHeight = () => {
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <textarea
      ref={textareaRef}
      value={textareaValue}
      onChange={handleTextareaChange}
      className="textarea-autosize"
      placeholder="Enter text..."
    />
  );
};

export default Textarea;