function NavbarHamburger({ menuOpen, setMenuOpen }) {
  return (
    <button
      className={`hamburger${menuOpen ? " open" : ""}`}
      aria-label="Open Menu"
      onClick={() => setMenuOpen(true)}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
}
export default NavbarHamburger;
