import React, { useState, useRef } from 'react';
import "../styles/Produits.css";
import "../styles/Rencontrer.css";
import imgVerre from "../assets/images/test5.jpg";
import bottle from "../assets/images/Bottle.png";
import hero from "../assets/images/rencontrons_nous_hero.jpeg";
import { PopupWidget, InlineWidget } from 'react-calendly';
import PopupCalendrier from '../components/PopupCalendrier';
import emailjs from '@emailjs/browser';

export default function Rencontrer() {
  const [buttonSwitch, setButtonSwitch] = React.useState(false);
  const [status, setStatus] = useState('');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
  };

  // EMAILJS FUNCTION
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      })
      .then(
        () => {
          // console.log('SUCCESS!');
          e.target.reset();
          setStatusMessage('success');
        },
        (error) => {
          console.log(error.text);
          e.target.reset();
          setStatusMessage('failed');
        },
      );
  };

  return (
    <div className='nosProduits'>
      <div className='rencontrons-nous-body'>
        <div className='rencontrons-nous-hero'>
          <div className='rencontrons-nous-hero-description'>
            <div>
              <h2>Contactez nous</h2>
              <p>Vous avez des questions, des demandes spéciales ou simplement envie de nous dire bonjour ? N'hésitez pas à nous contacter !</p>
            </div>
          </div>
        </div>
        <div className='rencontrons-nous-buttons'>
          <button 
            onClick={() => { setButtonSwitch(false) } }
            style={{
                backgroundColor: buttonSwitch === false ? 'white' : 'transparent',
                color: buttonSwitch === false ? 'black' : 'white'
              }}
          >
            Envoyer nous un message
          </button>
          <button 
            onClick={() => { setButtonSwitch(true) }}
            style={{
                backgroundColor: buttonSwitch === true ? 'white' : 'transparent',
                color: buttonSwitch === true ? 'black' : 'white'
              }}
          >
            Rencontrez nous
          </button>
        </div>
        <div className='statusMessage'>
          {statusMessage === 'success' && <p>Votre message a bien été envoyé !</p>}
          {statusMessage === 'failed' && <p>Une erreur est survenue, veuillez réessayer.</p>}
        </div>
        {buttonSwitch === false ? 
            <div className="formulaires">
                <form ref={form} onSubmit={sendEmail}> 
                  <div className='row1'>
                      <button type="button" onClick={() => handleStatusChange('particulier')} style={{border: status === "particulier" ? 'solid 2px #444' : 'solid 1px black'}}>Je suis un particulier</button>
                      <input type="radio" id="particulier" name="status" value="Particulier" hidden checked={status === 'particulier'} readOnly />
                      <button type="button" onClick={() => handleStatusChange('professionnel')} style={{border: status === "professionnel" ? 'solid 2px #444' : 'solid 1px black'}}>Je suis un professionnel</button>
                      <input type="radio" id="professionnel" name="status" value="Professionel" hidden checked={status === 'professionnel'} readOnly />
                  </div>
                  <div className='row2'>
                      <label htmlFor="informations">Mes informations</label> <br />
                      <span>
                          <input type="text" id="lastname" name="lastname" placeholder='Nom' required />
                          <input type="text" id="firstname" name="firstname" placeholder='Prénom' required />
                      </span>
                  </div>
                  <div className='row3'>
                      <select id="jobs" name="jobs">
                        <option value="" selected disabled hidden>Profession</option>
                        <option value="Grossiste">Grossiste</option>
                        <option value="Agriculteur">Agriculteur</option>
                        <option value="Viticulteur">Viticulteur</option>
                        <option value="Oenologue">Oenologue</option>
                        <option value="Revendeur">Revendeur</option>
                        <option value="Autre">Autre</option>
                      </select>
                  </div>
                  <div className='row4'>
                      <label htmlFor="coordonnee">Email</label> <br />
                      <span>
                          <input type="email" id="email" name="email" placeholder='Email' required />
                          <input type="tel" id="number" name="number" placeholder='Téléphone (facultatf)' />
                      </span>
                  </div>
                  <div className='row5'>    
                      <label htmlFor="message">Message</label> <br />
                      <textarea id="message" name="message" required></textarea>
                  </div>
                  <button className='send' type="submit">Envoyer mon message</button>
                </form>
            </div>
        :         
            <div className="rdv">
              <InlineWidget url="https://calendly.com/kevinha27/reservation-de-creneau-s-il-vin" styles={{ height: '700px' }} />
            </div>
        }
        </div>


        {/* <PopupCalendrier /> */}

      </div>
  );
}


{/* 
      <div className='decouvrez'>
            <h1>Rencontrons nous lors de salons</h1>
        </div>
        <img className='imgBackground' src={imgVerre} alt="" />
        <div className='produits'>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 2</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div> 
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 4</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 5</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 6</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            
        </div>  */}

        


        