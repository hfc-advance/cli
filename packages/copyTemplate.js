//? 复制模板并通过模板编译
const copy = require('kopy');
module.exports = function (answers, src, target) {
  src = src || target
  target = target || src
  return copy(src, target, {
    data: {
      ...answers
    },
    template: require('jstransformer-handlebars')
  })
}