import IconCompleted from "../assets/images/icon-completed.svg";
import RestartIcon from "./RestartIcon";

function ResultsCard() {
    return (
    <div
      className="flex flex-col items-center gap-2 py-10 px-6"
      style={{
        backgroundImage: `url('/pattern-star-1.svg'), url('/pattern-star-2.svg')`,
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundPosition: "bottom right, top 48px left 8px",
        backgroundSize: "38px 38px, 21px 21px",
      }}
    >
      <img className="w-14 h-14 rounded-full
      ring-4 ring-green-500/10 ring-offset-4 ring-offset-green-500/20
      mb-4" src={IconCompleted} alt="" />

      <h2 className="text-2xl font-bold">Test Complete!</h2>

      <p className="text-neutral-400 text-lg text-center">
        Solid run. Keep pushing to beat your high score.
      </p>

      <dl className="space-y-4 self-stretch">
        <div className="border border-neutral-800 rounded-lg p-4 ">
          <dt className="text-neutral-400 text-xl">WPM:</dt>
          <dd className="text-xl font-bold">72</dd>
        </div>
        <div className="border border-neutral-800 rounded-lg p-4">
          <dt className="text-neutral-400 text-xl">Accuracy</dt>
          <dd className="text-xl font-bold">94%</dd>
        </div>
        <div className="border border-neutral-800 rounded-lg p-4">
          <dt className="text-neutral-400 text-xl">Characters</dt>
          <dd className="text-xl font-bold">120/5</dd>
        </div>
      </dl>

      <button
        className="flex gap-2 text-neutral-900 text-xl font-bold bg-white px-4 py-4 rounded-xl cursor-pointer mt-6"
        type="button"
      >
        Go Again <RestartIcon />
      </button>
    </div>
  );
}

export default ResultsCard;
