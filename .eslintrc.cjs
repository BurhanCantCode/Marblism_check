module.exports = {
  extends: 'next/core-web-vitals',
  plugins: ['@marblism'],
  rules: {
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-key': 'warn',
    '@next/next/no-img-element': 'off',
    '@marblism/no-react-query-in-functions': 'error',
    'react/no-unescaped-entities': 'off',
  },
}
