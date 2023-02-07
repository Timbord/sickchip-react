import React, { Fragment, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { setAppTitle } from "../store";
import { setShowAppBar } from "../store";
import { setShowBottomBar } from "../store";
import { setShowBackBtn } from "../store";
import { motion } from "framer-motion";
import { Dialog, Transition } from "@headlessui/react";
import { ExclamationCircleIcon } from "@heroicons/react/24/outline";
import { PageTransition } from "../components/PageTransition";

export default function SettingsView() {
  const [showModal, setShowModal] = useState(false);
  const [modalData, setModalData] = useState({});

  useEffect(() => {
    setAppTitle("Notifications");
    setShowAppBar(true);
    setShowBackBtn(false);
    setShowBottomBar(true);
  }, []);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  const colors = {
    one: "bg-red-500",
    two: "bg-amber-500",
    three: "bg-teal-500",
    four: "bg-pink-500",
  };

  const notifications = [
    {
      timestamp: "06/01/2022 12:00 PM",
      message:
        "Welcome to our primary care app! Here you'll find all important information regarding your health.",
      category: "Information",
      bgColor: colors.three,
    },
    {
      timestamp: "06/01/2022 01:00 PM",
      message:
        "You have a doctor's appointment scheduled for 06/15/2022 at 10:00 AM.",
      category: "Appointments",
      bgColor: colors.two,
    },
    {
      timestamp: "06/02/2022 02:00 PM",
      message:
        "Your last blood pressure measurement was 140/90 mmHg. Please discuss the results with your doctor.",
      category: "Health Data",
      bgColor: colors.one,
    },
    {
      timestamp: "06/03/2022 03:00 PM",
      message:
        "You have placed a new prescription order. The medication will be delivered in the next few days.",
      category: "Prescriptions",
      bgColor: colors.four,
    },
    {
      timestamp: "06/04/2022 04:00 PM",
      message:
        "Your doctor has issued a referral to a specialist. Please let us know if you would like to schedule an appointment.",
      category: "Referrals",
      bgColor: colors.three,
    },
    {
      timestamp: "06/05/2022 05:00 PM",
      message:
        "You have received a new message from your doctor. Please check your inbox in the app.",
      category: "Messages",
      bgColor: colors.four,
    },
    {
      timestamp: "06/06/2022 06:00 PM",
      message:
        "You have received a new vaccination record. Please check your documents in the app.",
      category: "Vaccinations",
      bgColor: colors.four,
    },
    {
      timestamp: "06/07/2022 07:00 PM",
      message:
        "You have ordered a new laboratory test. Please discuss the results with your doctor.",
      category: "Laboratory Tests",
      bgColor: colors.one,
    },
    {
      timestamp: "06/08/2022 08:00 PM",
      message:
        "You have requested a new hospital admission. A staff member will contact you in the next few days to discuss further details.",
      category: "Hospital Admissions",
      bgColor: colors.two,
    },
    {
      timestamp: "06/09/2022 09:00 PM",
      message:
        "You have received a new message from your health insurance provider. Please check your inbox in the app.",
      category: "Insurance",
      bgColor: colors.three,
    },
  ];

  const cancelButtonRef = useRef(null);

  const handleTap = (notification) => {
    setShowModal(true);
    setModalData(notification);
  };

  return (
    <PageTransition>
      <div className="flex flex-col min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full">
          <motion.ul
            role="list"
            className="divide-y divide-gray-200"
            drag="y"
            dragConstraints={{ top: -500, bottom: 50 }}>
            {notifications.map((notification, index) => (
              <li key={index} className="py-4">
                <motion.div
                  className="flex space-x-3"
                  whileTap={{ scale: 0.95 }}
                  onTap={() => handleTap(notification)}
                  onTapCancel={() => {
                    setShowModal(false);
                    setModalData({});
                  }}
                  transition={{ delay: "1s" }}>
                  <div
                    className={classNames(
                      notification.bgColor,
                      "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-md"
                    )}>
                    {notification.type}
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-medium">
                        {notification.category}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {notification.timestamp}
                      </p>
                    </div>
                    <p className="text-sm text-gray-500">
                      {notification.message}
                    </p>
                  </div>
                </motion.div>
              </li>
            ))}
          </motion.ul>
        </div>
        <Transition.Root show={showModal} as={Fragment}>
          <Dialog
            as="div"
            className="fixed z-10 inset-0 overflow-y-auto"
            initialFocus={cancelButtonRef}
            onClose={setShowModal}>
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0">
                <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
              </Transition.Child>

              {/* This element is to trick the browser into centering the modal contents. */}
              <span
                className="hidden sm:inline-block sm:align-middle sm:h-screen"
                aria-hidden="true">
                &#8203;
              </span>
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <ExclamationCircleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <Dialog.Title
                        as="h3"
                        className="text-lg leading-6 font-medium text-gray-900">
                        {modalData.category}
                      </Dialog.Title>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          {modalData.message}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"></div>
                </div>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>
      </div>
    </PageTransition>
  );
}
