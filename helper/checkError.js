/**
 * 
 * @param {(object)} res -Response Object 
 * @param {(boolean)} variable -Control variable 
 * @param {(string | string[])} message - Error message
 * @param {number} code - Error 
 */

const checkError = (res, variable, message, code = 400) => {
    
    if(variable){
        if(typeof message == String){
            return res.status(code).json({ errors: [{message}] })
        }
        else {
            return res.status(code).json({ errors: message });
        }
    }
}

module.exports = checkError; 