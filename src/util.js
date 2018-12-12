class Util {


    /**
     * This function converts first char to Uppercase
     * @param {String} word word
     * @returns {String} word
     */
    static firstUpperCase(word){
        return word.charAt(0).toUpperCase() + word.substr(1, word.length)
    }


    /**
     * This function returns if word includes other word ignoring case
     * @param {String} word1
     * @param {String} word2
     * @returns {boolean} includes?
     */
    static includesIgnoreCase(word1, word2){
        return word1.toUpperCase().includes(word2.toUpperCase())
    }


    /**
     * This function returns if word equals other word ignoring case
     * @param {String} word1
     * @param {String} word2
     * @returns {boolean} includes?
     */
    static equalsIgnoreCase(word1, word2){
        return word1.toUpperCase() == word2.toUpperCase()
    }


    /**
     * This function returns if number is even or not
     * @param {Number} number
     * @returns {boolean}
     */
    static isEven(number){
        return number == parseFloat(number) ? !(number % 2) : void 0
    }


}

export default Util;