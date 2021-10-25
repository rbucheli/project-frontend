import { BrowserRouter, Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <BrowserRouter>
      <Link to="/">
        <div>Fire Emblem: Three Houses</div>
      </Link>
      </BrowserRouter>
    </nav>
  ) ;
} 

export default Header;