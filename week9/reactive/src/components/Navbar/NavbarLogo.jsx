import logo from "../../assets/img/logo.png";

function NavbarLogo() {
  return (
    <div className="logo">
      <a href="#hero">
        <img src={logo} alt="Powerfull Logo" />
      </a>
    </div>
  );
}
export default NavbarLogo;
