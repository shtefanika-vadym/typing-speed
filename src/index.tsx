import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import App from './App'
import { store } from 'store/store'
import 'the-new-css-reset/css/reset.css'
import 'styles/responsive.scss'
import 'styles/variables.css'
import 'styles/global.css'
import 'antd/dist/antd.min.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
)
