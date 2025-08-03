function NavbarBackdrop({ menuOpen, setMenuOpen }) {
  return (
    <div
      className={`menu-backdrop${menuOpen ? " open" : ""}`}
      onClick={() => setMenuOpen(false)}
    ></div>
  );
}
export default NavbarBackdrop;
