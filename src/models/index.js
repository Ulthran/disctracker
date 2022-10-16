// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const EventType = {
  "COMPLETION": "COMPLETION",
  "TURNOVER": "TURNOVER",
  "BLOCK": "BLOCK",
  "STALL": "STALL",
  "GOAL": "GOAL"
};

const PlayerRole = {
  "CUTTER": "CUTTER",
  "HANDLER": "HANDLER",
  "FLEX": "FLEX"
};

const { PointEvent, Player, Roster, Point, Game, RosterPlayer } = initSchema(schema);

export {
  PointEvent,
  Player,
  Roster,
  Point,
  Game,
  RosterPlayer,
  EventType,
  PlayerRole
};