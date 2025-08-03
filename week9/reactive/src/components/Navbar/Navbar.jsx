import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarHamburger from "./NavbarHamburger";
import NavbarMobileMenu from "./NavbarMobileMenu";
import NavbarBackdrop from "./NavbarBackdrop";
import { useEffect, useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header id="header" className={scrolled ? "scrolled" : ""}>
      <nav>
        <div className="container">
          <NavbarLogo />
          <NavbarLinks />
          <NavbarHamburger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </div>
        <NavbarMobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <NavbarBackdrop menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </nav>
    </header>
  );
}

export default Navbar;
