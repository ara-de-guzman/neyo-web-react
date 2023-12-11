import React from "react";
import { FaAddressBook, FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import SocialMedia from "./SocialMedia";
import "./ComponentStyle.css";
import { Button } from "./Button";

function Footer() {
  return (
    <footer className="footer-component">
      <div className="address">
        <p>
          <FaAddressBook className="footer-icon" /> 123 Dummy st, Las Vegas NV
          89123
        </p>
        <p>
          <FaPhoneAlt className="footer-icon" /> 702-123-4567
        </p>
        <p>
          <MdEmail className="footer-icon" />
          messageme@neyo.com
        </p>
      </div>
      <div className="affiliate">
        <h2>Affiliate</h2>
        <p>Adobe</p>
        <p>Corel</p>
        <p>Affinity</p>
      </div>
      <div className="subscribe">
        <label htmlFor="subscribe">
          Subcribe for discounts and latest blogs
        </label>
        <input type="email" placeholder="Enter your email..." />
        <Button text={"Submit"} classLink={"link-regular-btn"} />
      </div>
      <SocialMedia />
    </footer>
  );
}

export default Footer;
