import Layout from '../components/Layout';

export default function DashboardOverview({ data }) {
  const { idea, blueprint } = data;
  const market = blueprint.market_analysis;
  const competition = blueprint.competitive_landscape;
  
  // Calculate a rough "completion" score based on filled sections
  const sections = Object.keys(blueprint).length;
  const completionPct = Math.min(100, Math.round((sections / 8) * 100));
  const circumference = 226.2;
  const offset = circumference - (completionPct / 100) * circumference;

  return (
    <Layout title="Dashboard Overview" idea={idea} blueprintId={data.id} data={data}>
      {/* Hero */}
      <section className="mb-12">
        <h3 className="text-4xl font-black text-slate-900 tracking-tight leading-tight">{idea}</h3>
        <p className="text-lg text-slate-500 mt-4 max-w-3xl font-medium">
          {market?.trends?.[0] || 'Your strategic startup blueprint is ready for analysis.'}
        </p>
      </section>

      {/* Market Analysis */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-slate-900">Market Analysis</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { label: 'TAM', value: market?.tam?.amount, desc: market?.tam?.description, growth: market?.tam?.growth },
            { label: 'SAM', value: market?.sam?.amount, desc: market?.sam?.description, growth: market?.sam?.growth },
            { label: 'SOM', value: market?.som?.amount, desc: market?.som?.description, growth: market?.som?.growth },
          ].map(({ label, value, desc, growth }) => (
            <div key={label} className="glass-card p-6 rounded-xl">
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-on-surface-variant">{label}</span>
                <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">trending_up</span> {growth}
                </span>
              </div>
              <div className="text-3xl font-bold text-on-background">
                {value || '—'}
              </div>
              <p className="text-sm text-on-surface-variant mt-2 line-clamp-3">{desc || '—'}</p>
              <div className="mt-6 h-12 w-full bg-slate-50 rounded-lg flex items-end gap-1 px-2 pb-2">
                {[1,2,3,4,5,6].map(i => (
                  <div key={i} className="w-full bg-blue-400 rounded-sm" style={{ height: `${20 + i * 13}%`, opacity: 0.3 + i * 0.1 }}></div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Trends */}
        {market?.trends && (
          <div className="mt-6 glass-card rounded-xl p-6">
            <h5 className="text-sm font-bold text-slate-500 uppercase tracking-widest mb-4">Key Market Trends</h5>
            <div className="flex flex-wrap gap-2">
              {market.trends.map((trend, i) => (
                <span key={i} className="px-3 py-1.5 bg-blue-50 border border-blue-100 text-blue-700 text-sm rounded-full font-medium">
                  {trend}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Competitive Landscape */}
      <section className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h4 className="text-2xl font-bold">Competitive Landscape</h4>
        </div>
        <div className="glass-card rounded-xl overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-slate-50/50 border-b border-slate-100">
              <tr>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Competitor</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant">Description</th>
                <th className="px-6 py-4 text-xs font-bold uppercase tracking-widest text-on-surface-variant text-right">Share</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {competition?.competitors?.map((comp, i) => (
                <tr key={i}>
                  <td className="px-6 py-5 font-bold">{comp.name}</td>
                  <td className="px-6 py-5 text-sm text-slate-600">{comp.description}</td>
                  <td className="px-6 py-5 text-right font-bold text-blue-600">{comp.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {competition?.moat && (
          <div className="mt-4 p-4 bg-blue-50 rounded-xl border border-blue-100">
            <p className="text-sm text-blue-800 font-medium">
              <span className="font-bold">Strategic Moat:</span> {competition.moat}
            </p>
          </div>
        )}
      </section>
    </Layout>
  );
}
