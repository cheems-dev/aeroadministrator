import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
/*
// config-v.1
import { applyMiddleware, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger } from 'redux-logger'
import thunkMiddleware from 'redux-thunk' */
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'
// Styles
import './index.css'
/* import reducers from './reducers' */ //config-v.1
import reportWebVitals from './reportWebVitals'
import App from './routes/App'
// Store
import store from './store/store'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistStore(store)}>
        <App />
      </PersistGate>
    </Provider>
  </QueryClientProvider>,
  document.getElementById('root')
)

reportWebVitals()
