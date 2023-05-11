import "./App.css";
import { Routes, Route } from "react-router-dom";
import IndividualEvent from "./pages/IndividualEvent";
import Homepage from "./pages/Homepage";
import EventSearchPage from "./pages/EventSearchPage";
import Nav from "./components/layout/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/events" element={<Homepage />} />
        <Route path="/events/:event_id" element={<IndividualEvent />} />
        <Route path="/events/:month/:year" element={<EventSearchPage />} />
        <Route path="*" element={<p>Not found</p>} />
      </Routes>
    </div>
  );
}

export default App;
