import React from "react";
import './Admin.css';
import { useState, useEffect } from "react";
import icon from './images/icons8-search-100.png';
import logo from './images/Capture.PNG';
function Admin(){
const [devis, setDevis]=useState([])
const [search, setSearch]=useState('');


useEffect(() => {
    fetch('http://localhost:5000/api/devis').then(res => res.json()).then(response => {
        setDevis((response))
    
       
    }
        )
    .catch(err => console.log(err))
}, []);

useEffect(() => {
    console.log(devis)
},[devis]);
return(
<div>
<div className="navbar">
<img src={logo} alt="Logo" height='150px'/>
<div className="adr">
<img src={icon} alt="Search" height='30px'/>
<input type="text" className="vba" placeholder="Rechercher" onChange={(e) => setSearch(e.target.value)} name="search" />
</div>

</div>
<div className="jtm">
{devis.filter(devis => devis['entreprise'].toLowerCase().includes(search.toLowerCase())).map(
    devis => {
    return(
        <ul key={devis._id}>
        <li>Prenom: </li>
        <li> {devis.prenom}</li>
        <li>Nom: </li>
        <li> {devis.nom}</li>
        <li>Mail: </li>
        <li> {devis.mail}</li>
        <li>Telephone: </li>
        <li> {devis.telephone}</li>
        <li>Demande: </li>
        <li> {devis.demande}</li>
        <li>Entreprise: </li>
        <li> {devis.entreprise}</li>
        <li> Code Postal:</li>
        <li> {devis.postal}</li>
    </ul>
    )

    })}
</div>
<div>


</div>
</div>
);
}
export default Admin;
