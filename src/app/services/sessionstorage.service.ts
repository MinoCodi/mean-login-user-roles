import { Inject } from "@angular/core";
import { SESSION_STORAGE, StorageService } from "angular-webstorage-service";

const STORAGE_KEY = "mean_login_user_roles";

export class SessionStorageService {
    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {}

    public removeFromStorage(storageKey = STORAGE_KEY) {
        this.storage.remove(storageKey);
    }

    public getFromStorage(storageKey = STORAGE_KEY) {
        return this.storage.get(storageKey) || null;
    }

    public setInStorage(storageKey = STORAGE_KEY, storageValue: any) {
        return this.storage.set(storageKey, storageValue);
    }
}
