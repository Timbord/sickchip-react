import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";
import { motion } from "framer-motion";

export default function ProfileView() {
  useEffect(() => {
    setAppTitle("Home");
    setShowAppBar(true);
    setShowBottomBar(true);
    setShowBackBtn(false);
  }, []);

  return (
      <div className="relative mt-[75px]">
        <div className="mx-auto px-6">
          <ul role="list" className="divide-y divide-gray-200">
            <li className="py-4 flex items-center">
              <img
                className="h-[4rem] w-[4rem] rounded-full object-cover"
                src="https://images.unsplash.com/photo-1675253264487-bf2dda3a536b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                alt="Profile Picture"
              />
              <div className="ml-3">
                <p className="text-lg font-bold text-gray-900">Lorenz Karow</p>
                <p className="text-sm text-gray-500">
                  Hauptstr. 20 • 10317 Berlin
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="mx-auto my-4 px-6">
          <h6 className="font-bold leading-tight text-m m-0 text-grey-900">
            Overview
          </h6>
          <div
            className="mt-4 bg-white overflow-hidden h-[125px] rounded-[25px] border-4 border-light-gray"
            style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 10%)" }}>
            <div className="px-3 py-3 text-gray-900 flex flex-col justify-between h-full">
              <div className="flex items-center mb-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 text-cyan-500">
                  <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
                </svg>

                <p className="text-sm font-bold text-cyan-500 ml-1">
                  Activities
                </p>
              </div>
              <div className="flex">
                <div className="flex flex-col pr-2 border-r-2">
                  <p className="text-sm font-bold text-gray-900">Sleep</p>
                  <p className="text-sm font-medium text-gray-900">
                    7 hr 27 min
                  </p>
                </div>
                <div className="flex flex-col pl-2 pr-2 border-r-2">
                  <p className="text-sm font-bold text-gray-900">Move</p>
                  <p className="text-sm font-medium text-gray-900">
                    2523 steps
                  </p>
                </div>
                <div className="flex flex-col pl-2">
                  <p className="text-sm font-bold text-gray-900">Burned</p>
                  <p className="text-sm font-medium text-gray-900">235 kcal</p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="rounded-[25px] h-[150px] backdrop-blur-2xl border-4 border-light-gray"
              style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 10%)" }}>
              <div className="px-3 py-3 text-gray-900 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-red-500">
                      <path d="M9.653 16.915l-.005-.003-.019-.01a20.759 20.759 0 01-1.162-.682 22.045 22.045 0 01-2.582-1.9C4.045 12.733 2 10.352 2 7.5a4.5 4.5 0 018-2.828A4.5 4.5 0 0118 7.5c0 2.852-2.044 5.233-3.885 6.82a22.049 22.049 0 01-3.744 2.582l-.019.01-.005.003h-.002a.739.739 0 01-.69.001l-.002-.001z" />
                    </svg>

                    <p className="text-sm font-bold text-red-500 ml-1">
                      Health
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-baseline justify-end">
                  <p className="text-xl font-bold text-gray-900 leading-3 mb-1">
                    98
                  </p>
                  <p className="text-sm font-medium text-gray-900">BPM</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="rounded-[25px] h-[150px] border-4 border-light-gray"
              style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 10%)" }}>
              <div className="px-3 py-3 text-gray-900 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-amber-500">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-11.25a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-bold text-amber-500 ml-1">
                      Medicine
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="flex flex-col items-baseline">
                  <p className="text-xl font-bold text-gray-900 leading-3 mb-1">
                    2x
                  </p>
                  <p className="text-sm font-medium text-gray-900">
                    Metformin, Daily
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.95 }}
              className="rounded-[25px] h-[150px] backdrop-blur-2xl border-4 border-light-gray"
              style={{ boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 10%)" }}>
              <div className="px-3 py-3 text-gray-900 flex flex-col justify-between h-full">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 text-teal-500">
                      <path
                        fillRule="evenodd"
                        d="M8.5 3.528v4.644c0 .729-.29 1.428-.805 1.944l-1.217 1.216a8.75 8.75 0 013.55.621l.502.201a7.25 7.25 0 004.178.365l-2.403-2.403a2.75 2.75 0 01-.805-1.944V3.528a40.205 40.205 0 00-3 0zm4.5.084l.19.015a.75.75 0 10.12-1.495 41.364 41.364 0 00-6.62 0 .75.75 0 00.12 1.495L7 3.612v4.56c0 .331-.132.649-.366.883L2.6 13.09c-1.496 1.496-.817 4.15 1.403 4.475C5.961 17.852 7.963 18 10 18s4.039-.148 5.997-.436c2.22-.325 2.9-2.979 1.403-4.475l-4.034-4.034A1.25 1.25 0 0113 8.172v-4.56z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="text-sm font-bold text-teal-500 ml-1">
                      Results
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5">
                    <path
                      fillRule="evenodd"
                      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="flex flex-col items-baseline">
                  <p className="text-xl font-bold text-gray-900 leading-3 mb-1">
                    Latest
                  </p>
                  <p className="text-sm font-medium text-gray-900">Bloodtest</p>
                </div>
              </div>
            </motion.div>
            <Link to="/calendar">
              <motion.div
                whileTap={{ scale: 0.95 }}
                className="rounded-[25px] h-[150px] backdrop-blur-2xl border-4 border-light-gray"
                style={{
                  boxShadow: "5px 5px 20px 0px rgb(114 114 114 / 10%)",
                }}>
                <div className="px-3 py-3 text-gray-900 flex flex-col justify-between h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="w-5 h-5 text-sky-500">
                        <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                        <path
                          fillRule="evenodd"
                          d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z"
                          clipRule="evenodd"
                        />
                      </svg>

                      <p className="text-sm font-bold text-sky-500 ml-1">
                        Calendar
                      </p>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5">
                      <path
                        fillRule="evenodd"
                        d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="flex flex-col items-baseline">
                    <p className="text-xl font-bold text-gray-900 leading-3 mb-1">
                      24. Feb
                    </p>
                    <p className="text-sm font-medium text-gray-900">
                      Doctor, 01:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
  );
}
