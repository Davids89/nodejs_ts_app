import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('¡Hola mundo con TypeScript!');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});