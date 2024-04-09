declare enum AIOutputStatusEnum {
  DOCUMENT_INITIALISING = "DOCUMENT_INITIALISING",
  DOCUMENT_PROCESSING = "DOCUMENT_PROCESSING",
  DOCUMENT_PROCESSED = "DOCUMENT_PROCESSED",
  LETTER_GENERATING = "LETTER_GENERATING",
  LETTER_GENERATED = "LETTER_GENERATED",
}

declare namespace LH {
  type Summary = {
    id: number;
    summaryText: string;
    summary: string;
    status: AIOutputStatusEnum;
    rating: null | number;
  };
  type Document = {
    id: number;
    createdAt: Date;
    uploadId: number;
    type: null | string;
    transactionPartyId: number;
    uuid: string;
    name: string;
  };

  type BundleResponse = {
    id: number;
    uuid: string;
    name: string;
    documents: Document[];
    createdAt: Date;
  };
}
