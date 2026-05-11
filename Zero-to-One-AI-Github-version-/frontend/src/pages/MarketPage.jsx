import Layout from '../components/Layout';

export default function MarketPage({ data }) {
  const { idea, blueprint } = data;
  const market = blueprint.market_analysis;

  return (
    <Layout title="Market Analysis" idea={idea} blueprintId={data.id} data={data}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">MARKET INTELLIGENCE</span>
          </div>
          <h1 className="text-4xl font-bold text-on-surface">Market Analysis</h1>
          <p className="text-lg text-slate-500 mt-2 max-w-2xl">Total addressable opportunity, segmentation, and trend mapping for your startup.</p>
        </div>
      </div>

      {/* TAM SAM SOM Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {[
          { label: 'TAM', desc: 'Total Addressable Market', amount: market?.tam?.amount, info: market?.tam?.description, color: 'border-blue-500' },
          { label: 'SAM', desc: 'Serviceable Addressable Market', amount: market?.sam?.amount, info: market?.sam?.description, color: 'border-indigo-500' },
          { label: 'SOM', desc: 'Serviceable Obtainable Market', amount: market?.som?.amount, info: market?.som?.description, color: 'border-violet-500' },
        ].map(({ label, desc, amount, info, color }) => (
          <div key={label} className={`bg-white rounded-xl border-l-4 ${color} p-6 shadow-sm`}>
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400">{desc}</span>
            <div className="mt-3 text-4xl font-black text-slate-900">{amount || '—'}</div>
            <p className="text-sm text-slate-500 mt-3 leading-relaxed">{info || '—'}</p>
          </div>
        ))}
      </div>

      {/* Trends */}
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-8 mb-8">
        <h3 className="text-xl font-bold mb-6">Key Market Trends</h3>
        <div className="space-y-4">
          {market?.trends?.map((trend, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
              <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-sm font-bold shrink-0">
                {i + 1}
              </div>
              <p className="text-slate-700 font-medium pt-1">{trend}</p>
              <span className="ml-auto text-xs font-bold text-green-600 flex items-center gap-1 shrink-0 pt-1">
                <span className="material-symbols-outlined text-[14px]">trending_up</span> Rising
              </span>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
