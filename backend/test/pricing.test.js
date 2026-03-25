const test = require("node:test");
const assert = require("node:assert/strict");
const { calculateDeliveryFee } = require("../src/pricing");

test("stable algorithm should produce predictable quote", () => {
  const fee = calculateDeliveryFee({
    city: "Bangalore",
    distanceKm: 5,
    peakHour: false,
    version: "stable"
  });

  assert.equal(fee, 55);
});

test("canary algorithm should be higher during peak", () => {
  const fee = calculateDeliveryFee({
    city: "Mumbai",
    distanceKm: 5,
    peakHour: true,
    version: "canary"
  });

  assert.equal(fee, 89.1);
});
