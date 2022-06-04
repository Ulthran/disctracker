import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum EventType {
  COMPLETION = "COMPLETION",
  TURNOVER = "TURNOVER",
  BLOCK = "BLOCK",
  GOAL = "GOAL"
}

export enum PlayerRole {
  CUTTER = "CUTTER",
  HANDLER = "HANDLER",
  FLEX = "FLEX"
}



export declare class PointEvent {
  readonly id: string;
  readonly eventType: EventType | keyof typeof EventType;
  constructor(init: ModelInit<PointEvent>);
  static copyOf(source: PointEvent, mutator: (draft: MutableModel<PointEvent>) => MutableModel<PointEvent> | void): PointEvent;
}

export declare class Point {
  readonly id: string;
  readonly winQ: boolean;
  readonly duration?: number | null;
  constructor(init: ModelInit<Point>);
  static copyOf(source: Point, mutator: (draft: MutableModel<Point>) => MutableModel<Point> | void): Point;
}

export declare class Game {
  readonly id: string;
  readonly name: string;
  readonly date?: string | null;
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

export declare class Player {
  readonly id: string;
  readonly name: string;
  readonly number?: number | null;
  readonly role?: PlayerRole | keyof typeof PlayerRole | null;
  constructor(init: ModelInit<Player>);
  static copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

export declare class Roster {
  readonly id: string;
  readonly name: string;
  constructor(init: ModelInit<Roster>);
  static copyOf(source: Roster, mutator: (draft: MutableModel<Roster>) => MutableModel<Roster> | void): Roster;
}