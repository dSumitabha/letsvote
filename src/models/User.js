import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, default: 'user' }, // Default role is 'user'
  },
  { timestamps: true } // Automatically adds `createdAt` and `updatedAt` fields
);

// Check if the model already exists to avoid redefining it
const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;