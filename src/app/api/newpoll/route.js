import dbConnect from '@/lib/db';
import Poll from '@/models/Poll';

export async function POST(req) {
    try {
      // Connect to the database
      await dbConnect();
  
      // Parse the request body
      const { question, options } = await req.json();
  
      if (!question || !options || options.length < 2) {
        return new Response('Poll question and at least 2 options are required.', { status: 400 });
      }
  
      // Create the new Poll document
      const newPoll = new Poll({
        question,
        options: options.map(optionText => ({
          optionText: String(optionText),  // Ensure this is stored as a string
          votes: 0,
        })),
      });
  
      // Save the new poll to the database
      await newPoll.save();
  
      return new Response(
        JSON.stringify({ message: 'Poll created successfully!', poll: newPoll }),
        { status: 201 }
      );
    } catch (error) {
      console.error('Error creating poll:', error);
      return new Response('Error creating poll. Please try again later.', { status: 500 });
    }
  }