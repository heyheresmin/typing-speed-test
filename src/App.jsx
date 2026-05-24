import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import SettingsBar from "./components/SettingsBar";
import TypingArea from "./components/TypingArea";
import ResultsCard from "./components/ResultCard";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sora">
      <div className="max-w-2xl mx-auto px-4 p6-6">
        <Header />
        <StatsBar />
        <SettingsBar />
        <TypingArea />
        <ResultsCard />
      </div>
    </div>
  );
}

export default App;
