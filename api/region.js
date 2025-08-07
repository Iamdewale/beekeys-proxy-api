// const fetch = require("node-fetch");

// module.exports = async (req, res) => {
//   // Handle CORS preflight
//   if (req.method === 'OPTIONS') {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
//     res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//     return res.status(200).end();
//   }

//   res.setHeader('Access-Control-Allow-Origin', '*');

//   const { country = 'nigeria', mode = 'regions', query } = req.query;

//   const configs = {
//     nigeria: {
//       base: 'https://app.beekeys.com/nigeria/wp-json/geodir/v2',
//       key: process.env.NG_API_KEY,
//       secret: process.env.NG_API_SECRET,
//     },
//     ghana: {
//       base: 'https://app.beekeys.com/ghana/wp-json/geodir/v2',
//       key: process.env.GH_API_KEY,
//       secret: process.env.GH_API_SECRET,
//     },
//   };

//   const config = configs[country.toLowerCase()];
//   if (!config) {
//     return res.status(400).json({ error: 'Invalid country' });
//   }

//   let endpoint;
//   if (mode === 'regions') {
//     endpoint = `${config.base}/locations/regions`;
//   } else if (mode === 'search') {
//     if (!query) {
//       return res.status(400).json({ error: 'Missing query parameter' });
//     }
//     endpoint = `${config.base}/bsb?search=${encodeURIComponent(query)}`;
//   } else {
//     endpoint = `${config.base}/bsb`;
//   }

//   const url = `${endpoint}&key=${config.key}&secret=${config.secret}`;

//   try {
//     const apiRes = await fetch(url, {
//       headers: { 'User-Agent': 'Beekeys Proxy' },
//     });

//     const data = await apiRes.json();
//     if (!apiRes.ok) {
//       return res.status(apiRes.status).json({ error: data });
//     }

//     res.status(200).json(data);
//   } catch (err) {
//     console.error('Proxy error:', err);
//     res.status(500).json({ error: 'Internal Proxy Error' });
//   }
// };

module.exports = (req, res) => {
  res.status(200).json({ message: "regions endpoint working" });
};