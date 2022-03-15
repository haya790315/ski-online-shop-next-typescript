export const calculateTax = (total: number) => (total - total / 1.1).toFixed(0);

export const currencyFormat = (amount: number | string) =>
  Number(amount).toLocaleString("ja-JP", {
    style: "currency",
    currency: "JPY",
  });
