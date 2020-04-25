module.exports = {
  servers: {
    one: {
      host: 'x.x.x.x',
      username: 'root',
      password: 'abcd'
    }
  },

  app: {
    name: 'app',
    path: '../../app',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
      debug: false
    },

    env: {
      ROOT_URL: 'https://meteor.app',
      MONGO_URL: 'mongodb://localhost/meteor'
    },

    docker: {
      image: 'abernix/meteord:node-12-base', //required for meteor 1.6
      stopAppDuringPrepareBundle: false,
    },
    deployCheckWaitTime: 120,
    enableUploadProgressBar: true
  },
  proxy: {
    domains: 'meteor.app,www.meteor.app',
    ssl: {
      forceSSL: true,
      letsEncryptEmail: 'akmnitt+meteorapp@gmail.com'
    }
  },

  mongo: {
    port: 27017,
    version: '4.2.5',
    servers: {
      one: {}
    }
  }
};