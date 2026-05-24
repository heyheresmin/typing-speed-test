function StatsBar() {
  return (
    <dl className="flex mt-6">
      <div className="flex-1 text-center pr-4 border-r border-neutral-700">
        <dt className="text-neutral-400 text-xl">WPM:</dt>
        <dd className="text-2xl font-bold">0</dd>
      </div>
      <div className="flex-1 text-center px-4 border-r border-neutral-700">
        <dt className="text-neutral-400 text-xl">Accuracy</dt>
        <dd className="text-2xl font-bold">94%</dd>
      </div>
      <div className="flex-1 text-center pl-4 ">
        <dt className="text-neutral-400 text-xl">Time</dt>
        <dd className="text-2xl font-bold">00:46</dd>
      </div>
    </dl>
  );
}

export default StatsBar;
