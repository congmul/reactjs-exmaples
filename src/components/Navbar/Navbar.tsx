import { Link } from "react-router-dom";

const Navbar = ():JSX.Element => {
    return(
    <>
        <Link to='/intro'>Intro</Link>
        <Link to='/home'>Home</Link>
    </>)
}

export default Navbar;