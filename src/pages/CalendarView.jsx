import React, { useEffect } from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";

const days = [
  { date: "2023-01-30" },
  { date: "2023-01-31" },
  { date: "2023-02-01", isCurrentMonth: true },
  { date: "2023-02-02", isCurrentMonth: true },
  { date: "2023-02-03", isCurrentMonth: true },
  { date: "2023-02-04", isCurrentMonth: true },
  { date: "2023-02-05", isCurrentMonth: true },
  { date: "2023-02-06", isCurrentMonth: true },
  { date: "2023-02-07", isCurrentMonth: true },
  { date: "2023-02-08", isCurrentMonth: true },
  { date: "2023-02-09", isCurrentMonth: true },
  { date: "2023-02-10", isCurrentMonth: true, isToday: true },
  { date: "2023-02-11", isCurrentMonth: true },
  { date: "2023-02-12", isCurrentMonth: true },
  { date: "2023-02-13", isCurrentMonth: true },
  { date: "2023-02-14", isCurrentMonth: true },
  { date: "2023-02-15", isCurrentMonth: true },
  { date: "2023-02-16", isCurrentMonth: true },
  { date: "2023-02-17", isCurrentMonth: true },
  { date: "2023-02-18", isCurrentMonth: true },
  { date: "2023-02-19", isCurrentMonth: true },
  { date: "2023-02-20", isCurrentMonth: true },
  { date: "2023-02-21", isCurrentMonth: true },
  { date: "2023-02-22", isCurrentMonth: true },
  { date: "2023-02-23", isCurrentMonth: true },
  { date: "2023-02-24", isCurrentMonth: true, isSelected: true },
  { date: "2023-02-25", isCurrentMonth: true },
  { date: "2023-02-26", isCurrentMonth: true },
  { date: "2023-02-27", isCurrentMonth: true },
  { date: "2023-02-28", isCurrentMonth: true },
  { date: "2023-03-01" },
  { date: "2023-03-02" },
  { date: "2023-03-03" },
  { date: "2023-03-04" },
  { date: "2023-03-05" },
];
const meetings = [
  {
    id: 1,
    name: "Dr. Wolf",
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    start: "1:00 PM",
    startDatetime: "2022-01-21T13:00",
    end: "2:30 PM",
    endDatetime: "2022-01-21T14:30",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function CalendarView() {
  useEffect(() => {
    setAppTitle("Calendar");
    setShowAppBar(true);
    setShowBottomBar(true);
    setShowBackBtn(true);
  }, []);

  return (
    <div className="mx-auto px-6 mt-[85px]">
      <div className="flex items-center">
        <h2 className="flex-auto font-semibold text-gray-900">February 2023</h2>
        <button
          type="button"
          className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <button
          type="button"
          className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6"
          >
            <path
              fillRule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
      <div className="mt-10 grid grid-cols-7 text-center text-xs leading-6 text-gray-500">
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
        <div>S</div>
      </div>
      <div className="mt-2 grid grid-cols-7 text-sm">
        {days.map((day, dayIdx) => (
          <div
            key={day.date}
            className={classNames(
              dayIdx > 6 && "border-t border-gray-200",
              "py-2"
            )}
          >
            <button
              type="button"
              className={classNames(
                day.isSelected && "text-white",
                !day.isSelected && day.isToday && "text-indigo-600",
                !day.isSelected &&
                  !day.isToday &&
                  day.isCurrentMonth &&
                  "text-gray-900",
                !day.isSelected &&
                  !day.isToday &&
                  !day.isCurrentMonth &&
                  "text-gray-400",
                day.isSelected && day.isToday && "bg-indigo-600",
                day.isSelected && !day.isToday && "bg-gray-900",
                !day.isSelected && "hover:bg-gray-200",
                (day.isSelected || day.isToday) && "font-semibold",
                "mx-auto flex h-8 w-8 items-center justify-center rounded-full"
              )}
            >
              <time dateTime={day.date}>
                {day.date.split("-").pop().replace(/^0/, "")}
              </time>
            </button>
          </div>
        ))}
      </div>
      <section className="mt-12">
        <h2 className="font-semibold text-gray-900">
          Appointments for <time dateTime="2023-02-24">February 24, 2023</time>
        </h2>
        <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
          {meetings.map((meeting) => (
            <li
              key={meeting.id}
              className="group flex items-center space-x-4 rounded-xl py-2 px-4 focus-within:bg-gray-100 hover:bg-gray-100"
            >
              <img
                src={meeting.imageUrl}
                alt=""
                className="h-10 w-10 flex-none rounded-full"
              />
              <div className="flex-auto">
                <p className="text-gray-900">{meeting.name}</p>
                <p className="mt-0.5">
                  <time dateTime={meeting.startDatetime}>{meeting.start}</time>{" "}
                  - <time dateTime={meeting.endDatetime}>{meeting.end}</time>
                </p>
              </div>
              <Menu
                as="div"
                className="relative opacity-0 focus-within:opacity-100 group-hover:opacity-100"
              >
                <div>
                  <Menu.Button className="-m-2 flex items-center rounded-full p-1.5 text-gray-500 hover:text-gray-600">
                    <span className="sr-only">Open options</span>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="focus:outline-none absolute right-0 z-10 mt-2 w-36 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Edit
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="#"
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            Cancel
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
