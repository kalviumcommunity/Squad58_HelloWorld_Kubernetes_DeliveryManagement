function calculateDeliveryFee({ city, distanceKm, peakHour, version }) {
  const normalizedDistance = Number(distanceKm) || 0;
  const baseByCity = {
    Bangalore: 34,
    Mumbai: 39,
    Delhi: 31
  };

  const base = baseByCity[city] || 30;

  if (version === "canary") {
    const surge = peakHour ? 1.35 : 1.0;
    const distanceComponent = Math.max(0, normalizedDistance - 2) * 9;
    return Number(((base + distanceComponent) * surge).toFixed(2));
  }

  const surge = peakHour ? 1.2 : 1.0;
  const distanceComponent = Math.max(0, normalizedDistance - 2) * 7;
  return Number(((base + distanceComponent) * surge).toFixed(2));
}

module.exports = { calculateDeliveryFee };
