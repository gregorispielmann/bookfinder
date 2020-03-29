const api = require('../services/api');

module.exports = {
  async index(req, res) {
    const { title, startIndex } = req.body;
    if (!title)
      return res
        .status(400)
        .json({ message: 'Parâmetro título não preenchido' });

    try {
      const books = await api.get(
        `?q=${title}&startIndex=${startIndex}&maxResults=${10}`
      );
      return res.json(books.data);
    } catch (e) {
      return res.status(404).json({ message: 'Nenhum título não encontrado' });
    }
  },
};
