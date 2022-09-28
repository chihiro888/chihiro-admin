const MenuLabel = ({ title }) => (
  <div className="menu-item">
    <div className="menu-content pt-8 pb-2">
      <span className="menu-section text-muted text-uppercase fs-8 ls-1">
        {title}
      </span>
    </div>
  </div>
)

export default MenuLabel
