import React from "react";
import cw from "../assets/cw_logo.png"

const Header = React.memo(({img}) => {
  console.log("header component rendered")
  return (
    <div className="header">
      <img src={img ? img : cw} alt="cw_logo" style={{margin : "1rem", maxHeight : "200px"}}/>
    </div>
  );
})

export default Header;
