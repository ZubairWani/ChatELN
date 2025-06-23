import React, { useState } from 'react';
import { Check } from 'lucide-react';

// Data for our plans, separated by type
const individualPlans = [
  {
    name: 'Free',
    price: '$0',
    description: 'For light usage and trying out the basics.',
    features: ['Basic model access', 'Limited usage', 'Standard support'],
    isCurrent: true,
  },
  {
    name: 'Pro',
    price: '$10',
    priceTerm: '/ month',
    description: 'For individuals who want more power and access to the latest features.',
    features: ['5x more usage than free', 'Access to latest models', 'Priority access during high-traffic periods', 'Early access to new features'],
    cta: 'Upgrade to Pro',
    isPopular: true,
  },
];

const enterprisePlans = [
  {
    name: 'Team',
    price: '$25',
    priceTerm: '/ user / month',
    description: 'For teams collaborating and building with ChatELN.',
    features: ['Everything in Pro', 'Higher usage limits', 'Admin tools for user management', 'Centralized billing'],
    cta: 'Upgrade to Team',
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations requiring maximum security, control, and support.',
    features: ['SSO and advanced security', 'Dedicated support & onboarding', 'Custom usage and model options', 'SOC 2 Type 2 compliance'],
    cta: 'Contact Sales',
  },
];

// Reusable PlanCard component
const PlanCard = ({ plan, selected, onClick }) => {
    const isSelected = selected === plan.name;

    return (
        <div
            onClick={() => !plan.isCurrent && onClick(plan.name)}
            className={`
                bg-[#2a2a2a] border-2 rounded-xl p-6 flex flex-col relative
                transition-all duration-200 ease-in-out transform hover:-translate-y-1
                ${plan.isCurrent ? 'cursor-default opacity-70' : 'cursor-pointer'}
                ${isSelected ? 'border-blue-500 shadow-lg shadow-blue-500/10' : 'border-gray-700/60'}
            `}
        >
            {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">Most Popular</span>
                </div>
            )}
            
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

            <div className="mt-auto pt-8 text-center text-sm font-semibold">
                {plan.isCurrent && <span className="text-gray-300">This is your current plan</span>}
            </div>
        </div>
    );
};

const UpgradePlanPage = () => {
  const [activeTab, setActiveTab] = useState('Individual');
  const [selectedPlan, setSelectedPlan] = useState(null);

  const plansToShow = activeTab === 'Individual' ? individualPlans : enterprisePlans;
  const currentCta = plansToShow.find(p => p.name === selectedPlan)?.cta || 'Select a Plan';
  
  return (
    <div className="w-full h-full p-8 text-white bg-[#1c1c1c] overflow-y-auto">
      <div className="max-w-5xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl font-serif text-gray-200">Choose your plan</h1>
          <p className="mt-4 text-lg text-gray-400">Unlock more power, features, and higher usage limits.</p>
        </div>

        {/* Tab Navigation */}
        <div className="mt-10 flex justify-center">
          <div className="bg-[#2a2a2a] p-1 rounded-lg flex items-center gap-1">
            <button
              onClick={() => setActiveTab('Individual')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${activeTab === 'Individual' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
            >
              Individual
            </button>
            <button
              onClick={() => setActiveTab('Enterprise')}
              className={`px-6 py-2 rounded-md font-semibold transition-colors ${activeTab === 'Enterprise' ? 'bg-gray-600 text-white' : 'text-gray-400 hover:bg-gray-700/50'}`}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/* Plan Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {plansToShow.map(plan => (
                <PlanCard key={plan.name} plan={plan} selected={selectedPlan} onClick={setSelectedPlan} />
            ))}
        </div>

        {/* Sticky Action Footer */}
        <div className="sticky bottom-8 mt-12 w-full flex justify-center">
            <button 
                disabled={!selectedPlan}
                className="bg-white text-black font-semibold px-12 py-3 rounded-lg hover:bg-gray-200 transition-all duration-200 disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed transform hover:scale-105"
            >
                {currentCta}
            </button>
        </div>
      </div>
    </div>
  );
};

export default UpgradePlanPage;