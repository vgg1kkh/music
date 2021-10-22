import React, { memo } from 'react'
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import { renderRoutes } from 'react-router-config'
import routes from './router'
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'
import 'antd/dist/antd4.css';



export default memo(function App() {
  return (
    <BrowserRouter>
       <HYAppHeader />
      {renderRoutes(routes)}
      <HYAppFooter />
    </BrowserRouter>
  )
})

