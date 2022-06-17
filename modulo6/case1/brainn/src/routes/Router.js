import { BrowserRouter, Routes, Route } from "react-router-dom";
import DiaDeSortePage from "../pages/DiaDeSortePage/DiaDeSortePage";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import LotoFacilPage from "../pages/LotoFacilPage/LotoFacilPage";
import LotoManiaPage from "../pages/LotoManiaPage/LotoManiaPage";
import MegaSenaPage from "../pages/MegaSenaPage/MegaSenaPage";
import QuinaPage from "../pages/QuinaPage/QuinaPage";
import TimemaniaPage from "../pages/TimemaniaPage/TimemaniaPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<MegaSenaPage/>} />
        <Route path="/quina" element={<QuinaPage/>} />
        <Route path="/lotofacil" element={<LotoFacilPage/>} />
        <Route path="/lotomania" element={<LotoManiaPage/>} />
        <Route path="/timemania" element={<TimemaniaPage/>} />
        <Route path="/dia-de-sorte" element={<DiaDeSortePage/>} />
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router