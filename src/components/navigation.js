import React from "react"
import {Link} from "gatsby"
import ThemeChanger from "../components/themeChanger"

export default (props) => (
  <nav className="navigation"> 
    <Link to="/acerca">Acerca de</Link>
    <ThemeChanger/>
  </nav>
  
)