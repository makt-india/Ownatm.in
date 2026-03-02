"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Calculator,
  Zap,
  Building2,
  TrendingUp,
  ArrowRight,
  BarChart3,
  MapPin,
  RefreshCcw,
  CheckCircle2,
  CalendarDays
} from "lucide-react";

/* ---------------- Animated Counter ---------------- */
const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    let start = displayValue;
    const end = value;
    const duration = 800;
    const startTime = performance.now();

    const animate = (time) => {
      const progress = Math.min((time - startTime) / duration, 1);
      // Ease-out expo
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      
      const current = start + (end - start) * eased;
      setDisplayValue(current);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  return <span>{Math.round(displayValue).toLocaleString("en-IN")}</span>;
};

/* ---------------- Configuration Data ---------------- */
const BRAND_DATA = {
  eps: { name: "EPS", baseCommission: 8.5, color: "bg-blue-600", link: "/atm-franchise/eps" },
  hitachi: { name: "Hitachi", baseCommission: 9.0, color: "bg-red-600", link: "/atm-franchise/hitachi" },
  findi: { name: "Findi", baseCommission: 8.0, color: "bg-orange-600", link: "/atm-franchise/findi" },
  india1: { name: "India1", baseCommission: 8.0, color: "bg-emerald-600", link: "/atm-franchise/india1" },
};

// Location Presets to auto-fill expenses
const LOCATION_PRESETS = {
  rural: { label: "Rural / Village", rent: 3000, elec: 1000 },
  semi: { label: "Semi-Urban", rent: 6000, elec: 1500 },
  metro: { label: "Metro City", rent: 10000, elec: 2500 },
};

export default function ProfitCalculator() {
  // Inputs
  const [selectedBrand, setSelectedBrand] = useState("eps");
  const [compareBrand, setCompareBrand] = useState("hitachi"); // Default comparison
  const [showComparison, setShowComparison] = useState(false);
  
  const [locationType, setLocationType] = useState("semi");
  const [monthlyRent, setMonthlyRent] = useState(6000);
  const [electricity, setElectricity] = useState(1500);
  const [investment, setInvestment] = useState(250000);
  
  const [dailyTx, setDailyTx] = useState(60);
  const [financialRatio, setFinancialRatio] = useState(80); // 80% Cash, 20% Non-Financial

  // Update expenses when preset changes
  const applyPreset = (key) => {
    setLocationType(key);
    setMonthlyRent(LOCATION_PRESETS[key].rent);
    setElectricity(LOCATION_PRESETS[key].elec);
  };

  /* ---------- Advanced Calculation Engine ---------- */
  const calculateMetrics = (brandKey) => {
    const brand = BRAND_DATA[brandKey];
    
    // Logic: Financial Txn gets full commission, Non-Financial gets flat ₹3 (Industry avg)
    const financialTx = Math.round(dailyTx * (financialRatio / 100));
    const nonFinancialTx = dailyTx - financialTx;
    
    // Weighted Average Commission
    const avgCommission = 
      ((financialTx * brand.baseCommission) + (nonFinancialTx * 3)) / dailyTx;

    const monthlyRevenue = Math.round(dailyTx * avgCommission * 30);
    const monthlyExpenses = monthlyRent + electricity;
    const netProfit = monthlyRevenue - monthlyExpenses;
    const annualProfit = netProfit * 12;
    
    // ROI Calculation
    const roiMonths = netProfit > 0 ? (investment / netProfit).toFixed(1) : "∞";

    return { 
      brand, 
      avgCommission, 
      monthlyRevenue, 
      monthlyExpenses, 
      netProfit, 
      annualProfit, 
      roiMonths 
    };
  };

  const primary = calculateMetrics(selectedBrand);
  const secondary = calculateMetrics(compareBrand);

  // Generate Chart Data (12 Months Cumulative)
  const chartData = Array.from({ length: 12 }, (_, i) => {
    const profit = Math.max(0, primary.netProfit);
    return profit * (i + 1);
  });
  const maxChartValue = Math.max(...chartData, 10000); // Avoid divide by zero

  return (
    <section className="py-22 md:py-24 bg-slate-50" id="calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm text-sm font-semibold text-slate-600 mb-4 border border-slate-200">
            <Calculator className="w-4 h-4 text-emerald-600" />
            <span>Interactive ROI Simulator</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Calculate Your <span className="text-emerald-600">ATM Profits</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            Adjust location, rent, and transaction mix to see exactly how much you can earn.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8">
          
          {/* ================= LEFT: INPUT CONTROLS ================= */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* 1. Brand & Location Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-slate-400" /> 
                Configuration
              </h3>

              <div className="space-y-6">
                {/* Brand Selector */}
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                    Select Operator
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {Object.keys(BRAND_DATA).map((key) => (
                      <button
                        key={key}
                        onClick={() => setSelectedBrand(key)}
                        className={`py-3 px-2 rounded-xl text-sm font-bold transition-all border-2 ${
                          selectedBrand === key
                            ? "border-emerald-600 bg-emerald-50 text-emerald-700"
                            : "border-slate-100 bg-white text-slate-500 hover:border-slate-300"
                        }`}
                      >
                        {BRAND_DATA[key].name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Location Presets */}
                <div>
                  <label className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">
                    Location Type (Auto-sets Rent)
                  </label>
                  <div className="flex gap-2 bg-slate-100 p-1 rounded-xl">
                    {Object.keys(LOCATION_PRESETS).map((key) => (
                      <button
                        key={key}
                        onClick={() => applyPreset(key)}
                        className={`flex-1 py-2 text-sm font-medium rounded-lg transition-all ${
                          locationType === key
                            ? "bg-white text-slate-900 shadow-sm"
                            : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        {LOCATION_PRESETS[key].label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Manual Costs */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">Rent (₹)</label>
                    <input
                      type="number"
                      value={monthlyRent}
                      onChange={(e) => setMonthlyRent(Number(e.target.value))}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-500 mb-1 block">Utility/ electricity (₹)</label>
                    <input
                      type="number"
                      value={electricity}
                      onChange={(e) => setElectricity(Number(e.target.value))}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-semibold text-slate-900 focus:ring-2 focus:ring-emerald-500 outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 2. Transaction Dynamics Card */}
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-900 mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-slate-400" /> 
                Transaction Volume
              </h3>

              <div className="space-y-8">
                {/* Daily Tx Slider */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label className="font-semibold text-slate-700">Avg. Daily Transactions</label>
                    <span className="text-2xl font-bold text-emerald-600">{dailyTx}</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="200"
                    step="5"
                    value={dailyTx}
                    onChange={(e) => setDailyTx(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-2">
                    <span>Low Footfall</span>
                    <span>High Footfall</span>
                  </div>
                </div>

                {/* Transaction Mix Slider */}
                <div>
                  <div className="flex justify-between items-end mb-2">
                    <label className="font-semibold text-slate-700">Financial Mix (Cash Withdrawal)</label>
                    <span className="text-sm font-bold bg-slate-100 px-2 py-1 rounded">
                      {financialRatio}% Financial
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mb-3">
                    Financial txns pay higher commission (~₹{primary.brand.baseCommission}) than Non-Financial (~₹3).
                  </p>
                  <input
                    type="range"
                    min="50"
                    max="100"
                    step="5"
                    value={financialRatio}
                    onChange={(e) => setFinancialRatio(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ================= RIGHT: RESULTS DASHBOARD ================= */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Primary Result Card */}
            <div className="bg-slate-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden">
              {/* Background Glow */}
              <div className={`absolute top-0 right-0 w-64 h-64 ${primary.brand.color} opacity-20 blur-[80px] rounded-full pointer-events-none -mr-16 -mt-16`}></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-slate-400 text-sm font-medium mb-1">Estimated Net Profit</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        ₹<AnimatedNumber value={Math.max(0, primary.netProfit)} />
                      </span>
                      <span className="text-slate-400 font-medium">/mo</span>
                    </div>
                  </div>
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center ${primary.brand.color} bg-opacity-20 border border-white/10`}>
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Financial Breakdown */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">Monthly Revenue</p>
                    <p className="text-lg font-bold text-emerald-400">
                      + ₹<AnimatedNumber value={primary.monthlyRevenue} />
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl border border-white/5">
                    <p className="text-xs text-slate-400 mb-1">Monthly Cost</p>
                    <p className="text-lg font-bold text-red-400">
                      - ₹<AnimatedNumber value={primary.monthlyExpenses} />
                    </p>
                  </div>
                </div>

                {/* Comparison Toggle */}
                <div className="mb-6">
                   <button 
                     onClick={() => setShowComparison(!showComparison)}
                     className="flex items-center gap-2 text-sm text-slate-300 hover:text-white transition-colors"
                   >
                     <RefreshCcw className="w-4 h-4" />
                     {showComparison ? "Hide Comparison" : "Compare with another brand"}
                   </button>

                   {showComparison && (
                     <div className="mt-4 bg-white/10 p-4 rounded-xl animate-in fade-in slide-in-from-top-2">
                       <div className="flex justify-between items-center mb-2">
                         <select 
                           value={compareBrand}
                           onChange={(e) => setCompareBrand(e.target.value)}
                           className="bg-slate-800 text-white text-xs p-1 rounded border border-slate-700"
                         >
                            {Object.keys(BRAND_DATA).filter(k => k !== selectedBrand).map(k => (
                              <option key={k} value={k}>{BRAND_DATA[k].name}</option>
                            ))}
                         </select>
                         <span className="text-sm font-bold">₹{Math.max(0, secondary.netProfit).toLocaleString()}</span>
                       </div>
                       
                       {/* Mini Bar Comparison */}
                       <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden flex">
                          <div 
                            style={{ width: `${(primary.netProfit / (primary.netProfit + secondary.netProfit)) * 100}%` }}
                            className={`${primary.brand.color} h-full transition-all duration-500`}
                          />
                          <div className="flex-1 bg-slate-600 h-full" /> 
                       </div>
                       <div className="flex justify-between text-[10px] mt-1 text-slate-400">
                          <span>{primary.brand.name}</span>
                          <span>{secondary.brand.name}</span>
                       </div>
                     </div>
                   )}
                </div>

                {/* CTA */}
                <Link
                  href={primary.brand.link}
                  className="group w-full bg-white text-slate-900 py-4 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-emerald-50 transition-all shadow-lg active:scale-95"
                >
                  Start with {primary.brand.name}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Growth Chart Card */}
{/* Growth Chart Card */}
<div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200">
  <div className="flex justify-between items-center mb-6">
    <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
      <CalendarDays className="w-4 h-4" />
      12-Month Projection
    </h4>
    <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2 py-1 rounded-lg">
      + ₹{primary.annualProfit.toLocaleString()} /yr
    </span>
  </div>

  {/* FIXED CHART: SVG Area Chart */}
  <div className="relative h-40 w-full">
    {/* 1. Grid Lines (Background) */}
    <div className="absolute inset-0 flex flex-col justify-between text-[10px] text-slate-300 pointer-events-none">
      <div className="border-b border-slate-100 w-full h-0"></div>
      <div className="border-b border-slate-100 w-full h-0"></div>
      <div className="border-b border-slate-100 w-full h-0"></div>
      <div className="border-b border-slate-100 w-full h-0"></div>
    </div>

    {/* 2. The Line Graph */}
    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible preserve-3d">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#10b981" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Area Fill */}
      <path
        d={`M0,100 ${chartData.map((val, i) => {
          const x = (i / 11) * 100;
          const y = 100 - (val / maxChartValue) * 80; // Scale to 80% height to prevent clipping
          return `L${x},${y}`;
        }).join(" ")} L100,100 Z`}
        fill="url(#chartGradient)"
      />

      {/* Stroke Line */}
      <path
        d={`M0,100 ${chartData.map((val, i) => {
          const x = (i / 11) * 100;
          const y = 100 - (val / maxChartValue) * 80;
          return `L${x},${y}`;
        }).join(" ")}`}
        fill="none"
        stroke="#10b981"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="drop-shadow-sm"
      />

      {/* Dots on points */}
      {chartData.map((val, i) => {
        const x = (i / 11) * 100;
        const y = 100 - (val / maxChartValue) * 80;
        return (
          <circle
            key={i}
            cx={x}
            cy={y}
            r="1.5"
            className="fill-white stroke-emerald-600 stroke-2"
          />
        );
      })}
    </svg>
  </div>
  
  <div className="flex justify-between mt-2 text-[10px] text-slate-400 font-medium">
    <span>Month 1</span>
    <span>Month 6</span>
    <span>Month 12</span>
  </div>
</div>        </div>
    </div>
      </div>
    </section>
  );
}