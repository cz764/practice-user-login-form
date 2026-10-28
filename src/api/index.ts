import type { LoginResponse } from "../data";

const ERROR_RATE = 0.1;
const DELAY = 1000;

export function auth(
  userName: string,
  password: string,
): Promise<LoginResponse> {
  console.log({
    userName,
    password,
  });

  return new Promise((resolve, reject) => {
    const isError = Math.random() < ERROR_RATE;
    setTimeout(() => {
      if (isError) {
        reject(`reject error`);
      }
      resolve({
        accesssToken: "testToken",
      });
    }, DELAY);
  });
}
