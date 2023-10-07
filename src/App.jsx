import { BrowserRouter, Route, Routes } from "react-router-dom";
import OurTeam from "./components/Team/OurTeam";
import Home from "./components/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
