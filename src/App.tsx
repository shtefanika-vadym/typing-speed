import React from 'react'

import Router from 'pages/Router'
import Header from 'common/components/Header/Header'

const App = () => {
  return (
    <div className='main-layout'>
      <Header />
      <Router />
    </div>
  )
}

export default App
