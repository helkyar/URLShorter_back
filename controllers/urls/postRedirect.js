const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function postRedirect(req, res) {
  console.log("Redirect controller post");
  const { url, user } = req.body;

  let response;
  const reapeatedUrl = await UrlManager.findValue({ url });

  if (reapeatedUrl && (!reapeatedUrl[0] || reapeatedUrl.user)) {
    let urlid;
    let reapeatedId;
    do {
      urlid = Math.floor(Math.random() * process.env.MAX_URLS_LENGTH);
      urlid = urlid.toString(16);
      reapeatedId = await UrlManager.findValue({ urlid });

      console.log(reapeatedId[0].user);
    } while (reapeatedId[0]);

    //(!) Validation
    response = await UrlManager.create({ urlid, url, user });
  } else {
    response = reapeatedUrl;
  }

  //(!) Universal manager -> model response
  response !== null
    ? res.status(200).json(response[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postRedirect;
