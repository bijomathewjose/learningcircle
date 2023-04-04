import React, { useState } from "react";
import ReactTimeAgo from "react-time-ago";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import NavLinks from "./NavLinks";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  function handleScrolling(setter) {
    if (setter) document.body.style.overflow = "unset";
    else document.body.style.overflow = "hidden";
  }
  return (
    <nav className="bg-white z-50 border-b">
      <div className=" flex items-center font-medium justify-around">
        <div
          className={`nav-mob lg:w-auto w-full flex  ${
            open ? "fixed top-1" : ""
          }`}
        >
          <a href="https://mulearn.org/">
            <img
              src="/assets/navbar/µLearn.webp"
              alt="logo"
              className="lg:cursor-pointer w-32"
            />
          </a>
          <div className="flex justify-between">
            {/* Notification */}
            <div
              className={`group lg:hidden text-black  inline-block  pr-5 `}
              onClick={() => {
                setNotificationOpen(!notificationOpen);
                setOpen(false);
                handleScrolling(true);
              }}
            >
              <div
                className={`text-3xl ${
                  notificationOpen ? " text-orange-500" : "text-black"
                }`}
              >
                <ion-icon name="notifications-circle-outline"></ion-icon>
              </div>
              {/* Notification menu */}
              <div
                className={` absolute w-[300px] bg-white text-orange-500 border-orange-600/20
              border rounded-md text-xs  right-5 mt-3  ${
                notificationOpen ? "block" : "hidden"
              }`}
              >
                <NotificationNav />
              </div>
            </div>
            {/* Menu */}
            <div
              className="text-3xl lg:hidden"
              onClick={() => {
                setOpen(!open);
                setNotificationOpen(false);
                handleScrolling(open);
              }}
            >
              <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
          </div>
        </div>
        <ul className="lg:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <NavLinks />

          <a
            href="https://mulearn.org/careers"
            className="text-black py-7 px-3 inline-block"
          >
            Careers
          </a>
        </ul>
        <div className="group text-black py-7 lg:block hidden px-3  hover:text-orange-500">
          <div className="text-3xl ">
            <ion-icon name="notifications-circle-outline"></ion-icon>
          </div>
          <div
            className={`hidden group-hover:lg:block hover:lg:block absolute w-[300px] bg-white  
              border border-black-600/20 rounded-xl text-xs mt-3 drop-shadow-md text-orange-500 right-10 ${
                notificationOpen ? "block" : ""
              }`}
          >
            <NotificationNav />
          </div>
        </div>
        <div className="lg:block hidden">
          <a
            href="https://discord.mulearn.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-3 inline-block overflow-visible"
          >
            <button className="bg-orange-400 text-white  px-6 py-2 rounded-md">
              Join Discord
            </button>
          </a>
          <a
            href="http://mulearn.org/magazine"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-3 inline-block"
          >
            <button className="border-2 border-orange-400 text-orange-400 px-6 py-2 rounded-md">
              Magazine
            </button>
          </a>
        </div>
        {/* Mobile nav */}
        <ul
          
          className={`
    lg:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 
    duration-500 z-[100] ${open ? "left-0" : "left-[-100%]"} 
    `}
        >
          <NavLinks />
          <li>
            <a
              href="https://mulearn.org/careers"
              className="text-black py-7 px-7 inline-block uppercase hover:text-orange-500"
            >
              Career
            </a>
          </li>

          <div className="grid justify-items-center">
            <a
              href="https://discord.mulearn.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-28 "
            >
              <button className="bg-orange-400 text-white  px-6 py-2 rounded-md ">
                Join Discord
              </button>
            </a>
            <a
            href="http://mulearn.org/magazine"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-3 inline-block"
          >
            <button className="border-2 border-orange-400 text-orange-400 px-6 py-2 rounded-md">
              Magazine
            </button>
          </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};
const NotificationNav = () => {
  TimeAgo.setDefaultLocale(en.locale);
  TimeAgo.addLocale(en);
  // ./data/notifications.json
  // const [seenAll, setSeenAll] = useState(false);
  let notifications = require("./notifications.json");
  return (
    <>
      <div className=" px-5 py-4 bg-white/90 text-sm">This Week</div>
      {/* <div className={`px-3 border-y py-2 ${seenAll ? 'text-orange-500/70' : ''}  bg-[#ffffff1a] text-xs text-center capitalize select-none active:text-black`} onClick={() => {
        setSeenAll(true);
      }}>
        <li>Mark all as seen</li>
      </div> */}
      <div className=" overflow-y-hidden">
        {notifications &&
          notifications.new.map((notification) => (
            //  ${seenAll ? 'text-orange-500/70' : ''}
            <div className={`px-5 py-2 capitalize border-b`}>
              <a href={notification.url}>
                <div className="py-2 text-md  decoration text-black font-bold">
                  {notification.title}
                </div>
                <p className="py-2 text-justify  text-xs text-gray-600 truncate">
                  {notification.description}
                </p>
                <div className="text-right text-xs">
                  <ReactTimeAgo date={notification.date} locale="en-US" />
                </div>
              </a>
            </div>
          ))}
        {/* {notifications && notifications.old.map((notification) => (
          <div className=' px-5 py-2 capitalize text-orange-500/70 border-b  '>
            <a href={notification.url} >
              <div className="py-2 text-md uppercase decoration font-bold">{notification.title}</div>

              <p className="py-2 pl-5 text-justify text-gray-600/70  text-xs  truncate">{notification.description}</p>

              <div className="text-right text-[11px] "><ReactTimeAgo date={notification.date} locale="en-US" /></div>
            </a>
          </div>
        ))} */}
      </div>
      <a
        href="https://mulearn.org/notifications"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className=" px-5 py-3 border-y text-orange-500 text-sm bg-[rgba(255,255,255,.2)] text-center select-none ">
          View All
        </div>
      </a>
    </>
  );
};
export default Navbar;
