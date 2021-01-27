module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  // Jest transformations -- this adds support for TypeScript
  // using ts-jest
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx$": "babel-jest"
    // "^.+\\.(ts|js)x?$": "ts-jest"
  },

  //ignore css imported in tsx
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },

  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
  
  modulePaths: [
    "<rootDir>"
  ],
  
  moduleDirectories: [
    '<rootDir>/node_modules',
    '<rootDir>/node_modules/design-react-kit/',
    '<rootDir>/src',
    '<rootDir>/utils',
  ],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",

  // Module file extensions for importing
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],

  transformIgnorePatterns: [
    "<rootDir>/node_modules/(?!(design-react-kit)/)"
  ]
};
