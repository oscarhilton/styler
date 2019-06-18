let apiUrl;
let mediaUrl;
let pdfUrl;
let talentApiUrl;

switch (DEPLOY_ENV) {
  case "dev":
    apiUrl = "https://dev-admin-skybet.mobile-5.com/api/";
    mediaUrl = "https://dev-admin-skybet.mobile-5.com";
    talentApiUrl = "https://dev-api-skybet.mobile-5.com/api/";
    pdfUrl = "https://dev-api-skybet.mobile-5.com/";
    break;

  case "qa":
    apiUrl = "https://qa-admin-skybet.mobile-5.com/api/";
    mediaUrl = "https://qa-admin-skybet.mobile-5.com";
    talentApiUrl = "https://dev-api-skybet.mobile-5.com/api/";
    pdfUrl = "https://dev-api-skybet.mobile-5.com/";
    break;

  case "stage":
    apiUrl = "https://stg-admin-skybet.mobile-5.com/api/";
    mediaUrl = "https://stg-admin-skybet.mobile-5.com";
    talentApiUrl = "https://stg-api-skybet.mobile-5.com/api/";
    pdfUrl = "https://stg-api-skybet.mobile-5.com/";
    break;

  default:
    apiUrl = "https://stg-admin-skybet.mobile-5.com/api/";
    mediaUrl = "https://stg-admin-skybet.mobile-5.com";
    talentApiUrl = "https://stg-api-skybet.mobile-5.com/api/";
    pdfUrl = "https://stg-api-skybet.mobile-5.com/";
};

export default {
  apiUrl,
  mediaUrl,
  pdfUrl,
  talentApiUrl,
};
