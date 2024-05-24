import React from "react";
import "../index.css";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

// mettez votre clé API Google Calendar ici
const API_KEY = "AIzaSyAbs1pkO5hlBqQlnYNazjPMhG5IEV0qjTA";

// remplacez l'identifiant du calendrier par celui que vous souhaitez tester
let calendars = [
  { calendarId: "c48efac0dddb7b1233f4f2cfb47f61ba8910827e9966fa7ebf0ecbcd52e07607@group.calendar.google.com" },
  // { calendarId: "rg4m0k607609r2jmdr97sjvjus@group.calendar.google.com" }
];

let styles = {
  // vous pouvez utiliser des styles d'objet
  calendar: {
    borderWidth: "3px" // rendre le bord extérieur du calendrier plus épais
  },

  // vous pouvez également utiliser les styles de chaîne d'emotion
  // (n'oubliez pas d'ajouter la ligne 'import { css } from "@emotion/react";')
  today: css`
    /* mettre en évidence aujourd'hui en rendant le texte rouge et en lui donnant une bordure rouge */
    color: red;
    border: 1px solid red;
  `
};

export default function App() {
  return (
    <div className="App">
      <main
        style={{
          width: "90%",
          paddingTop: "50px",
          paddingBottom: "50px",
          margin: "auto",
          maxWidth: "1200px"
        }}
      >
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} language="FR" />
      </main>
    </div>
  );
}
