const path = require("path");

module.exports = {
    "@mocks": path.resolve(__dirname, "__mocks__/"),
    "@containers": path.resolve(__dirname, "src/containers/"),
    "@components": path.resolve(__dirname, "src/components/"),
    "@types": path.resolve(__dirname, "src/types/"),
    "@": path.resolve(__dirname, "src"),
};
