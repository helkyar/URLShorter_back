const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function postRedirect(req, res) {
  console.log("Redirect controller post");
  const { url } = req.body;
  // Create random url
  let shorter = Math.floor(Math.random() * process.env.MAX_URLS);
  shorter = shorter.toString(16);
  //(!) Validation
  const template = await UrlManager.create({ [shorter]: url });
  //(!) Universal manager -> model response
  template !== null
    ? res.status(200).json(template[0])
    : res.status(400).json({ error: "Wrong format" });
}

module.exports = postRedirect;
