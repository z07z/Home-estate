module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: env('DATABASE_HOST'),
        port: env.int('DATABASE_PORT'),
	srv: env.bool('DATABASE_SRV', false),
        database: env('DATABASE_NAME'),
        username: env('DATABASE_USERNAME'),
        password: env('DATABASE_PASSWORD'),
      },
      options: {
       ssl: true,
       sslCA: env('DATABASE_SSL'),
      },

    },
  },
});
