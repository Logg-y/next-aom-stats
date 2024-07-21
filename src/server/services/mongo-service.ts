import RecordedGameModel, { IRecordedGame } from "@/db/mongo/model/RecordedGameModel";
import getMongoClient from "@/db/mongo/mongo-client";
import mongoose from "mongoose";

export default async  function queryMythRecs(): Promise<IRecordedGame[]> {
  await getMongoClient();
  try {
    const result = await RecordedGameModel.find().lean()
      .sort({ createdAt: -1, })
      .limit(12);
    const serialisable: Array<IRecordedGame & {_id?: mongoose.Types.ObjectId}> = result;
    for (const obj of serialisable)
    {
      delete obj._id;
    }
    return serialisable;
    /*
    const result = await RecordedGameModel.find()
      .sort({ createdAt: -1 })
      .limit(12);
    const objects = result.map((obj) => { return obj.toObject(); });
    const serialisable: Array<IRecordedGame & {_id?: mongoose.Types.ObjectId}> = objects;
    for (const obj of serialisable)
    {
      delete obj._id;
    }
    return serialisable;    
    */
  } catch (err) {
    console.error(err);
    throw new Error("Failed to fetch Myth recordings: " + err);
  }
}