

const mongoose = require('mongoose');

const Devis = require('./devis');
const bodyparser=require('body-parser');
const express=require('express');
var id;
const router=express.Router();


  

router.get('/devis', async (req, res) => {
  try{
      const data = await Devis.find();
      res.json(data)
  }
  catch(error){
      res.status(500).json({message: error.message})
  }
})
  router.post(`/add_devis`, async (req, res) => {
  
    const data=new Devis({
      prenom:req.body.prenom,
      nom:req.body.nom,
      mail:req.body.mail,
      telephone:req.body.telephone,
      demande:req.body.demande,
      entreprise:req.body.entreprise,
      postal:req.body.postal,
    })
   try{
const dataToSave=data.save();
res.status(200).json(dataToSave);
   }
   catch(error){
    res.status(400).json({message:error.message});
   }
   })
   //router.get('/getOneDevis/:name', async (req, res) => {
   // try{
     // const data= await Devis.find({entreprise:req.params.name})
       // res.json(data)
    //}
    //catch(error){
      //  res.status(500).json({message: error.message})
    //}
//})
 
  
    

  //router.patch(`/add_devis/:${id}`, async (req, res) => {
   // const {id} = req.params;

  //  let devis = await Devis.findByIdAndUpdate(id, req.body);

   // return res.status(202).send({
     // error: false,
      //devis
   // })

  //});

 // router.delete(`/delete_devis/:${id}`, async (req, res) => {
    //const {id} = req.params;

    //let devis = await Devis.findByIdAndDelete(id);

    //return res.status(202).send({
      //error: false,
     // devis
   // })

 // })
  router.use(bodyparser.json())
  router.use(bodyparser.urlencoded({extended:true}))
  module.exports=router;
