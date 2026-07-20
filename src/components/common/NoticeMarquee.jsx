const NOTICE_TEXT =
  'మీ విద్యుత్ బిల్లును 14 రోజులలోపు చెల్లించి, వచ్చే నెల బిల్లులో ₹25 సర్‌చార్జ్ విధించకుండా ఉండే ప్రయోజనం పొందండి. విద్యుత్ బిల్లు చెల్లించకపోతే, విద్యుత్ కనెక్షన్ నిలిపివేత ఛార్జీలు (లేదా జరిమానా) సాధారణ లైన్ సేవలకు ₹100, భూగర్భ (Underground Cable) సేవలకు ₹300 విధించబడతాయి.';
function NoticeMarquee() {
  return (
    <div
      className="overflow-hidden border-b border-amber-200 bg-amber-50"
      role="status"
      aria-live="polite"
    >
      <div className="flex w-max animate-notice-marquee whitespace-nowrap py-2 text-[13px] font-medium text-amber-900">
        <span className="mx-8">{NOTICE_TEXT}</span>
        <span className="mx-8" aria-hidden="true">
          {NOTICE_TEXT}
        </span>
      </div>
    </div>
  );
}

export default NoticeMarquee;
