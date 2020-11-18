var Messages = {
    // Add here your messages for the default language.
    // Generate a similar file with a language suffix containing the translated messages.
    // key1 : message1,
  };

  var wlInitOptions = {
    // Options to initialize with the WL.Client object.
    // For initialization options please refer to IBM MobileFirst Platform Foundation Knowledge Center.
     mfpContextRoot : '/mfp', // "mfp" is the default context root in the MobileFirst Development server
      applicationId : 'com.cimb.dealer' // Replace with your own app id/package name.
  };

  function wlCommonInit() {
    app.testServerConnection();
  }

  var app = {
    //test server connection
    testServerConnection: function testServerConnection() {
      WLAuthorizationManager.obtainAccessToken().then(
        function(accessToken) {
          // alert(JSON.stringify(accessToken));
        },
        function(error) {
          // alert(JSON.stringify(error));
        }
      );
    }
  };
