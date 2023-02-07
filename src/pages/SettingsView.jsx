import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";

export default function SettingsView() {
  useEffect(() => {
    setAppTitle("Settings");
    setShowAppBar(true);
    setShowBackBtn(false);
    setShowBottomBar(true);
  }, []);

  return (
    <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      test
    </div>
  );
}
