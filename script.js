window.fnFromLib1()

const obj = {a: 1}

console.log(`lodash from lib2: get a from ${JSON.stringify(obj)}`, _.get(obj, 'a'))