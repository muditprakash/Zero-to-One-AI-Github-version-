import Layout from '../components/Layout';

export default function GTMPage({ data }) {
  const { idea, blueprint } = data;
  const gtm = blueprint.gtm_strategy;

  return (
    <Layout title="GTM Strategy" idea={idea} blueprintId={data.id} data={data}>
      <section className="mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full border border-blue-100">
          <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
          <span className="text-xs font-bold uppercase tracking-widest">Strategy Core</span>
        </div>
        <h2 className="text-4xl font-bold text-on-surface">Go-To-Market Execution</h2>
        <p className="text-lg text-slate-500 max-w-2xl">Deploying your solution effectively requires a multi-threaded distribution approach coupled with data-driven messaging.</p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="col-span-1 md:col-span-2 bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6 text-slate-900">Core Messaging</h3>
          <div className="p-6 bg-blue-600 text-white rounded-2xl shadow-xl relative overflow-hidden">
            <span className="absolute -top-4 -right-4 material-symbols-outlined text-blue-400/30 text-8xl">campaign</span>
            <p className="text-xl font-medium leading-relaxed relative z-10 italic">
              "{gtm?.messaging || 'No messaging statement defined.'}"
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
          <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Key Metrics to Track</h3>
          <div className="space-y-4">
            {gtm?.metrics?.map((metric, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-600" />
                <span className="text-slate-700 font-bold text-sm">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600">
              <span className="material-symbols-outlined">hub</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900">Acquisition Channels</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gtm?.channels?.map((channel, i) => (
              <div key={i} className="p-4 border border-slate-100 rounded-xl bg-slate-50 flex items-center gap-3">
                <span className="material-symbols-outlined text-blue-600 text-[20px]">check_circle</span>
                <span className="text-slate-800 font-semibold text-sm">{channel}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-blue-900 text-white rounded-xl p-8 shadow-2xl relative overflow-hidden flex flex-col justify-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
             <span className="material-symbols-outlined text-[120px]">insights</span>
          </div>
          <h3 className="text-2xl font-bold mb-4 relative z-10">Strategic Advantage</h3>
          <p className="text-blue-200 leading-relaxed relative z-10">
            By leveraging these channels and specific messaging, you can achieve a sustainable CAC while scaling rapidly in your target market.
          </p>
        </div>
      </div>
    </Layout>
  );
}
