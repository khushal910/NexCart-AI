"use client";

import React, { useEffect, useRef, useState } from "react";

const ChatPage = ({ product, onClose }) => {
  const [sendMessage, setSendMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef(null);

  // AUTO SCROLL
  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  const handleSend = async () => {
    if (!sendMessage.trim() || loading) return;

    // USER MESSAGE
    const userMessage = {
      role: "user",
      message: sendMessage,
    };

    // SHOW USER MESSAGE IMMEDIATELY
    setMessages((prev) => [...prev, userMessage]);

    // STORE CURRENT MESSAGE
    const currentMessage = sendMessage;

    // CLEAR INPUT
    setSendMessage("");

    // START LOADER
    setLoading(true);

    try {
      const response = await fetch("http://localhost:8000/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          role: "user",
          message: currentMessage,
          product,
        }),
      });

      if (response.ok) {
        const data = await response.json();

        // AI MESSAGE
        const aiMessage = {
          role: "ai",
          message: data.reply,
        };

        // APPEND AI MESSAGE
        setMessages((prev) => [...prev, aiMessage]);
      }
    } catch (error) {
      console.log("Error:", error);

      // ERROR MESSAGE
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          message: "Something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
        fixed
        inset-0
        bg-black/30
        z-50
        flex
        items-end
        justify-end
        p-6
      "
    >
      <div
        className="
          w-[350px]
          h-[500px]
          bg-white
          rounded-2xl
          shadow-2xl
          flex
          flex-col
          overflow-hidden
        "
      >
        {/* HEADER */}
        <div
          className="
            bg-black
            text-white
            p-4
            flex
            justify-between
            items-center
          "
        >
          <h2 className="font-semibold">AI Assistant</h2>

          <button onClick={onClose} className="text-lg">
            ✕
          </button>
        </div>

        {/* CHAT BODY */}
        <div
          className="
            flex-1
            p-4
            overflow-y-auto
            flex
            flex-col
            gap-3
          "
        >
          {/* WELCOME MESSAGE */}
          <div className="flex justify-start">
            <div
              className="
                bg-gray-200
                text-black
                px-4
                py-2
                rounded-2xl
                w-fit
                max-w-[80%]
              "
            >
              Hello 👋 <br />
              Ask me anything about this product.
            </div>
          </div>

          {/* CHAT MESSAGES */}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`
                flex
                ${msg.role === "user" ? "justify-end" : "justify-start"}
              `}
            >
              <div
                className={`
                  w-fit
                  max-w-[80%]
                  px-4
                  py-2
                  rounded-2xl
                  break-words
                  text-sm
                  leading-relaxed

                  ${
                    msg.role === "user"
                      ? "bg-green-500 text-white"
                      : "bg-gray-200 text-black"
                  }
                `}
              >
                {msg.message}
              </div>
            </div>
          ))}

          {/* LOADING */}
          {loading && (
            <div className="flex justify-start">
              <div
                className="
                  bg-gray-200
                  text-black
                  px-4
                  py-2
                  rounded-2xl
                  flex
                  gap-1
                  w-fit
                "
              >
                <span
                  className="
                    w-2
                    h-2
                    bg-gray-500
                    rounded-full
                    animate-bounce
                  "
                ></span>

                <span
                  className="
                    w-2
                    h-2
                    bg-gray-500
                    rounded-full
                    animate-bounce
                    [animation-delay:0.2s]
                  "
                ></span>

                <span
                  className="
                    w-2
                    h-2
                    bg-gray-500
                    rounded-full
                    animate-bounce
                    [animation-delay:0.4s]
                  "
                ></span>
              </div>
            </div>
          )}

          {/* AUTO SCROLL TARGET */}
          <div ref={bottomRef} />
        </div>

        {/* INPUT */}
        <div
          className="
            p-3
            border-t
            flex
            gap-2
          "
        >
          <input
            type="text"
            placeholder="Ask something..."
            className="
              flex-1
              border
              rounded-lg
              px-3
              py-2
              outline-none
            "
            value={sendMessage}
            onChange={(e) => setSendMessage(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSend();
              }
            }}
          />

          <button
            onClick={handleSend}
            disabled={loading}
            className={`
              bg-black
              text-white
              px-4
              rounded-lg
              transition

              ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-800"}
            `}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
