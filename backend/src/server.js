const express = require("express");
const cors = require("cors");
const { restaurants } = require("./data");
const { calculateDeliveryFee } = require("./pricing");

const app = express();
const port = Number(process.env.PORT || 8080);
const defaultAlgorithm = process.env.PRICING_ALGO_VERSION || "stable";

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok", service: "delivery-backend" });
});

app.get("/api/config", (_req, res) => {
  res.json({ algorithm: defaultAlgorithm, cities: Object.keys(restaurants) });
});

app.get("/api/cities", (_req, res) => {
  res.json(Object.keys(restaurants));
});

app.get("/api/menus", (req, res) => {
  const city = req.query.city;

  if (!city || !restaurants[city]) {
    return res.status(400).json({ message: "Provide a valid city query parameter." });
  }

  return res.json({ city, restaurants: restaurants[city] });
});

app.get("/api/pricing/quote", (req, res) => {
  const city = req.query.city;
  const distanceKm = Number(req.query.distanceKm || 0);
  const peakHour = req.query.peak === "true";
  const version = req.query.version || defaultAlgorithm;

  if (!city || !restaurants[city]) {
    return res.status(400).json({ message: "Provide a valid city query parameter." });
  }

  const fee = calculateDeliveryFee({ city, distanceKm, peakHour, version });

  return res.json({
    city,
    distanceKm,
    peakHour,
    version,
    deliveryFee: fee
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Backend API listening on http://localhost:${port}`);
  });
}

module.exports = { app };
