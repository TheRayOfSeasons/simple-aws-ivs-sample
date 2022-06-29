import { defineConfig, loadEnv } from 'vite';

export default ({ mode }) => {
  process.env = {...process.env, ...loadEnv(mode, process.cwd())};

  return defineConfig({
    root: './',
    server: {
      port: '8080',
    },
    publicDir: 'public',
    build: {
      assetsInlineLimit: '256',
      commonjsOptions: {
        exclude: ['amazon-ivs-player/dist/assets']
      }
    },
  });
}
