import React from 'react';
import "../styles/Produits.css"
import imgVerre from "../assets/images/test5.jpg"
import bottle from "../assets/images/Bottle.png";
import { PopupWidget } from 'react-calendly';

export default function Rencontrer(){
  return(
    
    
    <div className='nosProduits'>
      <PopupWidget
        // url="https://calendly.com/cmille749/30min?month=2024-03"
        url="https://calendly.com/kevinha27/reservation-de-creneau-s-il-vin"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Rencontrons-nous"
        textColor="#ffffff"
        color="#6b0e2b"
      />


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
            </div
            ><div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Salon 6</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            
        </div>
    </div>
    
  )
}

