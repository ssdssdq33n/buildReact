import { ColorPicker } from 'primereact/colorpicker';
import { useState } from 'react';
function ColorPickertest(){
   const[rgb,setRgb]=useState('')
    return(
        <div>
            <span>{'#'+rgb}</span>
       <ColorPicker value={rgb} onChange={e=>setRgb(e.value)}  />
        </div>
    )
}
export default ColorPickertest