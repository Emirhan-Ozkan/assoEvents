import mongoose from 'mongoose';
import { title } from 'node:process';


/* Jules (24/11/26) */

// Structure "evenement"
const eventSchema = new mongoose.Schema({
    title: {type : String, required : true},
    description: {type : String, required : true},
    date: {type : Date},
    lieu: {type : String, required : true},
    capacite: {type : Number, required : true},
    categorie: {type : String},
    asso: {type : Number, required : true} // On récupère les assos par ID (24/11/26 à 17h24)
});

const Evenement = mongoose.model('Event', eventSchema); 
export default Evenement;