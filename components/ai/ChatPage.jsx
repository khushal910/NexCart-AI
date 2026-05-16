import React from 'react'

const ChatPage = ({ product, onClose }) => {
  console.log(product);
  return (
    onClose && (
      <div className="fixed inset-0 z-50 flex items-end justify-end p-6">
        <div className="w-[350px] h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col ">
          {/* HEADER */}
          <div className=" bg-black text-white p-4 flex justify-between items-center ">
            <h2>AI Chat</h2>

            <button onClick={onClose}>X</button>
          </div>

          {/* CHAT BODY */}
          <div className="flex-1 p-4 overflow-y-auto">
            <p>Hello 👋</p>
          </div>

          {/* INPUT */}
          <div className="p-3 border-t flex gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              className=" flex-1 border rounded-lg px-3 py-2"
            />

            <button
              className=" bg-black text-white px-4 rounded-lg
                        "
            >
              Send
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default ChatPage