import React, { useState } from "react";

function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const toggleChat = () => setIsOpen(!isOpen);

  const sendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = { type: "user", text: input };
    const updatedMessages = messages.concat(userMessage);
    setMessages(updatedMessages);
    
    setInput("");
    
    setTimeout(() => {
      const botMessage = { type: "bot", text: `You asked: "${input}", but AI is still learning 😅` };
      setMessages(updatedMessages.concat(botMessage));
    }, 500);
  };

  return (
    <>
      <div id="chatbot-logo" onClick={toggleChat}>💬</div>
      {isOpen && (
        <div id="chatbot-popup">
          <div id="chat-header">
            <span>AI Chatbot</span>
            <button id="close-chat" onClick={toggleChat}>✖</button>
          </div>
          <div id="chat-box">
            {messages.map((msg, idx) => (
              <div key={idx} className={msg.type === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-container">
            <input
              type="text"
              value={input}
              placeholder="Enter your choice or query"
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Chatbot;
