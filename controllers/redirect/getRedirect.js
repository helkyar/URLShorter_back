const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);
async function getRedirect(req, res) {
  const { url } = req.params;
  // const location = await UrlManager.find(url);
  const location = "https://trello.com/b/me2r98Ij/url-shorter";
  //redirect
  location
    ? res.writeHead(301, { location }).send()
    : res.status(400).json({ url });
}
module.exports = getRedirect;
