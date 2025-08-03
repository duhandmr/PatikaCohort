function NavbarMobileMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={`mobile-menu${menuOpen ? " open" : ""}`}>
      <button
        className="close-btn"
        aria-label="Close Menu"
        onClick={() => setMenuOpen(false)}
      >
        &times;
      </button>
      <ul>
        <li>
          <a href="#hero" onClick={() => setMenuOpen(false)}>
            Home
          </a>
        </li>
        <li>
          <a href="#classes" onClick={() => setMenuOpen(false)}>
            Classes
          </a>
        </li>
        <li>
          <a href="#trainers" onClick={() => setMenuOpen(false)}>
            Trainer
          </a>
        </li>
        <li>
          <a href="#review" onClick={() => setMenuOpen(false)}>
            Review
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </li>
        <li>
          <a
            href="#join"
            className="join-btn"
            onClick={() => setMenuOpen(false)}
          >
            JOIN US
          </a>
        </li>
      </ul>
    </div>
  );
}
export default NavbarMobileMenu;
