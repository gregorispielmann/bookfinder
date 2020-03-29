const connection = require('../../config/database');
const { hashPassword } = require('../../utils/hashPassword');

module.exports = {
  async index(req, res) {
    const { email, password } = req.body;
    const passwordHash = await hashPassword(password);
    try {
      const sql = await connection('users')
        .where({ email, password: passwordHash })
        .select('id');
      const [{ id }] = sql;
      return res.json({ user_id: `${id}` });
    } catch (e) {
      return res.status(401).json({ message: 'Usuário não encontrado' });
    }
  },
  async show(req, res, next) {
    const auth = req.headers.authorization;
    if (!auth)
      return res.status(401).json({ message: 'Usuário não autenticado' });
    try {
      const [{ id }] = await connection('users').where({ id: auth });
      if (id.length > 0) next();
      else return res.status(401).json({ message: 'Usuário não autenticado' });
    } catch (e) {
      return res.status(401).json({ message: 'Usuário não autenticado' });
    }
  },
};
