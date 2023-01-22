
module.exports = {
  verbose: true,
  
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.m?jsx?$": "babel-jest"
    },
    
    resetMocks: false,
    testEnvironment: "jsdom",
    transformIgnorePatterns: [
      "node_modules/(?!firebase/auth/.*)","node_modules/(?!firebase/app/.*)"
  ],
    
}



