
  /**
   * Sample JavaScript code for youtube.search.list
   * See instructions for running APIs Explorer code samples locally:
   * https://developers.google.com/explorer-help/guides/code_samples#javascript
   */
  const gapi = window.gapi = window.gapi || {};

  export const authenticate = () => {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then((res) => {
          console.log(res)
          console.log(res.Zi)
          console.log(res.Zi.access_token)
        })
        .then(loadClient)
        .catch((err) => console.error("Error signing in", err));
  }
  export const loadClient = () => {
    gapi.client.setApiKey("AIzaSyCnIM8Yy-Wd_VUr5Dzin4DDvahdHpo2_aM");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(() => { console.log("GAPI client loaded for API"); },
              (err) => { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  const execute = () => {
    return gapi.client.youtube.search.list({
      "part": "snippet",
      "maxResults": 25,
      "q": "surfing"
    })
        .then((response) => {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
              },
              function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "813658477414-kvmpovph40a2rnk3ocu3qnto2p9k5vf6.apps.googleusercontent.com"});
  });

  export default execute;

