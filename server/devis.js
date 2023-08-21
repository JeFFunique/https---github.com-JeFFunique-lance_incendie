const mongoose=require('mongoose')
const devisSchema= new mongoose.Schema({
    prenom:String,
    nom: String,
    mail:String, 
    telephone: String, 
    demande: String, 
    entreprise: String,
    postal: String,  
})
module.exports=mongoose.model('devis', devisSchema);
