import './Plan.css';
import { Link } from "react-router-dom";
import linkedin from './images/icons8-linkedin-24.png';
import facebook from './images/icons8-facebook-30.png';
import instagram from './images/icons8-instagram-24.png';
import twitter from './images/icons8-twitter-24.png';
import logo from './images/Capture.PNG';
import mail from './images/icons8-mail-24.png';
import phone from './images/icons8-phone-100 (1).png';
import extincteurs from './images/maintenancextincteurs.jpg';
import exit from './images/lien.jpg';
import lien3 from './images/lien3.jpeg';
function Plan(){
    return(
<div className="App">
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
        
        <div className='content'>
            <div>
            <h2 className='maintenance'> Spécialiste des Plans de Sécurité incendie</h2>
            <p className='content-3'>   Nous réalisons des plans de sécurité incendie complets 
dotés d’une précision et d’une fiabilité sans précédent 
grâce à notre expertise et qui seront parfaitement utiles 
aux sapeurs-pompiers ou aux autres organismes de sécurité.
Ces plans de sécurité seront adaptés à l’infrastructure de 
vos sites (même pour les sites les plus particuliers), 
esthétiques, efficaces et conformes aux normes en 
vigueur.





            <br></br> <br></br> 
                   </p>
            </div>
            <img src={lien3} alt="Lien2" width="500px" />
            
           
        </div>
        <div className='btn-2'>
           <Link to='/contacter' style={{textDecoration:'none'}}> <a href="#" className='p'> CONTACTER NOUS</a></Link>
            <img src={mail} alt="Mail" height='50px' />
        </div>
        <div className='devis'>
            <h2>DEVIS RAPIDE ET FIABLE</h2>
        </div>
       
        <div className='contact'>
          
          <img src={phone} alt="Phone" height='50px' />
          
         
          <h1 className='text-3'>PRENEZ CONTACT: 07 65 68 84 50</h1>
          <div className='btn-1'>
          <img src={mail} alt="Mail"   />
          <h3 ><Link to='/contacter' style={{textDecoration:'none'}}><a className="text-4" href="">  Nous contacter </a> </Link> </h3>

          </div>
          </div>
          <div className='footer'>
          
          <div className='frame'>
          <Link to='/infos/alarme' style={{textDecoration:'none'}}>
            <p> Alarme Incendie</p>
            </Link>
          </div>
          
          <div className='frame'>
          <Link to='/contacter' style={{textDecoration:'none'}}>
            <p> Devis</p>
            </Link>
          </div>
          <div className='frame'>
          <Link to='/infos/extincteurs' style={{textDecoration:'none'}}>
            <p> Extincteurs</p>
            </Link>
          </div>
          <div className='frame'>
          <Link to='/infos/blocs' style={{textDecoration:'none'}}>
            <p> Blocs de Secours</p>
            </Link>
          </div>
          <div className='frame'>
          <Link to='/infos/plan' style={{textDecoration:'none'}}>
            <p> Plans d'évacuation</p>
            </Link>
          </div>
          <div className='frame'>
          <Link to='/infos/desenfumage' style={{textDecoration:'none'}}>
            <p> Désenfumage</p>
            </Link>
          </div>
          <div className='frame'>
          <Link to='/infos/ria' style={{textDecoration:'none'}}>
            <p>RIA</p>
            </Link>
          </div>
          <div className='frame'>
          <Link to='/infos/formation' style={{textDecoration:'none'}}>
            <p> formation</p>
            </Link>
          </div>
        </div>
        <div className='footer-2'>
     
     <div className='footer-3'>
     <h2>Contactez-nous !</h2>
          <h3 className='socials-2'>-{'>'} 07 65 68 84 50 </h3>
          <a href='mailto:extincteurs.lanceincendie@gmail.com'><h3 className='socials-2'>-{'>'} extincteurs.lanceincendie@gmail.com </h3></a>
         <a href='https://www.linkedin.com/in/lance-incendie-567724276/'> <img src={linkedin} alt="Linkedin" className='socials' /></a>
 <a href=""><img src={twitter} alt="Twitter" className='socials' /></a>
<a href="https://www.instagram.com/lance_incendie/"><img src={instagram} alt="Instagram" className='socials' /></a>
<a href="https://www.facebook.com/profile.php?id=100092875862027"><img src={facebook} alt="Facebook" className='socials' /></a>


     </div>
     <div className='footer-4'>
       <h2> Nos Services</h2>
       <h3>-{'>'} Extincteurs</h3>
       <h3>-{'>'} Blocs de Secours </h3>
       <h3>-{'>'} Alarmes Incendie </h3>
       <h3>-{'>'} Plans d'évacuation </h3>
       <h3>-{'>'} Désenfumage</h3>
       <h3>-{'>'} RIA </h3>
       <h3>-{'>'} Formation </h3>

     </div>

   </div>
        </div>
    );
}
export default Plan;