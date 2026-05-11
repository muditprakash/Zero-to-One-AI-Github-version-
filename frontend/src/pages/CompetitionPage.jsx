import Layout from '../components/Layout';

export default function CompetitionPage({ data }) {
  const { idea, blueprint } = data;
  const comp = blueprint.competitive_landscape;
  const circumference = 351.85;
  const moatOffset = circumference * 0.3; // 70% moat strength

  return (
    <Layout title="Competition Analysis" idea={idea} blueprintId={data.id} data={data}>
      <div className="flex justify-between items-end mb-8">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">COMPETITIVE INTELLIGENCE</span>
          </div>
          <h1 className="text-4xl font-bold text-on-surface">Competitive Landscape</h1>
          <p className="text-lg text-slate-500 mt-2 max-w-2xl">Architectural mapping of market challengers, strategic moats and vulnerability vectors.</p>
        </div>
        <div className="flex gap-4">
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-semibold shadow-lg hover:opacity-90">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span> Improve with AI
          </button>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6 items-start">
        {/* Competitors Table */}
        <div className="col-span-12 lg:col-span-9 bg-white border border-outline-variant rounded-xl shadow-sm overflow-hidden">
          <div className="p-6 border-b border-outline-variant flex justify-between items-center bg-white/50">
            <h3 className="text-xl font-bold">Direct Market Adversaries</h3>
            <span className="px-3 py-1 bg-slate-100 rounded-lg text-sm font-medium">{comp?.competitors?.length || 0} Identified</span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-outline-variant">
                <tr>
                  <th className="p-6 font-semibold text-slate-500 text-sm">Competitor</th>
                  <th className="p-6 font-semibold text-slate-500 text-sm">Strategy</th>
                  <th className="p-6 font-semibold text-slate-500 text-sm text-right">Market Share</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {comp?.competitors?.map((c, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-6 font-bold">{c.name}</td>
                    <td className="p-6 text-sm text-slate-600">{c.description}</td>
                    <td className="p-6 text-right font-bold text-blue-600">{c.share}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Moat Score */}
        <div className="col-span-12 lg:col-span-3 space-y-6">
          <div className="bg-white border border-outline-variant rounded-xl p-6 text-center shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Moat Strength</h4>
            <div className="relative w-32 h-32 mx-auto mb-4">
              <svg className="w-full h-full transform -rotate-90">
                <circle className="text-slate-100" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor" strokeWidth="8" />
                <circle className="text-primary" cx="64" cy="64" fill="transparent" r="56" stroke="currentColor"
                  strokeDasharray={circumference} strokeDashoffset={moatOffset} strokeWidth="8" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-2xl font-bold text-primary">70%</span>
                <span className="text-[10px] text-slate-400 uppercase font-bold">High Defense</span>
              </div>
            </div>
            <p className="text-sm text-slate-500">Sustainable 2-year competitive lead.</p>
          </div>
        </div>
      </div>

      {/* Differentiation & Moat */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-600 text-white rounded-xl p-6 shadow-lg">
          <span className="material-symbols-outlined text-blue-200 text-[24px] mb-3 block" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
          <h4 className="font-bold text-lg mb-2">Strategic Moat</h4>
          <p className="text-blue-100 text-sm leading-relaxed">{comp?.moat || '—'}</p>
        </div>
        <div className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm">
          <span className="material-symbols-outlined text-blue-600 text-[24px] mb-3 block">compare_arrows</span>
          <h4 className="font-bold text-lg mb-2">Differentiation Strategy</h4>
          <p className="text-slate-600 text-sm leading-relaxed">{comp?.differentiation || '—'}</p>
        </div>
      </div>
    </Layout>
  );
}
