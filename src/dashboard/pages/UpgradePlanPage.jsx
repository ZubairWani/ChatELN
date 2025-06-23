import React from 'react';
import { Check } from 'lucide-react';

const UpgradePlanPage = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      description: 'For light usage and trying out the basics.',
      features: ['Basic model access', 'Limited usage', 'Standard support'],
      isCurrent: true,
    },
    {
      name: 'Pro',
      price: '$20',
      priceTerm: '/ month',
      description: 'For individuals who want more power and access to the latest features.',
      features: ['5x more usage than free', 'Access to latest models', 'Priority access during high-traffic periods', 'Early access to new features'],
      cta: 'Upgrade to Pro',
      isPopular: true,
    },
    {
      name: 'Team',
      price: '$30',
      priceTerm: '/ user / month',
      description: 'For teams collaborating and building with Claude.',
      features: ['Everything in Pro', 'Higher usage limits', 'Admin tools for user management', 'Centralized billing'],
      cta: 'Contact Sales',
    }
  ];

  return (
    <div className="w-full h-full p-8 text-white bg-[#1c1c1c] overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-gray-200">Choose your plan</h1>
          <p className="mt-4 text-lg text-gray-400">Unlock more power, features, and higher usage limits.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`bg-[#2a2a2a] border rounded-xl p-6 flex flex-col
                ${plan.isPopular ? 'border-blue-500' : 'border-gray-700/60'}
              `}
            >
              {plan.isPopular && <div className="text-center mb-4"><span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span></div>}
              <h2 className="text-2xl font-semibold text-white">{plan.name}</h2>
              <p className="text-gray-400 mt-2 flex-grow">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                {plan.priceTerm && <span className="text-gray-400">{plan.priceTerm}</span>}
              </div>
              <ul className="mt-8 space-y-3 text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-auto pt-8">
                <button
                  disabled={plan.isCurrent}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors
                    ${plan.isCurrent 
                      ? 'bg-gray-700 text-gray-400 cursor-not-allowed' 
                      : 'bg-white text-black hover:bg-gray-200'
                    }`}
                >
                  {plan.isCurrent ? 'Your Current Plan' : plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanPage;