import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { InputText } from "primereact/inputtext";
import { useState } from "react";
import { FilterMatchMode } from "primereact/api";
import { Button } from 'primereact/button';
import { Divider } from 'primereact/divider';
import { Password } from "primereact/password";
import Calendartest from "./Calendar/index";
import InputMasktest from "./InputMask";
import ColorPickertest from "./ColorPick";
import Dialogtest from "./Dialog";
import Paginatortest from "./Paginator";
import Slidertest from "./Slider";
import Flexbox from "./flexbox";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css'
import 'primeicons/primeicons.css';
import React from "react";
function App() {
  const data = [
    {
      id: 1,
      name: "Tuan Anh",
      age: 21,
      city: "Ha Noi",
    },
    {
      id: 2,
      name: "Viet Hoang",
      age: 22,
      city: "Hai Duong",
    },
    {
      id: 3,
      name: "Hoang Hung",
      age: 20,
      city: "Hai Phong",
    },
    {
      id: 4,
      name: "Thanh Thao",
      age: 23,
      city: "Ninh Binh",
    },
  ];
  const [giatri, setGiatri] = useState({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const[value,setValue]=useState()
  const handleClick=()=>{
    console.log(value)
  }
  const header=<h1>Pick a password</h1>
  const footer=(
    <React.Fragment>
      <Divider/>
      <p>Nhap mat khau co chu</p>
      <p>Nhap mat khau co so</p>
      <p>Nhap mat khau co ky tu dac biet</p>
    </React.Fragment>
  )
  return (
    <div className="App">
      <InputText
        onChange={(e) =>
          setGiatri({
            ...giatri,
            global: {
              value: e.target.value,
              matchMode: FilterMatchMode.CONTAINS,
            },
          })
        }
      />
      <DataTable value={data} filters={giatri}>
        <Column field="id" header="ID" />
        <Column field="name" header="Name" />
        <Column field="age" header="Age" />
        <Column field="city" header="City" />
      </DataTable>
      <div>
      <span className="p-float-label">
          <Password
            toggleMask={true}
            onChange={(e) => setValue(e.target.value)}
            promptLabel="Choose a password"
            weakLabel="Too simple"
            strongLabel="Complex password"
            className="p-invalid"
            header={header}
            footer={footer}
          />
          <label htmlFor="password">Password</label>
      </span>
        <Button label="Submit"  onClick={handleClick} />
      </div>
      <Calendartest/>
      <InputMasktest/>
      <ColorPickertest/>
      <Dialogtest/>
      <Paginatortest/>
      <Slidertest/>
      <Flexbox/>
    </div>
  );
}

export default App;
