import { RouterProvider } from "react-router";
//import "./App.css";
import { LocalizationProvider } from "./localization/LocalizationProvider";
import { routesConfig } from "./utils/router/routesConfig";

function App() {
  return (
    <LocalizationProvider>
      <RouterProvider router={routesConfig} />
    </LocalizationProvider>
  );
}

export default App;
