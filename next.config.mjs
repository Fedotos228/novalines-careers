/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  // The site is fully static: block any fetch/XHR/WebSocket or iframe to another origin.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [{ key: 'Content-Security-Policy', value: "connect-src 'self'; frame-src 'none'" }],
      },
    ]
  },
}

export default nextConfig
