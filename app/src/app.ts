import express, { Request, Response, NextFunction } from 'express'; 
import router from "./routes/utilisateurRoutes.js";
import path from 'path';
import { fileURLToPath } from 'url';
import { connectDB } from './config/database.js';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express(); 
const port = 3000; 
 
// 1er middleware : logger 
function logger(req: Request, res: Response, next: NextFunction) { 
  const now = new Date().toISOString(); 
  console.log(`[${now}] ${req.method} ${req.url}`); 
  next(); // passe au middleware suivant 
} 
 
// 2e middleware : chronomètre 
function timer(req: Request, res: Response, next: NextFunction) { 
  const start = Date.now(); 
  // res.on() permet d'agir quand la réponse est terminée 
  res.on('finish', () => { 
    const duration = Date.now() - start; 
    console.log(`→ Temps de traitement : ${duration} ms`); 
  }); 
  next(); 
} 

app.use(express.json());
// Activation des deux middleware globaux 
app.use(logger); 
app.use(timer); 
app.use('/', router);
app.use('/public', express.static(path.join(__dirname, '../public')));
 
// Route simple 
app.get('/', (req: Request, res: Response) => {
  res.send("Salut");
});
 
// 404
app.use((req, res) => { 
  res.status(404).send("Page non trouvée"); 
}); 
 
// Middleware d'erreurs
app.use((err: Error, req: Request, res: Response, next: NextFunction) => { 
  console.error(err.message); 
  res.status(500).json({ message: 'Erreur interne du serveur' }); 
}); 
 
app.listen(port, () => { 
  console.log(`Serveur démarré sur http://localhost:${port}`); 
}); 

connectDB();