/**
 * Return boolean true if year leap or false if year not leap
 * @param {int} year - year in 4 numbers (eg. 1991 or 2020)
 * @return {boolean} return boolean value
 */
export default (year) => ((year/4).toString().search(/[.]/g) === -1)
