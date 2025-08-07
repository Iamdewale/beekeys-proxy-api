module.exports = async (req, res) => {
  console.log("Region endpoint was hit");
  res.status(200).json({ message: "You hit /api/region!" });
};