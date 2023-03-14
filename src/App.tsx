import React, { useState } from "react";
import "./App.css";
import SideMenu from "./components/SideMenu/SideMenu";
import Map from "./components/Map/Map";
import Events from "./components/events/events";
import CreateEvent from "./components/createEvent";

function App() {
  const [createEventPopupOpen, setCreateEventPopupOpen] = useState(false);

  const showCreateEventPopup = () => {
    setCreateEventPopupOpen(true);
  };
  const hideCreateEventPopup = () => {
    setCreateEventPopupOpen(false);
  };

  return (
    <div className="w-screen flex flex-col z-5">
      <Map />
      <SideMenu />
      <Events showCreateEventPopup={showCreateEventPopup} />
      {createEventPopupOpen && (
        <CreateEvent hideCreateEventPopup={hideCreateEventPopup} />
      )}
    </div>
  );
}

export default App;
