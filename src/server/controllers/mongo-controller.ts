import queryMythRecs from "../services/mongo-service";
import { IRecordedGame } from "@/db/mongo/model/RecordedGameModel";

// todo - add pagination params
export async function getMythRecs(): Promise<IRecordedGame[]> {
  console.log("in getMythRecs start");
  let ret = await queryMythRecs();
  console.log("in getMythRecs, after waiting");
  return ret
}
