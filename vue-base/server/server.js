import express from 'express';
import helmet from 'helmet';

const app = express();

const PORT = 3030,
  DIST_DIR = 'dist/';

app.use(express.json())
// protect from vulnerabilities
app.use(helmet());
// serve static resources
app.use(express.static(DIST_DIR));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root: 'dist' });
})

app.listen(PORT, (err) => {
  if (err) {
    console.log('failed to start server ', err);
  }
  console.log(`Server running in ${PORT}`);
});
