

//! 模板地址
let templateAddress = '13916253446/build-library-template';
const spinner = require('ora');
const download = require('../../packages/downloadByGit.js');
const copy = require('../../packages/copyTemplate.js');

module.exports = function (libraryName) {
  //? loading 下载模板
  let downloadSpinner = spinner({
    text: 'download template...',
    color: 'yellow',
    spinner: 'point'
  });
  downloadSpinner.start();
  download(templateAddress)
    .then(target => {
      downloadSpinner.succeed();
      //? loading 编译模板
      let transfromSpinner = spinner({
        text: 'transform template...',
        color: 'blue',
        spinner: 'hearts'
      });
      transfromSpinner.start();
      copy({
        libraryName
      }, target)
        .then(() => {
          transfromSpinner.succeed();
        })
        .catch(err => {
          transfromSpinner.fail(err);
        })
    })
    .catch(err => {
      downloadSpinner.fail(err);
    })
}