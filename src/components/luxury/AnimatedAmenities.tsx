import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Amenity {
  icon: string;
  title: string;
  description: string;
  color: string;
}

const amenities: Amenity[] = [
  {
    icon: "🏊",
    title: "Resort-Style Pool",
    description: "Luxurious pool area with cabanas and spa facilities",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "🏌️",
    title: "Golf Course Access",
    description: "Premium golf courses within minutes of your home",
    color: "from-green-400 to-green-600",
  },
  {
    icon: "🏃",
    title: "Fitness Center",
    description: "State-of-the-art fitness facilities and classes",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: "🎾",
    title: "Tennis Courts",
    description: "Professional-grade tennis courts and pickleball",
    color: "from-orange-400 to-orange-600",
  },
  {
    icon: "🍽️",
    title: "Clubhouse",
    description: "Elegant clubhouse for events and social gatherings",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: "🛡️",
    title: "24/7 Security",
    description: "Gated entrance with professional security services",
    color: "from-gray-400 to-gray-600",
  },
];

export const AnimatedAmenities = component$(() => {
  const visibleItems = useSignal<boolean[]>(new Array(amenities.length).fill(false));

  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute("data-index") || "0", 10);
            setTimeout(() => {
              visibleItems.value = visibleItems.value.map((item, i) => (i === index ? true : item));
            }, index * 150); // Staggered animation
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const elements = document.querySelectorAll("[data-amenity-item]");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  });

  return (
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {amenities.map((amenity, index) => (
        <div
          key={index}
          data-amenity-item
          data-index={index}
          class={`text-center p-6 transition-all duration-700 transform ${
            visibleItems.value[index]
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-8 scale-95"
          }`}
        >
          <div
            class={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${amenity.color} flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:rotate-6 group`}
          >
            <span class="text-3xl group-hover:scale-110 transition-transform duration-300">
              {amenity.icon}
            </span>
          </div>
          <h4 class="text-xl font-semibold mb-2 text-gray-900 group-hover:text-blue-600 transition-colors">
            {amenity.title}
          </h4>
          <p class="text-gray-600 leading-relaxed">{amenity.description}</p>

          {/* Subtle hover effect */}
          <div class="mt-4 h-1 w-0 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto transition-all duration-500 group-hover:w-16 rounded-full" />
        </div>
      ))}
    </div>
  );
});
