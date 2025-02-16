import dbConnect from '@/lib/db';
import Poll from '@/models/Poll';

export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all users from the `users` collection
    const polls = await Poll.find({});

    // Return the users as a JSON response
    return new Response(JSON.stringify(polls), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Handle any errors
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}