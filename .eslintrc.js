module.exports = {
  extends: [require.resolve('@umijs/fabric/dist/eslint')],
  globals: {
    ANT_DESIGN_PRO_ONLY_DO_NOT_USE_IN_YOUR_PRODUCTION: true,
    page: true,
  },
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'no-console': 0,
    'spaced-comment': 0,
  },
};
