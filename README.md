# cli 3.0

```bash
## Clone project
git clone git@github.com:782042369/love-baby.git

## Install dependencies
npm install

## 建议不要用cnpm  安装有各种诡异的bug 可以通过如下操作解决npm速度慢的问题
npm install --registry=https://registry.npm.taobao.org

## serve with hot reload at localhost:9528
npm run dev

## build for production with minification
npm run build

## postcss-pxtorem 设置说明  https://segmentfault.com/a/1190000010947054
rootValue  设计稿 / 10

unitPrecision  原来是转换成rem后保留的小数点位数。。。

propList  是一个存储哪些将被转换的属性列表，这里设置为['*']全部，假设需要仅对边框进行设置，
          可以写['*', '!border*']意思是排除带有border的属性，当然这里会有一个问题，
          也许有时候不想对border其他样式处理例如border-radius所以也不是很好。

selectorBlackList  则是一个对css选择器进行过滤的数组，比如你设置为['fs']，那例如fs-xl类名，
                   里面有关px的样式将不被转换，这里也支持正则写法。

minPixelValue  是一个非常不错的选项，我设置了2，意思是所有小于12px的样式都不被转换
```
