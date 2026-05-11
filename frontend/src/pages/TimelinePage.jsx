import Layout from '../components/Layout';

export default function TimelinePage({ data }) {
  const { idea, blueprint } = data;
  const roadmap = blueprint.timeline?.roadmap_12_months || [];

  return (
    <Layout title="Master Roadmap" idea={idea} blueprintId={data.id} data={data}>
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">12-Month Roadmap</h2>
          <p className="text-lg text-slate-500 max-w-2xl">A curated trajectory from foundational architecture to global scaling preparation.</p>
        </div>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-100 hidden md:block" />

        <div className="space-y-12">
          {roadmap.map((milestone, i) => (
            <div key={i} className="relative md:pl-24 group">
              {/* Dot */}
              <div className="absolute left-[30px] top-0 w-4 h-4 rounded-full border-4 border-white bg-blue-600 shadow-md hidden md:block group-hover:scale-125 transition-transform duration-200" />
              
              <div className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm group-hover:shadow-md transition-shadow duration-200 relative overflow-hidden">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                   <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-2 md:mb-0">
                      Step {i + 1}
                   </div>
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2">{milestone.split(':')[0]}</h4>
                <p className="text-slate-600 leading-relaxed">
                   {milestone.includes(':') ? milestone.split(':').slice(1).join(':').trim() : milestone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
