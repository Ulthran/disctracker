// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventType = {
  "COMPLETION": "COMPLETION",
  "TURNOVER": "TURNOVER",
  "BLOCK": "BLOCK",
  "GOAL": "GOAL"
};

const PlayerRole = {
  "CUTTER": "CUTTER",
  "HANDLER": "HANDLER",
  "FLEX": "FLEX"
};

const { PointEvent, Point, Game, Player, Roster } = initSchema(schema);

export {
  PointEvent,
  Point,
  Game,
  Player,
  Roster,
  EventType,
  PlayerRole
};