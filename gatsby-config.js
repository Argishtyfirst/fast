module.exports = {
  siteMetadata: {
      title: 'Global Innovation Forum',
      subtitle: `Fetch Data From Local WP Install`,
  },
  plugins: [
      'gatsby-plugin-react-helmet',
      {
          resolve: "gatsby-source-wordpress",
          options: {
              baseUrl: "gif.fast.foundation",
              protocol: "http",
              hostingWPCOM: false,
              useACF: true,
              verboseOutput: true
          }
     
        }
  ],}