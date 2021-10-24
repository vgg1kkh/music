import React, { memo } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { Provider } from "react-redux";
import store from "./store";
import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (

    <BrowserRouter>
    <Provider store={store}>
    <HYAppHeader />
      {renderRoutes(routes)}
      <HYAppFooter />
    </Provider>
      
    </BrowserRouter>
  );
});
