import mongoose from 'mongoose';
export async function connectDB() {
    await mongoose.connect('mongodb://localhost:27017/users');
    console.log("MONGODB!!!!!");
}
//# sourceMappingURL=database.js.map