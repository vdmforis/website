export type TxStatus = "found" | "missing" | "not_needed";

export interface Transaction {
  id: string;
  date: string; // YYYY-MM-DD
  month: string; // YYYY-MM
  amount: number; // negative = out
  direction: "in" | "out";
  counterparty: string;
  description: string;
  category: string;
  status: TxStatus;
  invoice_file: string;
  note: string;
  likely_personal: boolean;
}

export interface Seed {
  account?: string;
  source?: string;
  generated?: string;
  transactions: Transaction[];
}

export interface Attachment {
  pathname: string;
  name: string;
  size: number;
  uploadedAt: string;
}

export interface TxState {
  done?: boolean;
  note?: string;
  status?: TxStatus;
  attachments?: Attachment[];
  updatedAt?: string;
}

export interface AdminState {
  items: Record<string, TxState>;
  updatedAt?: string;
}

export interface Row extends Transaction {
  done: boolean;
  userNote: string;
  effectiveStatus: TxStatus;
  attachments: Attachment[];
}
