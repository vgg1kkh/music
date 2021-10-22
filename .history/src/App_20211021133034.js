import React, { memo } from 'react'
import {ren}
import HYAppHeader from '@/components/app-header'
import HYAppFooter from '@/components/app-footer'


export default memo(function App() {
  return (
    <div>
      <HYAppHeader />
      <h2>Content</h2>
      <HYAppFooter />

    </div>
  )
})

