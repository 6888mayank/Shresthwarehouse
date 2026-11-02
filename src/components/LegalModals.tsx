import React from 'react';
import { X } from 'lucide-react';
import { COMPANY_INFO } from '../data/content';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Header */}
        <div className="bg-[#102B4E] p-6 text-white flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-3">
            <img src="/images/logo-emblem.png" alt="Shresth Warehouse" className="w-8 h-8 object-contain shrink-0" />
            <div>
              <h3 className="text-xl font-bold">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-blue-200">{COMPANY_INFO.name}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-5 text-sm text-[#252B35] leading-relaxed">
          {type === 'privacy' ? (
            <>
              <p className="text-xs text-slate-500 font-semibold">
                Last Updated: January 2026 | Location: Ghatshila, East Singhbhum, Jharkhand
              </p>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">1. Information We Collect</h4>
                <p className="text-slate-600">
                  When you submit business inquiries via the Shresth Warehouse website, we collect your full name, business or corporate entity name, email address, phone number, and fulfillment service specifications. This data is collected solely to provide accurate logistics quotes and service communications.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">2. Use of Information</h4>
                <p className="text-slate-600">
                  We use your submitted information exclusively to respond to your queries, prepare customized warehousing service agreements, coordinate inward/outward logistics operations, and maintain business communications. We do not sell or rent your business data to external commercial brokers.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">3. Confidentiality of Client Inventory Data</h4>
                <p className="text-slate-600">
                  Details regarding your product SKUs, shipment counts, customer recipient manifests, and inventory records are treated as strictly confidential commercial information.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">4. Contact Information</h4>
                <p className="text-slate-600">
                  For questions regarding our privacy practices, please contact us at: <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#245B91] font-semibold">{COMPANY_INFO.email}</a> or call <a href={`tel:${COMPANY_INFO.phone}`} className="text-[#245B91] font-semibold">{COMPANY_INFO.phone}</a>.
                </p>
              </div>
            </>
          ) : (
            <>
              <p className="text-xs text-slate-500 font-semibold">
                Effective: 2026 | Operating Entity: SHRESTH WAREHOUSE PVT. LTD.
              </p>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">1. Scope of Service</h4>
                <p className="text-slate-600">
                  Shresth Warehouse Pvt. Ltd. provides regional warehousing, inventory staging, pick-and-pack fulfillment, and dispatch facilitation services to e-commerce sellers, D2C brands, and MSMEs. All formal warehousing engagements are governed by individual Service Level Agreements (SLAs) executed between the client and Shresth Warehouse Pvt. Ltd.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">2. Inbound Receiving & SKU Verification</h4>
                <p className="text-slate-600">
                  Client shipments arriving at our Ghatshila facility are inspected against packing slips and purchase invoices. Any damaged cartons or quantity discrepancies observed upon arrival are documented and communicated to the client prior to final rack putaway.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">3. Prohibited Goods</h4>
                <p className="text-slate-600">
                  We do not store or fulfill hazardous, flammable, illicit, combustible, or legally prohibited merchandise. All goods entering the premises must comply with Indian transportation and commercial regulations.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-[#102B4E] mb-1">4. Governing Law</h4>
                <p className="text-slate-600">
                  Any formal agreements and operations conducted by Shresth Warehouse Pvt. Ltd. shall be governed by and construed in accordance with the laws of the State of Jharkhand, India.
                </p>
              </div>
            </>
          )}

          <div className="pt-6 border-t border-slate-200 flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-[#102B4E] hover:bg-[#245B91] text-white text-xs font-bold px-6 py-2.5 rounded-xl transition"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
