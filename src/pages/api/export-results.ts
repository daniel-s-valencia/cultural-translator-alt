import type { APIRoute } from 'astro';
import { db, QuizResults } from 'astro:db';

export const GET: APIRoute = async () => {
  try {
    const results = await db.select().from(QuizResults);
    
    // Convert to CSV
    const headers = ['ID', 'Name', 'Email', 'Traditional Score', 'Modern Score', 'Postmodern Score', 'Submitted At'];
    
    const rows = results.map(row => [
      row.id,
      `"${row.name.replace(/"/g, '""')}"`,
      `"${row.email.replace(/"/g, '""')}"`,
      row.traditionalScore,
      row.modernScore,
      row.postmodernScore,
      new Date(row.submittedAt).toISOString()
    ]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.join(','))
    ].join('\n');

    return new Response(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv',
        'Content-Disposition': `attachment; filename="quiz-results-${new Date().toISOString().split('T')[0]}.csv"`
      }
    });
  } catch (e) {
    console.error('Error exporting results:', e);
    return new Response('Internal Server Error', { status: 500 });
  }
};
