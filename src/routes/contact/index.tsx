import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { RealScoutStickyWidget } from "~/components/real-estate/RealScoutStickyWidget";
import { business } from "~/config/business";
import { OfficeListingsBelowHero } from "~/components/community/OfficeListingsBelowHero";
import { InteriorHero } from "~/components/community/InteriorHero";

export const head: DocumentHead = {
  title: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert | Heritage at Stonebridge",
  meta: [
    {
      name: "description",
      content: `Contact ${business.name} for Heritage at Stonebridge real estate. Call ${business.telephoneDisplay} or text ${business.telephoneDisplay}. Located at ${business.addressDisplay}.`,
    },
    {
      property: "og:title",
      content: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      property: "og:description",
      content: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561 or email DrDuffySells@HeritageStonebridge.com.",
    },
    {
      property: "og:type",
      content: "website",
    },
    {
      property: "og:url",
      content: "https://heritagestonebridge.com/contact",
    },
    {
      property: "og:image",
      content: "https://imagedelivery.net/byE6BTe9lNqo21V57n4aPQ/fc4911a4-7842-470b-a54d-4589039a2a00/tablet",
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:title",
      content: "Contact Dr. Jan Duffy - Las Vegas Real Estate Expert",
    },
    {
      name: "twitter:description",
      content: "Contact Dr. Jan Duffy for expert Las Vegas real estate services. Call (702) 789-6561.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
    {
      name: "author",
      content: "Dr. Jan Duffy",
    },
  ],
  links: [
    {
      rel: "canonical",
      href: "https://heritagestonebridge.com/contact",
    },
  ],
};

export default component$(() => {
  return (
    <>
      {/* Hero Section */}
      <InteriorHero
        title="Contact Dr. Jan Duffy"
        lede="Your Las Vegas Real Estate Expert"
      />
      <OfficeListingsBelowHero />

      {/* Contact Information */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Get In Touch
            </h2>
            <p class="text-xl text-hsb-muted max-w-3xl mx-auto">
              Multiple ways to connect with Dr. Jan Duffy for your real estate needs
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Phone */}
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Call</h3>
              <p class="text-hsb-muted mb-4">Speak directly with Dr. Jan Duffy</p>
              <a
                href={business.telephoneHref}
                class="text-blue-600 hover:text-blue-800 font-semibold text-lg"
              >
                {business.telephoneDisplay}
              </a>
            </div>

            {/* Email */}
            <div class="text-center p-6 bg-green-50 rounded-lg">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Email</h3>
              <p class="text-hsb-muted mb-4">Send a detailed message</p>
              <a
                href={`mailto:${business.email}`}
                class="text-green-600 hover:text-green-800 font-semibold text-sm break-all"
              >
                {business.email}
              </a>
            </div>

            {/* Office */}
            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Office</h3>
              <p class="text-hsb-muted mb-4">Visit our location</p>
              <p class="text-purple-600 font-semibold text-sm">
                Crossbridge Dr<br />
                Las Vegas, NV 89138
              </p>
            </div>

            {/* Hours */}
            <div class="text-center p-6 bg-orange-50 rounded-lg">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Hours</h3>
              <p class="text-hsb-muted mb-4">Business hours</p>
              <div class="text-orange-600 font-semibold text-sm">
                {business.hoursLines.map((line) => (
                  <p key={line}>{line}</p>
                ))}
              </div>
            </div>
          </div>

          <div class="mt-10 flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
            <a
              href={business.telephoneHref}
              class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 text-center"
            >
              Call {business.telephoneDisplay}
            </a>
            <a
              href={business.smsHref}
              class="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 text-center"
            >
              Text {business.telephoneDisplay}
            </a>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 text-center"
            >
              Directions
            </a>
            <a
              href={business.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              class="bg-yellow-500 text-hsb-dark px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 text-center"
            >
              View Google Reviews
            </a>
          </div>

          <div class="mt-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="Map of Heritage Stonebridge office at Crossbridge Dr, Las Vegas, NV 89138"
              src={business.mapsEmbedUrl}
              class="w-full h-[360px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p class="mt-3 text-center text-sm text-gray-500">
            Wheelchair accessible parking lot and wheelchair accessible entrance.
          </p>
        </div>
      </section>

      {/* Service Areas */}
      <section class="py-16 bg-hsb-cream">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Service Areas
            </h2>
            <p class="text-xl text-hsb-muted max-w-3xl mx-auto">
              Dr. Jan Duffy serves clients throughout the Las Vegas metropolitan area 
              with specialized expertise in premier communities.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Las Vegas, NV 89138</h3>
              <p class="text-hsb-muted">Primary service area matching Google Business Profile</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Summerlin West</h3>
              <p class="text-hsb-muted">Heritage at Stonebridge and surrounding 55+ neighborhoods</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Las Vegas</h3>
              <p class="text-hsb-muted">Complete metropolitan area coverage</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Summerlin</h3>
              <p class="text-hsb-muted">Premier master-planned community</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Henderson</h3>
              <p class="text-hsb-muted">Established neighborhoods and new construction</p>
            </div>
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <h3 class="text-xl font-semibold text-hsb-dark mb-2">Red Rock Canyon</h3>
              <p class="text-hsb-muted">Properties with mountain views</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section class="py-16 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="text-center mb-12">
            <h2 class="text-3xl md:text-4xl font-bold text-hsb-dark mb-4">
              Specializations
            </h2>
            <p class="text-xl text-hsb-muted max-w-3xl mx-auto">
              Dr. Jan Duffy specializes in multiple areas of Las Vegas real estate
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="text-center p-6 bg-blue-50 rounded-lg">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">🏘️</span>
              </div>
              <h3 class="text-lg font-semibold text-hsb-dark mb-2">Heritage at Stonebridge</h3>
              <p class="text-hsb-muted text-sm">Community specialist</p>
            </div>
            <div class="text-center p-6 bg-green-50 rounded-lg">
              <div class="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">👥</span>
              </div>
              <h3 class="text-lg font-semibold text-hsb-dark mb-2">55+ Communities</h3>
              <p class="text-hsb-muted text-sm">Active adult living</p>
            </div>
            <div class="text-center p-6 bg-purple-50 rounded-lg">
              <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">💎</span>
              </div>
              <h3 class="text-lg font-semibold text-hsb-dark mb-2">Luxury Properties</h3>
              <p class="text-hsb-muted text-sm">High-end homes</p>
            </div>
            <div class="text-center p-6 bg-orange-50 rounded-lg">
              <div class="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span class="text-xl">🏠</span>
              </div>
              <h3 class="text-lg font-semibold text-hsb-dark mb-2">First-Time Buyers</h3>
              <p class="text-hsb-muted text-sm">Expert guidance</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section class="py-16 bg-hsb-dark text-white">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p class="text-xl text-hsb-sand mb-8">
            Don't wait to begin your real estate journey. Contact Dr. Jan Duffy today 
            for expert guidance and personalized service.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-789-6561"
              class="bg-hsb-primary text-white px-8 py-4 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Call (702) 789-6561
            </a>
            <a
              href="mailto:DrDuffySells@HeritageStonebridge.com"
              class="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all transform hover:scale-105 inline-block text-center"
            >
              Send Email
            </a>
          </div>
          <div class="mt-8 text-center">
            <p class="text-hsb-sand text-sm">
              <strong>Nevada Real Estate License:</strong> S.0197614.LLC
              <br />
              <strong>Office:</strong> Crossbridge Dr, Las Vegas, NV 89138
              <br />
              <strong>Hours:</strong> {business.hoursDisplay}
            </p>
          </div>
        </div>
      </section>

      {/* RealScout Sticky Widget */}
      <RealScoutStickyWidget
        agentEncodedId="QWdlbnQtMjI1MDUw"
        title="Contact Dr. Jan Duffy"
        subtitle="Call (702) 789-6561"
        priceMin="300000"
        priceMax="2000000"
      />
    </>
  );
});
