import React, { memo } from 'react'
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from 'react-router-config'
import routes from './router'
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'

import test from './store/'


export default memo(function App() {
  return (
    <BrowserRouter>
       <HYAppHeader />
      {renderRoutes(routes)}
      <HYAppFooter />
    </BrowserRouter>
  )
})

