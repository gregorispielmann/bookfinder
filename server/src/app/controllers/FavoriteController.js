const connection = require('../../config/database');
const api = require('../services/api');
require('dotenv/config');

module.exports = {
  /** INDEX */
  async index(req, res) {
    const id = req.headers.authorization;
    const { page } = req.query;
    const count = await connection('favorites')
      .where({ user_id: id })
      .count();
    const [total] = Object.values(count[0]);
    const offset = (page - 1) * 10 + 10;
    const favorites = await connection('favorites')
      .where({ user_id: id })
      .offset(offset)
      .limit(10)
      .select('book');
    const favoriteBooks = await Promise.all(
      favorites.map(async b => {
        const { data } = await api.get(`/${b.book}`);
        return {
          id: data.id,
          title: data.volumeInfo.title,
          image: data.volumeInfo.imageLinks && data.volumeInfo.imageLinks.small,
          description: data.volumeInfo.description,
          author: data.volumeInfo.authors,
        };
      })
    );
    if (favoriteBooks.length > 0) return res.json({ total, favoriteBooks });
    return res.json({});
  },
  /** CREATE */
  async create(req, res) {
    const id = req.headers.authorization;
    const { bookId } = req.params;
    const isFavorited = await connection('favorites')
      .where({ book: bookId, user_id: id })
      .select('id');
    if (isFavorited.length > 0)
      return res.status(400).json({ message: 'Livro já favoritado' });
    await connection('favorites').insert({
      book: bookId,
      user_id: id,
    });
    return res.json(bookId);
  },
  /** DELETE */
  async delete(req, res) {
    const id = req.headers.authorization;
    const { bookId } = req.params;
    const removed = await connection('favorites')
      .where({ book: bookId, user_id: id })
      .del();
    if (removed) return res.json(bookId);
    return res.status(400).json({ message: 'Não foi possível excluir' });
  },
};
