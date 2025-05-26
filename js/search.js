const data = [
  {
    name: "Coral",
    symbolism: "Joy, Optimism, Playfulness",
    meaning: "Warmth, Cheerfulness, Vibrancy",
    associated_with: "Ocean Reefs, Summer, Fun",
    cultural_significance: "Popular in summer and beach cultures",
    common_use: "Fashion, Beach Decor, Cosmetics"
  },
  {
    name: "Lime",
    symbolism: "Energy, Freshness, Vitality",
    meaning: "Playfulness, Youthfulness",
    associated_with: "Citrus, Growth, Joy",
    cultural_significance: "Often used in youthful branding",
    common_use: "Sportswear, Energy Drinks, Toys"
  },
  {
    name: "Peach",
    symbolism: "Friendliness, Warmth, Softness",
    meaning: "Joy, Compassion, Cheerfulness",
    associated_with: "Summer, Fruits, Gentleness",
    cultural_significance: "Popular in celebrations and summer themes",
    common_use: "Summer Fashion, Home Decor, Food Packaging"
  },
  {
    name: "Beige",
    symbolism: "Simplicity, Warmth, Neutrality",
    meaning: "Comfort, Relaxation, Calmness",
    associated_with: "Sand, Natural Elements, Serenity",
    cultural_significance: "Associated with comfort and minimalism",
    common_use: "Interior Design, Clothing, Stationery"
  },
  {
    name: "Indigo",
    symbolism: "Intuition, Spirituality, Depth",
    meaning: "Wisdom, Self-Reflection, Mystery",
    associated_with: "Night Sky, Mysticism, Creativity",
    cultural_significance: "Used in spiritual and religious contexts",
    common_use: "Meditation Spaces, Fashion, Art Installations"
  },
  {
    name: "Maroon",
    symbolism: "Intensity, Passion, Confidence",
    meaning: "Strength, Warmth, Determination",
    associated_with: "Wine, Royalty, Autumn",
    cultural_significance: "Symbol of strength and luxury",
    common_use: "Formal Wear, Luxury Fashion, Interiors"
  },
  {
    name: "Olive",
    symbolism: "Peace, Earth, Diplomacy",
    meaning: "Harmony, Resilience, Perseverance",
    associated_with: "Nature, Military, Tradition",
    cultural_significance: "Military uniform color in many cultures",
    common_use: "Military Attire, Nature Brands, Fashion"
  },
  {
    name: "Teal",
    symbolism: "Sophistication, Calm, Balance",
    meaning: "Clarity, Emotional Stability",
    associated_with: "Ocean, Serenity, Modernity",
    cultural_significance: "Associated with sophistication and luxury",
    common_use: "Interior Design, High-End Products"
  },
  {
    name: "Magenta",
    symbolism: "Creativity, Passion, Drama",
    meaning: "Imagination, Boldness, Confidence",
    associated_with: "Flowers, Fashion, Art",
    cultural_significance: "Symbolizes universal love and spiritual harmony",
    common_use: "Fashion, Art, Pop Culture"
  },
  {
    name: "Cyan",
    symbolism: "Clarity, Freshness, Tranquility",
    meaning: "Refreshment, Energy, Innovation",
    associated_with: "Sky, Water, Technology",
    cultural_significance: "Represents communication and clarity",
    common_use: "Tech Products, Design Websites, Sportswear"
  },
  {
    name: "Turquoise",
    symbolism: "Healing, Protection, Refreshment",
    meaning: "Calmness, Emotional Balance",
    associated_with: "Oceans, Gemstones, Tranquility",
    cultural_significance: "Used in Native American jewelry for protection",
    common_use: "Used in Native American jewelry for protection"
  },
  {
    name: "Lavender",
    symbolism: "Calmness, Grace, Elegance",
    meaning: "Serenity, Femininity, Romance",
    associated_with: "Flowers, Relaxation, Spring",
    cultural_significance: "Symbolizes grace and elegance in Western cultures",
    common_use: "Aromatherapy, Skincare, Fashion"
  },
  {
    name: "Silver",
    symbolism: "Modernity, Elegance, Prestige",
    meaning: "Innovation, Glamour, Technology",
    associated_with: "Jewelry, Futurism, Awards",
    cultural_significance: "Symbol of success and futuristic thinking",
    common_use: "Electronics, Jewelry, Automotive Industry"
  },
  {
    name: "Gold",
    symbolism: "Wealth, Success, Luxury",
    meaning: "Achievement, Prosperity, Prestige",
    associated_with: "Jewelry, Royalty, Victory",
    cultural_significance: "Symbolizes wealth in many cultures",
    common_use: "Jewelry, Awards, High-End Products"
  },
  {
    name: "Gray",
    symbolism: "Neutrality, Balance, Maturity",
    meaning: "Calmness, Practicality, Sophistication",
    associated_with: "Stone, Metal, Modernity",
    cultural_significance: "Seen as sophisticated and conservative",
    common_use: "Business Suits, Industrial Design, Electronics"
  },
  {
    name: "Brown",
    symbolism: "Stability, Comfort, Security",
    meaning: "Warmth, Earthiness, Simplicity",
    associated_with: "Soil, Wood, Nature",
    cultural_significance: "Represents strength and resilience",
    common_use: "Furniture, Coffee Shops, Natural Products"
  },
  {
    name: "Pink",
    symbolism: "Love, Playfulness, Femininity",
    meaning: "Romance, Compassion, Gentleness",
    associated_with: "Flowers, Softness, Youth",
    cultural_significance: "Symbolizes femininity and romance in Western cultures",
    common_use: "Beauty Products, Toys, Valentine’s Day Decor"
  },
  {
    name: "Orange",
    symbolism: "Energy, Warmth, Enthusiasm",
    meaning: "Joy, Excitement, Determination",
    associated_with: "Autumn, Sunshine, Creativity",
    cultural_significance: "Represents joy in Hindu and Buddhist cultures",
    common_use: "Sports Teams, Food Packaging, Energy Drinks"
  },
  {
    name: "White",
    symbolism: "Purity, Innocence, Cleanliness",
    meaning: "Peace, Simplicity, Fresh Start",
    associated_with: "Weddings, Spirituality, Minimalism",
    cultural_significance: "Used in weddings, symbolizes peace and purity",
    common_use: "Hospitals, Weddings, Interior Design"
  },
  {
    name: "Black",
    symbolism: "Power, Elegance, Mystery",
    meaning: "Sophistication, Authority",
    associated_with: "Formality, Night, Luxury",
    cultural_significance: "Symbol of mourning in Western cultures",
    common_use: "Luxury Fashion, Formal Events, Tech Gadgets"
  },
  {
    name: "Purple",
    symbolism: "Royalty, Luxury, Wisdom",
    meaning: "Power, Ambition, Spirituality",
    associated_with: "Nobility, Imagination, Mystery",
    cultural_significance: "Symbol of royalty, spirituality, and luxury",
    common_use: "Luxury Brands, Fashion, Beauty Products"
  },
  {
    name: "Yellow",
    symbolism: "Happiness, Optimism, Energy",
    meaning: "Joy, Positivity, Creativity",
    associated_with: "Sunlight, Warmth, Cheerfulness",
    cultural_significance: "Used in festivals for joy, symbolic caution in signs",
    common_use: "Kids’ Products, Food Packaging, Advertisements"
  },
  {
    name: "Green",
    symbolism: "Growth, Nature, Renewal",
    meaning: "Health, Harmony, Freshness",
    associated_with: "Forests, Plants, Healing",
    cultural_significance: "Environmental awareness, symbolizes fertility",
    common_use: "Eco-Friendly Products, Health Brands"
  },
  {
    name: "Blue",
    symbolism: "Calmness, Trust, Stability",
    meaning: "Peace, Tranquility, Reliability",
    associated_with: "Sky, Water, Peace",
    cultural_significance: "Calms the mind, reduces stress",
    common_use: "Corporate Logos, Healthcare, Tech Products"
  },
  {
    name: "Red",
    symbolism: "Passion, Love, Power, Danger",
    meaning: "Strong Emotions, Desire",
    associated_with: "Fire, Blood, Romance",
    cultural_significance: "Symbol of love in Western cultures, prosperity in China",
    common_use: "Advertising, Food Brands, Emergency Signs"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  searchForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const query = searchInput.value.toLowerCase();
    const results = data.filter(color =>
    color.name.toLowerCase().includes(query) ||
    color.symbolism.toLowerCase().includes(query) ||
    color.meaning.toLowerCase().includes(query) ||
    color.associated_with.toLowerCase().includes(query) ||
    color.cultural_significance.toLowerCase().includes(query) ||
    color.common_use.toLowerCase().includes(query)
  );


    if (query === "") {
      resultsDiv.innerHTML = `<center><p class="Result">Please enter a search term.</p></center>`;
      return;
    }

    if (results.length === 0) {
      resultsDiv.innerHTML = `<center><p class="Result">No results found for "${query}".</p></center>`;
    } else {
      let tableHTML = `
        <h2>Results for "${query}":</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Symbolism</th>
              <th>Meaning</th>
              <th>Associated With</th>
              <th>Cultural Significance</th>
              <th>Common Use</th>
            </tr>
          </thead>
          <tbody>
      `;

      results.forEach(color => {
        tableHTML += `
          <tr>
            <td><img src="images2/${color.name}.jpg" alt="${color.name}" width="100" height="100"></td>
            <td>${color.name}</td>
            <td>${color.symbolism}</td>
            <td>${color.meaning}</td>
            <td>${color.associated_with}</td>
            <td>${color.cultural_significance}</td>
            <td>${color.common_use}</td>
          </tr>
        `;
      });

      tableHTML += `</tbody></table>`;
      resultsDiv.innerHTML = tableHTML;
    }
  });
});
