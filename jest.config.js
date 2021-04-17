module.exports = {
  clearMocks: true,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: [
    "**/__tests__/**/*.test.ts?(x)",
  ],
  testPathIgnorePatterns: ["/node_modules/"],
};
