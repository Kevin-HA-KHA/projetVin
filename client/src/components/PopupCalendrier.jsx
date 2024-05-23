import { useState } from "react"
import "../styles/PopupCalendrier.css"

function PopupCalendrier() {
    const [popupRencontre, setPopupRencontre] = useState(false)


    let rencontre = () => {
        if(popupRencontre === false){
            setPopupRencontre(true)
            document.querySelector(".popupCalendrier").style.visibility="visible"
            document.querySelector(".btnRencontreNous").style.visibility="hidden"
        }
    }

    let compris = () => {
        if(popupRencontre === true){
            setPopupRencontre(false)
            document.querySelector(".popupCalendrier").style.visibility="hidden"
        }
    }
    return (

        
        <>
            <div className="btnRencontreNous" onClick={rencontre}>Rencontrons-nous</div>
            <div className="popupCalendrier">
                <p>Veuillez proposer un créneau pour une prise de rendez vous. Suite  </p>
                <button className="compris" onClick={compris}>J'ai compris</button>
            </div>
        </>
      
    )
  }


  
  export default PopupCalendrier