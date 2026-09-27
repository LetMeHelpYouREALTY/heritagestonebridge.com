import { component$ } from "@builder.io/qwik";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    name: "Robert & Margaret Chen",
    location: "Heritage at Stonebridge Residents",
    quote:
      "We've lived in Heritage at Stonebridge for 3 years and couldn't be happier. The community is beautiful, the neighbors are wonderful, and the amenities are top-notch. It's truly luxury living at its finest.",
    rating: 5,
  },
  {
    name: "David & Susan Martinez",
    location: "New Homeowners",
    quote:
      "The Lennar team made our home buying experience seamless. Our new Heritage home exceeded all our expectations. The quality and attention to detail is outstanding.",
    rating: 5,
  },
  {
    name: "James & Linda Thompson",
    location: "Stonebridge Collection",
    quote:
      "Moving to Heritage at Stonebridge was the best decision we've made. The active adult lifestyle here is perfect for us, and we love being part of such a vibrant community.",
    rating: 5,
  },
];

export const SocialProof = component$(() => {
  return (
    <div class="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl">
      {/* Recent Sales Badge */}
      <div class="text-center mb-8">
        <div class="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <span class="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>🔥 3 homes sold
          this month
        </div>
        <h3 class="text-2xl font-bold text-gray-900 mb-2">What Our Residents Say</h3>
        <p class="text-gray-600">
          See why residents choose Heritage at Stonebridge
        </p>
      </div>

      {/* Testimonials Grid */}
      <div class="grid md:grid-cols-3 gap-6 mb-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            class="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            {/* Rating Stars */}
            <div class="flex mb-4">
              {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                <svg
                  key={starIndex}
                  class="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <blockquote class="text-gray-700 mb-4 leading-relaxed">
              "{testimonial.quote}"
            </blockquote>

            {/* Author */}
            <div class="border-t pt-4">
              <div class="font-semibold text-gray-900">{testimonial.name}</div>
              <div class="text-sm text-gray-600">{testimonial.location}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Indicators */}
      <div class="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        <div class="bg-white rounded-lg p-4 shadow-md">
          <div class="text-2xl font-bold text-blue-600 mb-1">200+</div>
          <div class="text-sm text-gray-600">Residents</div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-md">
          <div class="text-2xl font-bold text-blue-600 mb-1">4.9★</div>
          <div class="text-sm text-gray-600">Average Rating</div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-md">
          <div class="text-2xl font-bold text-blue-600 mb-1">15+</div>
          <div class="text-sm text-gray-600">Years Experience</div>
        </div>
        <div class="bg-white rounded-lg p-4 shadow-md">
          <div class="text-2xl font-bold text-blue-600 mb-1">24/7</div>
          <div class="text-sm text-gray-600">Security</div>
        </div>
      </div>

      {/* Call to Action */}
      <div class="text-center mt-8">
        <div class="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl p-6 shadow-lg">
          <h4 class="text-xl font-bold mb-2">Ready to Join Our Community?</h4>
          <p class="text-blue-100 mb-4">
            Schedule your private tour today and see why Heritage at Stonebridge is the perfect
            place to call home.
          </p>
          <a
            href="http://drjanduffy.realscout.com/onboarding"
            target="_blank"
            rel="noopener"
            class="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 shadow-lg inline-block text-center"
          >
            Schedule Private Tour
          </a>
        </div>
      </div>
    </div>
  );
});
