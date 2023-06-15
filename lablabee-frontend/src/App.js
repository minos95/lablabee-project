import "./style.css";
import ListLab from "./component/list_lab";
import MainRoute from "./route/mainRoute";
import LabDetail from "./route/labDetailRoute";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <MainRoute />
      </div>
    </BrowserRouter>
  );
}

export default App;
