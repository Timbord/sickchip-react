import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { motion } from "framer-motion";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { setAppTitle } from "../store";

export default function QRView() {
  const [data, setData] = useState(null);
  const [showQrReader, setShowQrReader] = useState(false);

  useEffect(() => {
    setAppTitle("QrCode");
  }, []);

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{ display: "flex", backgroundColor: "#ffffff" }}
    >
      <IconButton
        size="large"
        color="inherit"
        fontSize="large"
        aria-label="open"
        sx={{ height: "100%" }}
        onClick={() => setShowQrReader(true)}
      >
        <CameraAltIcon />
      </IconButton>
      {showQrReader && (
        <div className="QrReaderCanvas">
          <QrReader
            scanDelay={1000}
            constraints={{
              facingMode: "environment",
            }}
            onResult={(result) => {
              setData(result?.text);
              if (result?.text != undefined) setShowQrReader(false);
              //if (!!result) {}
            }}
          />
          <IconButton
            size="large"
            color="secondary"
            fontSize="large"
            aria-label="close"
            onClick={() => setShowQrReader(false)}
          >
            <CloseIcon />
          </IconButton>
        </div>
      )}
      <div className="QrCodeCanvas">
        <img src="./frame.png" alt="QrCode" />
        {data}
      </div>
    </motion.div>
  );
}
