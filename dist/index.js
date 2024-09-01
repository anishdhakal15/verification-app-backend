const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/verify', (req, res) => {
  const { code } = req.body;

  if (!/^\d{6}$/.test(code) || code[5] === '7') {
    return res.status(400).json({ error: 'Verification Error' });
  }

  return res.json({ success: true });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));