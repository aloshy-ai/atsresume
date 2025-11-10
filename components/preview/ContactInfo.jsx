import React, {  } from "react";

const ContactInfo = ({ mainclass, linkclass, teldata, emaildata, addressdata, telicon, emailicon, addressicon }) => {
    // Helper function to strip formatting from phone number for tel: link
    const getCleanPhoneNumber = (phone) => {
      return phone.replace(/[\s\-\(\)]/g, '');
    };

    return (
      <div className={mainclass}>
        {teldata && teldata.trim() !== "" && (
          <a className={linkclass}
            aria-label="Phone Number"
            href={`tel:${getCleanPhoneNumber(teldata)}`}>
            {telicon}  {teldata}
          </a>
        )}
        {emaildata && emaildata.trim() !== "" && (
          <a className={linkclass}
            aria-label="Email Address"
            href={`mailto:${emaildata}`}>
            {emailicon} {emaildata}
          </a>
        )}
        {addressdata && addressdata.trim() !== "" && (
          <address
            aria-label="Address"
            className={linkclass + " not-italic"} >
            {addressicon} {addressdata}
          </address>
        )}
      </div>
    );
  }

export default ContactInfo;