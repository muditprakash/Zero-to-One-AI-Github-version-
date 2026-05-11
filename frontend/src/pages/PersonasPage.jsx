import Layout from '../components/Layout';

const avatarColors = ['bg-blue-100 text-blue-600', 'bg-violet-100 text-violet-600', 'bg-emerald-100 text-emerald-600', 'bg-orange-100 text-orange-600', 'bg-pink-100 text-pink-600'];

export default function PersonasPage({ data }) {
  const { idea, blueprint } = data;
  const personas = blueprint.personas || [];

  return (
    <Layout title="User Personas" idea={idea} blueprintId={data.id} data={data}>
      <div className="mb-12">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold rounded-full">Section 04</span>
          <span className="text-slate-400 text-sm">/ Strategy Phase</span>
        </div>
        <h2 className="text-4xl font-bold mb-4">Hypotheses & Personas</h2>
        <p className="text-lg text-slate-500 max-w-2xl">Validate your market assumptions with data-driven archetypes generated from market signals.</p>
      </div>

      {/* Summary insight */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-6">Persona Summary</h3>
          <div className="space-y-3">
            {personas.map((p, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 flex items-center gap-4">
                <div className={`w-10 h-10 rounded-full ${avatarColors[i % avatarColors.length]} flex items-center justify-center font-bold text-sm shrink-0`}>
                  {p.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <p className="font-bold text-slate-800">{p.name}</p>
                  <p className="text-sm text-slate-500">{p.segment}</p>
                </div>
                <span className="px-2 py-0.5 bg-green-100 text-green-700 text-[10px] font-bold rounded uppercase">Validated</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-blue-600 text-white rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
          <div className="relative z-10">
            <h3 className="text-xl font-bold mb-2">Persona Insight</h3>
            <p className="text-blue-100 text-sm">{personas[0]?.name} represents your highest-value early adopter segment.</p>
          </div>
          <div className="mt-8 relative z-10">
            <div className="text-4xl font-bold">{personas.length}</div>
            <div className="text-xs text-blue-200 uppercase font-bold">Personas Generated</div>
          </div>
          <span className="absolute top-0 right-0 p-4 material-symbols-outlined text-blue-400/30 text-6xl">lightbulb</span>
        </div>
      </div>

      {/* Persona Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {personas.map((persona, i) => (
          <div key={i} className="bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm flex flex-col">
            {/* Header banner */}
            <div className={`h-24 flex items-center justify-center ${avatarColors[i % avatarColors.length].split(' ')[0]}`}>
              <div className="w-14 h-14 rounded-2xl bg-white shadow-md flex items-center justify-center">
                <span className={`material-symbols-outlined ${avatarColors[i % avatarColors.length].split(' ')[1]} text-[28px]`} style={{ fontVariationSettings: "'FILL' 1" }}>account_circle</span>
              </div>
            </div>
            <div className="px-6 pt-4 pb-6 flex-1 flex flex-col">
              <div className="mb-4">
                <h4 className="font-bold text-slate-900 text-lg">{persona.name}</h4>
                <p className="text-xs text-slate-400 uppercase font-semibold tracking-wider">{persona.segment}</p>
              </div>

              <div className="mb-4">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Goals</p>
                <ul className="space-y-1.5">
                  {persona.goals?.map((g, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="material-symbols-outlined text-green-500 text-[14px] mt-0.5">check_circle</span>
                      {g}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Pain Points</p>
                <ul className="space-y-1.5">
                  {persona.pain_points?.map((p, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <span className="material-symbols-outlined text-red-400 text-[14px] mt-0.5">warning</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-auto w-full py-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 text-xs font-semibold hover:bg-slate-100 transition-colors">
                View Full Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}
