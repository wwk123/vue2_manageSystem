const mongoose = require('mongoose');
// 引入mongoose依赖
const Schema = mongoose.Schema;
//创建一个schmea实例
const sensorSchma = new Schema({
    id: {type: Object},
    temp: {type: Number},
    hum: {type: Number},
    lux: {type: Number},
    time: {type: String}
});

// 创建一个Model, meigeschema实例对应一个model
const Models = {
    Sensor: mongoose.model('Sensor', sensorSchma)
}
// 创建一个mongodb连接
var url = 'mongodb://localhost:27017/myproject';
mongoose.connect(url)

const db = mongoose.connection

db.on('error', function () {
    console.log('数据库连接失败')
})

db.once('open', function () {
    console.log('数据库以及连接')
})

// 导出项目模块models接口
module.exports = Models