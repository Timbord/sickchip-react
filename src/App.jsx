import React, { useEffect, useState } from "react";
import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "./components/AppBar";
import BottomNav from "./components/BottomNav";

function App() {
  const [isIOS, setIsIOS] = useState(false);
  const [isWebApp, setIsWebApp] = useState(false);

  useEffect(() => {
    const iOS =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(iOS);
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsWebApp(true);
    }
  }, []);

  if (!isIOS)
    return (
      <p>
        This app is not optimized for your device. Please use an iOS device for
        the best experience.
      </p>
    );
    if (!isWebApp)
    return (
      <p>
        To use this app, you need to add it to your home screen.
      </p>
    );

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar />
      <BottomNav />
    </React.Fragment>
  );
}

export default App;
