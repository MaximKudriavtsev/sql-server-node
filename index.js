import google from 'googleapis';
import { PROJECT, INSTANCE, DATABASE } from './logins';

const sqlAdmin = google.sqladmin('v1beta4');

const authorize = (callback) => {
  google.auth.getApplicationDefault(function(err, authClient) {
    if (err) {
      console.error('authentication failed: ', err);
      return;
    }
    if (authClient.createScopedRequired && authClient.createScopedRequired()) {
      var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
      authClient = authClient.createScoped(scopes);
    }
    callback(authClient);
  });
};

authorize((authClient) => {
  const request = {
    // Project ID of the project that contains the instance.
    project: PROJECT,
    // Database instance ID. This does not include the project ID.
    instance: INSTANCE,
    // Name of the database in the instance.
    database: DATABASE,
    auth: authClient,
  };

  sqlAdmin.databases.get(request, (err, response) => {
    if (err) {
      console.error(err);
      return;
    }

    console.log(JSON.stringify(response, null, 2));
  });
});