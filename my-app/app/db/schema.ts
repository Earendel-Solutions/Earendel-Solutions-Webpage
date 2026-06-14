import {integer, pgTable, uuid, varchar } from "drizzle-orm/pg-core";

export const consultationTable = pgTable("consultations", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  service: varchar({ length: 255 }).notNull(),
  description: varchar({ length: 1000 }).notNull(),
});
