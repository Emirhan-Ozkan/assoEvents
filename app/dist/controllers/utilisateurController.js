import Utilisateur from '../models/utilisateur.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { JSDOM } from "jsdom";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
export async function listerUtilisateurs(req, res) {
    const allUsers = await Utilisateur.find();
    return res.json(allUsers);
}
export async function trouverUtilisateurParId(req, res) {
    const oneUser = await Utilisateur.findById(req.params.id);
    return res.json(oneUser);
}
export async function showUsers(req, res) {
    // prendre le fichier html
    const vue = path.join(__dirname, '../views/users.html');
    const html = fs.readFileSync(vue, 'utf-8');
    // le transformer d'un string en 'document'
    const dom = new JSDOM(html);
    const document = dom.window.document;
    const usersElement = document.querySelector("#users");
    // la manipuler
    if (usersElement) {
        const allUsers = await Utilisateur.find();
        usersElement.textContent = JSON.stringify(allUsers);
    }
    // la transformer en string pour l'envoyer
    const s = dom.serialize();
    // l'envoyer
    return res.send(s);
}
export async function createUser(req, res) {
    const { nom, email } = req.body;
    console.log('Nouvel utilisateur reçu :', nom, email);
    let e = email;
    const newUser = await Utilisateur.create(req.body);
    return res.status(201).json(newUser);
}
//# sourceMappingURL=utilisateurController.js.map