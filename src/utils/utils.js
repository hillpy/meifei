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
    let newObj = obj instanceof Array ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === "object") {
          newObj[key] = this.deepCopy(obj[key]);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
}
