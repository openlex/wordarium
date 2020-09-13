import { sleep } from "@/utils";

export class AuthApi {
    static login = async (name: string) => {
        await sleep(1000);
        localStorage.setItem("name", name);
    };
    static logout = async () => {
        await sleep(1000);
        localStorage.removeItem("name");
    };

    static isLoggedIn = async (): Promise<boolean> => {
        await sleep(1000);
        return !!localStorage.getItem("name");
    };

    static fetchUser = async (): Promise<string | null> => {
        await sleep(1000);
        return localStorage.getItem("name");
    };
}
