import React, { useState } from "react";

import { DesktopMenu, Resources } from "./Desktop";
import { MobileTopBar, MobileMenu } from "./Mobile";


const Navbar = () => {
  function handleScrolling(setter) {
    if (setter) document.body.style.overflow = "unset";
    else document.body.style.overflow = "hidden";
  }

  const [open, setOpen] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  return (
    <>
      <nav className="bg-white " >
        <div className="flex items-center font-medium justify-around">
          <div className={`mobile-nav-bar lg:w-auto w-full ${open ? "absolute top-1" : ""}`}>
            <Logo />
            <MobileTopBar setNotificationOpen={setNotificationOpen} notificationOpen={notificationOpen} handleScrolling={handleScrolling} setOpen={setOpen} open={open} />
          </div>
          <DesktopMenu notificationOpen={notificationOpen} open={open} />
          <Resources notificationOpen={notificationOpen} />
          <MobileMenu setNotificationOpen={setNotificationOpen} setOpen={setOpen} handleScrolling={handleScrolling} open={open} notificationOpen={notificationOpen} />
        </div>
      </nav>

    </>
  );
};

const Logo = () => {
  return (
    <a href="https://mulearn.org">
      <img
        src="/assets/navbar/µLearn.webp"
        alt="logo"
        className="lg:cursor-pointer h-8 z-0"
      />
    </a>
  )
}
export default Navbar;
