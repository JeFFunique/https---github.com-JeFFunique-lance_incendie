import './Qui.css';
import logo from './images/Capture.PNG';
import { Link } from 'react-router-dom';
import linkedin from './images/icons8-linkedin-24.png';
import facebook from './images/icons8-facebook-30.png';
import instagram from './images/icons8-instagram-24.png';
import twitter from './images/icons8-twitter-24.png';
function Qui(){
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
        
        <div className='qui'>
            <h2 className='qui-2'> UNE ENTREPRISE DE PROTECTION INCENDIE AU SERVICE DE SES CLIENTS!</h2>
            <p className='qui-3'> Nous sommes une entreprise qui équipe les lieux urbains, les collectivités, les entreprises, de toutes tailles. Spécialiste en matière de sécurité, nous effectuons la vente, l’installation et la maintenance de tout l’équipement incendie dont vous avez besoin afin d’assurer la sécurité de votre site. <br></br><br></br>

Nous sommes fournisseur de solutions de formation et de vente matériel de sécurité incendie. Nous somme une organisation digne de confiance afin de protéger vos locaux des risques professionnels.</p>

            
        </div>
        <div className='buttons-2'>
        <div className='buttons'>
            <a href="#" className='linka-3'> CONTACTER PAR MAIL</a>
        </div>
        <div className='buttons'>
            <a href="#" className='linka-3'> CONTACT - 07 65 68 84 50</a>
        </div>
        </div>
        
<div className='nous-contacter'>
<div className='activite-2'>
            <h2>Conseils</h2>
            <p className='text-2'> Nous vous accompagnons dans l'achat de notre matériel de sécurité le plus adapté à vos besoins 
            et à l'infrastructure de votre bâtiment.Nous pourrons vous guider dans l'achat de votre matériel
            à travers notre large catalogue de sécurité incendie et à travers nos devis personnalisés.
</p>
          </div>
          <div className='activite-3'>
          <h2>Installation & Conformite</h2>
          <p className='text-2'> Nous assurons l'installation de vos systèmes de sécurité avec la meilleure qualité de produit possible. 
            Nous intervenons partout en France. Grâce à nos devis personnalisés, 
            nous vous proposons l'installation la plus adaptée à vos besoins, infrastructure de votre bâtiment et budget.</p>
          </div>
          <div className='activite-4'>
            <h2>Maintenance & Entretien</h2>
            <p className='text-2'> Nous assurons l'entretien et la maintenance de tout
             votre matériel de sécurité avec les dernières recommendations des fabricants
             afin de vous assurer l'opérationnalité permanente de votre équipement de sécurité.</p>
          </div>
          <div className='activite-5'>
            <h2> Formation</h2>
            <p className='text-2'> Nous vous proposons des formations qui comblent l'ensemble
            des formations règlementaires et obligatoires qui doivent être mises en place
            dans les infrastructures dans laquelle une protection incendie est requise. </p>
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
export default Qui;