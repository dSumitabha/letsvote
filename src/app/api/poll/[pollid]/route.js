import dbConnect from '@/lib/db';
import Poll from '@/models/Poll';

export async function GET(request, { params }) {
  const { pollId } = params;

  try {
    // Connect to the database
    await dbConnect();

    // Find the poll by its ID
    const poll = await Poll.findById(pollId);

    if (!poll) {
      return new Response("Poll not found", { status: 404 });
    }

    // Return the poll as JSON response
    return new Response(JSON.stringify(poll), { status: 200 });
  } catch (error) {
    console.error("Error fetching poll:", error);
    return new Response("Error fetching poll.", { status: 500 });
  }
}
