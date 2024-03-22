import React from 'react';
import "../styles/Home.css"
import banner from "../assets/images/banner.png"
import logoSalon from "../assets/images/logosalon.png"
import imgHome from "../assets/images/home.jpg"
import bottle from "../assets/images/Bottle.png"
import map from "../assets/images/map.png"


export default function Home() {
  return (
    <>
      <img className='imgBanner' src={banner} alt="" />
     <div className='banner'>
        <div className='txtRdv'>
          <h2>Retrouvez nous du  <bold>22/03/2024</bold>  au <bold>25/03/2024</bold>  au <bold>WINEPARIS</bold> Paris parc des expositions   </h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sem erat, sed maximus libero efficitur eu. In enim dolor.</p>
          <p className='savoirPlusSalon'>En savoir plus sur le salon</p>
        </div>
        <img className='logoSalon' src={logoSalon} alt="" />
     </div>
     <div className='home'>
      <img className="imgHome" src={imgHome} alt="" />
      <div className='rencontrezNous'>
        <h2>Lorem ipsum dolor, sit.</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse hendrerit sem erat, sed maximus libero efficitur eu. In enim dolor.</p>
        <button className='btnRencontre'>Rencontrez-nous</button>
      </div>
     </div>
     <section>
        <h2>Nos produits</h2>          
        <div className='produitsHome'>
              <div className="produitHome">
                Produit 1
                <img  className="imgBottle" src={bottle} alt="" />
              </div>
              <div className="produitHome">
                Produit 2
                <img  className="imgBottle" src={bottle} alt="" />
              </div>
              <div className="produitHome">
                Produit 3
                <img  className="imgBottle" src={bottle} alt="" />
              </div>
              <div className="produitHome">
                Produit 4
                <img  className="imgBottle" src={bottle} alt="" />
              </div>
          </div>
     </section>
     <section className='sectionMap'>
     <h2>Nous retrouver</h2>
     <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.1750890352323!2d3.261360530739369!3d46.31476858906936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f1280988647c11%3A0xda26b7e05d340184!2sDomaine%20Nebout%20Vignerons%20Ind%C3%A9pendants!5e0!3m2!1sfr!2sfr!4v1711122852779!5m2!1sfr!2sfr" width="600" height="450"></iframe>
      </section>

    </>
  )
}
