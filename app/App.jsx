'use client'
import {Provider , useSelector , useDispatch} from 'react-redux'
import { counterActions } from './store/counterSlice';
import { authActions } from './store/authSlice';



export default function Home() {

  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();

  const {increase , decrease} = counterActions;
  const {toggle} = authActions;


  return (
   <>
   <main className="flex h-full flex-col items-center justify-around gap-6 p-24">
         <h1>
          Redux Counter
         </h1>
         {
          globalState.auth.show && 
          <>
          <div className="counter">
          Counter : {globalState.counter.value}
          </div>
         <div className="btns">
          <button onClick={() => dispatch(increase(1))} className="btn bg-green-600 mx-3 p-3">Increace +</button>
          <button onClick={() => dispatch(decrease(1))} className="btn bg-red-500 mx-3 p-3">Decreace -</button>
         </div>
          </>
         }
         <div className="hideBtn">
          <button onClick={() => dispatch(toggle())} className='btn bg-green-500 mx-3 p-6'>
          Hide/Show Counter
          </button>
         </div>
         
         </main>
   </>
  )
}
