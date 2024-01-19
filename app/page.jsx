'use client'
import {Provider , useSelector} from 'react-redux'
import store from './store/index'
import Home from './App';


export default function Page() {
  return (
   <>
   <Provider store={store}>
   <Home />
   </Provider>
   </>
  )
}
