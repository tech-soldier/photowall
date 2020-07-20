import React from 'react'
import ReactDOM from 'react-dom'
import App from "./Components/App"
import "./styles/styles.css"
import {BrowserRouter} from "react-router-dom"
import rootReducer from './redux/reducer'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

const store = createStore(rootReducer)

ReactDOM.render(<Provider store={store}><BrowserRouter><App /></BrowserRouter></Provider>, document.getElementById('root'))