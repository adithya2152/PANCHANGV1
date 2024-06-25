import {configureStore} from "@reduxjs/toolkit"
import { thunk } from "redux-thunk"
import reducer from "./day/dayReducer"

const store = configureStore({reducer : reducer ,middleware:()=>[thunk]})

export default store