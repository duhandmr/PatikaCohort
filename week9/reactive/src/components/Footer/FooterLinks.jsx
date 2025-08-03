import FooterLinkList from "./FooterLinkList";

const infoLinks = [
  { text: "About Us", url: "#" },
  { text: "Classes", url: "#" },
  { text: "Blog", url: "#" },
  { text: "Contact", url: "#" },
];
const helpLinks = [
  { text: "Services", url: "#" },
  { text: "Support", url: "#" },
  { text: "Terms & Condition", url: "#" },
  { text: "Privacy Policy", url: "#" },
];

function FooterLinks() {
  return (
    <div className="footer-links">
      <FooterLinkList title="Information" links={infoLinks} />
      <FooterLinkList title="Helpful Links" links={helpLinks} />
    </div>
  );
}
export default FooterLinks;
