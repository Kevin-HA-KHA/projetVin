import React from 'react'
import { InlineWidget, PopupWidget, PopupButton } from "react-calendly";

function Aventure() {
  return (
    <div>
      <InlineWidget url="https://calendly.com/cmille749/30min?month=2024-03" />
      <PopupWidget
        url="https://calendly.com/cmille749/30min?month=2024-03"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
        textColor="#ffffff"
        color="#00a2ff"
      />
      <PopupButton
        url="https://calendly.com/your_scheduling_page"
        /*
         * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
         * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
         */
        rootElement={document.getElementById("root")}
        text="Click here to schedule!"
      />
    </div>
  )
}

export default Aventure

