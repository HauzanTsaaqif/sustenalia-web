import '../App.css';
import '../css/generate.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Box, Slider } from "@mui/material";
import axios from 'axios';

import bg_blur from '../assets/background-blur.svg';
import bg_img_login from '../assets/8018276removebgpreview-1@2x.png';
import mapsearch from '../assets/mdimapsearch.svg';
import fluentloc from '../assets/fluentlocation16filled.svg';
import evaarrow from '../assets/evaarrowiosforwardfill.svg';
import expandmore from '../assets/expandmore.svg';
import outlinecolumn from '../assets/outline--column--2.svg';
import vector from '../assets/vector.svg';
import vector1 from '../assets/vector1.svg';
import vector2 from '../assets/vector2.svg';
import imghouse3d from '../assets/hugethreebedroomremovebgpreview-1@2x.png';


import Header from '../component/Header';
import Footer from '../component/Footer';
import GPT3Prompt from '../component/Gpt';


function GeneratePage() {
  const [resultGenerate, setResultGenerate] = useState('');
  const [inputRegion, setInputRegion] = useState('');

  let num = 1;

  const api_key = process.env.REACT_APP_API_KEY;

  const generatePrompt = () => {
    const endpoint = "https://api.openai.com/v1/completions";
    const API_KEY = api_key;
    const model_engine = "text-davinci-003";
    const prompt =
      "Berikan saya saran rumah yang ramah lingkungan dan berkelanjutan jika saya tinggal di daerah "+ inputRegion +", sesuaikan dengan kondisi daerah, lingkungan dan iklim daerah tempat saya tinggal, jelaskan dengan 5 poin yaitu mengenai material rumah yaitu material yang cocok digunakan didaerah tempat saya tinggal, energi rumah yaitu bagaimana cara yang cocok untuk mendapatkan energi rumahan sesuai dengan lingkungan tempat tinggal saya, sanitasi yaitu bagaimana sanitasi yang baik sesuai lingkungan tempat tinggal saya, pengelolaan limbah yaitu bagaimana penanganan atau sistem pengolahan limbah yang tepat sesuai daerah saya, dan ventilasi yaitu bagaimana sistem ventilasi yang baik sesuai dengan lingkungan tempat tinggal saya. Pisahkan untuk setiap poin dengan tanda ;";

    console.log(prompt);

    axios
      .post(
        endpoint,
        {
          model: model_engine,
          prompt: prompt,
          max_tokens: 1000,
          temperature: 0,
          n: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      )
      .then((response) => {
        if (response.status === 200) {
          const result = response.data.choices[0].text.trim();
          setResultGenerate(result)
          console.log(result);
        } else {
          throw new Error('API request failed');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  const finalResult  = resultGenerate.split(";");

  console.log(finalResult);

  return (
    <div className="App">
      <Header />

      <div className="design-rumah" data-animate-on-scroll>
      <img
        className="background-blur-icon3"
        alt=""
        src={bg_blur}
      />
      <div className="escolher-getter">
        <div className="buat-design-rumah-container">
          <span>{`Buat `}</span>
          <span className="design-rumah1">Design Rumah</span>
          <span> Berkelanjutan untuk Kehidupan Lebih Baik</span>
        </div>
      </div>
      <div className="design-rumah-child" />
      <div className="design-rumah-item" />
      <div className="dropdown">
        <div className="inputcontainer-dropdown">
          <img className="px-copy" alt="" src="/24px--copy.svg" />
        </div>
        <div className="cointainer">
          <div className="dropdownitem">
            <div className="label"> Kamar Tidur</div>
            <img className="px-checked" alt="" src="/24px--checked.svg" />
          </div>
          
        </div>
      </div>
      <div className="dropdownitem12">
        <div className="label">Ruang Tengah</div>
        <img className="px-checked" alt="" src="/24px--checked.svg" />
      </div>
      <div className="dropdownitem13">
        <div className="label">Dapur</div>
        <img className="px-checked" alt="" src="/24px--checked.svg" />
      </div>
      <div className="dropdownitem14">
        <div className="label">Kamar Mandi</div>
        <img className="px-checked" alt="" src="/24px--checked.svg" />
      </div>
      <button className="outline-add-square">
        <div className="grid" />
        <img className="vector-icon" alt="" src={vector} />
      </button>
      <button className="outline-add-square1">
        <div className="grid" />
        <img className="vector-icon" alt="" src={vector} />
      </button>
      <button className="outline-add-square2">
        <div className="grid" />
        <img className="vector-icon" alt="" src={vector} />
      </button>
      <img className="vector-icon3" alt="" src={vector1} />
      <img className="vector-icon4" alt="" src={vector1} />
      <img className="vector-icon5" alt="" src={vector1} />
      <img className="vector-icon6" alt="" src={vector2} />
      <img className="outline-column-2" alt="" src={outlinecolumn} />
      <img className="outline-column-3" alt="" src={outlinecolumn} />
      <img className="outline-column-4" alt="" src={outlinecolumn} />
      <div className="div4">1</div>
      <div className="div5">1</div>
      <div className="div6">1</div>
      <img className="vector-icon7" alt="" src="/vector3.svg" />
      <div className="dropdownnonetruefalse">
        <div className="field">
          <input className="jumlah-ruangan" placeholder='Jumlah Ruangan...'></input>
          <img className="expand-more-icon" alt="" src={expandmore} />
        </div>
      </div>
      <div className="jumlah-ruangan1">Jumlah Ruangan</div>
      <div className="lebar">Lebar</div>
      <div className="lebar1">Lebar</div>
      <input
        className="buttonregularoutlinedefault"
        type="text"
        maxLength
        minLength
      />
      <input
        className="buttonregularoutlinedefault1"
        type="text"
        maxLength
        minLength
      />
      <input
        className="buttonregularoutlinedefault2"
        type="text"
        maxLength
        minLength
      />
      <input
        className="buttonregularoutlinedefault3"
        type="text"
        maxLength
        minLength
      />
      <div className="luas-tanah-m">Luas Tanah (m)</div>
      <div className="luas-rumah-m">Luas Rumah (m)</div>
      <div className="lokasi">Lokasi</div>
      <div className="search">
        <img
          className="fluentlocation-16-filled-icon"
          alt=""
          src={fluentloc}
        />
        <input type='text' className="lokasi-rumah" placeholder='Pilih lokasi..' value={inputRegion} onChange={(e) => setInputRegion(e.target.value)}/>
        <button className="search-button">
          <div className="cari">cari</div>
          <img
            className="fluentlocation-16-filled-icon"
            alt=""
            src={evaarrow}
          />
        </button>
      </div>
      <div className="detail-rumah">Detail Rumah</div>
      <div className="design-rumah-inner" />
      <div className="design-rumah-child1"></div>
      <div className="desain-rumah1">Desain Rumah</div>
      <button
        className="movi"
        data-scroll-to="mOVI"
        data-animate-on-scroll
      >
        <div className="inventrio">generate</div>
      </button>
      <img
        className="huge-three-bedroom-removebg-pr-icon"
        alt=""
        src={imghouse3d}
      />
      <div className="panjang">Panjang</div>
      <div className="panjang1">Panjang</div>
      <button className="outline-add-square3">
        <div className="grid" />
        <img className="vector-icon" alt="" src={vector} />
      </button>

      <img className="outline-column-1" alt="" src={outlinecolumn} />
      <div className="div7">1</div>

      <div className="movi-parent" >
        <button
          className="movi1"
          data-animate-on-scroll
        />
        <div className="inventrio1">pilih arsitek</div>
      </div>

      <img className="mdimap-search-icon" alt="" src={mapsearch} />

      <div className="movi-parent-1" onClick={generatePrompt}>
        <button
          className="movi2"
          data-animate-on-scroll 
        />
        <div className="inventrio2">Generate</div>
      </div>


      <div className="rectangle-parent">
        <div className="frame-child3" />
        <div className="vector-container">
          {finalResult.map((item, index) => {
            const currentNum = num;
            if (index % 1 !== 1) {
              num++;
            }
            return (
            <p key={index}>{index % 1 !== 1 ? <b>{(currentNum)}. {item}</b>: item}</p>
            );
          })}
          
        </div>
        <div className="deskripsi-rumah">Rekomendasi Rumah</div>
      </div>
      <div className="design-rumah-child2" />
      <div className="design-rumah-child2" />
      <div className="design-rumah-child4" />
    </div>
      
      <Footer />
      <GPT3Prompt/>
    </div>
  );
}

export default GeneratePage;
