import { component$, useSignal } from "@builder.io/qwik";

interface PriceTier {
  name: string;
  price: number;
  description: string;
  sqft: string;
  bedrooms: string;
  bathrooms: string;
}

const priceTiers: PriceTier[] = [
  {
    name: "The Heritage",
    price: 650000,
    description: "Elegant single-story living",
    sqft: "2,100 - 2,400 sq ft",
    bedrooms: "2-3 Bedrooms",
    bathrooms: "2-3 Bathrooms",
  },
  {
    name: "The Stonebridge",
    price: 750000,
    description: "Spacious luxury design",
    sqft: "2,500 - 2,800 sq ft",
    bedrooms: "3-4 Bedrooms",
    bathrooms: "2-3 Bathrooms",
  },
  {
    name: "The Signature",
    price: 850000,
    description: "Premium custom features",
    sqft: "2,800 - 3,200 sq ft",
    bedrooms: "3-4 Bedrooms",
    bathrooms: "3-4 Bathrooms",
  },
];

export const PriceCalculator = component$(() => {
  const selectedTier = useSignal(0);
  const downPaymentStr = useSignal("20");
  const interestRateStr = useSignal("6.5");
  const loanTermStr = useSignal("30");

  const calculateMonthlyPayment = () => {
    const homePrice = priceTiers[selectedTier.value].price;
    const downPayment = parseFloat(downPaymentStr.value);
    const interestRate = parseFloat(interestRateStr.value);
    const loanTerm = parseFloat(loanTermStr.value);
    const downPaymentAmount = (homePrice * downPayment) / 100;
    const loanAmount = homePrice - downPaymentAmount;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;

    if (monthlyRate === 0) {
      return loanAmount / numberOfPayments;
    }

    const monthlyPayment =
      (loanAmount * monthlyRate * (1 + monthlyRate) ** numberOfPayments) /
      ((1 + monthlyRate) ** numberOfPayments - 1);

    return monthlyPayment;
  };

  const monthlyPayment = calculateMonthlyPayment();
  const homePrice = priceTiers[selectedTier.value].price;
  const downPayment = parseFloat(downPaymentStr.value);
  const downPaymentAmount = (homePrice * downPayment) / 100;
  const loanAmount = homePrice - downPaymentAmount;

  return (
    <div class="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 shadow-xl">
      <div class="text-center mb-8">
        <h3 class="text-3xl font-bold text-gray-900 mb-2">Calculate Your Monthly Payment</h3>
        <p class="text-gray-600">
          Get an instant estimate for your dream home at Heritage at Stonebridge
        </p>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        {/* Calculator Controls */}
        <div class="space-y-6">
          {/* Home Selection */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-3">
              Select Home Collection
            </label>
            <div class="space-y-2">
              {priceTiers.map((tier, index) => (
                <button
                  key={index}
                  type="button"
                  onClick$={() => (selectedTier.value = index)}
                  class={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${
                    selectedTier.value === index
                      ? "border-blue-500 bg-blue-50 shadow-md"
                      : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  <div class="flex justify-between items-center">
                    <div>
                      <div class="font-semibold text-gray-900">{tier.name}</div>
                      <div class="text-sm text-gray-600">{tier.description}</div>
                    </div>
                    <div class="text-right">
                      <div class="font-bold text-blue-600">${tier.price.toLocaleString()}</div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Down Payment */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Down Payment: {downPaymentStr.value}%
            </label>
            <input
              type="range"
              min="5"
              max="50"
              bind:value={downPaymentStr}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style="background: linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(parseFloat(downPaymentStr.value) - 5) / 45 * 100}%, #E5E7EB ${(parseFloat(downPaymentStr.value) - 5) / 45 * 100}%, #E5E7EB 100%)"
            />
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>5%</span>
              <span>50%</span>
            </div>
          </div>

          {/* Interest Rate */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Interest Rate: {interestRateStr.value}%
            </label>
            <input
              type="range"
              min="3"
              max="10"
              step="0.1"
              bind:value={interestRateStr}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style="background: linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(parseFloat(interestRateStr.value) - 3) / 7 * 100}%, #E5E7EB ${(parseFloat(interestRateStr.value) - 3) / 7 * 100}%, #E5E7EB 100%)"
            />
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>3%</span>
              <span>10%</span>
            </div>
          </div>

          {/* Loan Term */}
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">
              Loan Term: {loanTermStr.value} years
            </label>
            <input
              type="range"
              min="15"
              max="30"
              step="5"
              bind:value={loanTermStr}
              class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              style="background: linear-gradient(to right, #3B82F6 0%, #3B82F6 ${(parseFloat(loanTermStr.value) - 15) / 15 * 100}%, #E5E7EB ${(parseFloat(loanTermStr.value) - 15) / 15 * 100}%, #E5E7EB 100%)"
            />
            <div class="flex justify-between text-xs text-gray-500 mt-1">
              <span>15 years</span>
              <span>30 years</span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div class="bg-white rounded-xl p-6 shadow-lg">
          <div class="text-center mb-6">
            <div class="text-4xl font-bold text-blue-600 mb-2">
              ${Math.round(monthlyPayment).toLocaleString()}
            </div>
            <div class="text-gray-600">Estimated Monthly Payment</div>
          </div>

          <div class="space-y-4">
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">Home Price</span>
              <span class="font-semibold">${homePrice.toLocaleString()}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">Down Payment ({downPaymentStr.value}%)</span>
              <span class="font-semibold">${Math.round(downPaymentAmount).toLocaleString()}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">Loan Amount</span>
              <span class="font-semibold">${Math.round(loanAmount).toLocaleString()}</span>
            </div>
            <div class="flex justify-between py-2 border-b border-gray-100">
              <span class="text-gray-600">Interest Rate</span>
              <span class="font-semibold">{interestRateStr.value}%</span>
            </div>
            <div class="flex justify-between py-2">
              <span class="text-gray-600">Loan Term</span>
              <span class="font-semibold">{loanTermStr.value} years</span>
            </div>
          </div>

          <div class="mt-6 p-4 bg-blue-50 rounded-lg">
            <div class="text-sm text-blue-800 text-center">
              <strong>Note:</strong> This is an estimate. Actual rates and terms may vary. Contact
              us for personalized financing options.
            </div>
          </div>

          <button
            type="button"
            class="w-full mt-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Pre-Approved Today
          </button>
        </div>
      </div>
    </div>
  );
});
