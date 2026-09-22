import nextCoreWebVitals from 'eslint-config-next/core-web-vitals'

const noExternalRequests = {
  files: ['src/**/*.{ts,tsx}'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          { name: 'axios', message: 'The site must not make external API requests.' },
          { name: 'qs', message: 'The site must not make external API requests.' },
        ],
        patterns: [{ group: ['@tanstack/*'], message: 'The site must not make external API requests.' }],
      },
    ],
    'no-restricted-globals': [
      'error',
      { name: 'fetch', message: 'The site must not make external API requests; read from src/lib/content.ts.' },
      { name: 'XMLHttpRequest', message: 'The site must not make external API requests.' },
    ],
  },
}

const eslintConfig = [{ ignores: ['public/**'] }, ...nextCoreWebVitals, noExternalRequests]

export default eslintConfig
