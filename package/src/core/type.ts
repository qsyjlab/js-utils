
export const toTypeString = (value: unknown): string => Object.prototype.toString.call(value)

export const toRawType = (value: unknown): string => {
  
  return toTypeString(value).slice(8, -1)
}
export const isObject = (val: unknown): val is Record<any, any> =>
  val !== null && typeof val === 'object'


export const isPlainObject = (value) => toTypeString(value) === "[object Object]";
export const isArray = (value) => toTypeString(value) === "[object Array]";
export const isDate = (value) => toTypeString(value) === "[object Date]";
export const isString = (value) => toTypeString(value) === "[object String]";
export const isUndefined = (value) =>
  toTypeString(value) === "[object Undefined]";
export const isNull = (value) => toTypeString(value) === "[object Null]";
export const isSymbol = (value) => toTypeString(value) === "[object Symbol]";
export const isMap = (value) => toTypeString(value) === "[object Map]";
export const isSet = (value) => toTypeString(value) === "[object Set]";
export const isFunction = (value) =>
  toTypeString(value) === "[object Function]";
export const isBoolean = (value) => toTypeString(value) === "[object Boolean]";
export const isRegExp = (value) => toTypeString(value) === "[object RegExp]";
export const toString = (value) => toTypeString(value);
