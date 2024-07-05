import { Provider } from 'react-redux'

import ReactDOM from 'react-dom/client'

import './styles/index.scss'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/700.css'

import { AppContainer } from './App'
import { store } from './services/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <AppContainer />
  </Provider>
)
