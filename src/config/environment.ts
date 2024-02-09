import env from "env-var";
const { get } = env;

export const FROM_EMAIL = get("FROM_EMAIL").required().asString();
export const CONTACT_EMAIL = get("CONTACT_EMAIL").required().asString();
