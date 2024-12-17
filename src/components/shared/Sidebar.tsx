"use client";
import {
  AsteriskIcon,
  CandyCane,
  ClipboardList,
  GroupIcon,
  HomeIcon,
  LucideSunSnow,
  PersonStanding,
  TestTube,
  Users2,
  VoteIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <>
      <div className=" md:border-t-2  mt-11 text-sm  p-4">
        {sidebarItems.map((t, i) => {
          return (
            <div key={i} className=" flex flex-col gap-2 ">
              <span className=" hidden lg:block text-gray-400 font-light mb-4">
                {t.title}
              </span>
              {t.items.map((item, i) => {
                return (
                  <Link
                    href={item.link}
                    className={`flex items-center justify-center lg:justify-start gap-4 text-gray-600 py-2 px-2 ${
                      pathname === item.link ? "bg-green-300" : null
                    } rounded-md`}
                    key={i}
                  >
                    {item.icon}
                    <span className=" hidden lg:block"> {item.label}</span>
                  </Link>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;

const sidebarItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <HomeIcon />,
        label: "Home",
        link: "/admin",
      },
      {
        icon: <GroupIcon />,
        label: "Teacher",
        link: "/teacher",
      },
      {
        icon: <PersonStanding />,
        label: "Student",
        link: "/student",
      },
      {
        icon: <Users2 />,
        label: "Parent",
        link: "/parent",
      },
      {
        icon: <ClipboardList />,
        label: "Classes",
        link: "/list/classes",
      },
      {
        icon: <LucideSunSnow />,
        label: "Lessons",
        link: "/list/lessons",
      },
      {
        icon: <AsteriskIcon />,
        label: "Assignments",
        link: "/list/assignments",
      },
      {
        icon: <TestTube />,
        label: "Results",
        link: "/list/result",
      },
      {
        icon: <CandyCane />,
        label: "Events",
        link: "/list/events",
      },
      {
        icon: <VoteIcon />,
        label: "Announcements",
        link: "/list/announcements",
      },
    ],
  },
];
