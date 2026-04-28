import { HashRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ListsPage from "./pages/ListsPage";
import BudgetPage from "./pages/BudgetPage";
import RoutinesPage from "./pages/RoutinesPage";
import AboutPage from "./pages/AboutPage";
import Layout from "./Layout";
import ToDo from "./big4/list/ToDo";
import MorningRoutine from "./big4/routines/MorningRoutine";
import NightRoutine from "./big4/routines/NightRoutine";
import MasterBudget from "./big4/budget/MasterBudget";
import Transactions from "./big4/budget/helpers/Transactions";

export default function TheRouterTM()
{
    return <HashRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} />

                <Route path="list" element={<ToDo />} />
                <Route path="morning_routine" element={<MorningRoutine />} />
                <Route path="night_routine" element={<NightRoutine />} />
                <Route path="budget" element={<MasterBudget />} />

                <Route path="about" element={<AboutPage />} />
            </Route>
        </Routes>
    </HashRouter>
}   
