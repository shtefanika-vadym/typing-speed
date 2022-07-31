import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Home from 'pages/Home/Home'
import { PathsEnum } from 'pages/Paths'

const Router = () => (
  <Routes>
    <Route path={PathsEnum.home} element={<Home />} />
    <Route path='*' element={<Navigate to={PathsEnum.home} replace />} />
  </Routes>
)

export default Router
