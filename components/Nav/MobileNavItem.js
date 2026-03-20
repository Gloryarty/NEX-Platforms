import { useState } from "react";

export default function MobileNavItem({ title, ExpandedElem }) {
  const [opened, setOpen] = useState(false);
  return (
    <div className={`mobile-nav-item`}>
      <div className="header" onClick={() => setOpen(!opened)}>
        <div className="title">{title}</div>
        {opened ? (
          <i className="ri-arrow-drop-up-line"></i>
        ) : (
          <i className="ri-arrow-drop-down-line"></i>
        )}
      </div>
      {opened && ExpandedElem}
    </div>
  );
}
