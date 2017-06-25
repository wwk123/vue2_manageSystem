const Models = require('./schema')
module.exports = function(apiRoutes) {
    apiRoutes.get('../src/components/page/VueTable.vue',(req, res) => {
        Models.Sensor.find({}, (err, doc) => {
            if (err) {
                console.log(err)
            } else if (doc) {
                res.send(JSON.stringify(doc))
            }
        })
    });
    apiRoutes.post('../src/components/page/Markdown.vue', (req, res) => {
        Models.Customer(req.body)
        .save()
        .then(() => {
            res.status(200).end()
        })
        .catch(() => res.status(500).end())
    });    
}