import './App.css';
import './css/trivia.css'
import { Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';

import quotes_cover from './assets/quotes-cover.svg';
import logo from './assets/sustenalia_logo.svg';
import title from './assets/sustenalia_title.svg';
import img_trivia2 from './assets/img-trivia2.svg';
import img_trivia3 from './assets/img-trivia3.svg';
import img_trivia4 from './assets/img-trivia4.svg';
import img_trivia5 from './assets/img-trivia5.svg';
import img_trivia6 from './assets/img-trivia6.svg';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="nav-bar-elipse" />
      <div className='container-cover'>
        
        <div className='image-overlay'>
          <img src={process} alt='Quotes Cover'/>
        </div>
      </div>

      <div className='BreakLine'>
        <img className='logo-BR' src={logo}></img>
        <img className='title-BR' src={title}></img>
      </div>

    <div className='container_trivia'>

      <div className='trivia_1'>
        <article>
          <h1>{process.env.TEST}</h1>
          <p>Sustainability atau keberlanjutan adalah konsep yang berkaitan dengan memenuhi kebutuhan saat ini tanpa mengorbankan kemampuan generasi masa depan untuk memenuhi kebutuhan mereka. Ini melibatkan pengelolaan sumber daya secara bijaksana, melindungi lingkungan alami, dan mempertimbangkan dampak sosial dalam pengambilan keputusan.</p>
          <div className='layer_button'><Link to="/login-page"><button>MULAI</button></Link></div>
        </article>
      </div>

      <div className='trivia_2'>
        <img src={img_trivia2}/>
        <article>
          <div className='container-article-trivia2'>
            <div className='bg-article-trivia2'>
              <h1>DESAIN RUMAH</h1>
              <p>Memberikan desain rumah yang ramah lingkungan secara otomatis dengan teknologi Kecerdasan Buatan.</p>
            </div>
            <div className='layer_button'><button>MULAI DESIGN</button></div>
          </div>
        </article>
      </div>

      <div className='trivia_3'>
        <article>
          <div className='container-article-trivia3'>
            <div className='bg-article-trivia3'>
              <h1>ARSITEK</h1>
              <p>Menghubungkan anda dengan arsitek terbaik untuk mewujudkan rumah ramah lingkungan yang anda impikan</p>
            </div>
            <div className='layer_button'><button>MULAI DESIGN</button></div>
          </div>
        </article>
        <img src={img_trivia3}/>
      </div>

      <div className="trivia_4">
        <img src={img_trivia4}/>
        <article>
          <div className='container-article-trivia4'>
            <h1>Efisiensi Energi</h1>
            <div className="br_trivia4" />
            <div className="container_contain_4">
              <span>{`Efisiensi energi adalah kunci untuk `}</span>
              <span className="contain_bold_4">{`mengurangi ketergantungan pada sumber energi konvensional yang terbatas dan merusak lingkungan. `}</span>
              <span>Dengan mengadopsi sistem off-grid electricity yang menggunakan sumber energi terbarukan, seperti tenaga matahari atau angin, kita dapat mengurangi emisi gas rumah kaca dan menciptakan lingkungan yang lebih bersih. Selain itu, memanfaatkan air hujan untuk kebutuhan non-potable dapat membantu mengurangi tekanan terhadap sumber air bersih yang semakin langka, sambil mengurangi biaya energi yang digunakan untuk memompa air.
              </span>
            </div>
          </div>
        </article>
      </div>

      <div className="trivia_5">
        <article>
          <div className='container-article-trivia5'>
            <h1>MATERIAL RAMAH LINGKUNGAN</h1>
            <div className="br_trivia5" />
            <div className="container_contain_5">
            <span>{`Pemilihan material ramah lingkungan adalah `}</span>
            <span className="contain_bold_5">
              langkah penting dalam membangun masa depan yang berkelanjutan.
            </span>
            <span>
              {" "}
              Dengan menggunakan bahan daur ulang, organik, atau didaur ulang,
              kita dapat mengurangi jejak karbon, penggunaan sumber daya alam yang
              berlebihan, dan akumulasi limbah. Dengan memilih material yang ramah
              lingkungan, kita berinvestasi dalam kualitas hidup yang lebih baik
              bagi generasi mendatang.
            </span>
            </div>
          </div>
        </article>
        <img src={img_trivia5}/>
      </div>

      <div className="trivia_6">
        <img src={img_trivia6}/>
        <article>
          <div className='container-article-trivia6'>
            <h1>Kota dan Komunitas Berkelanjutan</h1>
            <div className="br_trivia6" />
            <div className="container_contain_6">
              <span>Kami adalah platform desain inovatif yang berkomitmen untuk mendukung pencapaian SDGS, 
                Sustainable Cities and Communities. Dengan fokus pada
                pembangunan rumah yang ramah lingkungan dan efisien energi,
                SUSTENALIA mendorong perubahan positif dalam desain perkotaan,
                menciptakan lingkungan yang sehat, inklusif, dan berkelanjutan
                bagi generasi saat ini dan masa depan.
              </span>
            </div>
          </div>
        </article>
      </div>

    </div>  

    <Footer />

    </div>
  );
}

export default App;
