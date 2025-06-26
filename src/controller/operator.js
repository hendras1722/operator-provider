const operator = require('../../public/operator.json')

function Operator(req, res) {
  const phoneNumber = req.params.id
  let bestMatch = null
  let longestPrefix = ''

  operator.operators.forEach((op) => {
    const attributes = op.operator.attributes
    attributes.prefix.forEach((p) => {
      if (phoneNumber.startsWith(p) && p.length > longestPrefix.length) {
        longestPrefix = p
        bestMatch = attributes
      }
    })
  })

  if (bestMatch) {
    const result = { ...bestMatch }
    delete result.prefix
    return res.status(200).json({
      message: 'success',
      data: result,
    })
  }
}

module.exports = Operator
