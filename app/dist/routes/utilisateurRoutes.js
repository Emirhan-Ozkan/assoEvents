import { Router } from 'express';
import { listerUtilisateurs, trouverUtilisateurParId, showUsers, createUser } from '../controllers/utilisateurController.js';
import { validateForm } from '../validators/utilisateurValidators.js';
const router = Router();
router.get('/utilisateurs', listerUtilisateurs);
router.get('/utilisateurs/:id', trouverUtilisateurParId);
router.get('/html', showUsers);
router.post('/utilisateurs', validateForm, createUser);
export default router;
//# sourceMappingURL=utilisateurRoutes.js.map