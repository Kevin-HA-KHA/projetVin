import React from 'react';
import "../styles/Produits.css"
import imgVerre from "../assets/images/test2.jpg"
import imgBouteille from "../assets/images/bouteillerouge.png"
import bottle from "../assets/images/Bottle.png";

export default function Produits(){
  return(
    
    <div className='nosProduits'>
        <div className='decouvrez'>
            <h1>Découvrez nos produits</h1>
        </div>
        <img src={imgVerre} alt="" />
        <div className='produits'>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Produit 1</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Produit 2</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div> 
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Produit 3</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Produit 4</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
            <div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Produit 5</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div
            ><div className="produit">
                <img  className="imgBottle" src={bottle} alt="" />
                <div className='descriptionProduit'>
                    <h2>Produit 6</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
                    <button className='btnCTA'>Call To Action</button>
                </div>
            </div>
         
        </div>
    </div>
    
  )
}

