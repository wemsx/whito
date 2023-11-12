const axios = require('axios');
var typeCheck = /[a-l]/;

var hitoRandom = function (minNumber, maxNumber) {
    var range = maxNumber - minNumber;
    var random = Math.random();
    return minNumber + Math.round(random * range);
};

exports.get = (reqCdn, reqType, callback) => {
    var preType = (((typeof(reqType) == 'undefined' || (reqType == '')) == true)) ? 'c' : reqType
    var type = typeCheck.test(preType) == true && preType.length == 1 ? preType : 'c';
    var preCdn = (typeof(reqCdn) == 'undefined') == true ? 'gcore' : reqCdn;
    switch (preCdn) {
        case 'jsd':
            var cdn = `https://cdn.jsdelivr.net/npm/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
        /*case 'raw':
            var cdn = `https://cdn.jsdelivr.net/npm/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;*/
        case 'gcore':
            var cdn = `https://gcore.jsdelivr.net/npm/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
        case 'fastly':
            var cdn = `https://gcore.jsdelivr.net/npm/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
        case 'test1':
            var cdn = `https://test1.jsdelivr.net/npm/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
        case 'unpkg':
            var cdn = `https://unpkg.com/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
        case 'eleme':
            var cdn = `https://npm.elemecdn.com/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
        default:
            var cdn = `https://gcore.jsdelivr.net/npm/hito-bundles@latest/sentences/hito-alpha/${type}.json`
            break;
    };
    switch (type) { case 'a': var num = hitoRandom(0, 1330); break; case 'b': var num = hitoRandom(0, 89); break; case 'c': var num = hitoRandom(0, 611); break; case 'd': var num = hitoRandom(0, 1437); break; case 'e': var num = hitoRandom(0, 1051); break; case 'f': var num = hitoRandom(0, 708); break; case 'g': var num = hitoRandom(0, 603); break; case 'h': var num = hitoRandom(0, 149); break; case '1': var num = hitoRandom(0, 691); break; case 'j': var num = hitoRandom(0, 76); break; case 'k': var num = hitoRandom(0, 198); break; case 'l': var num = hitoRandom(0, 21); break; case 'all': var num = hitoRandom(0, 6976); break; }
    axios.get(cdn)
        .then(function (res) {
            return callback(null, res.data.bundle[num].hitokoto);
        })
        .catch(function (error) {
            console.log(error);
            return callback(error, null);
        });
};