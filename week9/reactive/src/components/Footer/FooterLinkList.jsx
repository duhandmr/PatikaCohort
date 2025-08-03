function FooterLinkList({ title, links }) {
  return (
    <div>
      <h4>{title}</h4>
      <ul>
        {links.map((l, i) => (
          <li key={i}>
            <a href={l.url}>{l.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FooterLinkList;
