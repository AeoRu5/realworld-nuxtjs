export const is = type => target => Object.prototype.toString.call(target) === `[object ${type}]`
export const isObject = is('Object')
export const isArray = is('Array')
export const isFunction = is('Function')
export const isUndefined = is('Undefined')
export const isNull = is('Null')

export const isUndef = target => isNull(target) || isUndefined(target)
export const isDef = target => !isNull(target) && !isUndefined(target)
export const isEmptyObject = target => Object.keys(target).length === 0