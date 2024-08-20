
import "../styles/MeilleureVente.css";
import { useState, useEffect } from "react";

import tag_vine from "../assets/images/tag_vine.png";
import tag_localisation from "../assets/images/tag_localisation.png";
import tag_color from "../assets/images/tag_color.png";
// import product_pinot_noir from "../assets/images/product_pinot_noir.png";
import wine_circle from "../assets/images/wine_circle.png";


function MeilleureVente() {

    const [wines, setWines] = useState([]);
    const [selectedWine, setSelectedWine] = useState(null);
    const [transitionClass, setTransitionClass] = useState('');

    // const fetchWineData = async (url) => {
    //     try {
    //         const response = await fetch(url);
    //         if (!response.ok) throw new Error('Network response was not ok');
    //         const data = await response.json();
    //         return data;
    //     } catch (error) {
    //         throw error;
    //     }
    // };

    // useEffect(() => {
    //     const localURL = '/wineDataMeilleur.json';
    //     const backupURL = '../src/assets/data/wineDataMeilleur.json';
        
        
    //     fetchWineData(localURL) // Set the initial selected wine to the first one
    //         .then(data => {
    //             setWines(data);
    //             setSelectedWine(data[0]); 
    //         })
    //         .catch(() => {
    //             fetchWineData(backupURL)
    //                 .then(data => {
    //                     setWines(data);
    //                     setSelectedWine(data[0]);
    //                 })
    //                 .catch(error => {
    //                     console.error('Failed to load wine data:', error);
    //                 });
    //         });
    // }, []);

    useEffect(() => {
        const fetchEvent = async () => {
          try {
            const response = await fetch(`${import.meta.env.VITE_API_URL}/api/wine/meilleur`); 
            const data = await response.json();
            setWines(data);
            setSelectedWine(data[0]); 
          } catch (error) {
            console.error('Error fetching event details:', error);
          }
        };
    
        fetchEvent();
      }, []);

    const handleSelectWine = (wine) => {
        setTransitionClass('fade-out');
        setTimeout(() => {
            setSelectedWine(wine);
        }, 500);
        setTimeout(() => {
            setTransitionClass('fade-in');
        }, 700);

    };

    // if (!selectedWine) return <div>Chargement des vins...</div>;
    if (!selectedWine) {
        return (
          <div className="loading">
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
            <div className="loading-dot"></div>
          </div>
        );
      }
    
    return (
        <main>
            <div className={`wine ${transitionClass}`} key={selectedWine.id}>
                <div className="information">
                    <h2>{selectedWine.wineTitle}</h2>
                    <span className="date">{selectedWine.wineDate}</span>
                    <p dangerouslySetInnerHTML={{ __html: selectedWine.wineDescription }}></p>
                    <div className="tags">
                        <span>
                            <img src={tag_vine} alt="" />
                            {selectedWine.tagVineText}
                        </span>
                        <span>
                            <img src={tag_localisation} alt="" />
                            {selectedWine.tagLocText}
                        </span>
                        <span>
                            <img src={tag_color} alt="" />
                            {selectedWine.tagColorText}
                        </span>
                    </div>
                </div>
                <div className="display">
                    <img src={selectedWine.imageUrl} alt={selectedWine.wineTitle} />
                    <img className="circle" src={wine_circle} alt="fond blanc" />
                </div>
            </div>
            <div className="wine-list-box">
                <div className="wine-list">
                    {wines.map(wine => (
                        <div
                            key={wine.id}
                            className={`wine-item ${wine === selectedWine ? 'selected' : ''}`}
                            onClick={() => wine === selectedWine ? null : handleSelectWine(wine)}
                        >
                            <img src={wine.imageUrl} alt={wine.wineTitle} />
                            <h3>{wine.wineTitle}</h3>
                            <span>{wine.wineDate}</span>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}

export default MeilleureVente;