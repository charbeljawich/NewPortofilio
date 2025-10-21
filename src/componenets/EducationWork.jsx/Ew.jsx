import React from 'react'
import { Timeline } from './Timeline'
import { myExperinces } from "../../constants";

const Ew = () => {
  return (
    <div className='w-full' id="W&E">
      <Timeline data={myExperinces}/>
    </div>
  )
}

export default Ew