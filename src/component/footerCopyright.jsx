import React from "react";

const FooterCopyright = () => {
  return (
    <div style={{ height: "80px" }}>
      <div className="footer-copyright h-100 w-100 text-center text-white">
        &copy; Copyright 2020 - 2021{" "}
        <a href="https://www.gethmanagement.com/" className="text-white">
          Geth Management
        </a>{" "}
        - All Rights Reserved
      </div>
    </div>
  );
};

export default FooterCopyright;
