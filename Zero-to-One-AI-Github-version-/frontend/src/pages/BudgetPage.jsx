import Layout from '../components/Layout';

export default function BudgetPage({ data }) {
  const { idea, blueprint } = data;
  const budget = blueprint.budget_and_team;

  return (
    <Layout title="Budget & Team" idea={idea} blueprintId={data.id} data={data}>
      <div className="mb-12">
        <h1 className="text-4xl font-bold text-on-surface mb-2">Financial Infrastructure</h1>
        <p className="text-lg text-slate-500">Precise allocation models for your startup. Built for runway optimization.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined">payments</span>
            </div>
            <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded-full">Optimized</span>
          </div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Estimated MVP Cost</h3>
          <p className="text-3xl font-bold text-slate-900">{budget?.cost || '$0'}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <span className="material-symbols-outlined">groups</span>
            </div>
            <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Target Team</span>
          </div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Key Roles Required</h3>
          <p className="text-3xl font-bold text-slate-900">{budget?.roles?.length || 0}</p>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm flex flex-col items-center justify-center">
          <div className="relative w-20 h-20 flex items-center justify-center">
            <svg className="absolute w-full h-full transform -rotate-90">
              <circle className="text-slate-100" cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="8" />
              <circle className="text-green-500" cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="8" strokeDasharray="226.2" strokeDashoffset="45" />
            </svg>
            <span className="text-2xl font-bold">85</span>
          </div>
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-4">Fiscal Confidence</h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-50">
            <h2 className="text-xl font-bold text-slate-900">Key Roles to Hire</h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {budget?.roles?.map((role, i) => (
                <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                    {i + 1}
                  </div>
                  <span className="font-bold text-slate-800">{role}</span>
                  <span className="ml-auto px-2 py-1 rounded bg-blue-100 text-blue-600 text-[10px] font-bold uppercase">Priority</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-8 shadow-sm">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-lg">
              <span className="material-symbols-outlined">hiring_around</span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Hiring Strategy</h3>
              <p className="text-slate-500 text-sm mt-1">Recommended roadmap for building the founding team.</p>
            </div>
          </div>
          <p className="text-slate-700 leading-relaxed text-base bg-slate-50 p-6 rounded-2xl border border-slate-100">
            {budget?.hiring_plan || 'No hiring plan details available.'}
          </p>
        </div>
      </div>
    </Layout>
  );
}
