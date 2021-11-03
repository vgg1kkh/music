import React, { memo, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./router";
import { Provider } from "react-redux";
import store from "./store";
import HYAppHeader from "@/components/app-header";
import HYAppFooter from "@/components/app-footer";
import HYAppPlayerBar from "@/pages/player/app-player-bar"

export default memo(function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <HYAppHeader />
        <Suspense
        {renderRoutes(routes)}
        <HYAppFooter />
        <HYAppPlayerBar />
      </BrowserRouter>
    </Provider>
  );
});
