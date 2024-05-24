import React from 'react';
import imgDomaine from "../assets/images/domaine.png"; 
import img1876 from "../assets/images/1876.png"; 
import txt2 from "../assets/images/txt2.png"; 
import passion from "../assets/images/passion.png"; 
import famille from "../assets/images/famille.png"; 
import famille2 from "../assets/images/famille2.png"; 

import "../styles/Histoire.css"

function Histoire() {
    return (
        <>
            <h1>Notre Histoire</h1>
            <div className='histoire'>
                <div className='leftSide'>
                    <img src={imgDomaine} className='imgDomaine' alt="Bottle" /> 
                    <img src={img1876} className="txt1" alt="" />
                    <img src={txt2} className="txt2" alt="" />
                  
                </div>

                <div className='rightSide'>
                    <div className='passion'>
                        <img src={passion} alt="" />
                        <div className='txtPassion'>
                        <p> La Passion Transcendée<br /> <br /><br />
                        C'est au cœur des terroirs prestigieux de la Bourgogne que Luc a cultivé notre domaine viticole. 
                        Inspiré par la richesse et la tradition de cette région viticole emblématique, Luc marie savoir-faire 
                        ancestral et techniques innovantes pour produire des vins d'une qualité exceptionnelle. <br /><br />
                    
                        Chaque bouteille que nous proposons est le fruit de notre engagement envers l'excellence et 
                        l'authenticité, reflétant l'essence même de la Bourgogne.</p>
                        </div>

                    </div>
                    <div className='famille'>
                        <div className='txtFamille'>
                        <p> Une histoire de famille<br /> <br /><br /> <br />
                        Dans notre domaine viticole, la famille est le pilier fondamental de notre identité. 
                        Depuis des générations, nous entretenons avec amour nos vignobles, préservant ainsi un héritage transmis 
                        de génération en génération. <br /><br /><br />
                        Chaque bouteille que nous produisons porte en elle l'histoire et la tradition de notre lignée, 
                        capturant l'âme même de notre terroir bourguignon. <br /><br /><br />
                        À notre domaine, chaque visiteur est reçu avec chaleur et hospitalité. 
                        Nous croyons en l'importance de créer des expériences authentiques où la découverte du vin 
                        s'accompagne de moments de partage et d'échange. <br /><br /> <br />
                        Que vous soyez un amateur de vin passionné ou un néophyte curieux, notre équipe dévouée est là pour vous 
                        guider à travers notre univers viticole, vous faisant découvrir les trésors de nos vignobles et vous 
                        offrant une expérience unique et enrichissante. Nous avons hâte de vous accueillir chez nous et de 
                        partager avec vous notre passion pour le vin et l'art de vivre bourguignon.</p>
                        </div>
                        <div className='imgFamille'>
                            <img src={famille} alt="" />
                            <img src={famille2} alt="" />
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    );
}

export default Histoire;