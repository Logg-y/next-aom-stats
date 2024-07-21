import mongoose, { model, Mongoose } from "mongoose";
import RecordedGameSchema from "../schemas/recordedGame/RecordedGameSchema";
import { RecordedGameMetadata } from "@/types/RecordedGame";

export interface IRecordedGame extends RecordedGameMetadata {
    createdAt: Date;
  }
const RecordedGameModel: mongoose.Model<IRecordedGame> = mongoose.models.RecordedGames ?? model<IRecordedGame>("RecordedGames", RecordedGameSchema);

export default RecordedGameModel;
