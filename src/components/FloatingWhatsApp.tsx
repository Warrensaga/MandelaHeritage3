/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { waGeneral } from '../utils/whatsapp';

export default function FloatingWhatsApp() {
  return (
    <a
      id="floating-whatsapp-btn"
      href={waGeneral()}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-[9999] flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white py-3 px-5 rounded-full shadow-[0_10px_35px_rgba(16,185,129,0.35)] hover:shadow-[0_12px_40px_rgba(16,185,129,0.5)] transition-all duration-300 hover:-translate-y-1 active:scale-95 cursor-pointer border border-emerald-500/20 group"
      aria-label="Contact us on WhatsApp"
    >
      <svg
        className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M19.001 4.908A11.817 11.817 0 0 0 10.5.01c-6.505 0-11.8 5.293-11.8 11.796 0 2.079.544 4.109 1.579 5.901L0 24l6.435-1.687a11.724 11.724 0 0 0 5.56 1.4c6.503 0 11.797-5.293 11.8-11.797a11.722 11.722 0 0 0-4.794-8.008zM10.5 21.803c-1.785 0-3.535-.48-5.066-1.385l-.363-.215-3.766.988.995-3.666-.238-.378A9.792 9.792 0 0 1 1.996 11.8c0-5.4 4.398-9.8 9.804-9.8 2.616 0 5.077 1.018 6.924 2.868a9.7 9.7 0 0 1 2.872 6.938c-.004 5.402-4.402 9.8-9.8 9.8zm5.362-7.332c-.293-.146-1.737-.858-2.006-.956-.269-.098-.465-.147-.661.147-.196.294-.759.955-.93 1.15-.172.196-.343.22-.636.073-.293-.146-1.238-.456-2.358-1.454-.871-.777-1.459-1.737-1.63-2.03-.172-.294-.018-.454.129-.6.132-.132.293-.343.44-.515.147-.171.196-.293.293-.49.098-.195.049-.367-.024-.514-.074-.147-.661-1.592-.906-2.18-.239-.574-.482-.497-.661-.506l-.563-.008c-.196 0-.514.073-.783.367-.269.294-1.028 1.006-1.028 2.454 0 1.448 1.053 2.846 1.199 3.042.147.196 2.073 3.166 5.022 4.442.702.304 1.25.485 1.678.621.705.224 1.347.193 1.854.117.565-.085 1.737-.71 1.982-1.396.244-.685.244-1.272.171-1.396-.073-.122-.269-.195-.562-.342z" />
      </svg>
      <span className="font-sans font-bold text-xs tracking-wider uppercase">
        Chat with us
      </span>
    </a>
  );
}
