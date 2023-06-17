const items = [
    {id: 1, name: 'miro',},
    {id: 2, name: 'Sandra',},
    {id: 3, name: 'marko',},
]

exports.handler = async function (event, context) {
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    }
}