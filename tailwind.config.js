const withMT = require("@material-tailwind/html/utils/withMT");

module.exports = {

    content: ["./public/index.html", "./src/**/*.{html,js}"],


    theme: {
        fontFamily: {
            'Yekan': ['YekanB'],
        },
        extend: {},

    },

    plugins: [],

};

module.exports = withMT({
    content: ["./index.html"],
    theme: {
        fontFamily: {
            'Yekan': ['YekanB'],
        },
        extend: {},
    },
    plugins: [],
});