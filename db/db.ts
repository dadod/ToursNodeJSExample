import pgPromise from "pg-promise";

export const pgp = pgPromise();

// postgres://{db_user}:postgres@{ip:port}/{db_name}
const devURL = "postgres://tourdb_admin:postgres@localhost:5432/tourdb"

export const db = pgp(process.env.DATABASE_URL || devURL);