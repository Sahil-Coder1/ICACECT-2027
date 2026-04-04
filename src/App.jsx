import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutICCTAC from "./pages/AboutICCTAC";
import Layout from "./pages/Layout";
import Instructions from "./pages/Instructions";
import Submit from "./pages/Submit";
import Tracks from "./pages/Tracks";
import TechnicalSession from "./pages/TechnicalSession";
import Gallery from "./pages/Gallery";
import CommitteeMembers from "./pages/CommitteeMembers";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import Reviewers from "./pages/Reviewers";
import ImportantDates from "./pages/ImportantDates";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-icctac" element={<AboutICCTAC />} />
          <Route path="/instruction" element={<Instructions />} />
          <Route path="/submit" element={<Submit />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/technical-sessions" element={<TechnicalSession />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/committee-members" element={<CommitteeMembers />} />
          <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
          <Route path="/reviewers" element={<Reviewers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
