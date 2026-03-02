"use client";

import { motion } from "framer-motion";
import { CheckCircle, Phone, ArrowRight, Loader2, MapPin, TrendingUp, Shield } from "lucide-react";
import { useState } from "react";
const indianStates = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];
const messageSuggestions = [
  "I want to apply for an ATM franchise.",
  "I need full details about investment and returns.",
  "I want to check if my location is eligible.",
  "Please call me and explain the process.",
  "I already have a shop and want to install an ATM."
];



export default function BecomeFranchiseContent() {
const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState("");

const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  city: "",
  provider: "",
  language: "",
  message: "",
});

const formatPhone = (phone) => {
  const digits = phone.replace(/\D/g, "");

  if (digits.length === 10) {
    return "91" + digits;
  }

  if (digits.startsWith("91") && digits.length === 12) {
    return digits;
  }

  return digits;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
const indianMobileRegex = /^91[6-9]\d{9}$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit = async (e) => {
  e.preventDefault();

  if (isSubmitting) return;

  setError("");
  setIsSuccess(false);

  const cleanPhone = formatPhone(formData.phone);

  // Phone validation
  if (!indianMobileRegex.test(cleanPhone)) {
    setError("Enter valid 10-digit Indian mobile number.");
    return;
  }

  // Required fields
  if (
    !formData.fullName.trim() ||
    !formData.city.trim() ||
    !formData.email.trim() ||
    !formData.provider ||
    !formData.language ||
    !formData.message.trim()
  ) {
    setError("Please fill all required fields.");
    return;
  }

  // Stronger message validation (avoid garbage leads)
  if (formData.message.trim().length < 10) {
    setError("Please describe your query properly (minimum 10 characters).");
    return;
  }

  // Email validation
  if (!emailRegex.test(formData.email.trim())) {
    setError("Enter valid email address.");
    return;
  }

  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.fullName.trim());
    formDataToSend.append("phone", cleanPhone);
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("city", formData.city.trim());
    formDataToSend.append("provider", formData.provider);
    formDataToSend.append("language", formData.language);
    formDataToSend.append("message", formData.message.trim());
    formDataToSend.append("source", "ownatm");
    formDataToSend.append("wa_status", "Pending");

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzMwI2gQAKJSHTSHKSi78wimhCvYfbMpOMcICWMw5cEetQWFnYT7vXqu5H-JPsegUy3/exec",
      
      {
        method: "POST",
        body: formDataToSend,
      }
    );

    if (!response.ok) {
      throw new Error("Server error");
    }

    const text = await response.text();
    const result = text.trim().toLowerCase();

    if (result.includes("success")) {
      setIsSuccess(true);

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        provider: "",
        language: "",
        message: "",
      });

      window.scrollTo({ top: 0, behavior: "smooth" });

    } else if (result.includes("duplicate")) {
      setError("This mobile number has already applied.");
    } else {
      setError("Something went wrong. Please try again.");
    }

  } catch (err) {
    setError("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div className="relative bg-white min-h-screen font-sans selection:bg-[#4F293D] selection:text-white overflow-hidden">

      {/* Background Blobs */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden z-0" aria-hidden="true">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4F293D]/5 rounded-full blur-[120px] -translate-y-1/4 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-50 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 opacity-60" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 lg:py-32">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT SIDE - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-100 font-bold text-xs md:text-sm mb-6 uppercase tracking-wider shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              Applications Open
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
              Start Your <span className="text-[#4F293D]">ATM Franchise</span> Journey Today
            </h1>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Join India&apos;s fastest-growing ATM franchise network. Get a free consultation on location feasibility, earnings potential, and the best provider for your area.
            </p>

            <div className="space-y-6 mb-12">
              <FeatureRow 
                icon={<TrendingUp className="w-6 h-6" />}
                title="Quick Approval"
                desc="Get your site approved in 48–72 hours with fast-track processing."
              />
              <FeatureRow 
                icon={<Shield className="w-6 h-6" />}
                title="Zero Hidden Costs"
                desc="Transparent pricing for EPS, Hitachi, Findi & India1 providers."
              />
              <FeatureRow 
                icon={<CheckCircle className="w-6 h-6" />}
                title="Lifetime Support"
                desc="Technical & operational assistance included 24/7."
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-6 pt-8 border-t border-slate-100">
              <div className="flex-1">
                <p className="text-xs text-slate-400 font-bold uppercase tracking-widest mb-2">
                  Call Us Directly
                </p>
                <a
                  href="tel:+918883335553"
                  className="text-2xl font-bold text-slate-900 hover:text-[#4F293D] transition-colors flex items-center gap-3 group"
                >
                  <div className="p-2.5 bg-slate-50 rounded-full group-hover:bg-[#4F293D] group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  +91 88833 35553
                </a>
              </div>

              <div className="hidden sm:block">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-slate-50 rounded-full text-xs font-semibold text-slate-600 border border-slate-100">
                  <MapPin className="w-3.5 h-3.5 text-[#4F293D]" />
                  Pan India Coverage
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="relative lg:sticky lg:top-8"
          >
            <div className="absolute -inset-4 bg-[#4F293D]/5 rounded-[2rem] blur-2xl z-0" aria-hidden="true" />

            <div className="relative z-10 bg-white p-6 md:p-10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
              <h2 className="text-2xl font-bold text-slate-900 mb-8">
                Franchise Application
              </h2>

<form onSubmit={handleSubmit} className="space-y-5" noValidate>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
    <InputField
      label="Full Name"
      name="fullName"
      value={formData.fullName}
      onChange={handleChange}
      required
      placeholder="John Doe"
    />

    <InputField
      label="Phone Number"
      name="phone"
      type="tel"
      value={formData.phone}
      onChange={handleChange}
      required
      placeholder="+91 00000 00000"
    />
  </div>

  <InputField
    label="Email Address"
    name="email"
    type="email"
    value={formData.email}
    onChange={handleChange}
    required
    placeholder="name@company.com"
  />

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

    {/* City / State (Typing + Suggestions) */}
    <InputField
      label="State"
      name="city"
      value={formData.city}
      onChange={handleChange}
      required
      placeholder="Type State or select state"
      list="cityStates"
    />

    <datalist id="cityStates">
      {indianStates.map((state) => (
        <option key={state} value={state} />
      ))}
    </datalist>

    {/* Preferred Provider */}
    <SelectField
      label="Preferred Provider"
      name="provider"
      value={formData.provider}
      onChange={handleChange}
           required
      options={[
        "EPS ATM",
        "Hitachi Money Spot",
        "India1 (Indicash)",
        "Findi Payments",
        "Not Sure (Need Advice)"
      ]}
    />

    {/* Preferred Language */}
    <SelectField
      label="Preferred Language"
      name="language"
      value={formData.language}
      onChange={handleChange}
           required
      options={[
        "English",
        "Hindi",
        "Kannada",
        "Telugu",
        "Tamil"
      ]}
    />
  </div>

<InputField
  label="Message / Query"
  name="message"
  value={formData.message}
  onChange={handleChange}
  placeholder="Select a query or type your own..."
  list="messageOptions"
  required
/>
<datalist id="messageOptions">
  {messageSuggestions.map((item) => (
    <option key={item} value={item} />
  ))}
</datalist>

  <button
    type="submit"
    disabled={isSubmitting}
    className="w-full py-4 bg-[#4F293D] hover:bg-[#3d1f2f] text-white font-bold rounded-xl shadow-lg shadow-[#4F293D]/20 hover:shadow-[#4F293D]/30 active:scale-[0.99] transition-all flex items-center justify-center gap-3"
  >
    {isSubmitting ? (
      <>
        <Loader2 className="animate-spin w-5 h-5" />
        Submitting...
      </>
    ) : (
      <>
        Submit Application
        <ArrowRight className="w-5 h-5" />
      </>
    )}
  </button>

  <div aria-live="polite" aria-atomic="true">
    {isSuccess && (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-sm text-center font-bold flex items-center justify-center gap-2"
      >
        <CheckCircle className="w-5 h-5" />
        Submitted Successfully!
      </motion.div>
    )}

    {error && (
      <div className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-600 text-sm text-center font-medium">
        {error}
      </div>
    )}
  </div>

</form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

// ------------------------------------
// Helper Components
// ------------------------------------

function InputField({ label, name, value, onChange, required, type = "text", placeholder = "" , list = null }) {
  return (
    <div className="space-y-1.5">
      <label htmlFor={name} className="text-[13px] font-bold text-slate-700 block ml-1">{label} {required && <span className="text-red-500">*</span>}</label>
      <input id={name} name={name} type={type} required={required} value={value} onChange={onChange} placeholder={placeholder} list={list}  className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#4F293D]/5 focus:border-[#4F293D] text-slate-900 transition-all placeholder:text-slate-400 text-sm" />
    </div>
  );
}


function SelectField({
  label,
  name,
  value,
  onChange,
       required,
  options = []
}) {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={name}
        className="text-[13px] font-bold text-slate-700 block ml-1"
      >
        {label} <span className="text-red-500">*</span>
      </label>

      <select
        id={name}
        name={name}
   required={required}
        value={value}
        onChange={onChange}
        className="w-full px-4 py-3 bg-slate-50/50 border border-slate-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-[#4F293D]/5 focus:border-[#4F293D] text-slate-900 text-sm transition-all appearance-none"
      >
        <option value="">Select {label}</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

function FeatureRow({ icon, title, desc }) {
  return (
    <div className="flex gap-5 group">
      <div className="shrink-0 w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#4F293D] transition-all duration-500 flex items-center justify-center text-[#4F293D] group-hover:text-white shadow-sm">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-bold text-slate-900 mb-1 group-hover:text-[#4F293D] transition-colors">{title}</h3>
        <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}