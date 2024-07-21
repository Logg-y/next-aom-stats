import { MajorGods, MajorGodsPortraitPath } from "@/types/MajorGods";
import { RecordedGamePlayerMetadata } from "@/types/RecordedGame";
import Image from "next/image";

export default function TeamTile({ playerData }: { playerData: RecordedGamePlayerMetadata }) {
  const godName = MajorGods[playerData.civ];
  const godPortraitPath = MajorGodsPortraitPath[godName];
  return (
    <div className="flex flex-col items-center my-auto px-2 w-32">
      <Image
        src={godPortraitPath}
        alt={"super cool god description"}
        width={64}
        height={64}
        className="rounded-full border-2 border-amber-400"
      ></Image>
      <div className="text-center truncate w-30 font-medium">
        {playerData.name}
      </div>
      <div className="text-center truncate w-30 font-medium italic">
        Rank: 1450
      </div>
    </div>
  );
}
