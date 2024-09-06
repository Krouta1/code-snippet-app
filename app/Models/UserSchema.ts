import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: { type: String, unique: true, required: true },
    emailAddress: { type: String, unique: true, required: true }, // Ensure email is required
  },
  { timestamps: true },
);

// Handling model compilation in environments like Next.js
const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
