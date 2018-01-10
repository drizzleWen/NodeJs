const crypto = require('crypto');

module.exports = {
    MD5_SUFFIX: "jdklajldjkl#$!$&^$%&ladklas|dadl;a,离开的dSDAL213",
    md5: function(str) {
        var md5 = crypto.createHash('md5');
        md5.update(str);
        return md5.digest('hex');
    }
}