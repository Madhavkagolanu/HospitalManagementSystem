import React from 'react'
// import {Link} from 'react-router-dom'
import { Route, Routes } from "react-router-dom";
import CreateVisitOP from './CreateVisitOP';
import CreateVisitIP from './CreateVisitIP'
import '../../Pages/Reception/Reception.css'
function CreateVisitButtons() {
  return (
    <div>
       
    <Routes>
    <Route
        path="/OP"
        element={
        <CreateVisitOP
                // newddlist={newddlist}
                // triggertoggle={triggertoggle}
                // setTriggertoggle={setTriggertoggle}
              />
            }
        />
    <Route
        path="/IP"
        element={
        <CreateVisitIP
                // newddlist={newddlist}
                // triggertoggle={triggertoggle}
                // setTriggertoggle={setTriggertoggle}
              />
            }
        />
    
    </Routes>
    </div>
  )
}

export default CreateVisitButtons