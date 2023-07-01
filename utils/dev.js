const hito = require("../main");


console.time('test')

hito.get("eleme", "l", (error, sentence) => {
    if (error) {throw error}
    console.log(sentence);
    console.timeEnd('test')
});
