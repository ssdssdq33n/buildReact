import { Slider } from 'primereact/slider';
import { useState } from 'react';
function Slidertest(){
    const[value,setValue]=useState(0)
    const[value1,setValue1]=useState([0,50])
    return(
        <div>
            <div>
                <h1>{value}</h1>
               <Slider value={value} onChange={e=>setValue(e.value)} step={0.1} />
            </div>
            <div>
                <h2>{value1[0]}-{value1[1]}</h2>
                <Slider value={value1} onChange={e=>setValue1(e.value)} range />
            </div>
        </div>
    )
}
export default Slidertest