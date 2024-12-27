import React, { useState } from "react";
import axios from 'axios';

function ChatApp() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = async () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input }]);

    try {
      const response = await axios.post("http://localhost:8000/chat", {
        text: input,
        userID: "1" 
      });

      setMessages([...messages, 
        { sender: "user", text: input }, 
        { sender: "ai", text: response.data.response }
      ]);
    } catch (error) {
      console.error("Error:", error);
    }

    setInput("");
  };

  return (
    <div className="max-w-[800px] mx-auto min-h-screen flex flex-col bg-white text-black">
      <div className="p-5 border-b border-gray-200 bg-white">
        <h1 className="m-0 text-2xl text-[#202123]">AI Chat</h1>
 
      </div>

      <div className="flex-1 p-5 overflow-y-auto flex flex-col gap-5">
        {messages.map((msg, index) => (
          <div key={index} className={`flex flex-col p-5 rounded-lg ${
            msg.sender === "ai" ? "bg-[#f7f7f8]" : "bg-white"
          }`}>
            <span className={`font-bold mb-2 ${
              msg.sender === "ai" ? "text-[#19c37d]" : "text-[#202123]"
            }`}>
              {msg.sender === "user" ? "คุณ" : "AI"}
            </span>
            <span className="leading-relaxed text-[#353740]">
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      <div className="p-5 border-t border-gray-200 bg-white sticky bottom-0">
        <div className="max-w-[800px] mx-auto flex gap-2.5">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="พิมพ์ข้อความ..."
            className="flex-1 px-4 py-3 rounded-lg border border-gray-200 text-base outline-none bg-white"
          />
          <button 
            onClick={sendMessage} 
            className="px-6 py-3 bg-[#19c37d] text-white border-none rounded-lg cursor-pointer text-base font-medium transition-colors hover:bg-[#15a36b]"
          >
            ส่ง
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatApp;
