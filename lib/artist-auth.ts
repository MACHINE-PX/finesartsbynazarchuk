import "server-only";

import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "node:crypto";

const SESSION_COOKIE = "artist_admin_session";

function adminUser() {
  return process.env.ARTIST_ADMIN_USER || "artist";
}

function adminPassword() {
  return process.env.ARTIST_ADMIN_PASSWORD || "Nazarchuk2026!";
}

function sessionSecret() {
  return process.env.ARTIST_ADMIN_SECRET || "change-this-secret-before-publishing";
}

function sign(value: string) {
  return createHmac("sha256", sessionSecret()).update(value).digest("hex");
}

function sessionValue() {
  const user = adminUser();
  return `${user}.${sign(user)}`;
}

function constantTimeEqual(left: string, right: string) {
  const leftBuffer = Buffer.from(left);
  const rightBuffer = Buffer.from(right);

  if (leftBuffer.length !== rightBuffer.length) {
    return false;
  }

  return timingSafeEqual(leftBuffer, rightBuffer);
}

export function verifyAdminCredentials(username: string, password: string) {
  return (
    constantTimeEqual(username, adminUser()) &&
    constantTimeEqual(password, adminPassword())
  );
}

export async function createAdminSession() {
  const cookieStore = await cookies();

  cookieStore.set(SESSION_COOKIE, sessionValue(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const value = cookieStore.get(SESSION_COOKIE)?.value;

  return Boolean(value && constantTimeEqual(value, sessionValue()));
}
