import DiscomCards from '../components/pay/DiscomCards';
import DistrictFinder from '../components/pay/DistrictFinder';

function PayBill() {
  return (
    <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
      <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-[12px] font-semibold text-amber-800">
        ⚠️ This is an independent, unofficial links page — not run by AP DISCOMs
        or the AP Government. It only redirects you to the official payment
        sites.
      </div>

      <header className="bg-gradient-to-br from-[#0a3d62] via-[#1e5f99] to-[#2980b9] px-6 pb-3.5 pt-[18px] text-center shadow-md">
        <div className="mb-1 flex items-center justify-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-[22px]">
            ⚡
          </div>
          <h1 className="text-[23px] font-bold leading-tight tracking-wide text-white">
            AP Electricity Bill
            <span className="mt-0.5 block text-[13px] font-normal uppercase tracking-wider text-blue-100">
              Quick Pay Links
            </span>
          </h1>
        </div>
        <p className="text-[12px] tracking-wide text-blue-200">
          Unofficial redirect tool &nbsp;|&nbsp; Links to official DISCOM sites
          only
        </p>
      </header>

      <div className="border-b-2 border-blue-100 bg-[#f0f8ff] px-5 py-4 text-center">
        <h2 className="text-[17px] font-semibold text-[#0a3d62]">
          ⚡ Jump Straight to Your DISCOM&apos;s Payment Page
        </h2>
        <p className="mt-1 text-[13px] text-slate-600">
          Tap your DISCOM below to open its official payment site in a new tab.
          Keep your <strong>Service Number</strong> ready.
        </p>
      </div>

      <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-9">
        <DistrictFinder />
        <p className="mb-7 text-center text-[12px] uppercase tracking-[2px] text-slate-400">
          Select Your Distribution Company
        </p>
        <DiscomCards />
      </div>

      <div className="border-t border-blue-100 bg-[#f0f8ff] px-6 py-[18px] text-center">
        <p className="mx-auto max-w-[680px] text-[12px] leading-relaxed text-slate-600">
          <strong className="text-[#0a3d62]">How to pay:</strong> Tap your
          DISCOM → you&apos;ll land on the DISCOM&apos;s own official page →
          enter your <strong>13-digit Service Number</strong> → complete the
          Captcha → verify bill amount → pay via Net Banking / UPI / Debit or
          Credit Card. &nbsp;|&nbsp; Your service number is printed on your
          electricity bill.
        </p>
      </div>

      <footer className="bg-[#0a3d62] px-4 py-4 text-center text-[12px] leading-relaxed tracking-wide text-blue-200">
        This is an independent, unofficial links page created to help consumers
        reach their DISCOM&apos;s payment page faster. It is{' '}
        <strong>not affiliated with or endorsed by</strong> APEPDCL, APCPDCL,
        APSPDCL, APERC, or the Government of Andhra Pradesh. All payments happen
        on the official DISCOM/BillDesk sites, not here.
        <span className="mt-1.5 block font-semibold text-amber-300">
          For complaints, use the DISCOM helpline: 1912 (Toll Free)
        </span>
      </footer>
    </div>
  );
}

export default PayBill;
