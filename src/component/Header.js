import '../css/header.css';
import logo from '../assets/sustenalia_logo.svg';
import title from '../assets/sustenalia_title.svg'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="container-header">
      <img className='logo-header' src={logo}/>
      <img className='title-header' src={title}/>
      <nav>
        <ul>
          <li>Arsitek</li>
          <li>Artikel</li>
          <li>Panduan</li>
          <li>Tentang Kami</li>
        </ul>
      </nav>
      <Link to="/signup-page"><button className='signup-btn'>DAFTAR</button></Link>
      <Link to="/login-page"><button className='login-btn'>LOGIN</button></Link>
    </div>
  );
}

export default Header;