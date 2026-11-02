import React, { useState } from 'react';
import { Calculator, ArrowRight, Info } from 'lucide-react';

interface CostEstimatorProps {
  onPreFillEnquiry?: (service: string, volume: string, customNote: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ onPreFillEnquiry }) => {
  const [businessType, setBusinessType] = useState('d2c');
  const [monthlyOrders, setMonthlyOrders] = useState(500);
  const [storageType, setStorageType] = useState('shelving');
  const [packagingType, setPackagingType] = useState('standard');

  // Dynamic estimate calculations for illustrative transparency
  const getEstimatedPerOrderCost = () => {
    let base = 28; // Pick & Pack base (INR)
    if (businessType === 'd2c') base += 6;
    if (businessType === 'msme') base += 12;
    if (packagingType === 'custom') base += 8;
    return base;
  };

  const getEstimatedMonthlyStorage = () => {
    switch (storageType) {
      case 'shelving':
        return 3500;
      case 'pallet':
        return 7200;
      case 'dedicated':
        return 14500;
      default:
        return 4000;
    }
  };

  const estimatedOrderFulfillmentTotal = monthlyOrders * getEstimatedPerOrderCost();
  const estimatedStorageTotal = getEstimatedMonthlyStorage();
  const estimatedGrandTotal = estimatedOrderFulfillmentTotal + estimatedStorageTotal;

  const handleApplyToForm = () => {
    const volumeString = `${monthlyOrders} orders/month`;
    const serviceName = businessType === 'd2c' 
      ? 'Order Fulfillment' 
      : businessType === 'msme' 
      ? 'Flexible 3PL Solutions' 
      : 'E-Commerce Warehousing';

    const note = `Estimated Requirement: ${monthlyOrders} monthly orders, ${storageType} storage, ${packagingType} packaging.`;
    
    if (onPreFillEnquiry) {
      onPreFillEnquiry(serviceName, volumeString, note);
    }

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="estimator" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#F28C28] text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5 text-[#F28C28]" />
            Transparent Pricing Guidance
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-extrabold text-[#102B4E] tracking-tight mb-4">
            Interactive Fulfillment Cost Estimator
          </h2>
          <p className="text-base sm:text-lg text-[#5A6578] font-normal leading-relaxed">
            Configure your monthly order volume and storage needs to get an instant illustrative fulfillment estimate tailored for regional e-commerce growth.
          </p>
        </div>

        {/* Calculator Main Box */}
        <div className="max-w-5xl mx-auto bg-[#F4F7FA] rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Input Controls (Left 7 Cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 space-y-8 bg-white">
              
              {/* Business Type */}
              <div>
                <label className="block text-sm font-bold text-[#102B4E] mb-2">
                  1. Select Your Business Model
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'ecommerce', label: 'Marketplace Seller' },
                    { id: 'd2c', label: 'D2C Consumer Brand' },
                    { id: 'msme', label: 'MSME / Wholesale' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setBusinessType(item.id)}
                      className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                        businessType === item.id
                          ? 'bg-[#102B4E] text-white border-[#102B4E] shadow-sm'
                          : 'bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Monthly Order Volume Slider */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label htmlFor="monthly-orders-range" className="text-sm font-bold text-[#102B4E]">
                    2. Estimated Monthly Dispatch Volume
                  </label>
                  <span className="text-base font-extrabold text-[#F28C28] bg-orange-50 px-3 py-1 rounded-lg border border-orange-200">
                    {monthlyOrders.toLocaleString()} Orders / Mo
                  </span>
                </div>
                <input
                  id="monthly-orders-range"
                  aria-label="Estimated Monthly Dispatch Volume"
                  type="range"
                  min="50"
                  max="5000"
                  step="50"
                  value={monthlyOrders}
                  onChange={(e) => setMonthlyOrders(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#F28C28]"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-semibold mt-1.5">
                  <span>50 Orders</span>
                  <span>1,000 Orders</span>
                  <span>2,500 Orders</span>
                  <span>5,000+ Orders</span>
                </div>
              </div>

              {/* Storage Space Requirement */}
              <div>
                <label className="block text-sm font-bold text-[#102B4E] mb-2">
                  3. Storage Type Requirement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  {[
                    { id: 'shelving', name: 'Shelving Bins', desc: 'Ideal for small-to-medium multi-SKU items' },
                    { id: 'pallet', name: 'Standard Pallets', desc: 'Bulk cartons & medium pallet positions' },
                    { id: 'dedicated', name: 'Dedicated Floor Sq.Ft.', desc: 'High inventory volume staging' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setStorageType(item.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        storageType === item.id
                          ? 'bg-blue-50/70 border-[#245B91] ring-1 ring-[#245B91]'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#102B4E]">{item.name}</div>
                      <div className="text-[10px] text-slate-500 mt-1 leading-normal">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Packaging Requirement */}
              <div>
                <label className="block text-sm font-bold text-[#102B4E] mb-2">
                  4. Packaging & Supplies
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { id: 'standard', name: 'Standard Courier Packaging', desc: 'Secure corrugated cartons & flyer polybags' },
                    { id: 'custom', name: 'Brand-Customized Packaging', desc: 'Custom tapes, flyers, stickers & thank-you cards' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setPackagingType(item.id)}
                      className={`p-3 rounded-xl text-left border transition-all ${
                        packagingType === item.id
                          ? 'bg-blue-50/70 border-[#245B91] ring-1 ring-[#245B91]'
                          : 'bg-slate-50 border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      <div className="text-xs font-bold text-[#102B4E]">{item.name}</div>
                      <div className="text-[10px] text-slate-500 mt-1">{item.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Estimate Summary (Right 5 Cols) */}
            <div className="lg:col-span-5 p-6 sm:p-10 bg-gradient-to-br from-[#102B4E] to-[#0B1C33] text-white flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-extrabold uppercase tracking-widest text-[#F28C28]">
                    Estimated Breakdown
                  </span>
                  <span className="text-xs text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                    Monthly Basis
                  </span>
                </div>

                <div className="space-y-4 my-6 text-sm">
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Pick & Pack ({monthlyOrders} units)</span>
                    <span className="font-semibold text-white">₹{estimatedOrderFulfillmentTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Storage Allocation ({storageType})</span>
                    <span className="font-semibold text-white">₹{estimatedStorageTotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Barcode & Inventory Tracking</span>
                    <span className="text-emerald-400 font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-300">
                    <span>Daily Courier Handover Manifests</span>
                    <span className="text-emerald-400 font-semibold">Included</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/15">
                  <div className="text-xs text-slate-400 font-medium">Estimated Monthly Logistics Cost</div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F28C28] mt-1">
                    ₹{estimatedGrandTotal.toLocaleString()}{' '}
                    <span className="text-xs text-slate-300 font-normal">/ month (approx.)</span>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 leading-relaxed flex items-start gap-1.5">
                    <Info className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span>Actual rate is finalized following SKU dimensions, weight brackets, and courier rate agreements.</span>
                  </p>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={handleApplyToForm}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#F28C28] hover:bg-[#d9771e] text-white font-bold py-3.5 px-4 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 text-sm"
                >
                  <span>Apply Estimate to Enquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
