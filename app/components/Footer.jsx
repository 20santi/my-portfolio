import React from "react";
import avatar from "../../public/images/avatar-1.png";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <Image
            src={avatar}
            alt="avatar"
            className="w-[70px] h-[70px]"
          />
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;