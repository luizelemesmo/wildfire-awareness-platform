const FireService = require('../services/FireService');

module.exports = {
  async index(req, res) {
    try {
      const fires = await FireService.getAllFires();
      return res.json(fires);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar denúncias." });
    }
  },

  async store(req, res) {
    try {
      const fire = await FireService.createFire(req.body);
      return res.status(201).json({ message: "Denúncia processada e guardada com sucesso!", fire });
    } catch (error) {
      console.error(error);
      if (error.message.includes("campos obrigatórios")) {
        return res.status(400).json({ error: error.message });
      }
      return res.status(500).json({ error: "Erro interno no servidor ao guardar a denúncia." });
    }
  },

  async update(req, res) {
    try {
      const fire = await FireService.updateFire(req.params.id, req.body);
      return res.json({ message: "Denúncia atualizada com sucesso.", fire });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Erro ao atualizar. Denúncia não encontrada." });
    }
  },

  async destroy(req, res) {
    try {
      await FireService.deleteFire(req.params.id);
      return res.json({ message: "Denúncia eliminada com sucesso." });
    } catch (error) {
      console.error(error);
      return res.status(400).json({ error: "Erro ao eliminar. Denúncia não encontrada." });
    }
  },

  async stats(req, res) {
    try {
      const impactData = await FireService.getStats();
      return res.json(impactData);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro ao buscar números de impacto." });
    }
  }
};