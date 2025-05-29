import { drizzle } from "drizzle-orm/neon-http";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const db = drizzle(process.env.DATABASE_URL!);
