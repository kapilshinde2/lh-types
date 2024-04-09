declare enum AIOutputStatusEnum {
  DOCUMENT_INITIALISING = "DOCUMENT_INITIALISING",
  DOCUMENT_PROCESSING = "DOCUMENT_PROCESSING",
  DOCUMENT_PROCESSED = "DOCUMENT_PROCESSED",
  LETTER_GENERATING = "LETTER_GENERATING",
  LETTER_GENERATED = "LETTER_GENERATED",
}

export declare namespace LH {
  export type Summary = {
    id: number;
    summaryText: string;
    summary: string;
    status: AIOutputStatusEnum;
    rating: null | number;
  };
  export type Document = {
    id: number;
    createdAt: Date;
    uploadId: number;
    type: null | string;
    transactionPartyId: number;
    uuid: string;
    name: string;
  };

  export type BundleResponse = {
    id: number;
    uuid: string;
    name: string;
    documents: Document[];
    createdAt: Date;
  };
}
