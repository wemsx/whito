const axios = require('axios');
const version = '1.3.1';
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
            var cdn = `https://cdn.jsdelivr.net/npm/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
        /*case 'raw':
            var cdn = `https://cdn.jsdelivr.net/npm/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;*/
        case 'gcore':
            var cdn = `https://gcore.jsdelivr.net/npm/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
        case 'fastly':
            var cdn = `https://gcore.jsdelivr.net/npm/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
        case 'test1':
            var cdn = `https://test1.jsdelivr.net/npm/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
        case 'unpkg':
            var cdn = `https://unpkg.com/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
        case 'eleme':
            var cdn = `https://npm.elemecdn.com/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
        default:
            var cdn = `https://gcore.jsdelivr.net/npm/hito-bundles@${version}/sentences/hito-alpha/${type}.json`
            break;
    };
    switch (type) { case 'a': var num = hitoRandom(0, 1304); break; case 'b': var num = hitoRandom(0, 83); break; case 'c': var num = hitoRandom(0, 555); break; case 'd': var num = hitoRandom(0, 1366); break; case 'e': var num = hitoRandom(0, 996); break; case 'f': var num = hitoRandom(0, 652); break; case 'g': var num = hitoRandom(0, 562); break; case 'h': var num = hitoRandom(0, 124); break; case '1': var num = hitoRandom(0, 680); break; case 'j': var num = hitoRandom(0, 67); break; case 'k': var num = hitoRandom(0, 166); break; case 'l': var num = hitoRandom(0, 14); break; case 'all': var num = hitoRandom(0, 6581); break; }
    axios.get(cdn)
        .then(function (res) {
            return callback(null, res.data.bundle[num].hitokoto);
        })
        .catch(function (error) {
            console.log(error);
            return callback(error, null);
        });
};