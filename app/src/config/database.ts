import mongoose from 'mongoose'; 

export async function connectDB() {
    try {
        await mongoose.connect('mongodb://localhost:27017/users');
        console.log("MONGODB!!!!!");
    }
    catch (error) {
        console.log("Erreur serveur");
        console.log(error);
    } ;
}

