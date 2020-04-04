// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

const URL = {
  APPLICATION_PROTOCOL: 'http://',
  APPLICATION_SERVER_DOMAIN_NAME: 'localhost',
  // APPLICATION_SERVER_DOMAIN_NAME: '103.21.52.30',
  // APPLICATION_SERVER_PORT: ':8086',
  APPLICATION_SERVER_PORT: ':8082',
  APPLICATION_NAME: '/rocket',
};
export const environment = {
  production: false,
  API_BASE_URL: URL.APPLICATION_PROTOCOL + URL.APPLICATION_SERVER_DOMAIN_NAME +
    URL.APPLICATION_SERVER_PORT + URL.APPLICATION_NAME,
};