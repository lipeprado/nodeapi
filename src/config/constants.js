const devConfig = {
  MONGO_URL: 'mongodb://admin:trocalogo@ds249325.mlab.com:49325/nodeapi',
};
const testConfig = {
  MONGO_URL: 'mongodb://admin:trocalogo@ds249325.mlab.com:49325/nodeapi',
};
const prodConfig = {
  MONGO_URL: 'mongodb://admin:trocalogo@ds249325.mlab.com:49325/nodeapi',
};
const defaultConfig = {
  PORT: process.env.PORT || 3000,
};

function envConfig(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'test':
      return testConfig;
    default:
      return prodConfig;
  }
}

export default{
  ...defaultConfig,
  ...envConfig(process.env.NODE_ENV),
};
