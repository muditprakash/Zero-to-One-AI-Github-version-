import { NavLink, useNavigate } from 'react-router-dom';

const navItems = [
  { path: '/market', label: 'Market', icon: 'analytics' },
  { path: '/competition', label: 'Competition', icon: 'compare_arrows' },
  { path: '/personas', label: 'Personas', icon: 'groups' },
  { path: '/mvp', label: 'MVP Specs', icon: 'rocket_launch' },
  { path: '/budget', label: 'Budget & Team', icon: 'payments' },
  { path: '/gtm', label: 'GTM Strategy', icon: 'campaign' },
  { path: '/timeline', label: 'Timeline', icon: 'calendar_today' },
  { path: '/investors', label: 'Investors', icon: 'monetization_on' },
];

export default function Sidebar({ idea }) {
  const navigate = useNavigate();
  return (
    <aside className="fixed left-0 top-0 z-50 w-64 h-screen bg-slate-50 border-r border-slate-200 flex flex-col py-6">
      <div className="px-6 mb-8">
        <h1
          className="text-xl font-black text-blue-600 tracking-tight cursor-pointer"
          onClick={() => navigate('/')}
        >
          ZeroToOne AI
        </h1>
        <p className="text-xs text-slate-500 font-medium mt-1">v2.4 Co-pilot</p>
        {idea && (
          <div className="mt-3 px-3 py-2 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-xs text-blue-700 font-semibold truncate" title={idea}>
              <span className="material-symbols-outlined text-[12px] mr-1">lightbulb</span>
              {idea}
            </p>
          </div>
        )}
      </div>
      <nav className="flex-1 overflow-y-auto px-2 space-y-1 custom-scrollbar">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `${isActive
                ? 'bg-white text-blue-600 shadow-sm border-l-2 border-blue-600'
                : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
              } px-4 py-3 flex items-center gap-3 transition-all duration-200 ease-in-out rounded-r-lg`
            }
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto px-4 pt-6 border-t border-slate-200">
        <a className="text-slate-600 hover:text-slate-900 px-4 py-2 flex items-center gap-3 text-sm transition-colors font-medium" href="#">
          <span className="material-symbols-outlined">help_outline</span>
          Help Center
        </a>
        <p className="px-4 mt-4 text-[10px] text-slate-400 font-bold uppercase tracking-widest">
          ZeroToOne AI © 2026
        </p>
      </div>
    </aside>
  );
}
