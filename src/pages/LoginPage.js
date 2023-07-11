import '../App.css';
import '../css/login.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import bg_blur from '../assets/background-blur.svg';
import bg_img_login from '../assets/8018276removebgpreview-1@2x.png';

import Header from '../component/Header';
import Footer from '../component/Footer';

function LoginPage() {
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const inputEmail = (event) => {
    setEmail(event.target.value);
  }

  const inputPassword = (event) => {
    setPassword(event.target.value);
  }

  const handleLogin = () => {
    fetch('https://evanescent-evening-range.glitch.me/login-sustenalia', { 
      method: 'POST',
      body: JSON.stringify({ useremail, password }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          console.log('Login berhasil');
          alert(data.message);
          window.location.href = '/generate-page';
        } else {
          console.log('Login gagal');
          alert(data.message);
        }
      })
      .catch(err => console.log(err));
  };

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
          value={useremail} 
          onChange={inputEmail}
        />
        <input
          className="password"
          type="text"
          style={{ width: "464px" }}
          size="middle"
          placeholder="Password"
          bordered={false}
          value={password} 
          onChange={inputPassword}
        />

        <button className="button" onClick={handleLogin}>
          <div className="masuk1">MASUK</div>
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
