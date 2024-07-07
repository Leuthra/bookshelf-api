import Hapi from '@hapi/hapi';
import Inert from '@hapi/inert';
import H2o2 from '@hapi/h2o2';
import routes from './src/routes.js';

const init = async () => {
  const server = Hapi.server({
    port: 3000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*']
      }
    }
  });

  await server.register([Inert, H2o2]);

  // API routes
  server.route(routes);

  // Proxy VitePress requests to Vite's dev server
  server.route({
    method: '*',
    path: '/{param*}',
    handler: {
      proxy: {
        host: 'localhost',
        port: 3000,
        protocol: 'http',
        passThrough: true
      }
    }
  });

  await server.start();
  console.log(`Server running on ${server.info.uri}`);
};

init();
