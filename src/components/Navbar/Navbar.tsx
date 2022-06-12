import { Link } from "react-router-dom";

const Navbar = ():JSX.Element => {
    return(
    <>
        <Link to='/intro'>Intro</Link>
        <Link to='/about'>About</Link>
    </>)
}

export default Navbar;