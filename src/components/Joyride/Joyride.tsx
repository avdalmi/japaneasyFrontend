import React from "react";
import JoyRide from "react-joyride";
const tourSteps = [
  {
    target: ".homePageNavContainer",
    content: "This is the App logo",
  },
  {
    target: ".tour-login",
    content: "View the login button",
  },
  {
    target: ".tour-post",
    content: "here is the post card",
  },
  {
    target: ".tour-contact",
    content: "this is the contact form",
  },
  {
    target: ".tour-footer",
    content: "see our footer",
  },
];
function Joyride() {
  return (
    <>
      <JoyRide steps={tourSteps} />
    </>
  );
}

export default Joyride;
