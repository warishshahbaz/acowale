const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

// const API_KEY = '674dbf24ec79b840628762d9f1c2da03';2cc2e1dba5cc697a2e3262af56e69d3e
const API_KEY = '2cc2e1dba5cc697a2e3262af56e69d3e';
const API_URL = 'https://gnews.io/api/v4';

// Use the CORS middleware
app.use(cors());

app.get('/news', async (req, res) => {
  try {
    const { country = 'us', language = 'en', search = '', page = 1, size = 10 } = req.query;
    const response = await axios.get(`${API_URL}/top-headlines`, {
      params: {
        country,
        language,
        q: search,
        page,
        pageSize: size,
        token: API_KEY
      }
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
