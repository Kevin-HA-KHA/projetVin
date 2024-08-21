import React, { useEffect, useState } from 'react';
import "../styles/Home.css"
import banner from "../assets/images/banner.png"
import logoSalon from "../assets/images/logosalon.png"
import imgHome from "../assets/images/home.jpg"
import bottle from "../assets/images/Bottle.png"
import map from "../assets/images/map.png"
import logo from "../assets/images/logo_min.png";
import { ScrollRestoration, useNavigate } from 'react-router-dom';


export default function Home() {
  const [event, setEvent] = useState(null);
  const [wines, setWines] = useState([]);
  const [selectedWine, setSelectedWine] = useState(null);
  const navigate = useNavigate();

  // Fetch wines
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/wine`); 
        const data = await response.json();
        setWines(data);
        setSelectedWine(data[0]); 
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
  }, []);

  // Fetch events
  useEffect(() => {
    const fetchEvent = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/api/event`); // L'URL correcte
        const data = await response.json();
        setEvent(data);
      } catch (error) {
        console.error('Error fetching event details:', error);
      }
    };

    fetchEvent();
  }, []);

  // if (!event) return <div>...</div>;


  return (
    <div className='home-container'>
      {event ? (
        <div className='banner'>
          <div className="banner-background"></div>
          <div className='txtRdv'>
            <h2>Retrouvez nous du <span>{event.startDate}</span> au <span>{event.endDate}</span> au <span>{event.eventName}</span>, {event.location}</h2>
            <p>{event.description}</p>
            <a className='savoirPlusSalon' href={event.moreInfoLink} target='_blank'>En savoir plus sur le salon</a>
          </div>
          <img className='logoSalon' src={event.logoUrl} alt="Logo Salon" />
        </div>
      ) : null}
     {/* <div className='banner'>
        <div class="banner-background"></div>
        <div className='txtRdv'>
          <h2>Retrouvez nous du <span>{event.startDate}</span> au <span>{event.endDate}</span> au <span>{event.eventName}</span>, {event.location}</h2>
            <p>{event.description}</p>
            <a className='savoirPlusSalon' href={event.moreInfoLink} target='_blank'>En savoir plus sur le salon</a>
          </div>
          <img className='logoSalon' src={event.logoUrl} alt="Logo Salon" />
     </div> */}
     <div className='home'>
      <img className="imgHome" src={imgHome} alt="" />
      <div className='rencontrezNous'>
        {/* <h2>S'il Vin</h2> */}
        <img src={logo} alt="" />
        <p> Découvrez l'univers authentique de notre petit domaine viticole, où chaque bouteille raconte une histoire de passion et de terroir. Nous vous invitons à explorer nos vins uniques et à prendre rendez-vous pour une rencontre personnalisée lors de nos prochains salons. Faites l'expérience d'un savoir-faire artisanal, directement du producteur au consommateur. Profitez de nos événements pour déguster nos meilleures cuvées et discuter de notre engagement pour des vins de qualité. À très bientôt dans un salon près de chez vous !</p>
        <button className='btnRencontre' onClick={() => {navigate('/produits'); scrollTo(0,0)}}>Rencontrez-nous</button>
      </div>
     </div>
     <section className='wine-section'>
        <div className="wine-section-top">
          <h2>Nos produits</h2> 
          <a onClick={() => {navigate('/produits'); scrollTo(0,0)}}>Voir tout</a>
        </div>
        { selectedWine ? ( 
          <div className="wine-list-box">
            <div className="wine-list">
                {wines.map(wine => (
                    <div
                        key={wine.id}
                        className={`wine-item`}
                    >
                        <img src={wine.imageUrl} alt={wine.wineTitle} />
                        <h3>{wine.wineTitle}</h3>
                        <span>{wine.wineDate}</span>
                    </div>
                ))}
            </div>
          </div>    
         ) : (
          <div className="loading">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
         ) }  
        {/* <div className='produitsHome'>
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
          </div> */}
     </section>
     <section className='sectionMap'>
        <h2>Nous retrouver</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d37071.58332080998!2d3.2574319235410196!3d46.32250852483469!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f1280988647c11%3A0xda26b7e05d340184!2sDomaine%20Nebout%20Vignerons%20Ind%C3%A9pendants!5e0!3m2!1sfr!2sfr!4v1724252366783!5m2!1sfr!2sfr" width="100%" height="600" loading="lazy"></iframe>
     </section>

    </div>
  )
}
