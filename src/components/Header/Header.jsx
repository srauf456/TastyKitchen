import React from "react";
import headerCSS from './Header.module.css'

function Header() {
  return (
    <div className={headerCSS.Header_Wrapper}>
      <small className="text-white">Chase the divine flavour</small>
      <h1 className="text-white">For the <span className="text-white">Enjoyment </span>of Your Taste Buds</h1>
      <p className="text-lg text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.</p>
     <div className={headerCSS.header_btns}>
      <button>MENU</button>
      <button>FIND US</button>
      </div>
    </div>
  );
}

export default Header;