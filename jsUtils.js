module.exports = {
    formatTime: function(jsDate) {
        var dd = jsDate.getDate();
        var mm = jsDate.getMonth() + 1; // january is 0
        var yyyy = jsDate.getFullYear();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        var formatDate = yyyy + '.' + mm + '.' + dd;
        return formatDate;
    },
    formatTitle: function(inputStr) {
        var resultStr = "";
        for (var i = 0; i < inputStr.length; i++) {
            if (inputStr[i] == '^') {
                resultStr += " ";
            } else {
                resultStr += inputStr[i];
            }
        }
        return resultStr;
    }
};