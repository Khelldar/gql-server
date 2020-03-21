CREATE TABLE IF NOT EXISTS events (
  id SERIAL PRIMARY KEY,
  date_time TIMESTAMP WITH TIME ZONE DEFAULT (now() at time zone 'utc'),
  event_type text NOT NULL,
  aggregate_type text NOT NULL,
  aggregate_id text NOT NULL,
  actor text NOT NULL,
  payload JSON NOT NULL
);
CREATE INDEX ON events (actor);
CREATE INDEX ON events (aggregate_type);
CREATE INDEX ON events (aggregate_id);