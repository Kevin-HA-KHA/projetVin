import React from 'react';
import "../styles/Produits.css"
import imgVerre from "../assets/images/test2.jpg"
import bottle from "../assets/images/Bottle.png";

export default function Produits(){
    const [selection, setSelection] = React.useState('meilleur');
    return(
      <div className='produit-body'>
          <div className='produit-hero'>
              <div className='produit-description'>
                  <div>
                      <h2>Notre Cave d'Excellence</h2>
                      <p>Bienvenue dans notre cave d'excellence, où chaque bouteille raconte une histoire unique. Parcourez notre sélection minutieuse de vins, allant de nos best-sellers plébiscités par nos clients, aux joyaux récompensés par les experts, en passant par nos dernières découvertes qui ne demandent qu'à être dégustées.</p>
                  </div>
              </div>
          </div>
          <div className='produit-buttons'>
            <button 
              onClick={() => { setSelection('meilleur') } }
              style={{
                  backgroundColor: selection === 'meilleur' ? 'white' : 'transparent',
                  color: selection === 'meilleur' ? 'black' : 'white'
                }}
            >
              Notre histoire
            </button>
            <button 
              onClick={() => { setSelection('nouveaute') }}
              style={{
                  backgroundColor: selection === 'nouveaute' ? 'white' : 'transparent',
                  color: selection === 'nouveaute' ? 'black' : 'white'
                }}
            >
              Nos valeurs
            </button>
            <button 
              onClick={() => { setSelection('recompense') }}
              style={{
                  backgroundColor: selection === 'recompense' ? 'white' : 'transparent',
                  color: selection === 'recompense' ? 'black' : 'white'
                }}
            >
              Notre domaine
            </button>
            <button 
              onClick={() => { setSelection('tous') }}
              style={{
                  backgroundColor: selection === 'tous' ? 'white' : 'transparent',
                  color: selection === 'tous' ? 'black' : 'white'
                }}
            >
              Notre région
            </button>
          </div>
              
      </div>

      // <div className='nosProduits'>
      //     <div className='decouvrez'>
      //         <h1>Découvrez nos produits</h1>
      //     </div>
      //     <img src={imgVerre} alt="" />
      //     <div className='produits'>
      //         <div className="produit">
      //             <img  className="imgBottle" src={bottle} alt="" />
      //             <div className='descriptionProduit'>
      //                 <h2>Produit 1</h2>
      //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
      //                 <button className='btnCTA'>Call To Action</button>
      //             </div>
      //         </div>
      //         <div className="produit">
      //             <img  className="imgBottle" src={bottle} alt="" />
      //             <div className='descriptionProduit'>
      //                 <h2>Produit 2</h2>
      //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
      //                 <button className='btnCTA'>Call To Action</button>
      //             </div>
      //         </div> 
      //         <div className="produit">
      //             <img  className="imgBottle" src={bottle} alt="" />
      //             <div className='descriptionProduit'>
      //                 <h2>Produit 3</h2>
      //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
      //                 <button className='btnCTA'>Call To Action</button>
      //             </div>
      //         </div>
      //         <div className="produit">
      //             <img  className="imgBottle" src={bottle} alt="" />
      //             <div className='descriptionProduit'>
      //                 <h2>Produit 4</h2>
      //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
      //                 <button className='btnCTA'>Call To Action</button>
      //             </div>
      //         </div>
      //         <div className="produit">
      //             <img  className="imgBottle" src={bottle} alt="" />
      //             <div className='descriptionProduit'>
      //                 <h2>Produit 5</h2>
      //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
      //                 <button className='btnCTA'>Call To Action</button>
      //             </div>
      //         </div
      //         ><div className="produit">
      //             <img  className="imgBottle" src={bottle} alt="" />
      //             <div className='descriptionProduit'>
      //                 <h2>Produit 6</h2>
      //                 <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor nihil similique qui aut neque praesentium doloremque voluptate, aliquam possimus voluptatibus sit sapiente modi impedit magni unde even</p>
      //                 <button className='btnCTA'>Call To Action</button>
      //             </div>
      //         </div>
              
      //     </div>
      // </div>
              
    )
}

