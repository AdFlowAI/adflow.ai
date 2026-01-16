export const envs = ["NEXT_PUBLIC_BASE_URI"] as const;

type Envs = (typeof envs)[number];

declare global {
  namespace NodeJS {
    interface ProcessEnv extends Record<Envs, string> {
      readonly NEXT_PUBLIC_BASE_URI: string;
    }
  }
}

export {};
