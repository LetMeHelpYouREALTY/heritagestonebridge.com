import { component$ } from "@builder.io/qwik";

interface HomeCard {
  name: string;
  price: string;
  sqft: string;
  bedrooms: string;
  bathrooms: string;
  garage: string;
  description: string;
  features: string[];
  floorPlan: string;
  image: string;
}

const homeCards: HomeCard[] = [
  {
    name: "The Heritage",
    price: "Starting from $650,000",
    sqft: "2,100 - 2,400 sq ft",
    bedrooms: "2-3 Bedrooms",
    bathrooms: "2-3 Bathrooms",
    garage: "2-Car Garage",
    description: "Elegant single-story living with modern finishes",
    features: [
      "Granite Countertops",
      "Stainless Appliances",
      "Hardwood Floors",
      "Energy Efficient",
    ],
    floorPlan:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "The Stonebridge",
    price: "Starting from $750,000",
    sqft: "2,500 - 2,800 sq ft",
    bedrooms: "3-4 Bedrooms",
    bathrooms: "2-3 Bathrooms",
    garage: "3-Car Garage",
    description: "Spacious luxury design with premium amenities",
    features: ["Quartz Countertops", "Smart Home Features", "Custom Cabinetry", "Solar Ready"],
    floorPlan:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "The Signature",
    price: "Starting from $850,000",
    sqft: "2,800 - 3,200 sq ft",
    bedrooms: "3-4 Bedrooms",
    bathrooms: "3-4 Bathrooms",
    garage: "3-Car Garage",
    description: "Premium custom features and luxury finishes",
    features: ["Marble Countertops", "Wine Cellar", "Home Theater", "Smart Security"],
    floorPlan:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
    image:
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
  },
];

export const LuxuryHomeCards = component$(() => {
  return (
    <div class="grid md:grid-cols-3 gap-8">
      {homeCards.map((home, index) => (
        <div
          key={index}
          class="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden"
        >
          {/* Image Section */}
          <div class="relative h-64 overflow-hidden">
            <img
              src={home.image}
              alt={home.name}
              class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Price Badge */}
            <div class="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-900">
              {home.price}
            </div>

            {/* Floor Plan Overlay */}
            <div class="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
              <div class="bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                <div class="text-xs font-medium text-gray-700 mb-1">Floor Plan</div>
                <img
                  src={home.floorPlan}
                  alt={`${home.name} Floor Plan`}
                  class="w-16 h-12 object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div class="p-6">
            <h4 class="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
              {home.name}
            </h4>
            <p class="text-gray-600 mb-4 text-sm leading-relaxed">{home.description}</p>

            {/* Specifications */}
            <div class="grid grid-cols-2 gap-2 mb-4 text-sm">
              <div class="flex items-center text-gray-600">
                <svg
                  class="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                  />
                </svg>
                {home.sqft}
              </div>
              <div class="flex items-center text-gray-600">
                <svg
                  class="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
                {home.bedrooms}
              </div>
              <div class="flex items-center text-gray-600">
                <svg
                  class="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M10.5 3L12 2l1.5 1H21v6H3V3h7.5z"
                  />
                </svg>
                {home.bathrooms}
              </div>
              <div class="flex items-center text-gray-600">
                <svg
                  class="w-4 h-4 mr-2 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                {home.garage}
              </div>
            </div>

            {/* Features */}
            <div class="mb-6">
              <div class="text-sm font-medium text-gray-700 mb-2">Premium Features:</div>
              <div class="flex flex-wrap gap-1">
                {home.features.map((feature, featureIndex) => (
                  <span
                    key={featureIndex}
                    class="px-2 py-1 bg-blue-50 text-blue-700 text-xs rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl group-hover:shadow-2xl inline-block text-center"
            >
              Schedule Private Tour
            </a>
          </div>
        </div>
      ))}
    </div>
  );
});
