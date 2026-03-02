export default function ComparisonTable() {
  return (
    <section className="py-16 bg-white" id="compare">
      <div className="max-w-7xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-4 text-slate-900">
          EPS vs. Hitachi vs. India1 vs. Findi: 2026 Comparison
        </h2>

        <p className="text-center text-slate-500 mb-10 max-w-2xl mx-auto">
          Compare the top 4 white label ATM providers in India. See why{" "}
          <strong className="text-indigo-700">EPS Bancs</strong> is our top pick for technology and uptime in 2026.
        </p>

        <div className="overflow-x-auto shadow-xl rounded-xl border border-gray-100 relative">
          <table className="w-full text-left border-collapse min-w-[900px]">
            <thead>
              <tr className="bg-slate-900 text-white uppercase text-sm leading-normal tracking-wider">

                <th className="py-5 px-6">Feature</th>

                {/* EPS FIRST */}
                <th className="py-5 px-6 bg-indigo-800 border-l border-indigo-700 relative">
                  EPS Bancs
                  <span className="absolute -top-0 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 text-[10px] font-bold px-2 py-0.5 rounded shadow-sm whitespace-nowrap">
                    Best for 2026
                  </span>
                </th>

               
                <th className="py-5 px-6 bg-orange-700 border-l border-orange-600">India1 Payments</th>
                 <th className="py-5 px-6 bg-blue-900 border-l border-blue-800">Hitachi Money Spot</th>
                <th className="py-5 px-6 bg-green-800 border-l border-green-700">Findi (Indicash)</th>
              </tr>
            </thead>

            <tbody className="text-slate-700 text-sm font-medium">

              {/* Row 1: Investment */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Total Investment</td>
                <td className="py-4 px-6 font-bold text-indigo-700">₹2.5L - ₹4.5L</td>
                
                <td className="py-4 px-6">₹3.5L - ₹4.5L</td>
                <td className="py-4 px-6">₹3.5L - ₹5.0L</td>
                <td className="py-4 px-6">~₹4L</td>
              </tr>

              {/* Row 2: Income */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Monthly Income (3000-Est)</td>
                <td className="py-4 px-6 font-bold text-green-600">₹30,000+</td>
                
                <td className="py-4 px-6">₹20,000+</td>
                <td className="py-4 px-6">₹25,000+</td>
                <td className="py-4 px-6">₹30,000+</td>
              </tr>

              {/* Row 3: Security Deposit */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Security Deposit</td>
                <td className="py-4 px-6">Low Competitive</td>
                <td className="py-4 px-6">High</td>
                <td className="py-4 px-6">Low </td>
                <td className="py-4 px-6">High</td>
 
              </tr>

              {/* Row 4: Uptime */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Tech & Uptime</td>
                <td className="py-4 px-6 font-bold text-indigo-700">99.5% (Best in Class)</td>
                <td className="py-4 px-6">Standard</td>
                <td className="py-4 px-6">Rugged (Rural)</td>
                   <td className="py-4 px-6">Standard</td>
    
              </tr>

              {/* Row 5: Best Location */}
              <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Best Location</td>
                <td className="py-4 px-6">High Footfall Mkts</td>
                <td className="py-4 px-6">Metro / Urban</td>
                <td className="py-4 px-6">Rural / Villages</td>
                <td className="py-4 px-6">High Footfall Mkts</td>
              </tr>

              {/* Row 6: Why Choose */}
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">Why Choose?</td>

                <td className="py-4 px-6 text-xs leading-relaxed">
                  <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded">
                    Smart Tech & Support
                  </span>
                </td>

                <td className="py-4 px-6 text-xs leading-relaxed">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  Rural Leader
                  </span>
                </td>

                <td className="py-4 px-6 text-xs leading-relaxed">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded">
                    High Brand Value
                  </span>
                </td>

                <td className="py-4 px-6 text-xs leading-relaxed">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded">
                    Market Legacy
                  </span>
                </td>
              </tr>

            </tbody>
          </table>
        </div>

        <p className="text-center text-slate-500 text-xs mt-6 italic">
          * Figures are projected for 2026 based on current market trends. EPS Bancs offers superior uptime guarantees.
        </p>
      </div>
    </section>
  );
}
