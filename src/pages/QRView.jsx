import React, { useState, useEffect } from "react";
import { QrReader } from "react-qr-reader";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";

export default function QRView() {
  const [data, setData] = useState(null);
  const [showQrReader, setShowQrReader] = useState(false);

  useEffect(() => {
    setAppTitle("Share");
    setShowAppBar(true);
    setShowBottomBar(true);
    setShowBackBtn(true);
  }, []);
  console.log(data);
  return (
    <div className="relative mt-[75px]">
      <div className="mx-auto px-6">
        <div className="flex justify-center">
          <img src="./frame.png" alt="QrCode" />
          {data}
        </div>
        <div
          className="rounded-[25px] h-[100px] mt-4"
          style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 20%)" }}
          onClick={() => setShowQrReader(true)}
        >
          <div className="p-4 text-gray-900 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <p className="text-sm font-bold text-amber-500 ml-1">
                  Scan QR Code
                </p>
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
                Add new friends to your emergency contact list. Just scan the
                QrCode of your friend.
              </p>
            </div>
          </div>
        </div>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
