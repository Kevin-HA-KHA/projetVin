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
     <img className="imgMap" src={map} alt="" />
      </section>

    </>
  )
}
