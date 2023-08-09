export const formatMoney = (currency = "usd", unitAmount) => {
  let price = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    minimumFractionDigits: 2,
  }).format((unitAmount || 0) / 100);
  return price;
};
