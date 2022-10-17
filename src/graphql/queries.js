/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPointEvent = /* GraphQL */ `
  query GetPointEvent($id: ID!) {
    getPointEvent(id: $id) {
      id
      eventType
      pointID
      Players {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPointEvents = /* GraphQL */ `
  query ListPointEvents(
    $filter: ModelPointEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPointEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        eventType
        pointID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPointEvents = /* GraphQL */ `
  query SyncPointEvents(
    $filter: ModelPointEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPointEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        eventType
        pointID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPoint = /* GraphQL */ `
  query GetPoint($id: ID!) {
    getPoint(id: $id) {
      id
      winQ
      duration
      PointEvents {
        nextToken
        startedAt
      }
      gameID
      Players {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPoints = /* GraphQL */ `
  query ListPoints(
    $filter: ModelPointFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPoints(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        winQ
        duration
        gameID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPoints = /* GraphQL */ `
  query SyncPoints(
    $filter: ModelPointFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPoints(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        winQ
        duration
        gameID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
      id
      name
      date
      hardCap
      softCap
      duration
      Points {
        nextToken
        startedAt
      }
      Roster {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      gameRosterId
    }
  }
`;
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        date
        hardCap
        softCap
        duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        gameRosterId
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        date
        hardCap
        softCap
        duration
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        gameRosterId
      }
      nextToken
      startedAt
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      number
      role
      pointeventID
      rosters {
        nextToken
        startedAt
      }
      pointID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        number
        role
        pointeventID
        pointID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPlayers = /* GraphQL */ `
  query SyncPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        number
        role
        pointeventID
        pointID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRoster = /* GraphQL */ `
  query GetRoster($id: ID!) {
    getRoster(id: $id) {
      id
      name
      Players {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRosters = /* GraphQL */ `
  query ListRosters(
    $filter: ModelRosterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRosters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRosters = /* GraphQL */ `
  query SyncRosters(
    $filter: ModelRosterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRosters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getRosterPlayer = /* GraphQL */ `
  query GetRosterPlayer($id: ID!) {
    getRosterPlayer(id: $id) {
      id
      playerID
      rosterID
      player {
        id
        name
        number
        role
        pointeventID
        pointID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      roster {
        id
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listRosterPlayers = /* GraphQL */ `
  query ListRosterPlayers(
    $filter: ModelRosterPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRosterPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        playerID
        rosterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRosterPlayers = /* GraphQL */ `
  query SyncRosterPlayers(
    $filter: ModelRosterPlayerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRosterPlayers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        playerID
        rosterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
