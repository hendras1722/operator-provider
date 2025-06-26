const operator = require('../../public/operator.json')

function Operator(req, res) {
  try {
    const data = operator.operators.map((item) => item.operator.attributes)
    const prefix = data.map((item) => item.prefix)
    const findNumber = prefix.findIndex(
      (item) => item.filter((item) => req.params.id.includes(item)).length > 0
    )
    const result = data[findNumber]
    return res.status(200).json({
      message: 'success',
      data: result,
    })
  } catch (error) {
    res.json({
      message: 'something wrong',
    })
  }
}

module.exports = Operator
