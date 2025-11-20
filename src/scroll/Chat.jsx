import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./WhatsApp.css"; // Make sure this CSS exists in src/

const Chat = () => {
  const [symptomData, setSymptomData] = useState([]);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Describe your symptoms (e.g., fever, cough, headache)." },
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false); // Chat window toggle

  // Load CSV from public folder
  useEffect(() => {
    const loadCSV = async () => {
      try {
        const response = await fetch("/csv/Data.csv");
        const text = await response.text();
        const parsed = Papa.parse(text, { header: true });
        setSymptomData(parsed.data);
        console.log("✅ Data Loaded:", parsed.data);
      } catch (error) {
        console.error("❌ Error loading CSV:", error);
      }
    };
    loadCSV();
  }, []);

  // Text-to-speech
  const speak = (text) => {
    const msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-IN";
    window.speechSynthesis.speak(msg);
  };

  // Show bot messages one by one
  const showBotMessagesSequentially = async (lines) => {
    for (let i = 0; i < lines.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setMessages((prev) => [...prev, { sender: "bot", text: lines[i] }]);
      speak(lines[i]);
    }
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);

    const lowerInput = input.toLowerCase();
    let found = false;

    symptomData.forEach((item) => {
      const symptom = item.symptom?.toLowerCase();
      if (
        symptom &&
        (lowerInput.includes(symptom) ||
          lowerInput.split(" ").some((word) => symptom.includes(word)))
      ) {
        found = true;

        const precautions = [
          item.precaution_1,
          item.precaution_2,
          item.precaution_3,
          item.precaution_4,
        ]
          .filter(Boolean)
          .join(", ");

        const botLines = [
          ` Symptom: ${item.symptom}`,
          ` Description: ${item.description || "N/A"}`,
          ` Precautions: ${precautions || "N/A"}`,
          ` Severity: ${item.severity || "N/A"}`,
        ];

        showBotMessagesSequentially(botLines);
      }
    });

    if (!found) {
      showBotMessagesSequentially([
        "Sorry, I don't have info for that symptom. Try another one.",
      ]);
    }

    setInput("");
  };

  return (
    <>
      {/* Floating Chat Button */}
      <div className="chatbot-btn" onClick={() => setOpen(!open)}>💬</div>

      {/* Chat Window */}
      {open && (
        <div className="chatbot-box">
          <div className="chat-header">
            <strong>Medical Chatbot 🤖</strong>
            <button className="close-btn" onClick={() => setOpen(false)}>✖</button>
          </div>

          <div className="chat-box">
            {messages.map((m, i) => (
              <div key={i} className={m.sender === "bot" ? "bot-msg" : "user-msg"}>
                {m.text}
              </div>
            ))}
          </div>

          <div className="input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type symptoms here..."
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chat;
