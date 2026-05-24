import Header from "./components/Header";
import StatsBar from "./components/StatsBar";
import SettingsBar from "./components/SettingsBar";

function App() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white font-sora">
      <Header />
      <StatsBar />
      <SettingsBar />
    </div>
  );
}

export default App;
