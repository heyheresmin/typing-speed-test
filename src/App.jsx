import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import SettingsBar from "./components/SettingsBar";
import TypingArea from "./components/TypingArea";
import ResultCard from "./components/ResultCard";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sora">
      <div className="max-w-2xl mx-auto px-4 py-6">
        <Header />
        <StatsBar />
        <SettingsBar />
        <TypingArea />
        {/* TODO: Show only when isFinished === true */}
        <ResultCard />
      </div>
    </div>
  );
}

export default App;
