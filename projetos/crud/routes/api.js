const express = require('express');
const db = require('../db');
const router = express.Router();

// Este exemplo cobre somente cadastro; não promete um CRUD completo.
router.post('/', (req, res) => {
  const { nome, email } = req.body || {};
  if (
    typeof nome !== 'string' ||
    !nome.trim() ||
    typeof email !== 'string' ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  ) {
    return res.status(400).json({ mensagem: 'Informe nome e email válidos.' });
  }
  // Placeholders separam valores externos do comando SQL.
  db.query(
    'INSERT INTO users (nome, email) VALUES (?, ?)',
    [nome.trim(), email.trim()],
    (erro, resultado) => {
      if (erro) return res.status(500).json({ mensagem: 'Não foi possível cadastrar.' });
      res.status(201).json({ id: resultado.insertId, nome: nome.trim(), email: email.trim() });
    },
  );
});

module.exports = router;
