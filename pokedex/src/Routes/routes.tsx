import { Routes, Route } from "react-router-dom";
import FeedbackPage from "../Pages/FeedbackPage";
import HomePage from "../Pages/HomePage";
import LandingPage from "../Pages/LandingPage";
import NotFound from "../Pages/NotFoundPage";
import PokePage from "../Pages/PokePage";
import PokeTeamPage from "../Pages/PokeTeamPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/home/poke/:pokeUrl" element={<PokePage />} />
      <Route path="/home/poketeam" element={<PokeTeamPage />} />
      <Route path="/feedback" element={<FeedbackPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
