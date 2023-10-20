import { InputMask } from 'primereact/inputmask';
import { Button } from 'primereact/button';
import { useState } from 'react';
function InputMasktest(){
    const [value,setValue]=useState()
    const handleClick=()=>{
       console.log(value)
    }
    return(
        <div>
            <InputMask id="serial" mask="99/99/9999? 99:99:99 " slotChar='mm/dd/yyyy hh:mm:ss'  onChange={e=>setValue(e.value)}></InputMask>
            <Button label="Click" severity="danger" onClick={handleClick} />
        </div>
    )
}
export default InputMasktest