import mongoose from 'mongoose';
import { title } from 'node:process';

const userSchema = new mongoose.Schema({
    name: {type : String, required : true},
    email: {type : String, required : true, unique : true},
    createdAt: {type : Date, default : Date.now}
});

const Utilisateur = mongoose.model('User', userSchema); 
export default Utilisateur;

/* Jules (24/11/26) */

// Structure "association"
const assoSchema = new mongoose.Schema({
    identite: {type : String, required : true},
    description: {type : String, required : true},
    contact: {type : String, required : true},
    logo: {type : Image},
    statut: {type : String}
});

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

// Structure "Inscription"
const logSchema = new mongoose.Schema({
    user: {type : String, required : true},
    event: {type : Number, required : true}, // On récupère aussi les evenements par ID (24/11/26 à 17h26)
    date: {type : Date, required : true},
    statut: {type : String}
});

/* Fin */