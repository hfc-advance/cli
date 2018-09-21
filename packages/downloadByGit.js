
//? 从git上面下载资源
const download = require('download-git-repo');

module.exports = (address, target) => {
  return new Promise((resolve, reject) => {    
    target = target || process.cwd();
    download(`github:${address}`, target, {clone: false}, error => {
      if (error) reject(error);
      else resolve(target);
    });
  });
}