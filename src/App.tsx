import React from "react";
import "./index.css";
import AppRoutes from "./routes/AppRoutes";
import { Provider } from "react-redux";
import store from "./store";
const App: React.FC = () => {
  return (
    <div>
      <Provider store={store}>
        <div>
          <AppRoutes />{" "}
        </div>
      </Provider>
    </div>
  );
};
export default App;
