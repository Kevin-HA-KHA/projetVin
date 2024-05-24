import React from 'react';

import imgPinot from "../assets/images/pinot.png"
import "../styles/Domaine.css"

import "../styles/Valeurs.css"

function Domaine() {
    return (
        <>
            <h1>Notre domaine</h1>
           <div className='domaine'>
                <div className='txtDomaine'> 
                    <h2 className='titreDomaine'>L'Essence des Terres de Bourgognes</h2>
                    <p>Au cœur des prestigieuses terres bourguignonnes, notre domaine viticole s'épanouit dans un écrin de 
                        traditions et de passion pour le vin. <br /><br />
                        Niché entre les collines ondoyantes et les vallées verdoyantes, notre vignoble s'étend sur des hectares 
                        de sols riches et variés, réchuaffés par les doux rayons du soleil et les brises légères de la région. <br /><br />
                        Chaque vigne est choyée avec une attention méticuleuse, chaque grappe de raisin est récoltée à la main 
                        avec un profond respect du terroir et de ses subtilités uniques. <br /> <br />
                        Dans notre famille, le vin est bien plus qu'une simple boisson ; c'est une véritable passion 
                        transmise de génération en génération. <br /><br />
                        Guidés par le respect de la terre et le désir de préserver notre héritage, nous avons adopté des 
                        pratiques viticoles durables, préservant ainsi la richesse de nos terres pour les générations futures. <br /><br />
                        Chaque bouteille que nous produisons est le fruit de notre dévouement et de notre engagement envers 
                        l'excellence. Dans chaque gorgée, nos vins révèlent l'histoire de notre domaine, capturant l'essence 
                        même de la Bourgogne et offrant une expérience de dégustation inoubliable. 
                    </p>
                </div>
            
                <img src={imgPinot} alt="" />
           </div>
        </>
    );
}

export default Domaine;