import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import Entreprise from "./Extincteurs_infos";
import Contacter from "./Contacter";
import Qui from "./Qui";
import Extincteurs_infos from "./Extincteurs_infos";
import Bloc_infos from "./Blocs_infos";
import Alarme from "./Alarme";
import Plan from "./Plan";
import Desenfumage from "./Desenfumage";
import RIA from "./RIA";
import Formation from "./Formation";
import Admin from "./Admin";
import Maintenance from "./Maintenance";

function App() {
  return (
    <BrowserRouter>
  
        
        <Routes>
        <Route path='/' element={<Home/>}/> 
          <Route path='/entreprise' element={<Entreprise/>}/>
         <Route path='/contacter' element={<Contacter/>}/>
         <Route path='/qui' element={<Qui/>}/>
         <Route path='/infos/extincteurs' element={<Extincteurs_infos/>}/>
         <Route path='/infos/blocs' element={<Bloc_infos/>}/>
         <Route path='/infos/alarme' element={<Alarme/>}/>
         <Route path='/infos/plan' element={<Plan/>}/>
         <Route path='/infos/desenfumage' element={<Desenfumage/>}/>
         <Route path='/infos/ria' element={<RIA/>}/>
         <Route path='/infos/formation' element={<Formation/>}/>
         <Route path='/admin' element ={<Admin/>}/> 
         <Route path='/infos/maintenance' element ={<Maintenance/>}/> 
         </Routes>
         
         </BrowserRouter>
         
      
    
  );
}

export default App;
