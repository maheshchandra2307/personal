import DiscomCards from '../components/pay/DiscomCards';
import DistrictFinder from '../components/pay/DistrictFinder';
import Seo from '../components/common/Seo';
import { useI18n } from '../context/AppContext';

function PayBill() {
  const { t } = useI18n();

  return (
    <div className="-mx-4 -mt-8 sm:-mx-6 lg:-mx-8">
      <Seo path="/pay" />

      <div className="border-b border-amber-200 bg-amber-50 px-4 py-2 text-center text-[12px] font-semibold text-amber-800">
        ⚠️ {t('pay.unofficialBanner')}
      </div>

      <header className="bg-gradient-to-br from-[#0a3d62] via-[#1e5f99] to-[#2980b9] px-6 pb-3.5 pt-[18px] text-center shadow-md">
        <div className="mb-1 flex items-center justify-center gap-3.5">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-[22px]">
            ⚡
          </div>
          <h1 className="text-[23px] font-bold leading-tight tracking-wide text-white">
            {t('pay.title')}
            <span className="mt-0.5 block text-[13px] font-normal uppercase tracking-wider text-blue-100">
              {t('pay.subtitle')}
            </span>
          </h1>
        </div>
        <p className="text-[12px] tracking-wide text-blue-200">
          {t('pay.unofficialTool')}
        </p>
      </header>

      <div className="border-b-2 border-blue-100 bg-[#f0f8ff] px-5 py-4 text-center">
        <h2 className="text-[17px] font-semibold text-[#0a3d62]">
          ⚡ {t('pay.jumpTitle')}
        </h2>
        <p className="mt-1 text-[13px] text-slate-600">{t('pay.jumpLead')}</p>
      </div>

      <div className="mx-auto max-w-[1080px] px-5 pb-12 pt-9">
        <DistrictFinder />
        <p className="mb-7 text-center text-[12px] uppercase tracking-[2px] text-slate-400">
          {t('pay.selectDiscom')}
        </p>
        <DiscomCards />

        <article className="mx-auto mt-12 max-w-3xl space-y-6 text-[15px] leading-relaxed text-slate-600">
          <h2 className="font-display text-2xl font-bold tracking-tight text-slate-900">
            {t('pay.guideTitle')}
          </h2>
          <p>{t('pay.guideP1')}</p>
          <p>{t('pay.guideP2')}</p>
          <ol className="list-decimal space-y-2.5 pl-5">
            <li>{t('pay.step1')}</li>
            <li>{t('pay.step2')}</li>
            <li>{t('pay.step3')}</li>
            <li>{t('pay.step4')}</li>
            <li>{t('pay.step5')}</li>
          </ol>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            {t('pay.fraudTitle')}
          </h3>
          <p>{t('pay.fraudP1')}</p>
          <h3 className="font-display text-lg font-semibold text-slate-900">
            {t('pay.lateTitle')}
          </h3>
          <p>{t('pay.lateP1')}</p>
        </article>
      </div>

      <div className="border-t border-blue-100 bg-[#f0f8ff] px-6 py-[18px] text-center">
        <p className="mx-auto max-w-[680px] text-[12px] leading-relaxed text-slate-600">
          {t('pay.howToPay')}
        </p>
      </div>

      <footer className="bg-[#0a3d62] px-4 py-4 text-center text-[12px] leading-relaxed tracking-wide text-blue-200">
        {t('pay.footer')}
        <span className="mt-1.5 block font-semibold text-amber-300">
          {t('pay.complaints')}
        </span>
      </footer>
    </div>
  );
}

export default PayBill;
