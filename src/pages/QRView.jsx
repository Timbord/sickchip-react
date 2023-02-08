import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function QRView() {
  const [showQrReader, setShowQrReader] = useState(false);
  const [nicoPage, setNicoPage] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setAppTitle("Share");
    setShowAppBar(true);
    setShowBottomBar(true);
    setShowBackBtn(true);
  }, []);

  useEffect(() => {
    if (nicoPage) {
      navigate("/nico");
    }
  }, [nicoPage]);

  useEffect(() => {
    if (showQrReader) {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#000000");
    } else {
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute("content", "#FFFFFF");
    }
  }, [showQrReader]);

  return (
    <div className="relative mt-[75px]">
      <div className="mx-auto px-6">
        <div className="flex justify-center">
          <img src="./frame.png" alt="QrCode" />
        </div>
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="rounded-[25px] h-[100px] mt-4"
          style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 20%)" }}
          onClick={() => setShowQrReader(true)}
        >
          <div className="p-4 text-gray-900 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <p className="text-sm font-bold text-amber-500">Scan QR Code</p>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <div className="flex flex-col items-baseline">
              <p className="text-sm font-medium text-gray-900 leading-4">
                Add new friends to your emergency contact list. Just scan the QR
                Code of your friend.
              </p>
            </div>
          </div>
        </motion.div>
        <AnimatePresence>
          {showQrReader && (
            <motion.div
              className="QrReaderCanvas fixed top-0 left-0 h-[40%] w-full bg-black rounded-b-[30px] z-50 flex justify-center items-center overflow-hidden"
              initial={{ y: "-120%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              transition={{ ease: "easeOut", duration: 0.35 }}
            >
              <QrReader
                containerStyle={{ width: "100%", height: "100%" }}
                scanDelay={1000}
                constraints={{
                  facingMode: "environment",
                }}
                onResult={(result) => {
                  if (result?.text != undefined) setShowQrReader(false);
                  if (result?.text == "test") setNicoPage(true);
                }}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute top-4 right-4 cursor-pointer text-gray-900 bg-white p-2 rounded-full z-55"
                onClick={() => setShowQrReader(false)}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
