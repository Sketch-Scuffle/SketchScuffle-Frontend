import { useEffect } from "react";
import { axiosInstance } from "@/pages/api/Axios-Instance";
import { useRouter } from "next/router";

export default function Lobby() {
  const router = useRouter();
  useEffect(() => {
    const fetchDate = async () => {
      const response = await axiosInstance.post("/game/create");
      console.log(response.data.roomId);
      await router.replace(`/game/${response.data?.roomId}`);
    };
    fetchDate();
  }, []);
  return <h1>Lobby</h1>;
}
