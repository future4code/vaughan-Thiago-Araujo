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
      <select name="select">
      <option value="mega-sena">Mega-Sena</option>
      <option value="quina">Quina</option>
      <option value="loto-facil">LotoFácil</option>
      <option value="loto-mania">LotoMania</option>
      <option value="time-mania">TimeMania</option>
      <option value="dia-de-sorte">Dia de sorte</option>
      </select>
      <Routes>

        <Route path="/" element={<MegaSenaPage/>} />
        <Route path="/quina" element={<QuinaPage/>} />
        <Route path="/loto-facil" element={<LotoFacilPage/>} />
        <Route path="/loto-mania" element={<LotoManiaPage/>} />
        <Route path="/time-mania" element={<TimemaniaPage/>} />
        <Route path="/dia-de-sorte" element={<DiaDeSortePage/>} />
        <Route path="/*" element={<ErrorPage/>}/>
      </Routes>
      
    </BrowserRouter>
  )
}

export default Router