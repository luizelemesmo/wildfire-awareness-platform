const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

class ArticleService {
  async getAllArticles() {
    return await prisma.article.findMany({
      orderBy: { publishedAt: 'desc' } 
    });
  }

  async createArticle(data) {
    const { title, slug, summary, content, imageUrl } = data;

    if (!title || !slug || !content) {
      throw new Error("Título, slug e conteúdo são obrigatórios.");
    }

    return await prisma.article.create({
      data: { title, slug, summary, content, imageUrl }
    });
  }
}

module.exports = new ArticleService();