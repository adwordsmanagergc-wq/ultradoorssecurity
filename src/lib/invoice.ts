/**
 * Invoice types and pure helpers, shared by the builder UI and the PDF/preview.
 * Price is the price per unit. Each line's Amount = Unit x Price, and the
 * invoice Total is the sum of the line Amounts. If Unit is blank or not a
 * number, it counts as 1 (so Amount = Price).
 */

export interface LineItem {
  productType: string;
  description: string;
  unit: string; // quantity, e.g. "1", "3"
  price: number; // price per unit in GBP
}

/** Quantity from the unit field, defaulting to 1 when blank/non-numeric. */
export function unitQty(unit: string): number {
  const q = parseFloat(String(unit).replace(/[^0-9.-]/g, ''));
  return Number.isFinite(q) && q !== 0 ? q : 1;
}

/** Line amount = Unit x Price. */
export function lineAmount(item: LineItem): number {
  return unitQty(item.unit) * (Number(item.price) || 0);
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

/** Total = sum of the line Amounts (Unit x Price). */
export function invoiceTotal(items: LineItem[]): number {
  return items.reduce((sum, it) => sum + lineAmount(it), 0);
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
