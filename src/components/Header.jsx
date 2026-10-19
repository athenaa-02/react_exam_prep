import { Link } from "react-router-dom";

function Header() {
  
 

  return <>
  <nav>
    <Link to={'/'}  >home</Link>
    <Link to={'/products'}>products</Link>
    <Link to={'/contact'}>Contact</Link>

  </nav>
  </>;
}

export default Header;
