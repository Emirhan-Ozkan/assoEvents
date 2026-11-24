import mongoose from 'mongoose';
import { title } from 'node:process';


/* Jules (24/11/26) */

// Structure "Inscription"
const logSchema = new mongoose.Schema({
    user: {type : String, required : true},
    event: {type : Number, required : true}, // On récupère aussi les evenements par ID (24/11/26 à 17h26)
    date: {type : Date, required : true},
    statut: {type : String}
});

const Inscription = mongoose.model('Log', logSchema); 
export default Inscription;