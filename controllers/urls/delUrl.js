const UrlManager = require(`../../${process.env.MANAGER}/UrlManager`);

async function delTemplate(req, res) {
  console.log("URL controller del");
  const data = req.params;
  //(!) Validation
  const url = UrlManager.delete(data);
  //(!) Universal manager -> model response
  url
    ? res.status(200).json({ success: "Entry deleted" })
    : res.status(404).json({ error: "Try again" });
}

module.exports = delTemplate;
