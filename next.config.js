// next.config.mjs
const isProd = process.env.NODE_ENV === 'production';

export default {
  basePath: isProd ? '/laganipatel' : '', // Replace 'my-portfolio' with your GitHub repo name
  assetPrefix: isProd ? '/laganipatel/' : '', // Same as above
};