import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import About from './pages/About/About';
import Home from './pages/Home/Home';

const App = ():JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/intro" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;