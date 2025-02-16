import mongoose from 'mongoose';

// Define the Poll Schema
const pollSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: [
    {
      optionText: { type: String, required: true },
      votes: { type: Number, default: 0 },
    },
  ],
});

const Poll = mongoose.models.Poll || mongoose.model('Poll', pollSchema);

export default Poll;
