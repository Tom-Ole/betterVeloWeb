import { sqliteTable, text, integer, customType } from 'drizzle-orm/sqlite-core';

const roleEnum = customType<{ data: "admin" | "user"  }>({
	dataType() {
	  return "text"; // Store as text in SQLite
	},
	toDriver(value) {
	  return value; // No conversion needed, since it's already a string
	},
	fromDriver(value) {
	  return value as "admin" | "user";
	},
  });

export const user = sqliteTable('user', {
	id: text('id').primaryKey(),
	username: text('username').notNull().unique(),
	passwordHash: text('password_hash').notNull(),
	role: roleEnum('role').notNull().default('user')
});

export const session = sqliteTable('session', {
	id: text('id').primaryKey(),
	userId: text('user_id').notNull().references(() => user.id),
	expiresAt: integer('expires_at', { mode: 'timestamp' }).notNull()
});

export type Session = typeof session.$inferSelect;

export type User = typeof user.$inferSelect;
