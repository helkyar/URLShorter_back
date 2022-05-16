const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function postRedirect(req, res) {
  let { url, user } = req.body;

  // Parse url_______________________________________
  url = url.split(/https?:\/\//).filter((e) => e !== "")[0];
  url = url.replace(/\s/g, "");

  // Search url_______________________________________
  let response;
  const repeatedUrl = await UrlManager.findValue({ url });

  // Generate id_______________________________________
  if (user || (repeatedUrl && (!repeatedUrl[0] || repeatedUrl[0].user))) {
    let urlid;
    let repeatedId;
    try {
      do {
        urlid = Math.floor(Math.random() * process.env.MAX_URLS_LENGTH);
        urlid = urlid.toString(16);
        repeatedId = await UrlManager.findValue({ urlid });
      } while (repeatedId[0]);
    } catch (e) {
      console.log("ERRROR IN WHILE: ", e);
    }

    response = await UrlManager.create({ urlid, url, user });
  } else {
    response = repeatedUrl;
  }

  response && response[0]
    ? res.status(200).json(response[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postRedirect;
