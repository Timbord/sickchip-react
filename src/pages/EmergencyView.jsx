import React, { useEffect } from "react";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";

export default function ProfileView() {
  useEffect(() => {
    setAppTitle("Emergency");
    setShowAppBar(true);
    setShowBackBtn(false);
    setShowBottomBar(false);
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
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">Bloodtype</p>
              <p className="text-sm font-medium text-gray-900">0+</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">
                Allergic Reactions
              </p>
              <p className="text-sm font-medium text-gray-900">None</p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">
                Chronic Diseases
              </p>
              <p className="text-sm font-medium text-gray-900">
                Diabetes (Type 2)
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-white overflow-hidden rounded-lg border">
          <div className="px-3 py-3 text-gray-900 flex items-center">
            <div className="flex items-center justify-between w-full">
              <p className="text-sm font-bold text-gray-900">Medication</p>
              <p className="text-sm font-medium text-gray-900">Metformin</p>
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
        <h6 className="font-bold leading-tight text-m m-0 text-grey-900 pt-8 pb-2">
          Emergency Contacts
        </h6>
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1674376906038-a18fed600a55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80"
                alt="Profile Picture"
              />
              <div className="ml-3">
                <p className="text-lg font-bold text-gray-900 leading-5">
                  Anna Mauer
                </p>
                <p className="text-sm text-gray-500">10317 Berlin</p>
              </div>
            </div>
            <div className="flex items-center">
              <a href="tel: +4917241260192">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
        <ul role="list" className="divide-y divide-gray-200">
          <li className="py-2 flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-12 w-12 rounded-full object-cover"
                src="https://images.unsplash.com/photo-1674376890916-7e742a12a943?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEwfHRvd0paRnNrcEdnfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=256&q=60"
                alt="Profile Picture"
              />
              <div className="ml-3">
                <p className="text-lg font-bold text-gray-900 leading-5">
                  Theresa Kuntze
                </p>
                <p className="text-sm text-gray-500">14099 Potsdam</p>
              </div>
            </div>
            <div className="flex items-center">
              <a href="tel: +4915906101214">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 mr-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7"
              >
                <path
                  fillRule="evenodd"
                  d="M5.636 4.575a.75.75 0 010 1.06 9 9 0 000 12.729.75.75 0 01-1.06 1.06c-4.101-4.1-4.101-10.748 0-14.849a.75.75 0 011.06 0zm12.728 0a.75.75 0 011.06 0c4.101 4.1 4.101 10.749 0 14.85a.75.75 0 11-1.06-1.061 9 9 0 000-12.728.75.75 0 010-1.06zM7.757 6.696a.75.75 0 010 1.061 6 6 0 000 8.485.75.75 0 01-1.06 1.061 7.5 7.5 0 010-10.607.75.75 0 011.06 0zm8.486 0a.75.75 0 011.06 0 7.5 7.5 0 010 10.607.75.75 0 01-1.06-1.06 6 6 0 000-8.486.75.75 0 010-1.06zM9.879 8.818a.75.75 0 010 1.06 3 3 0 000 4.243.75.75 0 11-1.061 1.06 4.5 4.5 0 010-6.363.75.75 0 011.06 0zm4.242 0a.75.75 0 011.061 0 4.5 4.5 0 010 6.364.75.75 0 01-1.06-1.06 3 3 0 000-4.244.75.75 0 010-1.06zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
