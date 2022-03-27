//const UrlManager = require("../managers/UrlManager");
async function getRedirect(req, res) {
  const { url } = req.params;
  //check url in database
  //const databaseStoredUrl = await UrlManager.find(url);
  const databaseStoredUrl = "https://trello.com/b/me2r98Ij/url-shorter";
  //redirect
  databaseStoredUrl
    ? res.writeHead(301, { Location: databaseStoredUrl })
    : res.status(200).json({ url });
}
module.exports = getRedirect;
