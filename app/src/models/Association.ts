import mongoose from 'mongoose';
import { title } from 'node:process';


/* Jules (24/11/26) */

// Structure "association"
const assoSchema = new mongoose.Schema({
    identite: {type : String, required : true},
    description: {type : String, required : true},
    contact: {type : String, required : true},
    logo: {type : Image},
    statut: {type : String}
});

const Association = mongoose.model('Asso', assoSchema); 
export default Association;