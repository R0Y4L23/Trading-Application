import React,{useState} from 'react'

const Main = () => {

    const [price,setPrice]=useState("")
    const [units,setUnits]=useState("")
    const [entry,setEntry]=useState(null)
    const [stoploss,setStoploss]=useState("")
    const [target,setTarget]=useState(null)
    const [leverage,setLeverage]=useState(3)

  return (
    <div className='flex w-screen h-screen justify-center items-center'>
    <div className='flex flex-col justify-center items-center gap-5 w-[800px] py-5 rounded bg-gray-100 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]'>
        <div className='flex flex-row gap-5 items-center mb-3'>
            <div className='bg-red-500 h-[50px] w-[50px] rounded-[25px]'>
            </div>
            <p className='text-4xl font-semibold'>SHORT</p>
        </div>

        <div className='flex flex-row justify-between items-center w-[500px]'>

        <div>
            <label className="block mb-2 text-xl font-medium text-gray-900">Price</label>
          <input value={price} onChange={(e)=>{setPrice(e.target.value)}} type="text" className='w-[200px] h-[40px] rounded shadow-lg p-2' placeholder='Enter here...'/>
        </div>

        <div>
            <label className="block mb-2 text-xl font-medium text-gray-900">Units</label>
          <input value={units} onChange={(e)=>{setUnits(e.target.value)}} type="text" className='w-[200px] h-[40px] rounded shadow-lg p-2' placeholder='Enter here...'/>
        </div>

        </div>

        <div>
        <label className="block mb-2 text-xl font-medium text-gray-900">Entry</label>
<select value={entry} onChange={(e)=>{setEntry(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-lg block p-2.5 w-[500px]">
  <option selected>Choose An Option</option>
  <option value="2.570">2.570</option>
  <option value="2.630">2.630</option>
</select>
        </div>

        <div>
            <label className="block mb-2 text-xl font-medium text-gray-900">Stop Loss</label>
          <input value={stoploss} onChange={(e)=>{setStoploss(e.target.value)}} type="text" className='w-[500px] h-[40px] rounded shadow-lg p-2' placeholder='Enter here...'/>
        </div>

        <div>
        <label className="block mb-2 text-xl font-medium text-gray-900">Target</label>
<select value={target} onChange={(e)=>{setTarget(e.target.value)}} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg shadow-lg block p-2.5 w-[500px]">
  <option selected>Choose An Option</option>
  <option value="target 1">Target 1</option>
  <option value="target 2">Target 2</option>
  <option value="target 3">Target 3</option>
  <option value="target 4">Target 4</option>
  <option value="target 5">Target 5</option>
  <option value="target 6">Target 6</option>
</select>
        </div>

        <div>
        <label className="block mb-2 text-xl font-medium text-gray-900">Leverage : {leverage}X</label>
<input value={leverage} onChange={(e)=>{setLeverage(e.target.value)}} type="range" min={1} max={5} className='w-[500px]'/>
        </div>


        <div className='flex flex-row justify-center items-center gap-10 mt-5'>
        <button type="button" className="focus:outline-none w-[150px] text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">BUY</button>
        <button type="button" className="focus:outline-none w-[150px] text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">SELL</button>
        </div>
    </div>
    </div>
  )
}

export default Main