import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import MoviePage from "./pages/MoviePage";
import NetFlix from "./pages/NetFlix";
import Players from "./pages/Players";
import SignUpPage from "./pages/SignUpPage";
import TvShow from "./pages/TvShow";
import Error from "./Error/Error";
import BackGroundImage from "./components/BackGroundImage";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignUpPage />} />
        <Route exact path="/player" element={<Players />} />
        <Route exact path="/tv" element={<TvShow />} />
        <Route exact path="/" element={<NetFlix />} />
        <Route exact path="/movie" element={<MoviePage />} />

        <Route exact path="*" element={<Error />} />
      </Routes>
      {/* <BackGroundImage /> */}
      {/* <Header /> */}
    </BrowserRouter>
  );
}

export default App;
