import logoSmall from "../assets/images/logo-small.svg";
import newPb from "../assets/images/icon-personal-best.svg";

function Header() {
  return (
    <header className="flex items-center justify-between py-3">
      <a href="/">
        <img src={logoSmall} alt="" />
      </a>

      <div className="flex gap-2" aria-label="Personal best score">
        <img src={newPb} alt="" />

        <p className="text-neutral-400">
          Best: <span className="text-white">92 WPM</span>
        </p>
      </div>
    </header>
  );
}

export default Header;
