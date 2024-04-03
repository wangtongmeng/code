// 引入 css
import './style/style1.css'
// 引入 less
import './style/style2.less'

import { sum } from './math'

const sumRes = sum(10, 50)
console.log('sumRes', sumRes)

// 引入第三方模块
import _ from 'lodash'
console.log(_.each)

// 引入图片
function insertImgElem(imgFile) {
    const img = new Image()
    img.src = imgFile
    document.body.appendChild(img)
}
import imgFile1 from './img/1.png'
insertImgElem(imgFile1)
import imgFile2 from './img/2.jpeg'
insertImgElem(imgFile2)


// 引用动态数据，懒加载（webpack默认支持，不需要配置）
// setTimeout(() => {
//     // 适合文件比较大的情况
//     // 定义一个chunk
//     import('./dynamic-data.js').then(res => {
//         console.log(res.default.message); // 注意这里的 default
//     })
// }, 1500);

// IgnorePlugin 避免引入哪些模块
import moment from 'moment'
import 'moment/locale/zh-cn' // 手动引入中文语言包
moment.locale('zh-cn') // 设置语言为中文
console.log('locale', moment.locale()) // zh-cn
console.log('date', moment().format('ll')); // 2024年4月3日


// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         // 我们更新math里的代码，会触发热更新，这之外的还是会刷新页面
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }

