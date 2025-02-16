import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function GET() {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all users from the `users` collection
    const users = await User.find({});

    // Return the users as a JSON response
    return new Response(JSON.stringify(users), {
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