import '../App.css';
import '../css/signup.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';

import bg_blur from '../assets/background-blur.svg';
import bg_img_signup from '../assets/3drenderingcartoonhouseremovebgpreview-2@2x.png';
import btn_switch from '../assets/rectangle-14443.svg';

import Header from '../component/Header';
import Footer from '../component/Footer';

function SignupPage() {
  const [username, setUsername] = useState('');
  const [useremail, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const inputUsername = (event) => {
    setUsername(event.target.value);
  }
  
  const inputEmail = (event) => {
    setEmail(event.target.value);
  }

  const inputPassword = (event) => {
    setPassword(event.target.value);
  }

  const handleSubmit = () => {
    if (username !== "" && useremail !== "" &&  password !== ""){
      fetch('https://evanescent-evening-range.glitch.me/add-akun-sustenalia', {
        method: 'POST',
        body: JSON.stringify({ username, useremail, password }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          console.log('Data berhasil dimasukkan:', data);
          alert("Account berhasil dibuat");
          window.location.href = '/login-page';
        })
        .catch(err => console.log(err));}
    else{
        alert("Verifikasi password salah, tolong periksa kembali password");
    }
  };

  return (
    <div className="App">
      <Header />
        <img className="background-blur-icon2" alt="" src={bg_blur} />
        <div className="rodap2" />
        <div className="daptar">
            <div className="sign-up1">
                <div className="white-bg1" />
                <button className="vector-group">
                <img className="rectangle-icon" alt="" src={btn_switch} />
                <b className="customer">Customer</b>
                <b className="arsitek5">Arsitek</b>
                </button>
                <div className="daftar-akun">DAFTAR AKUN</div>
                <input className="full-name" placeholder="Nama Lengkap" value={username} onChange={inputUsername}/>
                <input className="email-address1" placeholder="Alamat Email" value={useremail} onChange={inputEmail} />
                <input className="password1" placeholder="Password" value={password} onChange={inputPassword} />
                <button className="button1" data-animate-on-scroll onClick={handleSubmit}>
                  <div className="daftar5">Daftar</div>
                </button>
                <div
                className="sudah-punya-akun-container"
                >
                <span>{`Sudah punya akun? `}</span>
                <Link to="/login-page" className='link-no-underline'><span className="login4">Login</span></Link>
                </div>
                <div className="rumah-berkelanjutan">Rumah Berkelanjutan</div>
                <div className="menghijaukan-masa-depan">
                {" "}
                Menghijaukan Masa Depan, Menghadirkan Kehidupan yang Berkelanjutan
                </div>
                <img
                className="d-rendering-cartoon-house-remo-icon1"
                alt=""
                src={bg_img_signup}
                />
            </div>
        
        </div>

      <Footer />
    </div>
  );
}

export default SignupPage;
