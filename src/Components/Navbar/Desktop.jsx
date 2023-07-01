import React from "react";
import NavLinks from "./NavLinks";
import Notification from "./Notification";

export const DesktopMenu = ({ open }) => {
  return (
    <ul className="lg:flex hidden uppercase items-center font-[Poppins] ">
      <NavLinks Open={true} />
      <a
        href="http://mulearn.org/careers"
        rel="noopener noreferrer"
        className="py-7 px-3 inline-block"
      >
        Careers
      </a>
    </ul>
  );
};

export const Resources = ({ notificationOpen }) => {
  return (
    <div className="lg:flex justify-between items-center hidden">
      <div className="group text-black  inline-block hover:text-orange-500 ">
        <div className="text-3xl ">
          <ion-icon name="notifications-circle-outline"></ion-icon>
        </div>
        <div
          className={`notifications group-hover:lg:block hover:lg:block ${
            notificationOpen ? "block" : "hidden"
          }`}
        >
          <Notification />
        </div>
      </div>
      <a
        href="https://app.mulearn.org/register/"
        className="py-7 px-3 inline-block"
      >
        <button className="bg-orange-400 text-white  px-6 py-2 rounded-md">
          Join µLearn
        </button>
      </a>
      <a
        href="http://mulearn.org/magazine"
        target="_blank"
        rel="noopener noreferrer"
        className="py-7 px-3 inline-block"
      >
        <button className="border-2 border-orange-400 text-orange-400 px-6 py-2 rounded-md">
          Magazine
        </button>
      </a>
    </div>
  );
};

export const MenuName = ({ name, link }) => {
  return (
    <div className="dashOnHover">
      <h1 className="change-text">{name}</h1>
      <div className="dashBar"> </div>
    </div>
  );
};

export const SubMenu = ({ submenu, sublinks }) => {
  return (
    <>
      {submenu && (
        <div>
          <div className="absolute mt-5 bg-white left-0  right-0 hidden group-hover:lg:block hover:lg:block w-full">
            <div className=" p-10 flex gap-x-10 addition justify-around border-t border-b">
              <div className="grid grid-cols-3 gap-10 px-10">
                {sublinks.map((mysublinks) => (
                  <div className="border-l pl-5 backdrop-blur-md">
                    <SubHeader link={mysublinks.link} name={mysublinks.name} />
                    <SubLinks sublinks={mysublinks.sublinks} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export const SubHeader = ({ link, name }) => {
  return (
    <h1 className="text-lg font-medium drop-shadow-sm opacity-100">
      {link ? (
        <a
          href={link}
          style={{ color: "#000" }}
          onMouseEnter={(e) => (e.target.style.color = "#FB923C")}
          onMouseLeave={(e) => (e.target.style.color = "#000")}
        >
          {name}
        </a>
      ) : (
        <span style={{ color: "#000" }}>{name}</span>
      )}
    </h1>
  );
};
export const SubLinks = ({ sublinks }) => {
  return (
    <>
      {sublinks.map((slink) => (
        <div className="text-sm text-gray-600 my-2.5">
          <a
            href={slink.link}
            target={slink.foreign ? "_blank" : ""}
            rel={slink.foreign ? "noopener noreferrer" : ""}
            className="hover:text-orange-500"
          >
            {slink.name}
          </a>
        </div>
      ))}
    </>
  );
};
