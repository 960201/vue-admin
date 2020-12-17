/**
 * 校验是否是外部 SVG 链接
 * @param {*} path
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
