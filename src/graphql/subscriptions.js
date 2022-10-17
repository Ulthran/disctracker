/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePointEvent = /* GraphQL */ `
  subscription OnCreatePointEvent {
    onCreatePointEvent {
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
export const onUpdatePointEvent = /* GraphQL */ `
  subscription OnUpdatePointEvent {
    onUpdatePointEvent {
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
export const onDeletePointEvent = /* GraphQL */ `
  subscription OnDeletePointEvent {
    onDeletePointEvent {
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
export const onCreatePoint = /* GraphQL */ `
  subscription OnCreatePoint {
    onCreatePoint {
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
export const onUpdatePoint = /* GraphQL */ `
  subscription OnUpdatePoint {
    onUpdatePoint {
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
export const onDeletePoint = /* GraphQL */ `
  subscription OnDeletePoint {
    onDeletePoint {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreatePlayer = /* GraphQL */ `
  subscription OnCreatePlayer {
    onCreatePlayer {
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
export const onUpdatePlayer = /* GraphQL */ `
  subscription OnUpdatePlayer {
    onUpdatePlayer {
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
export const onDeletePlayer = /* GraphQL */ `
  subscription OnDeletePlayer {
    onDeletePlayer {
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
export const onCreateRoster = /* GraphQL */ `
  subscription OnCreateRoster {
    onCreateRoster {
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
export const onUpdateRoster = /* GraphQL */ `
  subscription OnUpdateRoster {
    onUpdateRoster {
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
export const onDeleteRoster = /* GraphQL */ `
  subscription OnDeleteRoster {
    onDeleteRoster {
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
export const onCreateRosterPlayer = /* GraphQL */ `
  subscription OnCreateRosterPlayer {
    onCreateRosterPlayer {
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
export const onUpdateRosterPlayer = /* GraphQL */ `
  subscription OnUpdateRosterPlayer {
    onUpdateRosterPlayer {
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
export const onDeleteRosterPlayer = /* GraphQL */ `
  subscription OnDeleteRosterPlayer {
    onDeleteRosterPlayer {
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
