
import "../styles/Region.css"
import region1 from "../assets/images/region.png"
import region2 from "../assets/images/region2.png"
import region3 from "../assets/images/region3.png"
import region4 from "../assets/images/region4.png"

function Domaine() {
    return (
        <main className="region-main">
            <h1>Notre région</h1>
           <div className='region'>
                <div className='regionLeft'>
                    <div className='region1'>
                        <img className="imgRegion1" src={region1} alt="" />
                        <div className='txtRegion1'>
                            <h3>Bourgogne, terre de contrastes</h3>
                            <p>Située au cœur de la France, la Bourgogne est une région viticole d'exception. <br /><br />
                            Entre les vallées verdoyantes et les coteaux ensoleillés, notre terre est façonnée 
                            par un terroir unique et des traditions viticoles séculaires. 
                            </p>
                        </div>
                    </div>
                    <div className='region2'>
                        <b>Nos cépages emblématiques, tels que le Pinot Noir, le Chardonnay et l'Aligoté donnent 
                        naissance à des vins d'une qualité exceptionnelle.</b>
                    </div>
                    <div className='region3'>
                        <img className='imgRegion3' src={region2} alt="" />
                        <p className='txt1Region3'>Notre engagement envers la durabilité et le respect de l'environnement est au cœur de 
                            notre pratique viticole. <br /><br />
                            Nous mettons en œuvre des pratiques agricoles respectueuses de la nature pour préserver la biodiversité et 
                            protéger notre terroir exceptionnel.
                        </p>
                        <p className='txt2Region3'>En choisissant nos vins, vous soutenez notre passion pour l'excellence et notre engagement envers l'environnement. <br /><br />
                        La Bourgogne est bien plus qu'une région viticole; c'est une invitation à découvrir un mode de vie authentique et passionné. <br /><br />
                        Explorez nos vignobles, dégustez nos vins et laissez-vous séduire par la beauté de notre terre.
                        </p>
                    </div>
                </div>
                <div className='regionRight'>
                    <div className='region4'>
                        <img className='imgRegion4' src={region3} alt="" />
                        <div className='txtRegion4'>
                            <h3>Des sols riches</h3>
                            <p>Les sols de la Bourgogne sont une véritable mosaïque de richesses géologiques, offrant une palette variée de terroirs 
                                idéaux pour la viticulture. Des sols calcaires aux argilo-calcaires, en passant par les sols limoneux et marneux, chaque type 
                                de sol confère aux vins des caractéristiques distinctes et une expression unique du terroir.
                            </p>
                        </div>
                    </div>
                    <div className="region5">
                            <p className="txtRegion5">Cette région est un choix idéal pour la viticulture en raison de son climat océanique doux et de la richesse de ses sols variés. 
                                Ce climat, combiné aux brises marines rafraîchissantes, crée des conditions parfaites pour la maturation des raisins.
                            </p>
                            <p className="txtRegion5">La Bourgogne est un véritable joyau pour la viticulture, bénéficiant d'un climat océanique doux et de sols riches et variés. 
                                Ces conditions idéales, associées aux brises marines qui balayent la région, favorisent une maturation du raisin.
                            </p>
                            <div className="txt3Region5">
                                <h3>Un climat idéal</h3>
                                <p>Les températures modérées, les étés ensoleillés et les brises marines de la Bourgogne contribuent à la qualité 
                                    exceptionnelle des raisins, permettant une maturation progressive et optimale. Ces conditions climatiques favorables 
                                    offrent aux vins une richesse en arômes et en saveurs, conférant à chaque cru une personnalité unique et remarquable.
                                </p>
                            </div>
                    </div>
                    <div className="region6">
                        <img src={region4} alt="" />
                    </div>
                </div>
            
           </div>
        </main>
    );
}

export default Domaine;