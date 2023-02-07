import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "@nanostores/react";
import { appTitle } from "../store";
import { showAppBar } from "../store";
import { showBackBtn } from "../store";

export default function AppBar() {
  const title = useStore(appTitle);
  const showBar = useStore(showAppBar);
  const showBack = useStore(showBackBtn);
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const back = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-6 h-6 mr-2"
      onClick={goBack}>
      <path
        fillRule="evenodd"
        d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
        clipRule="evenodd"
      />
    </svg>
  );

  return (
    showBar && (
      <div className="fixed w-full top-0 bg-white z-50 mt-2">
        <div className="mx-auto px-6">
          <div className="flex items-center justify-between border-b-2 border-gray-100 py-4 md:justify-start md:space-x-10">
            <div className="flex items-center">
              {showBack && back}
              <h4 className="font-bold leading-tight text-xl m-0 text-grey-900">
                {title}
              </h4>
            </div>
            <img className="h-8 w-auto" src="./logo.png" alt="SickChip" />
          </div>
        </div>
      </div>
    )
  );
}
