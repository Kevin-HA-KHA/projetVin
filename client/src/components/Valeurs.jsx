import React from 'react';

import valeurs from "../assets/images/valeurs.png"; 
import valeurs2 from "../assets/images/valeurs2.png"; 
import valeurs3 from "../assets/images/valeurs3.png"; 
import valeurs4 from "../assets/images/valeurs4.png"; 


import "../styles/Valeurs.css"

function Valeur() {
    return (
        <main className='valeur-main'>
            <h1 className='nosValeurs'>Nos valeurs</h1>
            <div className='valeurs'>
                <div className='leftSide'>
                    <div className='harmonie'>
                        <h2>En Harmonie</h2> 
                        <p className='harmonie'> Nos valeurs sont ancrées dans le respect de la tradition, l'engagement envers la durabilité et la passion pour l'artisanat viticole.</p>
                    </div>
                    <div className='Valeurs'>
                        <div className='txtValeurs'>
                            <h3>Passionnés</h3>  
                            <p>La passion est le moteur qui alimente chaque aspect de notre travail. 
                            Cette passion se reflète dans chaque bouteille que nous produisons, capturant ainsi 
                            l'essence de notre dévouement et de notre engagement envers l'art viticole. </p> <br /> 
                            
                            <h3>Engagés dans la qualité</h3> 
                            <p>Pour nous, l'excellence est une un travail constant. 
                            Chaque étape de notre processus de production est méticuleusement surveillée, 
                            depuis la sélection minutieuse des cépages jusqu'à l'embouteillage final.</p> <br /> 
                            
                            <h3>Guidés par la tradition </h3> 
                            <p>Au cœur de notre domaine viticole, la tradition est notre guide. Nous honorons les méthodes 
                            ancestrales de culture de la vigne et de vinification, transmises de génération en génération.
                            
                            </p>
                        </div>
                        <div className='imgValeurs'>
                            <img src={valeurs} alt="" />
                        </div>

                    </div>
                  
                </div>

                <div className='rightSide'>
                    <div className='environnement'>
                        <h1>Soucieux de l'environnement</h1>

                        <div className='env'>
                            <p className='txtEnv'>Conscients de l'impact de nos activités sur la nature, nous mettons en place des pratiques 
                                respectueuses de l'écosystème. <br /> <br />
                                De la gestion raisonnée des ressources naturelles à la promotion de la biodiversité, 
                                nous œuvrons pour protéger nos terres
                            </p>
                            <img src={valeurs2} alt="" className='imgEnv' />
                            <img src={valeurs3} alt="" />
                        </div>
                        <div className='durabilite'>
                            <img src={valeurs4} alt="" />
                            <div className='txtDurabilite'>
                                <h3>La durabilité, une valeur qui nous est chère</h3>
                                <p>Dans notre domaine viticole, la durabilité est un principe fondamental. 
                                De la vigne à la bouteille, nous mettons en œuvre des méthodes écologiques pour 
                                minimiser notre empreinte environnementale tout en garantissant la qualité de nos vins. <br /> <br />
                                Notre approche durable se reflète dans la gestion de nos vignobles et dans notre processus de vinification. <br /> <br />
                                Nous privilégions la biodiversité, réduisons l'utilisation des ressources et assurons une gestion 
                                responsable des déchets. Cette démarche nous permet de produire des vins de qualité tout en préservant 
                                notre précieux environnement pour les générations futures.</p>
                            </div>
                           
                        </div>
                        

                    </div>
                   
                </div>
            
            </div>
        </main>
    );
}

export default Valeur;