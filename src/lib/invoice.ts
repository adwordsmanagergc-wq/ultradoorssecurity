/**
 * Invoice types and pure helpers, shared by the builder UI and the PDF/preview.
 * Matches the owner's existing format: the Price column is the line amount and
 * the invoice Total is the sum of the Price column (Unit is the quantity shown,
 * it is not multiplied by Price).
 */

export interface LineItem {
  productType: string;
  description: string;
  unit: string; // shown as-is (e.g. "1", "3")
  price: number; // line amount in GBP
}

export interface InvoiceData {
  number: string;
  dateISO: string; // yyyy-mm-dd
  clientName: string;
  clientAddress: string; // multiline
  clientEmail: string;
  items: LineItem[];
  notes: string;
}

/** Total = sum of the Price column. */
export function invoiceTotal(items: LineItem[]): number {
  return items.reduce((sum, it) => sum + (Number(it.price) || 0), 0);
}

/** Format a number as GBP, e.g. 1100 -> "£1,100.00" (or "£1,100" when whole). */
export function formatGBP(n: number): string {
  const value = Number(n) || 0;
  const whole = Number.isInteger(value);
  return (
    '£' +
    value.toLocaleString('en-GB', {
      minimumFractionDigits: whole ? 0 : 2,
      maximumFractionDigits: 2,
    })
  );
}

/** Format an ISO date as UK short date, e.g. "18/06/26". */
export function formatDateUK(iso: string): string {
  const d = iso ? new Date(iso + 'T00:00:00') : new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const yy = String(d.getFullYear()).slice(-2);
  return `${dd}/${mm}/${yy}`;
}

/** Build an invoice number like "UDS-2026-007". */
export function makeInvoiceNumber(prefix: string, seq: number, year: number): string {
  return `${prefix}-${year}-${String(seq).padStart(3, '0')}`;
}

/** Split a multiline address string into trimmed, non-empty lines. */
export function addressLines(address: string): string[] {
  return address
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean);
}
