import nextVitals from 'eslint-config-next/core-web-vitals';

export default [
  ...nextVitals,
  {
    files: ['components/ThemeProvider.js', 'components/header.js'],
    // Existing client-only theme hydration and navigation reset; review separately.
    rules: { 'react-hooks/set-state-in-effect': 'warn' },
  },
  { ignores: ['.next/**', 'node_modules/**', 'docs/**', 'public/**'] },
];
