import { NavLink } from "react-router-dom";

export default function Header({ cartCount }) {
  return (
    <header className="main-header">
      <div className="header-left">
        <img 
          src="https://cdn-icons-png.flaticon.com/512/3081/3081559.png" 
          alt="Logo" 
          className="header-logo-img" 
        />
        <NavLink to="/" className="header-brand-title">
          TechStore
        </NavLink>
      </div>

      <nav className="header-center-nav">
        <NavLink to="/">Kreu</NavLink>
        <NavLink to="/admin">Admin</NavLink>
      </nav>

      <div className="header-right">
        <NavLink to="/cart" className="header-cart-button">
          🛒 Shporta <span className="header-cart-badge">{cartCount}</span>
        </NavLink>
      </div>
    </header>
  );
}