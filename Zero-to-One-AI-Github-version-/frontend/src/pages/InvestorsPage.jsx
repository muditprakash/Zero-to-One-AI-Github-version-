import Layout from '../components/Layout';

export default function InvestorsPage({ data }) {
  const { idea, blueprint } = data;
  const investors = blueprint.investor_suggestions || [];

  return (
    <Layout title="Investor Suggestions" idea={idea} blueprintId={data.id} data={data}>
      <div className="mb-12">
        <h2 className="text-4xl font-bold text-slate-900 mb-2">Investor Suggestions</h2>
        <p className="text-lg text-slate-500">AI-curated capital partners based on your market fit, stage, and sector focus.</p>
        <div className="h-1 w-24 bg-blue-600 rounded-full mt-4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {investors.map((inv, i) => (
          <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:border-blue-300 transition-all group">
            <div className="flex justify-between items-start mb-6">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center font-black text-slate-300 border border-slate-100 text-2xl group-hover:bg-blue-50 group-hover:text-blue-200 transition-colors">
                {inv.name.charAt(0)}
              </div>
              <div className="bg-blue-600 text-white px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg shadow-blue-100">
                <span className="material-symbols-outlined text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span> 
                {inv.fit_score}% Match
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 mb-1">{inv.name}</h3>
            <p className="text-sm text-slate-500 mb-8 line-clamp-2">Potential venture partner for your {idea} project.</p>
            
            <div className="space-y-3 pt-6 border-t border-slate-50">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Investment Focus</span>
                <span className="font-bold text-blue-600">{inv.focus || 'Technology'}</span>
              </div>
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-medium">Recommended Stage</span>
                <span className="font-bold text-slate-800">Seed, Series A</span>
              </div>
            </div>
            
            <button className="mt-8 w-full py-3 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-colors flex items-center justify-center gap-2">
              Prepare Outreach
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        ))}
      </div>
    </Layout>
  );
}
