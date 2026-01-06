import { useState } from "react";
import { FaRobot } from "react-icons/fa";
import "./chatbot.css";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I'm your assistant 🤖. How can I help today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const sendMessage = () => {
    if (!input.trim()) return;
    setMessages([...messages, { from: "user", text: input }]);
    setInput("");

    // Temporary bot response (placeholder)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { from: "bot", text: "Thanks for your message! I'm still learning 🤖" }
      ]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Toggle Button */}
      <div
        className={`chatbot-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRobot size={28} />
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <div className="bot-icon">
              <FaRobot size={24} />
            </div>
            <h3>Assistant Bot</h3>
            <button onClick={() => setIsOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`message ${msg.from}`}>
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chatbot-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
