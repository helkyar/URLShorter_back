const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function getRedirect(req, res) {
  const id = req.params;
  const data = req.body;

  // (!) Validation
  const url = await UrlManager.update(data, id);

  url
    ? res.status(200).json(url[0])
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = getRedirect;
