import { Calendar } from 'primereact/calendar';
import { useState } from 'react';
import { Button } from 'primereact/button';
function Calendartest(){
    const [date,setDate]=useState()
    const handleClick=()=>{
        console.log(date)
    }
    return(
        <div>
            <div>
                <Calendar onChange={e=>setDate(e.value)} value={date} inlines/>
                <Button label="Click" severity="danger" onClick={handleClick} />
            </div>
            <Calendar dateFormat='dd/mm/y' />
            <Calendar minDate={new Date()} maxDate={new Date('10/21/2023')} selectionMode='range'showTime showSeconds  />
        </div>
    )
}
export default Calendartest