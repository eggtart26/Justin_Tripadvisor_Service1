module.exports = {

  // Automatically clear mock calls and instances between every test
  clearMocks: true,

  // Collect coverage information while executing the test
  collectCoverage: true,

  // The directory where Jest should output its coverage files
  coverageDirectory: 'coverage',

  coveragePathIgnorePatterns: [
    '/node_modules/',
  ],

  moduleDirectories: [
    'node_modules',
  ],

  moduleFileExtensions: ['js', 'jsx'],

  testEnvironmentOptions: {
    'enzymeAdapter': 'react16',
  },

  
};
