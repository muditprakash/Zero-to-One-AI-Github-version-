import Layout from '../components/Layout';

export default function MVPPage({ data }) {
  const { idea, blueprint } = data;
  const mvp = blueprint.mvp_spec;

  return (
    <Layout title="MVP Specification" idea={idea} blueprintId={data.id} data={data}>
      <div className="mb-12 flex justify-between items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full mb-4">
            <span className="material-symbols-outlined text-[14px]">auto_awesome</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">AI-Generated Architecture</span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">MVP Core Specification</h2>
          <p className="text-lg text-slate-500 leading-relaxed">Prioritized feature set to launch your initial version with minimum overhead.</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm text-center min-w-[120px]">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">FEATURES</p>
            <p className="text-2xl font-bold text-slate-900">{mvp?.features?.length || 0}</p>
          </div>
          <div className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm text-center min-w-[120px]">
            <p className="text-xs font-bold text-slate-400 uppercase mb-1">USER FLOWS</p>
            <p className="text-2xl font-bold text-slate-900">{mvp?.user_flows?.length || 0}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-8">
        {/* Core Features */}
        <div className="col-span-12 lg:col-span-5 bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
          <h3 className="text-xl font-bold mb-8">Core Features</h3>
          <div className="space-y-6">
            {mvp?.features?.map((feat, i) => (
              <div key={i} className="relative pl-12">
                <div className="absolute left-0 top-0 w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-xs">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{feat}</h4>
                <span className="inline-block mt-1 bg-slate-100 text-slate-500 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 uppercase">
                  {i < 2 ? 'Must-Have' : 'P1'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* User Flows */}
        <div className="col-span-12 lg:col-span-7 bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
          <div className="p-8 border-b border-slate-50">
            <h3 className="text-xl font-bold">User Journey Flows</h3>
          </div>
          <div className="flex-1 p-8 space-y-4">
            {mvp?.user_flows?.map((flow, i) => (
              <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0 mt-0.5">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 text-sm font-medium leading-relaxed">{flow}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Flow diagram visual */}
          <div className="flex-1 blueprint-grid p-12 bg-slate-50/50 min-h-[200px] flex flex-col items-center justify-center gap-8">
            <div className="w-40 bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-center font-bold text-sm">
              Landing Page
            </div>
            <div className="flex gap-8">
              <div className="w-40 bg-white p-3 rounded-xl border border-slate-200 text-center font-bold text-sm">Sign-up</div>
              <div className="w-40 bg-blue-600 p-3 rounded-xl shadow-lg text-white text-center font-bold text-sm">Setup Wizard</div>
            </div>
            <div className="w-40 bg-white p-3 rounded-xl border-2 border-blue-100 shadow-xl text-center font-bold text-sm">Dashboard</div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
