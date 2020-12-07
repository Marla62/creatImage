//引入qr-image module
var qr = require('qr-image');
const path = require('path');
const fs = require('fs');
/**
 * 生成二维码并保存到本地项目中
 * @param {*} qrInfo: https://leibosite.github.io 二维码字符串内容
 * @param {*} qrPath: github.png 文件名
 *
 */
var generatorQrImage = function(qrInfo, qrPath) {
  var qr_svg = qr.image(qrInfo, 'H', { type: 'png' });
  var qrPa = path.join(__dirname, qrPath);
  qr_svg.pipe(fs.createWriteStream(qrPa));
  fs.exists(qrPa, function(isExist) {
    if (isExist) {
      console.log('generator success!');
    } else {
      console.log('generator fail');
    }
  });
};
// 二维码内容
let qrInfo = 'https://marla62.github.io/Json.github.io/'
// 二维码生成后的名称
let qrPath = 'github.png'
// 生成图片
generatorQrImage(qrInfo, qrPath);

