import { component$, useSignal } from "@builder.io/qwik";
import type { Agent, ContactFormData, ListingProps } from "../../types/real-estate";

export interface ContactAgentProps {
  agent: Agent;
  property: ListingProps;
  isVisible: { value: boolean };
  onToggle$: () => void;
}

export const ContactAgent = component$<ContactAgentProps>(({ agent, property, onToggle$ }) => {
  const formData = useSignal<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
    propertyMls: property.mls,
    agentId: agent.id,
  });

  const isSubmitting = useSignal(false);
  const submitSuccess = useSignal(false);
  const submitError = useSignal("");

  const handleSubmit = async () => {
    if (isSubmitting.value) return;

    isSubmitting.value = true;
    submitError.value = "";

    try {
      // Validate form
      if (!formData.value.name || !formData.value.email) {
        throw new Error("Name and email are required");
      }

      // Submit form data
      const response = await fetch("/api/contact-agent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData.value),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      submitSuccess.value = true;
      formData.value = {
        name: "",
        email: "",
        phone: "",
        message: "",
        propertyMls: property.mls,
        agentId: agent.id,
      };
    } catch (error) {
      submitError.value = error instanceof Error ? error.message : "An error occurred";
    } finally {
      isSubmitting.value = false;
    }
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    formData.value = {
      ...formData.value,
      [field]: value,
    };
  };

  return (
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div class="bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div class="p-6">
          <button
            type="button"
            class="w-full bg-blue-600 text-white px-4 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors mb-4"
            onClick$={onToggle$}
          >
            Contact Agent
          </button>

          {submitSuccess.value ? (
            <div class="text-center py-8">
              <div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  class="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Success Checkmark</title>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
              <p class="text-gray-600 mb-4">
                Thank you for your interest. {agent.name} will get back to you soon.
              </p>
              <button
                type="button"
                class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                onClick$={onToggle$}
              >
                Close
              </button>
            </div>
          ) : (
            <div class="space-y-6">
              <div class="border-b pb-4">
                <div class="flex items-center space-x-4">
                  <div class="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    {agent.photo ? (
                      <img
                        src={agent.photo}
                        alt={agent.name}
                        class="w-16 h-16 rounded-full object-cover"
                      />
                    ) : (
                      <div class="text-gray-600 text-xl font-semibold">
                        {agent.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </div>
                    )}
                  </div>
                  <div class="flex-1">
                    <h4 class="text-lg font-semibold text-gray-900">{agent.name}</h4>
                    {agent.brokerage && <p class="text-sm text-gray-600">{agent.brokerage}</p>}
                    <p class="text-sm text-gray-600">{agent.phone}</p>
                  </div>
                </div>
              </div>

              <form onSubmit$={handleSubmit} class="space-y-4">
                <div>
                  <label
                    for={`name-${property.mls}`}
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id={`name-${property.mls}`}
                    value={formData.value.name}
                    onInput$={(e) => {
                      handleInputChange("name", (e.target as HTMLInputElement).value);
                    }}
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label
                    for={`email-${property.mls}`}
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id={`email-${property.mls}`}
                    value={formData.value.email}
                    onInput$={(e) => {
                      handleInputChange("email", (e.target as HTMLInputElement).value);
                    }}
                    required
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label
                    for={`phone-${property.mls}`}
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id={`phone-${property.mls}`}
                    value={formData.value.phone}
                    onInput$={(e) => {
                      handleInputChange("phone", (e.target as HTMLInputElement).value);
                    }}
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label
                    for={`message-${property.mls}`}
                    class="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id={`message-${property.mls}`}
                    value={formData.value.message}
                    onInput$={(e) => {
                      handleInputChange("message", (e.target as HTMLTextAreaElement).value);
                    }}
                    rows={4}
                    class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
                    placeholder="Tell us about your interest in this property..."
                  />
                </div>

                {submitError.value && (
                  <div class="bg-red-50 border border-red-200 rounded-lg p-3">
                    <div class="flex items-center">
                      <svg
                        class="w-5 h-5 text-red-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <title>Error Icon</title>
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                      <span class="text-red-700 text-sm">{submitError.value}</span>
                    </div>
                  </div>
                )}

                <div class="flex space-x-3 pt-4">
                  <button
                    type="button"
                    class="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick$={onToggle$}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting.value}
                    class="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
                  >
                    {isSubmitting.value ? (
                      <>
                        <div class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
});
