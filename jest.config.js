/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  "moduleNameMapper": {
    "axios": "axios/dist/node/axios.cjs",
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
  setupFilesAfterEnv: [
    "<rootDir>/setupTests.ts"
  ],
};