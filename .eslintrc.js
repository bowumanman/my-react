module.exports = {
    "extends": "react-app",
    "rules": { // 0 不验证   1  警告   2  错误
        "jsx-quotes": 1,
        "react/jsx-closing-bracket-location": 1,    // 遵循JSX语法缩进/格式
        "react/jsx-boolean-value": 1,               // 如果属性值为 true, 可以直接省略
        "react/no-string-refs": 1,      // 总是在Refs里使用回调函数
        "react/self-closing-comp": 1,    // 对于没有子元素的标签来说总是自己关闭标签
        "react/jsx-no-bind": 0,          // 当在 render() 里使用事件处理方法时，提前在构造函数里把 this 绑定上去
        "react/sort-comp": 1,            // 按照具体规范的React.createClass 的生命周期函数书写代码
        "react/jsx-pascal-case": 1,        // React模块名使用帕斯卡命名，实例使用骆驼式命名
        "jsx-a11y/alt-text": [ 0, {
            "elements": [ "img", "object", "area", "input[type=\"image\"]" ],
            "img": ["Image"],
            "object": ["Object"],
            "area": ["Area"],
            "input[type=\"image\"]": ["InputImage"]
        }],
        "no-console": 1,//禁止使用console
        "no-alert": 2,//禁止使用alert confirm prompt
        "no-class-assign": 2,//禁止给类赋值
        "no-const-assign": 2,//禁止修改const声明的变量
        "no-dupe-keys": 2,//在创建对象字面量时不允许键重复 {a:1,a:1}
        "no-duplicate-case": 2,//switch中的case标签不能重复
        "no-empty": 2,//块语句中的内容不能为空
        "no-empty-character-class": 2,//正则表达式中的[]内容不能为空
        "no-extra-semi": 2,//禁止多余的冒号
        "key-spacing": [2, { "beforeColon": false, "afterColon": true }], // 对象字面量语法中key和value之间的空白，冒号前不要留空格，冒号后面需留一个空格
        "no-func-assign": 2,//禁止重复的函数声明
        "no-irregular-whitespace": 2,//不能有不规则的空格
        "no-labels": 2,//禁止标签声明
        "no-multi-spaces": 1,//不能用多余的空格
        "no-multiple-empty-lines": [1, {"max": 2}],//空行最多不能超过2行
        "no-redeclare": 2,//禁止重复声明变量
        "no-regex-spaces": 2,//禁止在正则表达式字面量中使用多个空格 /foo bar/
        "no-use-before-define": 2,//未定义前不能使用
        "no-var": 0,//禁用var，用let和const代替
        "comma-spacing": 2,//逗号前后的空格
        "semi-spacing": [0, {"before": false, "after": true}],//分号前后空格
        "semi": [2, "always"], // 默认配置always，要求在行末加上分号
        "space-unary-ops": [0, { "words": true, "nonwords": false }],//一元运算符的前/后要不要加空格
        "use-isnan": 2,//禁止比较时使用NaN，只能用isNaN()
        "quotes": [2, "single", "avoid-escape"], // 双引号、单引号、反义符（ECMAScript2015）。规定了字符串定义的方式
        "array-bracket-spacing": [0, "never"], // 数组前后是否加空格
        "block-spacing": [2, "always"], //
        "space-infix-ops": [2, {"int32Hint": true}], //操作符周围的空格 
    }
  }