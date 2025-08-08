const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://api.publicapis.org/entries');
    const data = await response.json();
    res.status(200).json({ message: "Test endpoint working!", data: data.entries.slice(0, 3) });
  } catch (error) {
    res.status(500).json({ message: "Error fetching data", error: error.message });
  }
};