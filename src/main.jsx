import { HashRouter } from "react-router-dom";
import './index.css'
import './styles/lists.css'
import './styles/routines.css'
import './styles/budgets.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import TheRouterTM from './components/TheRouterTM.jsx'
import { createRoot } from "react-dom/client";

createRoot(document.getElementById('root')).render(
  <TheRouterTM />
)
