export default class Auth {
    private static KEY_INDEX: string = "cf_yt_key";

    public static setKey(key: string): void {
        window.localStorage.setItem(Auth.KEY_INDEX, key);
    }

    public static getKey(): string | null {
        return window.localStorage.getItem(Auth.KEY_INDEX);
    }

    public static deleteKey() {
        window.localStorage.removeItem(Auth.KEY_INDEX);
    }
}