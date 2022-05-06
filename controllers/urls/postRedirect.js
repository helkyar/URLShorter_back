const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function postRedirect(req, res) {
  console.log("Redirect controller post");
  let { url, user } = req.body;

  console.log(url, user);

  url = url.split(/https?:\/\//).filter((e) => e !== "")[0];

  let response;
  const reapeatedUrl = await UrlManager.findValue({ url });

  if (reapeatedUrl && (!reapeatedUrl[0] || reapeatedUrl[0].user)) {
    let urlid;
    let reapeatedId;
    do {
      urlid = Math.floor(Math.random() * process.env.MAX_URLS_LENGTH);
      urlid = urlid.toString(16);
      reapeatedId = await UrlManager.findValue({ urlid });
    } while (reapeatedId[0]);

    //(!) Validation
    response = await UrlManager.create({ urlid, url, user });
  } else {
    response = reapeatedUrl;
  }

  console.log(response);
  //(!) Universal manager -> model response
  response !== null
    ? res.status(200).json(response[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postRedirect;
