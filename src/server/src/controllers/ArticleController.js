const ArticleService = require('../services/ArticleService');

module.exports = {
  // GET: Lista os artigos
  async index(req, res) {
    try {
      const articles = await ArticleService.getAllArticles();
      return res.json(articles);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar artigos." });
    }
  },

  // POST: Cria um artigo 
  async store(req, res) {
    try {
      const article = await ArticleService.createArticle(req.body);
      return res.status(201).json({ message: "Artigo publicado com sucesso!", article });
    } catch (error) {
      console.error(error);
      if (error.message.includes("obrigatórios")) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Erro interno ao salvar artigo." });
    }
  }
};