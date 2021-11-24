export default {
  // plausible analytics configuration
  plausible: {
    // domain as pure domain like 'domain.com'
    domain: 'ecofly.at',
    // URL with full path where plausible scripts like '/api/script.js' can be fetched
    apiHost: 'https://www.ecofly.at/plausible',
  },
  sanity: {
    // project ID of sanity project
    projectId: 'dooyj23g',
    dataset: 'production',
    withCredentials: 'true'
  },
  // baseURL of site like 'https://www.domain.com'
  hostname: 'https://www.ecofly.at',
  // just a global property as it is used on two different places in the config
  routesNameSeparator: '___',
  ecoflyTitleAppendix: ' | Ecofly',
  // next line to don't generate 404s if editors forget and image and ignore the warning https://stackoverflow.com/questions/5775469/whats-the-valid-way-to-include-an-image-with-no-src
  fallbackImageSrc: 'data:,'
}
