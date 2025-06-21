'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-blue-600 hover:text-blue-800 underline"
      >
        View Disclaimer
      </button>

      {/* Overlay + Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white max-w-lg w-full rounded shadow-lg p-6 relative">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-5 h-5" />
            </button>

            <h2 className="text-xl font-semibold mb-4">Disclaimer</h2>
            <p className="text-sm font-medium mb-2 text-gray-800">
              <strong>Last updated: 01.01.2018</strong>
            </p>

            <div className="text-gray-700 space-y-3 text-sm max-h-[400px] overflow-y-auto">
              <p>
                The information contained on www.letsdiskuss.com website (the "Service")
                is for general information purposes only. www.letsdiskuss.com assumes no
                responsibility for errors or omissions in the contents on the Service.
              </p>
              <p>
                In no event shall www.letsdiskuss.com be liable for any special, direct,
                indirect, consequential, or incidental damages or any damages whatsoever,
                whether in an action of contract, negligence or other tort, arising out of or in
                connection with the use of the Service or the contents of the Service.
              </p>
              <p>
                www.letsdiskuss.com reserves the right to make additions, deletions, or
                modification to the contents on the Service at any time without prior notice.
              </p>
              <p>
                www.letsdiskuss.com does not warrant that the website is free of viruses or
                other harmful components.
              </p>
            </div>

            <div className="mt-6 text-right">
              <button
                onClick={() => setIsOpen(false)}
                className="text-blue-600 hover:text-blue-800 font-semibold"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
