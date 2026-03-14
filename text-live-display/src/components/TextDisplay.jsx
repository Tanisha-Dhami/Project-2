import React, { useState } from "react";

function TextDisplay() {

  // State to store input text
  const [text, setText] = useState("");

  // Function to handle typing
  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Live Text Display</h2>

      {/* Input field */}
      <input
        type="text"
        placeholder="Type something..."
        value={text}
        onChange={handleChange}
        style={{ padding: "10px", width: "250px" }}
      />

      {/* Live display */}
      <p style={{ marginTop: "20px", fontSize: "18px" }}>
        You typed → <b>{text}</b>
      </p>
    </div>
  );
}

export default TextDisplay;