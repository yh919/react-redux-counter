'use client'
import {Provider , useSelector , useDispatch} from 'react-redux'


export default function Home() {

  const dispatch = useDispatch();
  const globalState = useSelector(( state ) => state )
  const counterOperation = (type,payload) => {
    dispatch({type , payload})
  }


  return (
   <>
   <main className="flex h-full flex-col items-center justify-around gap-6 p-24">
         <h1>
          Redux Counter
         </h1>
         {
          globalState.show && 
          <>
          <div className="counter">
          Counter : <span id='counter'>
            {globalState.value}
          </span>
         </div>
         <div className="btns">
          <button onClick={() => counterOperation("increase", 1)} className="btn bg-green-600 mx-3 p-3">Increace +</button>
          <button onClick={() => counterOperation("decrease" , 1)} className="btn bg-red-500 mx-3 p-3">Decreace -</button>
         </div>
          </>
         }
         <div className="hideBtn">
          <button onClick={() => counterOperation("toggle")} className='btn bg-green-500 mx-3 p-6'>
          Hide/Show Counter
          </button>
         </div>
         
         </main>
   </>
  )
}
