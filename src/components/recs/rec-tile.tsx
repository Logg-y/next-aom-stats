"use client";

import { SquarePen } from "lucide-react";
import RecTitle from "./rec-title";
import RecMap from "./rec-map";
import RecFooter from "./rec-footer";
import { useContext, useState } from "react";
import { WindowContext } from "../provider/window-provider";
import { IRecordedGame } from "@/types/RecordedGame";
import { useTeams } from "@/hooks/useTeams";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Button } from "../ui/button";
import { toast } from "../ui/use-toast";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "../ui/dialog";
import { Filters } from "@/types/Filters";
import { ExtendedSession } from "./recorded-games";
import { useSession } from "next-auth/react";

interface RecTileProps {
  rec: IRecordedGame;
  showMap?: boolean;
  refetchRecs: (filters: Filters) => void;
  filters: Filters;
}

export default function RecTile({
  rec,
  showMap = true,
  refetchRecs,
  filters,
}: RecTileProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [fileName, setFileName] = useState(rec.gameTitle);
  const [dialogOpen, setDialogOpen] = useState(false);
  const windowSize = useContext(WindowContext);
  const { leftTeams, rightTeams } = useTeams(rec);
  const [isProcessing, setIsProcessing] = useState(false);
  const { data: session } = useSession() as { data: ExtendedSession | null };
  const loggedInUserId = session?.userId;
  const isRecGameAuthor = rec.uploadedByUserId == session?.userId;

  async function handleEditGameTitle(fileName: string, gameGuid: string) {
    setIsProcessing(true);
    const response = await fetch(`/api/recordedGames`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ gameTitle: fileName, gameGuid, userId: loggedInUserId }),
    });
    if (response.ok) {
      toast({
        title: "Game Title updated successfully",
        duration: 3000,
      });
      refetchRecs(filters);
    } else if (response.status === 402) {
      toast({
        title: "Wrong user",
        duration: 3000,
      });
    } else {
      toast({
        title: "Error updating the title",
        duration: 3000,
      });
    }
    setIsProcessing(false);
    setIsOpen(false);
  }

  async function handleDeleteGame(gameGuid: string) {
    setIsProcessing(true);
    const response = await fetch(`/api/recordedGames`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ gameGuid, userId: loggedInUserId }),
    });
    if (response.ok) {
      toast({
        title: "Game deleted successfully",
        duration: 3000,
      });
      refetchRecs(filters);
    } else if (response.status === 402) {
      toast({
        title: "Wrong user",
        duration: 3000,
      });
    } else {
      toast({
        title: "Error deleting the game",
        duration: 3000,
      });
    }
    setIsProcessing(false);
    setIsOpen(false);
    setDialogOpen(false);
  }
  return (
    <div>
      {windowSize && windowSize.width >= 768 ? (
        // desktop layout
        <div>
          <div className="flex">
            <div className="flex mt-9">{leftTeams}</div>
            <div>
              <RecTitle gameTitle={rec.gameTitle || ""} />
              {showMap && <RecMap rec={rec} />}
            </div>
            <div className="flex flex-col">
              <div className="flex justify-end mt-2 mr-2">
                {isRecGameAuthor && (
                  <div className="flex space-x-2">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                      <SheetTrigger asChild>
                        <SquarePen
                          className="cursor-pointer"
                          onClick={() => setIsOpen(true)}
                        />
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>
                            <div className="text-center">Edit Game Title</div>
                          </SheetTitle>
                        </SheetHeader>
                        <SheetDescription>
                          <input
                            type="text"
                            autoFocus={true}
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Enter file name"
                            className="w-full flex justify-center border-b border-gray-400 focus:outline-none focus:border-blue-500 mt-2 px-2 py-2"
                          />
                        </SheetDescription>
                        <Button
                          disabled={isProcessing}
                          type="submit"
                          className="mx-auto mt-4 flex"
                          onClick={() =>
                            handleEditGameTitle(fileName || "", rec.gameGuid)
                          }
                        >
                          Confirm
                        </Button>
                        <SheetTitle>
                          <div className="text-center mt-2">
                            Delete this game
                          </div>
                        </SheetTitle>
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                          <DialogTrigger asChild>
                            <Button
                              disabled={isProcessing}
                              type="submit"
                              className="mx-auto mt-4 bg-red-500 hover:bg-red-600 flex"
                              onClick={() => setDialogOpen(true)}
                            >
                              Delete
                            </Button>
                          </DialogTrigger>

                          <DialogContent customOverlayClass="bg-black/00">
                            <DialogHeader>
                              <DialogTitle>Confirm Deletion</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this game? This
                                action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button
                                variant="outline"
                                disabled={isProcessing}
                                onClick={() => setDialogOpen(false)}
                              >
                                Cancel
                              </Button>
                              <Button
                                disabled={isProcessing}
                                type="submit"
                                className="bg-red-500 hover:bg-red-600"
                                onClick={() => handleDeleteGame(rec.gameGuid)}
                              >
                                Confirm
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </SheetContent>
                    </Sheet>
                  </div>
                )}
              </div>
              {rightTeams}
            </div>
          </div>
          <RecFooter rec={rec} />
        </div>
      ) : (
        // mobile layout
        <div className="relative">
          <div className="flex flex-col">
            <div className="flex flex-col items-center">
              <div className="relative w-full pl-5">
                <RecTitle gameTitle={rec.gameTitle || ""} />
                {isRecGameAuthor && (
                  <div className="absolute top-0 right-0 z-10 mt-1 mr-1">
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                      <SheetTrigger asChild>
                        <SquarePen
                          className="cursor-pointer"
                          onClick={() => setIsOpen(true)}
                        />
                      </SheetTrigger>
                      <SheetContent>
                        <SheetHeader>
                          <SheetTitle>
                            <div className="text-center">Edit Game Title</div>
                          </SheetTitle>
                        </SheetHeader>
                        <SheetDescription>
                          <input
                            type="text"
                            autoFocus={true}
                            value={fileName}
                            onChange={(e) => setFileName(e.target.value)}
                            placeholder="Enter file name"
                            className="w-full flex justify-center border-b border-gray-400 focus:outline-none focus:border-blue-500 mt-2 px-2 py-2"
                          />
                        </SheetDescription>
                        <Button
                          disabled={isProcessing}
                          type="submit"
                          className="mx-auto mt-4 flex"
                          onClick={() =>
                            handleEditGameTitle(fileName || "", rec.gameGuid)
                          }
                        >
                          Confirm
                        </Button>
                        <SheetTitle>
                          <div className="text-center mt-2">
                            Delete this game
                          </div>
                        </SheetTitle>
                        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                          <DialogTrigger asChild>
                            <Button
                              disabled={isProcessing}
                              type="submit"
                              className="mx-auto mt-4 bg-red-500 hover:bg-red-600 flex"
                              onClick={() => setDialogOpen(true)}
                            >
                              Delete
                            </Button>
                          </DialogTrigger>

                          <DialogContent className="sm:max-w-[425px]">
                            <DialogHeader>
                              <DialogTitle>Confirm Deletion</DialogTitle>
                              <DialogDescription>
                                Are you sure you want to delete this game? This
                                action cannot be undone.
                              </DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button
                                variant="outline"
                                disabled={isProcessing}
                                onClick={() => setDialogOpen(false)}
                              >
                                Cancel
                              </Button>
                              <Button
                                disabled={isProcessing}
                                type="submit"
                                className="bg-red-500 hover:bg-red-600"
                                onClick={() => handleDeleteGame(rec.gameGuid)}
                              >
                                Confirm
                              </Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </SheetContent>
                    </Sheet>
                  </div>
                )}
              </div>
              {showMap && <RecMap rec={rec} />}
            </div>
            <div className="mx-auto pt-2">
              {leftTeams}
              {rightTeams}
            </div>
          </div>
          <RecFooter rec={rec} />
        </div>
      )}
    </div>
  );
}
