import { GptMessage } from "../../components/chat-bubbles/GptMessage";
import { MyMessage } from "../../components/chat-bubbles/MyMessage";
import { TextMessageBox } from "../../components/chat-input-boxes/TextMessageBox";
import { TypingLoader } from "../../components/loaders/TypingLoader";

export function OrthographyPage() {
  return (
    <div className="chat-container">
      <div className="chat-messages">
        <div className="grid grid-cols-12 gap-y-2">
          <GptMessage text="Hello, how are you today?" />
          <MyMessage text="I'm doing well, thank you for asking!" />
          <TypingLoader className="fade-in" />
        </div>
      </div>

      <TextMessageBox
        onSendMessage={(message) => console.log(message)}
        placeholder="Escribe tu mensaje aquí..."
        disableCorrections
      />
    </div>
  );
}
