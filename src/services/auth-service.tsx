import { UserManager, UserSettings } from "oidc-client";
import { userManagerSettings, clientId } from "../constants/auth-constant";


const userManager = new UserManager(userManagerSettings);

const getUserSettings = (): UserSettings | null => {
    const oidcStorageString = localStorage.getItem(`oidc.user:${clientId}`) ?? "";
    if (oidcStorageString === "") return null;
    const userSettings: UserSettings = JSON.parse(oidcStorageString) as UserSettings;
    return userSettings;
};

const signinRedirect = (): void => {
    userManager.signinRedirect({}).catch(() => { });
};

const isAuthenticated = (): boolean => {
    const userSettings = getUserSettings();
    if (userSettings === null) return false;
    return true;
};

export {
    signinRedirect,
    isAuthenticated,
};