const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function postRedirect(req, res) {
  console.log("Redirect controller post");
  let { url, user } = req.body;

  console.log("PREV SEARCH", user);

  url = url.split(/https?:\/\//).filter((e) => e !== "")[0];
  url = url.replace(/\s/g, "");

  let response;
  const repeatedUrl = await UrlManager.findValue({ url });

  console.log("POST SEARCH", repeatedUrl);

  if (user || (repeatedUrl && (!repeatedUrl[0] || repeatedUrl[0].user))) {
    let urlid;
    let repeatedId;
    do {
      console.log("INSIDE DO WHILE", repeatedId);
      urlid = Math.floor(Math.random() * process.env.MAX_URLS_LENGTH);
      urlid = urlid.toString(16);
      repeatedId = await UrlManager.findValue({ urlid });
    } while (repeatedId[0]);

    //(!) Validation
    response = await UrlManager.create({ urlid, url, user });
  } else {
    response = repeatedUrl;
  }

  console.log(response);
  //(!) Universal manager -> model response
  response && response[0]
    ? res.status(200).json(response[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postRedirect;
