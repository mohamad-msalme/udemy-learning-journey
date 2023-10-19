module.exports = {
  setupFilesAfterEnv: ["<rootDir>/src/jest-setup.ts"],
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/src/components/$1",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.[tj]sx?$",
  modulePathIgnorePatterns: ["<rootDir>/dist/", "<rootDir>/build/"],
};
