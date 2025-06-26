const jsdom = require('jsdom')
const { JSDOM } = jsdom

async function CodeCountry(req, res) {
  try {
    const response = await fetch('https://countrycode.org/')
    const html = await response.text()
    const dom = new JSDOM(html)
    const document = dom.window.document

    const table = document.querySelector('table') // Ambil tabel pertama
    if (!table) throw new Error('Not found')

    const rows = table.querySelectorAll('tbody tr')
    const listCountry = Array.from(rows).map((row) => {
      const name = row.querySelector('td:nth-child(1) a')?.textContent?.trim()
      const code = row.querySelector('td:nth-child(2)')?.textContent?.trim()
      const code_iso = row
        .querySelector('td:nth-child(3)')
        ?.textContent?.trim()
        .toLowerCase()

      return { name, code, code_iso }
    })

    return res.status(200).json({
      message: 'success',
      data: {
        image: 'https://flagcdn.com/{size}/{country-code}.png',
        listCountry,
      },
    })
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    })
  }
}

module.exports = CodeCountry
