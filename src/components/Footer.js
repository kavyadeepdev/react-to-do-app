import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-around items-center h-1/6 bg-black text-white">
      <div className="left">
        <h3>External Links:</h3>
        <a href="https://twitter.com/kavyadeepdev" className="block">
          Twitter
        </a>
        <a
          href="https://github.com/kavyadeepdev/react-to-do-app"
          className="block"
        >
          GitHub
        </a>
        <a href="https://kavyadeep.dev" className="block">
          Website
        </a>
      </div>
      <p>&copy; Copyright {new Date().getFullYear()}, Kavyadeep Dev</p>
    </footer>
  );
};

export default Footer;
