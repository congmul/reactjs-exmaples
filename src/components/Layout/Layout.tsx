import { Outlet } from "react-router-dom";

import Navbar from "../Navbar/Navbar";

const Layout = ():JSX.Element => {
    return(
    <>
        <Navbar />
        <div><Outlet /></div>
    </>
    )
}

export default Layout;