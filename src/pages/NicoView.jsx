import React, { useEffect } from "react";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";
import { motion } from "framer-motion";

export default function SettingsView() {
  useEffect(() => {
    setAppTitle("Profile");
    setShowAppBar(true);
    setShowBackBtn(true);
    setShowBottomBar(true);
  }, []);

  return (
    <div className="relative mt-[75px]">
      <div className="mx-auto px-6">
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-4 flex items-center">
            <img
              className="h-[4rem] w-[4rem] rounded-full object-cover"
              src="https://images.unsplash.com/photo-1675505657657-d69fada7287c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
              alt="Profile Picture"
            />
            <div className="ml-3">
              <p className="text-lg font-bold text-gray-900">Nico Thiele</p>
              <p className="text-sm text-gray-500">
                Hauptstr. 21 • 14776 Brandenburg
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="mx-auto my-4 px-6">
        <h6 className="font-bold leading-tight text-m m-0 text-grey-900">
          Overview
        </h6>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">Bloodtype</p>
              <p className="text-sm font-medium text-gray-900">A-</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">
                Allergic Reactions
              </p>
              <p className="text-sm font-medium text-gray-900">All</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">
                Chronic Diseases
              </p>
              <p className="text-sm font-medium text-gray-900">None</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">Medication</p>
              <p className="text-sm font-medium text-gray-900">Some Pills</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">Last Disease</p>
              <p className="text-sm font-medium text-gray-900">None</p>
            </div>
          </div>
        </div>
        <motion.div
          whileTap={{ scale: 0.95 }}
          className="rounded-[25px] mt-8"
          style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 20%)" }}
          onClick={() => setShowQrReader(true)}
        >
          <div className="p-4 text-gray-900 flex flex-col justify-between h-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <p className="text-sm font-bold text-amber-500">Add Friend</p>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
