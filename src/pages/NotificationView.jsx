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
      timestamp: "06.01.2022 12:00 PM",
      message:
        "Welcome to our primary care app! Here you'll find all important information regarding your health.",
      category: "Information",
      bgColor: colors.three,
    },
    {
      timestamp: "06.01.2022 01:00 PM",
      message:
        "You have a doctor's appointment scheduled for 06.15.2022 at 10:00 AM.",
      category: "Appointments",
      bgColor: colors.two,
    },
    {
      timestamp: "06.02.2022 02:00 PM",
      message:
        "Your last blood pressure measurement was 140/90 mmHg. Please discuss the results with your doctor.",
      category: "Health Data",
      bgColor: colors.one,
    },
    {
      timestamp: "06.03.2022 03:00 PM",
      message:
        "You have placed a new prescription order. The medication will be delivered in the next few days.",
      category: "Prescriptions",
      bgColor: colors.four,
    },
    {
      timestamp: "06.04.2022 04:00 PM",
      message:
        "Your doctor has issued a referral to a specialist. Please let us know if you would like to schedule an appointment.",
      category: "Referrals",
      bgColor: colors.three,
    },
    {
      timestamp: "06.05.2022 05:00 PM",
      message:
        "You have received a new message from your doctor. Please check your inbox in the app.",
      category: "Messages",
      bgColor: colors.four,
    },
    {
      timestamp: "06.06.2022 06:00 PM",
      message:
        "You have received a new vaccination record. Please check your documents in the app.",
      category: "Vaccinations",
      bgColor: colors.four,
    },
    {
      timestamp: "06.07.2022 07:00 PM",
      message:
        "You have ordered a new laboratory test. Please discuss the results with your doctor.",
      category: "Laboratory Tests",
      bgColor: colors.one,
    },
    {
      timestamp: "06.08.2022 08:00 PM",
      message:
        "You have requested a new hospital admission. A staff member will contact you in the next few days to discuss further details.",
      category: "Hospital Admissions",
      bgColor: colors.two,
    },
    {
      timestamp: "06.09.2022 09:00 PM",
      message:
        "You have received a new message from your health insurance provider. Please check your inbox in the app.",
      category: "Insurance",
      bgColor: colors.three,
    },
  ];

  return (
    <div className="relative mt-[75px]">
      <div className="mx-auto px-6">
        <motion.ul
          role="list"
          className="divide-y divide-gray-200"
          drag="y"
          dragConstraints={{ top: -500, bottom: 0 }}
        >
          {notifications.map((notification, index) => (
            <li key={index} className="py-4">
              <motion.div className="flex space-x-3" whileTap={{ scale: 0.95 }}>
                <div
                  className={classNames(
                    notification.bgColor,
                    "flex-shrink-0 flex items-center justify-center w-16 text-white text-sm font-medium rounded-lg"
                  )}
                >
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
    </div>
  );
}
