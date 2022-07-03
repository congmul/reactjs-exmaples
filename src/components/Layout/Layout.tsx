import { Outlet } from "react-router-dom";
import "./layout.scss";

import Navbar from "../Navbar/Navbar";

const Layout = ():JSX.Element => {
    return(
    <>
        <Navbar />
        <div className="layout-bottom"><Outlet /></div>
    </>
    )
}

export default Layout;