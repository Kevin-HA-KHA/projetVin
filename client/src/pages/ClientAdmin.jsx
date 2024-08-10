import React from "react";


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
