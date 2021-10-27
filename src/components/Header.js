import { BrowserRouter, Link } from "react-router-dom"

function Header(props) {
  return (
    <nav className="nav">
      <BrowserRouter>
        <Link to="/" style={{ textDecoration: 'none', color: 'black', fontSize: '35px' }}>
        <div className="title-nav">Fire Emblem: Three Houses</div>
      </Link>
      </BrowserRouter>
    </nav>
  ) ;
} 

export default Header;