const report = require("multiple-cucumber-html-reporter");
const fs = require ("fs");

report.generate({
    jsonDir: "json/logs",
    reportPath: "./cucumber-rerport/",
    metaData:{
        browser:{
            name: "chrome",
            version: 1.0,
    },
        device: "local test machine",
        plataform: {
            name: "macos",
    },
},
    reportName: "GD Report",
    customData:{
        title: "Run info",
        data: [
            { label: "Project", value: "GD-Cypress-Cucumber"},
            { label: "Environment", value: "Local"},
        ],
    },
});