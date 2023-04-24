import StorageHelper from "./StorageHelper";

const SessionHelper = StorageHelper
SessionHelper.storage = sessionStorage;

export default SessionHelper;