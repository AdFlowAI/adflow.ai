import type { Maybe } from "./app";

export interface UserProps {
  createdAt: Date;
  email: string;
  id: string;
  image: Maybe<string>;
  name: string;
  updatedAt: Maybe<Date>;
}
