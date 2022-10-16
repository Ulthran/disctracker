import { ModelInit, MutableModel } from "@aws-amplify/datastore";

export enum EventType {
  COMPLETION = "COMPLETION",
  TURNOVER = "TURNOVER",
  BLOCK = "BLOCK",
  STALL = "STALL",
  GOAL = "GOAL"
}

export enum PlayerRole {
  CUTTER = "CUTTER",
  HANDLER = "HANDLER",
  FLEX = "FLEX"
}

type PointEventMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RosterMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PointMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GameMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type RosterPlayerMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class PointEvent {
  readonly id: string;
  readonly eventType: EventType | keyof typeof EventType;
  readonly pointID: string;
  readonly Players?: (Player | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<PointEvent, PointEventMetaData>);
  static copyOf(source: PointEvent, mutator: (draft: MutableModel<PointEvent, PointEventMetaData>) => MutableModel<PointEvent, PointEventMetaData> | void): PointEvent;
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly number?: number | null;
  readonly role?: PlayerRole | keyof typeof PlayerRole | null;
  readonly pointeventID?: string | null;
  readonly rosters?: (RosterPlayer | null)[] | null;
  readonly pointID?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Player, PlayerMetaData>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player, PlayerMetaData>) => MutableModel<Player, PlayerMetaData> | void): Player;
}

export declare class Roster {
  readonly id: string;
  readonly name: string;
  readonly Players?: (RosterPlayer | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Roster, RosterMetaData>);
  static copyOf(source: Roster, mutator: (draft: MutableModel<Roster, RosterMetaData>) => MutableModel<Roster, RosterMetaData> | void): Roster;
}

export declare class Point {
  readonly id: string;
  readonly winQ: boolean;
  readonly duration?: string | null;
  readonly PointEvents?: (PointEvent | null)[] | null;
  readonly gameID: string;
  readonly Players?: (Player | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Point, PointMetaData>);
  static copyOf(source: Point, mutator: (draft: MutableModel<Point, PointMetaData>) => MutableModel<Point, PointMetaData> | void): Point;
}

export declare class Game {
  readonly id: string;
  readonly name: string;
  readonly date?: string | null;
  readonly hardCap?: string | null;
  readonly softCap?: string | null;
  readonly duration?: string | null;
  readonly Points?: (Point | null)[] | null;
  readonly Roster?: Roster | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly gameRosterId?: string | null;
  constructor(init: ModelInit<Game, GameMetaData>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game, GameMetaData>) => MutableModel<Game, GameMetaData> | void): Game;
}

export declare class RosterPlayer {
  readonly id: string;
  readonly player: Player;
  readonly roster: Roster;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<RosterPlayer, RosterPlayerMetaData>);
  static copyOf(source: RosterPlayer, mutator: (draft: MutableModel<RosterPlayer, RosterPlayerMetaData>) => MutableModel<RosterPlayer, RosterPlayerMetaData> | void): RosterPlayer;
}