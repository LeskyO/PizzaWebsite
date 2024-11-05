import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../Styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
        <a href="https://www.twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.linkedin.com">
          <LinkedInIcon />
        </a>
      </div>
      <p> &copy; 2023 Trial Project</p>
    </div>
  );
}

export default Footer;