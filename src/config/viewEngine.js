import express from "express";

let configViewEngine = (app) => {
    app.use(express.static("./src/public"));
    app.set("view engine", "ejs");
    app.set("views", "./src/views") //các file ejs phải ở đây
}
module.exports = configViewEngine;