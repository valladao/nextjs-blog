/* eslint-disable import/no-anonymous-default-export */
var Airtable = require("airtable")
var base = new Airtable({ apiKey: "keyxG2h8neqz2Xcp5" }).base(
  "app3olAoYwbcz3rYm"
)

export default (req, res) => {
  if (!req.method === "POST") {
    res.status(405).end() //Method Not Allowed
    return
  }

  const { name, email, blogurl, feedurl, notes } = req.body

  base("Table 1").create(
    [{ fields: { name, email, blogurl, feedurl, notes } }],
    (err) => {
      if (err) {
        console.error(err)
        res.status(500).end()
        return
      }
    }
  )

  res.json({
    success: true,
  })
}
