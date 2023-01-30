const hito = require("../main");

hito.get("eleme", "l", (error, sentence) => {
    if (error) {throw error}
    console.log(sentence);
});
