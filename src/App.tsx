import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import Intro from "./pages/Intro/Intro";
import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = ():JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/intro" element={<Intro />} />
        <Route path="/home" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;