import { TimerObject } from "@/interfaces/TimerObject";
import { UserObject } from "@/interfaces/UserObject";
import { UserStats } from "@/interfaces/UserStats";
import { RoomProperties } from "@/interfaces/RoomProperties";
export interface RoomObject {
  event: string;
  data: {
    roomId: string;
    timer: TimerObject;
    playersData: {
      usersObjects: [UserObject];
      usersStats: [UserStats];
    }[];
    roomSettings: RoomProperties;
  };
}
