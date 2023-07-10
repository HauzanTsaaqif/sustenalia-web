import '../css/footer.css';

import { Link } from 'react-router-dom';
import logo_footbar_img from '../assets/logo_footbar.svg';

function Footer() {
  return (
    <div className="footbar">
      <div className='banner_footbar'>
        <div className='logo_footbar'>
          <img className="sustenalia-icon-footbar" alt="" src={logo_footbar_img} />
        </div>
        <div className='footbar_navigation'>
        <table>
          <tr>
            <th>Struktur Menu</th>
            <th>Komunitas</th>
          </tr>
          <tr>
            <Link to="/" className='link-no-underline' onClick={() => window.scrollTo(0, 0)}><td>Home</td></Link>
            <td>Kontak</td>
          </tr>
          <tr>
            <Link to="/signup-page" className='link-no-underline'><td>Daftar</td></Link>
            <td>Arsitek</td>
          </tr>
          <tr>
            <Link to="/login-page" className='link-no-underline'><td>Login</td></Link>
            <td> </td>
          </tr>
        </table>
        </div>
      </div>
      
      <div className='copyright_container'>
        <div className="footbar-child" />
        <p>© 2023 Sustenalia. Hak Cipta Dilindungi.</p>
      </div>  
      </div>
  );
}

export default Footer;