import "./styles.css";
import Header from "./componenet/Header";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Watchlist from "./componenet/Watchlist";
import Watched from "./componenet/Watched";
import Add from "./componenet/Add";
import NAHDI_GAYTH from "./context/GlobalContext";

const App = () => {
  return (
    <>
      <Router>
        <NAHDI_GAYTH>
          <Header />
          <Routes>
            <Route path="/" element={<Watchlist />} />
            <Route path="/Watched" element={<Watched />} />
            <Route path="/Add" element={<Add />} />
          </Routes>
        </NAHDI_GAYTH>
      </Router>
    </>
  );
};

export default App;
