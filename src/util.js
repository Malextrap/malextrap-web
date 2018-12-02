class Util {


    /**
     * This function converts first char to Uppercase
     * @param {String} word word
     * @returns {String} word
     */
    static firstUppercase(word){
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


}

export default Util;