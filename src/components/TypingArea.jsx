import TextDisplay from "./TextDisplay";
import StartOverlay from "./StartOverlay";

function TypingArea() {
  return (
    <div className="relative">
      <TextDisplay />
      <StartOverlay />
    </div>
  );
}

export default TypingArea;
