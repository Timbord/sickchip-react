import React, { useEffect, useState } from "react";
import "./App.scss";
import AppBar from "./components/AppBar";
import BottomNav from "./components/BottomNav";
import LoginView from "./pages/LoginView";
import ProfileView from "./pages/ProfileView";
import EmergencyView from "./pages/EmergencyView";
import CalendarView from "./pages/CalendarView";
import SettingsView from "./pages/SettingsView";
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function App() {
  const [isIOS, setIsIOS] = useState(true);
  const [isWebApp, setIsWebApp] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // const iOS =
    //   /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    // setIsIOS(iOS);
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
    return <p>To use this app, you need to add it to your home screen.</p>;

  return (
    <React.Fragment>
      <AppBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<LoginView />} />
          <Route path="/profile" element={<ProfileView />} />
          <Route path="/notification" element={<NotificationView />} />
          <Route path="/emergency" element={<EmergencyView />} />
          <Route path="/calendar" element={<CalendarView />} />
          <Route path="/settings" element={<SettingsView />} />
          <Route path="/qrcode" element={<QRView />} />
        </Routes>
      </AnimatePresence>
      <BottomNav />
    </React.Fragment>
  );
}

export default App;
