const path = require("path");

module.exports = {
    "@mocks": path.resolve(__dirname, "../__mocks__/"),
    "@pages": path.resolve(__dirname, "../src/pages/"),
    "@containers": path.resolve(__dirname, "../src/containers/"),
    "@components": path.resolve(__dirname, "../src/components/"),
    "@types": path.resolve(__dirname, "../src/types/"),
    "@styles": path.resolve(__dirname, "../src/styles/"),
    "@": path.resolve(__dirname, "../src"),
};
