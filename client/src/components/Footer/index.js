import React from "react";
import Instagram from "../images/instagram.png";
import Email from "../images/Email.png";

function Footer() {
  return (
    <footer>
      <div className="footer col-lg-6 pos-middle text-left">
        <div className="social-container">
          <a href="https://instagram.com/chef_foluke2.0?igshid=YmMyMTA2M2Y">
            <img className="social-icons" alt="instagram" src={Instagram}
              width="40" height="40" />
          </a>
          <a href="mailto:Folukeolaoye97@gmail.com">
            <img className="social-icons" alt="Email" src={Email}
              width="40" height="40" />
          </a>
        </div>
        <p className="copy-right">© 2022 Chef Foluke. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
