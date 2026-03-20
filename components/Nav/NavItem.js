export default function NavItem({ title, ExpandedElem }) {
  return (
    <div className={`nav-item ${title}`}>
      <div className="title">{title}</div>
      <i className="ri-arrow-drop-down-line"></i>

      {ExpandedElem}
    </div>
  );
}
