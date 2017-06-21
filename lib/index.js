/**
 * Expose formatQs
 */

module.exports = formatQs

/**
 * formatQs
 */

function formatQs (params) {
  return Object
    .keys(params)
    .map(function (key) {
      return key + '=' + encodeURIComponent(params[key])
    })
    .join('&')
}
