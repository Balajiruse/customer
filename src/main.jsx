import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppContext from "./context/DataUpadate.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
 <AppContext>
  <BrowserRouter>
  <App/>
 </BrowserRouter>
 </AppContext>
);
