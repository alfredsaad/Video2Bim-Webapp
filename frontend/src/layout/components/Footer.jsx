import React from "react";
function Footer(){
    return (
        <footer className="bg-white py-4 text-center text-lg text-gray-600">
          &copy; {new Date().getFullYear()} Scan to Bim. All rights reserved.
        </footer>
      );    
}
export default Footer;