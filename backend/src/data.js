const restaurants = {
  Bangalore: [
    {
      id: "bl-1",
      name: "Spice Route",
      cuisine: "Indian",
      menu: [
        { id: "m1", item: "Paneer Biryani", price: 210 },
        { id: "m2", item: "Butter Naan", price: 45 },
        { id: "m3", item: "Dal Makhani", price: 180 }
      ]
    },
    {
      id: "bl-2",
      name: "Urban Bowl",
      cuisine: "Asian",
      menu: [
        { id: "m4", item: "Ramen", price: 260 },
        { id: "m5", item: "Gyoza", price: 170 }
      ]
    }
  ],
  Mumbai: [
    {
      id: "mb-1",
      name: "Coastal Cravings",
      cuisine: "Seafood",
      menu: [
        { id: "m6", item: "Prawn Curry", price: 320 },
        { id: "m7", item: "Malabar Parotta", price: 60 }
      ]
    },
    {
      id: "mb-2",
      name: "Quick Tiffin",
      cuisine: "South Indian",
      menu: [
        { id: "m8", item: "Masala Dosa", price: 130 },
        { id: "m9", item: "Filter Coffee", price: 70 }
      ]
    }
  ],
  Delhi: [
    {
      id: "dl-1",
      name: "Capital Grill",
      cuisine: "North Indian",
      menu: [
        { id: "m10", item: "Kadhai Chicken", price: 290 },
        { id: "m11", item: "Jeera Rice", price: 140 }
      ]
    },
    {
      id: "dl-2",
      name: "Street Cart Deluxe",
      cuisine: "Fusion",
      menu: [
        { id: "m12", item: "Chaat Platter", price: 160 },
        { id: "m13", item: "Kulfi", price: 90 }
      ]
    }
  ]
};

module.exports = { restaurants };
