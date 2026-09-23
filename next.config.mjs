/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  experimental: {
    serverActions: {
      // Room for a 4MB resume; Vercel rejects request bodies above 4.5MB anyway.
      bodySizeLimit: '4.5mb',
    },
  },
  // Only same-origin requests (the application form's Server Action): block any
  // fetch/XHR/WebSocket or iframe to another origin.
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
