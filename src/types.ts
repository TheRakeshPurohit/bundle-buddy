import { History } from "history";
import { GraphNodes } from "./import/graph_process";
import { ProcessedSourceMap } from "./import/process_sourcemaps";

export interface ImportResolveState {
  graphNodes: GraphNodes;
  processedSourceMap: ProcessedSourceMap;
  graphFileTransform?: string;
  sourceMapFileTransform?: string;
}

export interface TreemapNode {
  parent: string;
  name: string;
  totalBytes?: number;
}

export interface ImportProps {
  history: History<ImportResolveState>;
  imported: boolean;
}

export interface BundleProps {
  trimmedNetwork: ProcessedImportState["trimmedNetwork"];
  rollups: ProcessedImportState["rollups"];
  duplicateNodeModules: ProcessedImportState["duplicateNodeModules"];
  selected: string | null;
  hierarchy: ProcessedImportState["hierachy"];
}

export interface BundleState {
  selected: string | null;
  counts: { [k: string]: BundleNetworkCount };
}

export interface BundleNetworkCount {
  requiredBy: Set<string> | string[];
  requires: Set<string> | string[];
  indirectDependedOnCount?: number;
  transitiveRequiredBy?: string[];
}

export interface ResolveProps {
  history: History<ImportResolveState>;
  graphNodes: GraphNodes;
  processedSourceMap: ProcessedSourceMap;
  graphFileTransform?: string;
  sourceMapFileTransform?: string;
}

export interface TrimmedNetwork {
  nodes: TrimmedNode[];
  edges: Edge[];
}

export interface ProcessedImportState {
  trimmedNetwork: TrimmedNetwork;
  hierachy: TreemapNode[];
  rollups: {
    value: number;
    fileTypes: {
      pct: number;
      name: string;
      totalBytes: number;
    }[];
    directories: {
      pct: number;
      name: string;
      totalBytes: number;
      color?: string;
    }[];
  };
  duplicateNodeModules: Array<{
    key: string;
    value: string[];
  }>;
}

export interface Edge {
  source: string;
  target: string;
}

export interface TrimmedNode {
  id: string;
  totalBytes?: number;
  directory?: string;
  fileName?: string;
  text?: string;
  count?: BundleNetworkCount;
}

export interface ImportState {
  sourceMapFiles?: File[];
  graphFile?: File;
  importError?: string | null;
  importErrorUri?: string | null;
}