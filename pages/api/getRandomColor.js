const handler = (req, res) => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  res.status(200).json({ color: `rgb(${r}, ${g}, ${b})` });
};

export default handler;
