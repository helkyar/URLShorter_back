const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function getRedirect(req, res) {
  const { id } = req.params;

  // (!) Validation
  const url = await UrlManager.findAllOf({ user: id });

  url
    ? res.status(200).json(url[0])
    : res.status(400).json({ error: "Wrong format" });
}
module.exports = getRedirect;
