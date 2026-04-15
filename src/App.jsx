import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Instructions from "./pages/Instructions";
import CallForPaper from "./pages/CallForPaper";
import Tracks from "./pages/Tracks";
import TechnicalSession from "./pages/TechnicalSession";
import Events from "./pages/Events";
import CommitteeMembers from "./pages/CommitteeMembers";
import AdvisoryCommittee from "./pages/AdvisoryCommittee";
import Reviewers from "./pages/Reviewers";
import ImportantDates from "./pages/ImportantDates";
import About from "./components/About";
import HowToReach from "./pages/HowToReach";
import Registration from "./pages/Registration";
import Speakers from "./pages/Speakers";
import Acknowledgment from "./pages/Acknowledgment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/instruction" element={<Instructions />} />
          <Route path="/call-for-paper" element={<CallForPaper />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/technical-sessions" element={<TechnicalSession />} />
          <Route path="/events" element={<Events />} />
          <Route path="/committee-members" element={<CommitteeMembers />} />
          <Route path="/advisory-committee" element={<AdvisoryCommittee />} />
          <Route path="/reviewers" element={<Reviewers />} />
          <Route path="/important-dates" element={<ImportantDates />} />
          <Route path="/how-to-reach" element={<HowToReach />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/speakers" element={<Speakers />} />
          <Route path="/acknowledgment" element={<Acknowledgment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
