import React, { useState } from 'react';
import "../styles/Produits.css";
import "../styles/Rencontrer.css";
import imgVerre from "../assets/images/test5.jpg";
import bottle from "../assets/images/Bottle.png";
import hero from "../assets/images/rencontrons_nous_hero.jpeg";
import { PopupWidget } from 'react-calendly';
import PopupCalendrier from '../components/PopupCalendrier';

export default function Rencontrer() {
  const [buttonSwitch, setButtonSwitch] = React.useState(false);
  const [status, setStatus] = useState('');

  const handleStatusChange = (newStatus) => {
    setStatus(newStatus);
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
          {/* <button 
            onClick={() => { setButtonSwitch(true) }}
            style={{
                backgroundColor: buttonSwitch === true ? 'white' : 'transparent',
                color: buttonSwitch === true ? 'black' : 'white'
              }}
          >
            Rencontrez nous
          </button> */}
        </div>
        {buttonSwitch === false ? 
            <div className="formulaires">
                <form>
                  <div className='row1'>
                      <button type="button" onClick={() => handleStatusChange('particulier')} style={{border: status === "particulier" ? 'solid 2px #444' : 'solid 1px black'}}>Je suis un particulier</button>
                      <input type="radio" id="particulier" name="status" hidden checked={status === 'particulier'} readOnly />
                      <button type="button" onClick={() => handleStatusChange('professionnel')} style={{border: status === "professionnel" ? 'solid 2px #444' : 'solid 1px black'}}>Je suis un professionnel</button>
                      <input type="radio" id="professionnel" name="status" hidden checked={status === 'professionnel'} readOnly />
                  </div>
                  <div className='row2'>
                      <label htmlFor="informations">Mes informations</label> <br />
                      <span>
                          <input type="text" id="lastname" name="informations" placeholder='Nom' required />
                          <input type="text" id="firstname" name="informations" placeholder='Prénom' required />
                      </span>
                  </div>
                  <div className='row3'>
                      <select id="jobs" name="jobs">
                        <option value="" selected disabled hidden>Professions</option>
                        <option value="Particulier">Particulier</option>
                        <option value="Grossiste">Grossiste</option>
                        <option value="Agriculteur">Agriculteur</option>
                        <option value="Viticulteur">Viticulteur</option>
                        <option value="Oenologue">Oenologue</option>
                        <option value="Revendeur">Revendeur</option>
                      </select>
                  </div>
                  <div className='row4'>
                      <label htmlFor="coordonnee">Email</label> <br />
                      <span>
                          <input type="email" id="email" name="coordonnee" placeholder='Email' required />
                          <input type="tel" id="number" name="coordonnee" placeholder='Numéro de téléphone' required />
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
            
           ""
        }
        </div>
        <PopupWidget
            // url="https://calendly.com/cmille749/30min?month=2024-03"
            url="https://calendly.com/kevinha27/reservation-de-creneau-s-il-vin"
            /*
             * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
             * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
             */
            rootElement={document.getElementById("root")}
            text="Prendre rendez-vous"
            textColor="#ffffff"
            color="#6b0e2b"
            />

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

        


        