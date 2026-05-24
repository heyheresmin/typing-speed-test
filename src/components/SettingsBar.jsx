import ChevronIcon from "./ChevronIcon";

function SettingsBar() {
  return (
    <nav className="flex justify-center gap-6 m-4 pb-4 border-b border-b-neutral-400">
      {/* Difficulty */}
      <fieldset>
        <legend className="sr-only">Difficulty</legend>

        {/* Mobile */}
        <button type="button" className="border rounded-md px-12 py-0.5 flex gap-2 cursor-pointer">Hard <ChevronIcon /></button>

        {/* Dropdown menu in mobile and shows in desktop too */}
        <div className="hidden">
          <input type="radio" id="easy" name="difficulty" value="easy" />
          <label htmlFor="easy">Easy</label>

          <input type="radio" id="medium" name="difficulty" value="medium" />
          <label htmlFor="medium">Medium</label>

          <input type="radio" id="hard" name="difficulty" value="hard" />
          <label htmlFor="hard">Hard</label>
        </div>
      </fieldset>

      {/* Mode */}
      <fieldset>
        <legend className="sr-only">Mode</legend>

        {/* Mobile */}
        <button type="button" className="border rounded-md px-12 py-0.5 flex gap-2 cursor-pointer">Timed (60s) <ChevronIcon /></button>

        {/* Dropdown menu in mobile and shows in desktop too */}
        <div className="hidden">
          <input type="radio" id="timed" name="mode" value="timed" />
          <label htmlFor="timed">Timed (60s)</label>

          <input type="radio" id="passage" name="mode" value="passage" />
          <label htmlFor="passage">Passage</label>
        </div>
      </fieldset>
    </nav>
  );
}

export default SettingsBar;
