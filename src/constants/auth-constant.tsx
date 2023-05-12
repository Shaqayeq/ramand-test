import { UserManagerSettings, WebStorageStateStore } from "oidc-client";

const clientId: string = "ramand-app";

const userManagerSettings: UserManagerSettings = {
  automaticSilentRenew: true,
  client_id: clientId,
  loadUserInfo: true,
  post_logout_redirect_uri: "http://localhost:3000/logout",
  redirect_uri: "http://localhost:3000/login",
  response_type: "code",
  scope: "openid profile ",
  userStore: new WebStorageStateStore({ store: localStorage }),
};

export { userManagerSettings, clientId };