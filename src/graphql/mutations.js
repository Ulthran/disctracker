/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPointEvent = /* GraphQL */ `
  mutation CreatePointEvent(
    $input: CreatePointEventInput!
    $condition: ModelPointEventConditionInput
  ) {
    createPointEvent(input: $input, condition: $condition) {
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
export const updatePointEvent = /* GraphQL */ `
  mutation UpdatePointEvent(
    $input: UpdatePointEventInput!
    $condition: ModelPointEventConditionInput
  ) {
    updatePointEvent(input: $input, condition: $condition) {
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
export const deletePointEvent = /* GraphQL */ `
  mutation DeletePointEvent(
    $input: DeletePointEventInput!
    $condition: ModelPointEventConditionInput
  ) {
    deletePointEvent(input: $input, condition: $condition) {
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
export const createPoint = /* GraphQL */ `
  mutation CreatePoint(
    $input: CreatePointInput!
    $condition: ModelPointConditionInput
  ) {
    createPoint(input: $input, condition: $condition) {
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
export const updatePoint = /* GraphQL */ `
  mutation UpdatePoint(
    $input: UpdatePointInput!
    $condition: ModelPointConditionInput
  ) {
    updatePoint(input: $input, condition: $condition) {
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
export const deletePoint = /* GraphQL */ `
  mutation DeletePoint(
    $input: DeletePointInput!
    $condition: ModelPointConditionInput
  ) {
    deletePoint(input: $input, condition: $condition) {
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
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
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
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
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
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createRoster = /* GraphQL */ `
  mutation CreateRoster(
    $input: CreateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    createRoster(input: $input, condition: $condition) {
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
export const updateRoster = /* GraphQL */ `
  mutation UpdateRoster(
    $input: UpdateRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    updateRoster(input: $input, condition: $condition) {
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
export const deleteRoster = /* GraphQL */ `
  mutation DeleteRoster(
    $input: DeleteRosterInput!
    $condition: ModelRosterConditionInput
  ) {
    deleteRoster(input: $input, condition: $condition) {
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
export const createRosterPlayer = /* GraphQL */ `
  mutation CreateRosterPlayer(
    $input: CreateRosterPlayerInput!
    $condition: ModelRosterPlayerConditionInput
  ) {
    createRosterPlayer(input: $input, condition: $condition) {
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
export const updateRosterPlayer = /* GraphQL */ `
  mutation UpdateRosterPlayer(
    $input: UpdateRosterPlayerInput!
    $condition: ModelRosterPlayerConditionInput
  ) {
    updateRosterPlayer(input: $input, condition: $condition) {
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
export const deleteRosterPlayer = /* GraphQL */ `
  mutation DeleteRosterPlayer(
    $input: DeleteRosterPlayerInput!
    $condition: ModelRosterPlayerConditionInput
  ) {
    deleteRosterPlayer(input: $input, condition: $condition) {
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
