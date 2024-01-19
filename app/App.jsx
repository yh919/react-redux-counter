'use client'
import {Provider , useSelector , useDispatch} from 'react-redux'


export default function Home() {

  const dispatch = useDispatch();

  const state = useSelector((state) => state.value);

  const increase = () => {

    const action = {type:"increase" , payload : 2};
    dispatch(action);
    
  }
  const decrease = () => {
    const action = {type:"decrease" , payload : 1};
    dispatch(action);
  }
  return (
   <>
   <main className="flex h-full flex-col items-center justify-around gap-6 p-24">
         <h1>
          Redux Counter
         </h1>
         <div className="counter">
          Counter : <span id='counter'>
            {state}
          </span>
         </div>
         <div className="btns">
          <button onClick={increase} className="btn bg-green-600 mx-3 p-3">Increace +</button>
          <button onClick={decrease} className="btn bg-red-500 mx-3 p-3">Decreace -</button>
         </div>
         <div className="hideBtn">
          <button className='btn bg-green-500 mx-3 p-6'>
          Hide/Show Counter
          </button>
         </div>
         </main>
   </>
  )
}
