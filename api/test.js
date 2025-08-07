// module.exports = (req, res) => {
//   res.status(200).json({ message: "It works!" });
// };

export default function handler(req, res) {
  res.status(200).json({ message: "Hello from test endpoint!" });
}git 