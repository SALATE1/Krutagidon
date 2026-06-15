import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";

export type CardKind =
  | "starter"
  | "normal"
  | "legend"
  | "mayhem"
  | "megaMayhem"
  | "wildMagic"
  | "limpWand";

export interface CardDefinition {
  schemaVersion: number;
  cardId: string;
  visible: {
    nameRu: string;
    cost: number;
    victoryPoints: number;
    typeRu: string | null;
    cardKind: CardKind;
    cardTypes: string[];
    markers: string[];
  };
  engine: {
    runtimeSchema: "krutagidon.cardDefinition.v0";
    mappingStatus: string;
    playableInV0: boolean;
    cardKind: CardKind;
    cardTypes: string[];
    cost: number;
    victoryPoints: number;
    isOngoing: boolean;
    marketChipMarker: boolean;
    effects: unknown[];
    unsupportedMechanics: string[];
  };
}

export interface DeckComposition {
  schemaVersion: number;
  deckId: string;
  runtimeSchema: "krutagidon.deckComposition.v0";
  role: string;
  mappingStatus: string;
  entries: DeckEntry[];
}

export interface DeckEntry {
  cardId: string;
  count: number;
}

export interface DataPackManifest {
  schemaVersion: number;
  packId: string;
  runtimeSchema: "krutagidon.dataPack.v0";
  cardsPath: string;
  decks: {
    starterDeck: string;
    mainDeck: string;
    legendDeck: string;
    wildMagicStack: string;
    limpWandStack: string;
  };
  needsData: unknown[];
}

export interface LoadedDataPack {
  manifest: DataPackManifest;
  cardDefinitions: ReadonlyMap<string, CardDefinition>;
  decks: {
    starterDeck: DeckComposition;
    mainDeck: DeckComposition;
    legendDeck: DeckComposition;
    wildMagicStack: DeckComposition;
    limpWandStack: DeckComposition;
  };
}

export function loadV0DataPack(
  rootDir: string,
  manifestPath = "data/decks/v0-first-batch-data-pack.json",
): LoadedDataPack {
  const manifest = readJsonFile<DataPackManifest>(rootDir, manifestPath);
  const cardDefinitions = loadCardDefinitions(rootDir, manifest.cardsPath);

  return {
    manifest,
    cardDefinitions,
    decks: {
      starterDeck: readJsonFile<DeckComposition>(rootDir, manifest.decks.starterDeck),
      mainDeck: readJsonFile<DeckComposition>(rootDir, manifest.decks.mainDeck),
      legendDeck: readJsonFile<DeckComposition>(rootDir, manifest.decks.legendDeck),
      wildMagicStack: readJsonFile<DeckComposition>(rootDir, manifest.decks.wildMagicStack),
      limpWandStack: readJsonFile<DeckComposition>(rootDir, manifest.decks.limpWandStack),
    },
  };
}

function loadCardDefinitions(rootDir: string, cardsPath: string): ReadonlyMap<string, CardDefinition> {
  const absoluteCardsPath = path.resolve(rootDir, cardsPath);
  const cards = new Map<string, CardDefinition>();

  for (const fileName of readdirSync(absoluteCardsPath).sort()) {
    if (!fileName.endsWith(".json") || fileName.startsWith("_")) {
      continue;
    }

    const card = readJsonFile<CardDefinition>(absoluteCardsPath, fileName);
    cards.set(card.cardId, card);
  }

  return cards;
}

function readJsonFile<T>(rootDir: string, filePath: string): T {
  const absolutePath = path.resolve(rootDir, filePath);
  return JSON.parse(readFileSync(absolutePath, "utf8")) as T;
}
