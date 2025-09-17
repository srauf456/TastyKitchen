import React from "react";
import menuCSS from './Menu.module.css'

function Menu() {
  return (
    <div className={menuCSS.Menu_Wrapper}>
      <h1 className={menuCSS.Menu_Title}>Our Menu</h1>
      <p className={menuCSS.Menu_Description}>Delicious dishes made with fresh ingredients.</p>

      <div className={menuCSS.Menu_categories}></div>
       <p>Breakfast</p>
         <p>Lunch</p>
            <p>Dinner</p>
            <p>Desserts</p>
            <p>Beverages</p>
    </div>
  );
}

export default Menu;