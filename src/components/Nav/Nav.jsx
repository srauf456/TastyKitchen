import React from "react";
import navcss from './Nav.module.css'
import { useRef } from "react";

function Nav() {

  const menu = useRef();

  const menuHandler = () => {
    menu.current.classList.toggle(navcss.showMenu);
    
  }
  return (
    <div className={navcss.Nav_Wrapper}>
        <div className={navcss.logo}>
        <a href="/">Tasty Kitchen</a>
        <i className="ri-restaurant-2-line"></i>
        </div>
     <ul ref={menu} className={navcss.nav_links}>
       <li><a href="/">Home</a></li>
       <li><a href="/">About</a></li>
       <li><a href="/">Menu</a></li>
       <li><a href="/">Chefs</a></li>
       <li><a href="/">Contact</a></li>
     </ul>
     <div className={navcss.nav_btns}>
        <button>Book A Table<i className="ri-restaurant-2-line"></i></button>
        <i className="ri-menu-3-line" id={navcss.bar} onClick={menuHandler}></i>
     </div>
    </div>
  );
}

export default Nav;
