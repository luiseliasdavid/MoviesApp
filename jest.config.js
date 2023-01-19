
module.exports = {
  verbose: true,
  testEnvironment: 'node',  
    setupFiles: ['./jest.setup.js',"jest-localstorage-mock"],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
      "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    transform: {
      "^.+\\.m?jsx?$": "babel-jest"
    },
    testEnvironment: "jest-environment-jsdom-sixteen",
    resetMocks: false,
    
    
}



