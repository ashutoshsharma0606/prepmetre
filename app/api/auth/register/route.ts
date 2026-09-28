import { NextResponse } from "next/server";
import { query } from "@/lib/db";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
    }

    const existingUser = await query("SELECT * FROM \"User\" WHERE email = $1", [email]);
    if (existingUser.rows.length > 0) {
      return NextResponse.json({ error: "User already exists with this email" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const role = email === "sharmagroup2026business@gmail.com" ? "ADMIN" : "STUDENT";

    const result = await query(
      'INSERT INTO "User" (id, name, email, password, role, "createdAt") VALUES (gen_random_uuid(), $1, $2, $3, $4, NOW()) RETURNING id',
      [name || "", email, hashedPassword, role]
    );

    return NextResponse.json({ message: "User registered successfully", userId: result.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}