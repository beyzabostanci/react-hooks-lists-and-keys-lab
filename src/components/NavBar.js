import React from "react";
//Make sure each <a> element also gets a unique key prop
//<a href="#home">home</a>
function NavBar() {
  const links = ["home", "about", "projects"];

  const navLinks = links.map((link)=>(
    <a key={link} href={"#" + link}>{link}
    </a>
  ))
  return <nav>{navLinks}</nav>;
}

export default NavBar;
