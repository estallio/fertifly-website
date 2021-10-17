export default {
  // plausible analytics configuration
  plausible: {
    // domain as pure domain like 'domain.com'
    domain: 'ecofly.at',
    // URL with full path where plausible scripts like '/api/script.js' can be fetched
    apiHost: 'https://www.estallio.at/plausible',
  },
  sanity: {
    // project ID of sanity project
    projectId: 'dooyj23g',
    dataset: 'production',
    withCredentials: 'true'
  },
  // baseURL of site like 'https://www.domain.com'
  hostname: 'https://www.estallio.at',
  // just a global property as it is used on two different places in the config
  routesNameSeparator: '___',
}
