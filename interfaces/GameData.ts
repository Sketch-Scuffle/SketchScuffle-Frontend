export interface GameData {
  roomId: string;
  timer: {
    secondsLeft: number;
  };
  usersData: {
    userObject: {
      id: string;
      nick: string;
      avatarUrl: string;
    };
    userStats: { userId: string; points: number; active: boolean };
  }[];

  roomSettings: {
    currentDrawer: string;
    category: {
      name: string;
      logoUrl: string;
    };
    nextDrawer: string;
  };
}
