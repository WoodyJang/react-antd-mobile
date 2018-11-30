// .eslintrc.js
module.exports = {
  root: true,
  parserOptions: {
    // 检查 ES6 语法
    parser: "babel-eslint",
    sourceType: "module",
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    }
  },
  env: {
    es6: true,
    node: true,
    jquery: true,
    amd: true,
    commonjs: true,
    browser: true
  },
  extends: ["eslint:recommended", "airbnb-base"],
  rules: {
    // 指定数组的元素之间要以空格隔开(, 后面)
    "array-bracket-spacing": [2, "never"],
    // 禁止或强制在单行代码块中使用空格(禁用)
    "block-spacing": [2, "never"],
    // 控制逗号在行尾出现还是在行首出现 (默认行尾)
    "comma-style": [2, "last"],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "computed-property-spacing": [2, "never"],
    // 文件末尾强制换行
    "eol-last": 2,
    indent: [
      2,
      4,
      {
        SwitchCase: 1
      }
    ],
    // 强制在 JSX 属性中一致地使用双引号或单引号
    "jsx-quotes": [1, "prefer-single"],
    // 要求构造函数首字母大写
    "new-cap": 2,
    // 要求调用无参构造函数时有圆括号
    "new-parens": 2,
    // 要求或禁止 var 声明语句后有一行空行
    "newline-after-var": [1, "always"],
    // 不允许空格和 tab 混合缩进
    "no-mixed-spaces-and-tabs": 2,
    // 禁用行尾空格
    "no-trailing-spaces": 2,
    // 要求对象字面量属性名称用引号括起来
    "quote-props": [2, "as-needed"],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [2, "single", "avoid-escape"],
    // 要求或禁止使用分号而不是 ASI（这个才是控制行尾部分号的，）
    semi: [2, "always"],
    // 强制所有控制语句使用一致的括号风格
    curly: 2,
    // 使用 === 替代 == allow-null允许null和undefined==
    eqeqeq: [2, "smart"],
    // 禁止在没有类型检查操作符的情况下与 null 进行比较
    "no-eq-null": 0,
    // 禁止在循环中出现 function 声明和表达式
    "no-loop-func": 1,
    // 禁用不必要的嵌套块
    "no-lone-blocks": 1,
    "arrow-spacing": [
      2,
      {
        before: true,
        after: true
      }
    ],
    // 禁止修改类声明的变量
    "no-class-assign": 2,
    // 禁止修改 const 声明的变量
    "no-const-assign": 2,
    // 禁止在构造函数中，在调用 super() 之前使用 this 或 super
    "no-this-before-super": 2,
    // 禁止出现未使用过的变量
    "no-unused-vars": 0,
    // 双峰驼命名格式
    camelcase: 0,
    // 禁用 console
    "no-console": 0,
    // 禁用 alert、confirm 和 prompt
    "no-alert": 0,
    // 不允许在变量定义之前使用它们
    "no-use-before-define": 0,
    "class-methods-use-this": 0,
    // 要求 require() 出现在顶层模块作用域中
    "global-require": 0,
    // 强制一行的最大长度
    "max-len": [
      1,
      {
        code: 200
      }
    ],
    // 不允许对 function 的参数进行重新赋值
    "no-param-reassign": 0,
    // 强制操作符使用一致的换行符
    "operator-linebreak": 0,
    // 要求使用 const 声明那些声明后不再被修改的变量
    "prefer-const": 0,
    // 禁止可以在有更简单的可替代的表达式时使用三元操作符
    "no-unneeded-ternary": 2,
    // 不允许多个空行
    "no-multiple-empty-lines": [2, {
      "max": 2
    }],
  }
};
