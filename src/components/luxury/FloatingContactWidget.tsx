import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

export const FloatingContactWidget = component$(() => {
  const isVisible = useSignal(false);
  const isExpanded = useSignal(false);
  const nameSignal = useSignal("");
  const emailSignal = useSignal("");
  const phoneSignal = useSignal("");
  const messageSignal = useSignal("");
  const preferredTimeSignal = useSignal("");

  useVisibleTask$(() => {
    if (typeof window === "undefined") return;

    // Show widget after 10 seconds
    const timer = setTimeout(() => {
      isVisible.value = true;
    }, 10000);

    return () => clearTimeout(timer);
  });

  const toggleExpanded = () => {
    isExpanded.value = !isExpanded.value;
  };

  const handleSubmit = () => {
    // In a real app, this would submit to your CRM/email service
    const formData = {
      name: nameSignal.value,
      email: emailSignal.value,
      phone: phoneSignal.value,
      message: messageSignal.value,
      preferredTime: preferredTimeSignal.value,
    };
    console.log("Contact form submitted:", formData);
    alert("Thank you! We'll contact you within 24 hours to schedule your private tour.");
    isExpanded.value = false;
    // Reset form
    nameSignal.value = "";
    emailSignal.value = "";
    phoneSignal.value = "";
    messageSignal.value = "";
    preferredTimeSignal.value = "";
  };

  if (!isVisible.value) return null;

  return (
    <div class="fixed bottom-6 right-6 z-50">
      {/* Main CTA Button */}
      {!isExpanded.value && (
        <a
          href="http://drjanduffy.realscout.com/onboarding"
          target="_blank"
          rel="noopener"
          class="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-3 group"
        >
          <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
          <div class="text-left">
            <div class="font-semibold text-sm">Schedule Private Tour</div>
            <div class="text-xs opacity-90">Available Today</div>
          </div>
        </a>
      )}

      {/* Expanded Form */}
      {isExpanded.value && (
        <div class="bg-white rounded-2xl shadow-2xl p-6 w-80 animate-in slide-in-from-bottom-4 duration-300">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-bold text-gray-900">Schedule Your Private Tour</h3>
            <button
              type="button"
              onClick$={toggleExpanded}
              class="text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close contact form"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form preventdefault:submit onSubmit$={handleSubmit} class="space-y-4">
            <div>
              <label for="name" class="block text-sm font-medium text-gray-700 mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                bind:value={nameSignal}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label for="email" class="block text-sm font-medium text-gray-700 mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                bind:value={emailSignal}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label for="phone" class="block text-sm font-medium text-gray-700 mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                bind:value={phoneSignal}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                placeholder="(702) 555-0123"
              />
            </div>

            <div>
              <label for="preferredTime" class="block text-sm font-medium text-gray-700 mb-1">
                Preferred Tour Time
              </label>
              <select
                id="preferredTime"
                bind:value={preferredTimeSignal}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              >
                <option value="">Select a time</option>
                <option value="morning">Morning (9 AM - 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                <option value="evening">Evening (5 PM - 8 PM)</option>
                <option value="weekend">Weekend</option>
              </select>
            </div>

            <div>
              <label for="message" class="block text-sm font-medium text-gray-700 mb-1">
                Special Requests
              </label>
              <textarea
                id="message"
                bind:value={messageSignal}
                rows={3}
                class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                placeholder="Any specific areas you'd like to see or questions you have..."
              />
            </div>

            <a
              href="http://drjanduffy.realscout.com/onboarding"
              target="_blank"
              rel="noopener"
              class="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl inline-block text-center"
            >
              Schedule My Private Tour
            </a>

            <div class="text-xs text-gray-500 text-center">
              We'll contact you within 24 hours to confirm your tour
            </div>
          </form>
        </div>
      )}
    </div>
  );
});
