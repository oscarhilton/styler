let apiUrl;
let mediaUrl;
let pdfUrl;
let talentApiUrl;

switch (DEPLOY_ENV) {
  case "dev":
    apiUrl = "";
    mediaUrl = "";
    talentApiUrl = "";
    pdfUrl = "";
    break;

  case "qa":
    apiUrl = "";
    mediaUrl = "";
    talentApiUrl = "";
    pdfUrl = "";
    break;

  case "stage":
    apiUrl = "";
    mediaUrl = "";
    talentApiUrl = "";
    pdfUrl = "";
    break;

  default:
    apiUrl = "";
    mediaUrl = "";
    talentApiUrl = "";
    pdfUrl = "";
};

export default {
  apiUrl,
  mediaUrl,
  pdfUrl,
  talentApiUrl,
};
