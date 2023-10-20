import { Paginator } from 'primereact/paginator';
import { useState } from 'react';
function Paginatortest(){
    const[firts,setFirts]=useState(0)
    const[row,setRow]=useState(3)
    const data=[
        {
            id:1,
            name:'Tuan Anh',
            age:15
        },
        {
            id:2,
            name:'Dieu Anh',
            age:24
        },
        {
            id:3,
            name:'Xuan Manh',
            age:23
        },
        {
            id:4,
            name:'Thi Thuy',
            age:22
        },
        {
            id:5,
            name:'Dinh Ha',
            age:21
        },
        {
            id:6,
            name:'Minh Trang',
            age:20
        },
        {
            id:7,
            name:'Khanh Huy',
            age:19
        },
        {
            id:8,
            name:'Viet Hoang',
            age:18
        },
        {
            id:9,
            name:'Thanh Thao',
            age:17
        },
        {
            id:10,
            name:'Hoang Hung',
            age:16
        },
    ]
    return(
        <div>
           <ul>
           {
                data.slice(firts,firts+row).map(item=>(
                    <li key={item.id}>{item.name}-{item.age}</li>
                ))
            }
           </ul>
           <Paginator first={firts} rows={row} totalRecords={data.length} rowsPerPageOptions={[3, 5, 10]} onPageChange={e=>{
            setFirts(e.first)
            setRow(e.rows)
           }} />
        </div>
    )
}
export default Paginatortest