import { Route } from 'react-router-dom';
import './Contacter.css';
import logo from './images/Capture.PNG';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import swal from 'sweetalert';
function Contacter() {
  
const [form, setForm]=useState({
  prenom:'',
    nom:'',
    mail:'',
    telephone:'',
    demande:'',
    entreprise:'',
    postal:''
});

const handleSubmit = (e) => {
  e.preventDefault();
 
if(form.prenom.length!==0 && form.nom.length!==0 && form.mail.length && form.telephone.length!==0 && form.demande.length && form.entreprise.length!==0 && form.postal.length!==0){
fetch('http://192.168.1.98:5000/api/add_devis',
{
  method: 'POST',
    mode: 'cors', // no-cors, cors, *same-origin
  cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  credentials: 'same-origin',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'

    },
   body:JSON.stringify(form)
  }).then(res => res.json()).catch(err => console.log(err))
alert('Formulaire bien reçu');
}
else {
 swal('Veuillez remplir tous les champs avant de soumettre le formulaire');
}
}

  const handleChange = (event) =>{
    setForm({...form, [event.target.name]: event.target.value})
  }
    
    
    return(
<div className='App'>
<div className='containera'>
<div className='imagea'>
          <img src={logo} alt="Logo" height="150px" />
          </div>
          <div className='texts'>
          <h1> LANCE INCENDIE</h1>
         </div>
          <div className='allah'>       
          <Link to='/' style={{textDecoration:'none'}}> <a className='linka' href='' >Accueil</a></Link>
    <a className='linka-2'> Entreprise
    <div className='dropdown-content'>
        <div className='dropdown-content-1'>
        <h4 className='curva'> Societe</h4>
         <Link to='/qui'> <a href="#"> A Propos de Nous </a></Link>
        
       
       <Link to='/infos/maintenance'> <a href="#"> Maintenance</a></Link> 
       
       
        
        </div>
        <div className='dropdown-content-1'>
        <h4 className='curva'> Nos Services et Produits</h4>
         <Link to='/infos/extincteurs'> <a className='ada' href="#"> Extincteurs 
         </a></Link>
       <Link to='/infos/blocs'><a className='ada' href="#"> Blocs de Secours
       </a></Link> 
       <Link to='/infos/alarme'> <a className='ada' href="#"> 
       Alarmes Incendie
     </a></Link> 
       <Link to='/infos/plan'> <a className='ada' href="#"> Plans d'évacuation
       </a></Link> 
       <Link to='/infos/desenfumage'> <a className='ada' href="#"> Désenfumage
      </a></Link> 
       <Link to='/infos/ria'> <a className='ada' href="#"> RIA
        </a></Link> 
       <Link to='/infos/formation'> <a className='ada' href="#"> Formation
       </a></Link> 
</div>


      </div>
      </a>

          <Link to='/infos/maintenance' style={{textDecoration:'none'}}><a className='link'>Maintenance</a></Link>
            <Link to='/contacter' style={{textDecoration:'none'}}><a className='link'>Nous Contacter</a></Link>
          </div>
        </div>
        
       
       <div className='pgm'>
        <ul className='pgm-4'>
          <form onSubmit={handleSubmit}>
          <h2> FORMULAIRE DE DEVIS</h2>
          <li className='pgm-2'>Prenom: </li>
          <li ><input className='pgm-3'  type="text" placeholder='Prenom..' onChange={handleChange} name="prenom" /></li>
          <li className='pgm-2'>Nom: </li>
          <li><input className='pgm-3' type="text"  placeholder='Nom..' onChange={handleChange} name="nom"/></li>
          <li className='pgm-2'>Email:</li>
          <li><input  className='pgm-3' type="text"  placeholder='email..' onChange={handleChange} name="mail"/></li>
          <li className='pgm-2' >Telephone: </li>
          <li><input  className='pgm-3' type="text"  placeholder='telephone..' onChange={handleChange} name="telephone" /></li>
          <li className='pgm-2'>Decrivez votre demande: </li>
          <li><textarea  className='pgm-3'  placeholder='Decrivez votre demande..' onChange={handleChange} name="demande" /></li>
          <li className='pgm-2'>Nom entreprise: </li>
          <li><input  className='pgm-3' type="text"  placeholder='nom entreprise..' onChange={handleChange} name="entreprise"/></li>
          <li className='pgm-2'>Adresse: </li>
          <li><input  className='pgm-3' type="text"  placeholder='code postal..' onChange={handleChange} name="postal"/></li>
          <li className='drt'> <input type='submit' className='pgm-5' value="Soumettre"/></li>
          </form>
        </ul>
       </div>
       


</div>
    );
}
export default Contacter;