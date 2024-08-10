import React, { useEffect, useState } from 'react';
import "../styles/Home.css"
import banner from "../assets/images/banner.png"
import logoSalon from "../assets/images/logosalon.png"
import imgHome from "../assets/images/home.jpg"
import bottle from "../assets/images/Bottle.png"
import map from "../assets/images/map.png"


export default function Home() {
  const [event, setEvent] = useState(null);

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

    </div>
  )
}
