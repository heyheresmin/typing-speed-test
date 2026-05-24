import ChevronIcon from "./ChevronIcon";

function SettingsBar() {
  return (
    <nav className="flex gap-4 justify-around mt-4">
      {/* Difficulty */}
      <fieldset>
        <legend className="sr-only">Difficutlty</legend>

        {/* Mobile */}
        <button className="border rounded-md px-12 py-0.5 flex gap-2 cursor-pointer">Hard <ChevronIcon /></button>

        {/* Dropdown menu in mobile and shows in desktop too */}
        <div className="hidden">
          <input type="radio" id="easy" name="difficutlty" value="easy" />
          <label htmlFor="easy">Easy</label>

          <input type="radio" id="medium" name="difficutlty" value="medium" />
          <label htmlFor="medium">Medium</label>

          <input type="radio" id="hard" name="difficutlty" value="hard" />
          <label htmlFor="hard">Hard</label>
        </div>
      </fieldset>

      {/* Mode */}
      <fieldset>
        <legend className="sr-only">Mode</legend>

        {/* Mobile */}
        <button className="border rounded-md px-12 py-0.5 flex gap-2 cursor-pointer">Times (60s) <ChevronIcon /></button>

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
