import footerLogo from "../../assets/img/logo.png";

function FooterLogo() {
  return (
    <div className="footer-logo">
      <a href="#hero">
        <img src={footerLogo} alt="Powerfull Logo" />
      </a>
    </div>
  );
}
export default FooterLogo;
