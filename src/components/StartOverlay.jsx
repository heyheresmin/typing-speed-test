function StartOverlay() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-neutral-900/40">
      <button type="button" className="text-xl font-semibold bg-blue-600 px-6 py-3 rounded-xl cursor-pointer hover:bg-blue-400">Start Typing Test</button>
      <p className="text-lg font-semibold">Or click the text and start typing</p>
    </div>
  );
}

export default StartOverlay;