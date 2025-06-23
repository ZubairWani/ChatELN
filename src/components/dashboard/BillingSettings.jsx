import React from 'react';
import { CreditCard } from 'lucide-react';

const BillingSettings = () => {
  return (
    <div className="space-y-10">
      <section className="bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-6">
        <div className="flex justify-between items-center">
            <div>
                <h2 className="text-lg text-white font-medium">Current Plan</h2>
                <p className="text-2xl font-bold text-white mt-1">Pro Plan</p>
                <p className="text-sm text-gray-400">Your plan renews on December 31, 2024.</p>
            </div>
            <button className="bg-white text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">Manage Plan</button>
        </div>
      </section>

      <section>
        <h2 className="text-xl text-white font-medium">Payment Method</h2>
        <div className="mt-4 bg-[#2a2a2a] border border-gray-700/60 rounded-lg p-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
                <CreditCard className="w-8 h-8 text-gray-400" />
                <div>
                    <p className="text-white">Visa ending in 1234</p>
                    <p className="text-sm text-gray-400">Expires 08/2026</p>
                </div>
            </div>
            <button className="text-blue-400 font-medium hover:underline">Update</button>
        </div>
      </section>

      <section>
        <h2 className="text-xl text-white font-medium">Billing History</h2>
        <div className="mt-4 flow-root">
          <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <table className="min-w-full divide-y divide-gray-700/60">
                <thead>
                  <tr>
                    <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">Date</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Amount</th>
                    <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Description</th>
                    <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0"><span className="sr-only">Download</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                    <tr>
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-300 sm:pl-0">Nov 1, 2023</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">$20.00</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">Pro Plan Subscription</td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0"><a href="#" className="text-blue-400 hover:text-blue-300">Invoice</a></td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BillingSettings;