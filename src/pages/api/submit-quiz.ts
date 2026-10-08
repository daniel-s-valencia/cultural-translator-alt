import type { APIRoute } from 'astro';
import { db, QuizResults } from 'astro:db';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, traditional, modern, postmodern } = data;

    if (!name || !email) {
      return new Response(JSON.stringify({ error: 'Name and email are required' }), { status: 400 });
    }

    await db.insert(QuizResults).values({
      name,
      email,
      traditionalScore: traditional,
      modernScore: modern,
      postmodernScore: postmodern,
      submittedAt: new Date()
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (e) {
    console.error('Error saving quiz result:', e);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500 });
  }
};
