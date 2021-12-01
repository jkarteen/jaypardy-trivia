
import React from 'react'
import { render } from 'react-dom'

import App from '../react/components/App'
import Footer from '../react/components/Footer'
import RedBox from 'redbox-react'

document.addEventListener('DOMContentLoaded', () => {
  let reactElement = document.getElementById('app')

  if (reactElement) {
    if(window.railsEnv && window.railsEnv === 'development'){
      try {
        render([<App key="1" />, <Footer key="2" />], reactElement)
      } catch (e) {
        render(<RedBox error={e} />, reactElement)
      }
    }
    else {
      render([<App key="1" />, <Footer key="2" />], reactElement)
    }
  }
})