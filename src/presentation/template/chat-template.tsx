import { useState } from "react";
import { GptMessage } from "../components/chat-bubbles/GptMessage";
import { MyMessage } from "../components/chat-bubbles/MyMessage";
import { TextMessageBox } from "../components/chat-input-boxes/TextMessageBox";
import { TypingLoader } from "../components/loaders/TypingLoader";

interface Message {
  text: string;
  isGpt: boolean;
}

export function ChatTemplate() {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);

  const handlePost = async(text: string) => {
    setIsLoading(true);
    setMessages((prev) => [...prev, { text, isGpt: false }]);


    setIsLoading(false);

  }

  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
        <GptMessage text="Hola, soy OpenAI" />
          {messages.map((message, index) =>
            message.isGpt ? (
              <GptMessage key={index} text="Esto es de openai" />
            ) : (
              <MyMessage key={index} text={message.text} />
            )
          )}
          {isLoading && (
            <div className="col-start-1 col-end-12 fade-in">
              <TypingLoader className="fade-in" />
            </div>
          )}
        </div>
      </div>

      <TextMessageBox
        onSendMessage={handlePost}
        placeholder="Escribe tu mensaje aquí..."
        disableCorrections
      />
    </div>
  );
}
