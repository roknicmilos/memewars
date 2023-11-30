import { APIClient } from "@/api/APIClient";
import { War } from "@/api/models/War";


export const WarService = {

  async getWars(): Promise<War[]> {
    const response = await APIClient.get("/wars/");
    return response.data.results;
  },

};
