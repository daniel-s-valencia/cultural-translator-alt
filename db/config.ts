import { defineDb, defineTable, column } from 'astro:db';

const QuizResults = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    name: column.text(),
    email: column.text(),
    traditionalScore: column.number(),
    modernScore: column.number(),
    postmodernScore: column.number(),
    submittedAt: column.date({ default: new Date() }),
  }
});

export default defineDb({
  tables: { QuizResults }
});
