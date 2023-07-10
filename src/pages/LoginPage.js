import '../App.css';
import '../css/login.css'
import { Link } from 'react-router-dom';

import bg_blur from '../assets/background-blur.svg';
import bg_img_login from '../assets/8018276removebgpreview-1@2x.png';

import Header from '../component/Header';
import Footer from '../component/Footer';

function LoginPage() {
  return (
    <div className="App">
      <Header />
      <img className="background-blur-icon" alt="" src={bg_blur} />
      <div className="masuk">
      
      <div className="sign-up">
        <div className="white-bg" />
        <div className="masuk-akun">MASUK AKUN</div>
        <input
          className="email-address"
          type="text"
          style={{ width: "464px" }}
          size="middle"
          placeholder="Alamat Email"
          bordered={false}
        />
        <input
          className="password"
          type="text"
          style={{ width: "464px" }}
          size="middle"
          placeholder="Password"
          bordered={false}
        />
        <button className="button" data-animate-on-scroll>
          <Link to="/signup-page">
          <div className="masuk1">MASUK</div>
          </Link>
        </button>
        <div
          className="belum-punya-akun-container"
        >
          <span>{`Belum punya akun? `}</span>
          <Link to="/signup-page" className='link-no-underline'><span className="daftar2">Daftar</span></Link>
        </div>
        <div className="tinggalkan-jejak-hijau">
          Tinggalkan Jejak Hijau di Rumah Anda
        </div>
        <div className="bina-kehidupan-berkelanjutan">
          Bina Kehidupan Berkelanjutan yang Abadi.
        </div>
        <img
          className="removebg-preview-1-icon1"
          alt=""
          src={bg_img_login}
        />
      </div>
    </div>

      <Footer />
    </div>
  );
}

export default LoginPage;
