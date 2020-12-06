const { prompt } = require("inquire");
const db = require("./db");
const title = require("Title");
require("console.table");

init();

function init() {
    const title = title({ name: "Employee Manager" }).render();
    console.log(title);

    prompts();
}