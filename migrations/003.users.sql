CREATE TABLE IF NOT EXISTS users (
  id UUID PRIMARY KEY NOT NULL,
  date_created TIMESTAMP WITH TIME ZONE DEFAULT (now() at time zone 'utc'),
  date_updated TIMESTAMP WITH TIME ZONE DEFAULT (now() at time zone 'utc'),
  email text NOT NULL,
  password text NOT NULL
);
CREATE UNIQUE INDEX ON users (email);