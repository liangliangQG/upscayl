import { atomWithStorage } from "jotai/utils";

export const customModelsPathAtom = atomWithStorage<string | null>(
  "customModelsPath",
  null
);

export const scaleAtom = atomWithStorage<"2" | "3" | "4">("scale", "4");

export const batchModeAtom = atomWithStorage("batchMode", false);

export const saveOutputFolderAtom = atomWithStorage("saveOutputFolder", false);
