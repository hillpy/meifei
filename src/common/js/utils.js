/**
 * 工具函数类
 */
export default class {
  /**
   * 深度拷贝
   *
   * @param {*} obj
   */
  static deepCopy(obj) {
    let newObj = obj instanceof Array ? [] : {}
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          newObj[key] = this.deepCopy(obj[key])
        } else {
          newObj[key] = obj[key]
        }
      }
    }
    return newObj
  }

  /**
   * 更新数据对象
   *
   * @param {*} obj
   * @param {*} newObj
   */
  static updateObj (obj, newObj) {
    for (let key in newObj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object') {
          obj[key] = this.updateObj(obj[key], newObj[key]);
        } else {
          obj[key] = newObj[key];
        }
      }
    }
    return obj
  }
}
