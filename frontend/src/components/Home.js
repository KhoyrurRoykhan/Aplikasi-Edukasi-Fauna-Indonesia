import React, { useState, useEffect } from "react";
import '../css/home/home.css'; 
import hero from '../../public/home/hero.jpg';
import hero2 from '../../public/home/burung.jpg';
import hero3 from '../../public/home/monyet.jpg';
import mamalia from '../../public/home/jenis/mamalia.jpg';
import reptil from '../../public/home/jenis/reptil.jpg';
import burung from '../../public/home/jenis/burung.jpg';
import ampibi from '../../public/home/jenis/ampibi.jpg';
import ikan from '../../public/home/jenis/ikan.jpg';
import serangga from '../../public/home/jenis/serangga.jpg';
import kalimantan from '../../public/home/pulau/kalimantan.jpg';
import papua from '../../public/home/pulau/papua.jpg';
import sulawesi from '../../public/home/pulau/sulawesi.jpg';
import sumatera from '../../public/home/pulau/sumatera.jpg';
import jawa from '../../public/home/pulau/jawa.jpg';

const faunaImages = [mamalia, reptil, burung, ampibi, ikan, serangga];
const faunaNames = ['Mamalia', 'Reptil', 'Burung', 'Amfibi', 'Ikan', 'Serangga'];

const HomePage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === faunaImages.length - 3 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? faunaImages.length - 3 : prevSlide - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div>
      {/* HERO SECTION */}
      <img className="homeImage" src={hero} alt="Foto Home"/>
      <div className="container-home">
        <div className="container1">
        </div>
        {/* Section Kedua */}
        <div className="container2">
          <div className="item big">
            <p>Pesona Fauna Indonesia mengajak kita menjelajahi keanekaragaman yang memukau, dari hutan yang rimbun hingga lautan yang dalam. 
            Setiap sudut tanah air ini menyimpan pesona fauna yang menakjubkan, menghadirkan kecantikan tak terhingga. 
            Aplikasi Edukasi Fauna Indonesia unggul dalam menyajikan informasi komprehensif mengenai keanekaragaman fauna Indonesia. 
            Pendekatan belajar yang interaktif memungkinkan pengguna menjelajahi dunia satwa Indonesia secara mendalam. 
            Terus diperbarui, aplikasi ini menjadi sumber rujukan relevan, menjadi pilihan sempurna bagi para pecinta pengetahuan. </p>
          </div>
          <div className="item small">
            <img src={hero2} alt="Foto Home" />
          </div>
          <div className="item small">
            <img src={hero3} alt="Foto Home" />
          </div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-home">
        <h1>Keindahan Pesona Fauna Indonesia</h1>
      </div>

      {/* PULAU SECTION */}
      <div className="container-pulau-utama">
        <div className="pulau-container">
          <div className="fauna-item1">
            <h1>KALIMANTAN</h1>
            <img className="pulau-img" src={kalimantan} alt="Foto Home" />
          </div>
          <div className="fauna-item2">
            <p>
            Kalimantan, yang merupakan bagian dari Indonesia, adalah pulau terbesar ketiga di dunia dan menjadi rumah bagi keanekaragaman hayati 
            yang luar biasa. Keindahan fauna Kalimantan mencakup beragam spesies unik, yang hidup di hutan hujan tropis yang lebat dan ekosistem 
            air tawar yang luas.
            </p>
          </div> 
        </div>

        <div className="pulau-container">
          <div className="fauna-item1">
            <h1>JAWA</h1>
            <img className="pulau-img" src={jawa} alt="Foto Home" />
          </div>
          <div className="fauna-item2">
            <p>
            Pulau Jawa, sebagai bagian integral dari kekayaan alam Indonesia, menyajikan pesona fauna yang memukau. Keanekaragaman hayati 
            di pulau ini mencakup spesies-spesies endemik yang unik, menyesuaikan diri dengan berbagai ekosistem, mulai dari hutan 
            pegunungan hingga pesisir pantai. Fauna Jawa tidak hanya menjadi bagian penting dari ekosistem global, tetapi juga 
            memberikan kontribusi besar terhadap keindahan alam dan keberlanjutan lingkungan.
            </p>
          </div> 
        </div>

        <div className="pulau-container">
          <div className="fauna-item1">
            <h1>SULAWESI</h1>
            <img className="pulau-img" src={sulawesi} alt="Foto Home" />
          </div>
          <div className="fauna-item2">
            <p>
            Sulawesi, pulau yang kaya akan keindahan alam dan keanekaragaman hayati, menjadi rumah bagi fauna yang unik dan menarik. 
            Hutan-hutan yang lebat di Sulawesi menyimpan beragam spesies mamalia, burung, reptil, dan serangga yang tidak hanya menawan 
            tetapi juga mendukung ekosistem yang seimbang. Dari tarsius yang kecil dan langka hingga burung maleo yang langka dan 
            terancam punah, Sulawesi menawarkan pengalaman eksplorasi fauna yang tak terlupakan. Melalui keunikan dan kecantikan 
            fauna Sulawesi, pulau ini menjadi destinasi yang mengagumkan bagi para pecinta alam dan peneliti biologi.
            </p>
          </div> 
        </div>

        <div className="pulau-container">
          <div className="fauna-item1">
            <h1>SUMATERA</h1>
            <img className="pulau-img" src={sumatera} alt="Foto Home" />
          </div>
          <div className="fauna-item2">
            <p>
            Sumatera, pulau yang memukau di Indonesia, menyajikan keindahan alam dan keberagaman fauna yang luar biasa. 
            Hutan-hutan tropis Sumatera menjadi rumah bagi berbagai spesies fauna, termasuk harimau Sumatera yang langka, 
            gajah Sumatera, orangutan, dan banyak lagi. Pulau ini menawarkan pengalaman eksplorasi alam yang menakjubkan, 
            dengan lanskapnya yang beragam mulai dari pegunungan yang hijau hingga pantai yang indah. Fauna Sumatera tidak 
            hanya menciptakan keindahan visual, tetapi juga menjadi bagian integral dari ekosistem pulau ini. Keberagaman 
            hayati yang luar biasa di Sumatera menjadikannya destinasi yang menarik bagi para penggemar alam.
            </p>
          </div> 
        </div>

        <div className="pulau-container">
          <div className="fauna-item1">
            <h1>PAPUA</h1>
            <img className="pulau-img" src={papua} alt="Foto Home" />
          </div>
          <div className="fauna-item2">
            <p>
            Papua, pulau yang memikat di ujung timur Indonesia, menyimpan pesona alam dan keanekaragaman fauna yang menakjubkan. 
            Hutan hujan Papua yang luas dan pegunungan yang megah menjadi rumah bagi berbagai spesies unik, termasuk kasuari, burung Cendrawasih 
            yang eksotis, dan satwa endemik lainnya. Fauna Papua tidak hanya mencerminkan kekayaan alam pulau ini, tetapi juga menjadi warisan 
            budaya yang penting bagi masyarakat setempat. Keindahan dan keunikan fauna Papua menciptakan pengalaman eksplorasi alam yang 
            tak terlupakan bagi para pengunjung, sementara upaya pelestarian terus dilakukan untuk mempertahankan kelestarian hayati pulau ini.
            </p>
          </div> 
        </div>
      </div>

      {/* JENIS SECTION */}
      <div className="header-jenis">
        <h1>Keberagaman Jenis Fauna</h1>
      </div>

      <div className="jenis-container mb-5">
        <div className="nav-left" onClick={prevSlide}>
          ❮
        </div>

        {faunaImages.slice(currentSlide, currentSlide + 3).map((image, index) => (
          <div key={`fauna_${index}`} className="jenis1">

            <p>{faunaNames[currentSlide + index]}</p>
            <img
              src={image}
              alt={`Foto ${index + 1}`}

              style={{ width: '350px', height: '250px', objectFit: 'cover' }}
            />
          </div>
        ))}


        <div className="nav-right" onClick={nextSlide}>
          ❯
        </div>
      </div>
    </div>
  );
};

export default HomePage;