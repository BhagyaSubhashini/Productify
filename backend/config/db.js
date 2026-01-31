import { neon } from "@neondatabase/serverless";
import dotenv from "dotenv";

dotenv.config();

const { PGUSER, PGPASSWORD, PGHOST, PGDATABASE } = process.env;

// creates a SQL connection using our env variables
export const sql = neon(
  `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require&channel_binding=require`
)

// this sql function we export is used as a tagged template literal, which allows us to write SQL queries in a safe way

// psql 'postgresql://neondb_owner:npg_APjvYFk5mgo0@ep-frosty-base-ahjvczbc-pooler.c-3.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require'
