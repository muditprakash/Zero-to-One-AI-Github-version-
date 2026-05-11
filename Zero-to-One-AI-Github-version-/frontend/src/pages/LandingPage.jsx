import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateBlueprint } from '../api';

const EXAMPLE_IDEAS = [
  'AI-powered legal document reviewer for SMBs',
  'Online gym training application',
  'Marketplace for freelance drone pilots',
  'SaaS for local restaurant inventory management',
];

export default function LandingPage({ setBlueprintData, apiKey, setApiKey }) {
  const [idea, setIdea] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showKey, setShowKey] = useState(false);
  const [rememberKey, setRememberKey] = useState(false);
  const navigate = useNavigate();

  // Load saved key on mount
  useEffect(() => {
    const savedKey = localStorage.getItem('zerotoone_api_key');
    if (savedKey) {
      setApiKey(savedKey);
      setRememberKey(true);
    }
  }, [setApiKey]);

  const handleApiKeyChange = (val) => {
    setApiKey(val);
    if (rememberKey) {
      localStorage.setItem('zerotoone_api_key', val);
    }
  };

  const handleRememberToggle = () => {
    const next = !rememberKey;
    setRememberKey(next);
    if (next && apiKey) {
      localStorage.setItem('zerotoone_api_key', apiKey);
    } else {
      localStorage.removeItem('zerotoone_api_key');
    }
  };

  const handleGenerate = async () => {
    if (!idea.trim() || !apiKey.trim()) return;

    setLoading(true);
    setError('');
    try {
      const data = await generateBlueprint(idea.trim(), apiKey.trim());
      setBlueprintData(data);
      navigate('/market');
    } catch (err) {
      setError(err.message || 'Failed to generate blueprint. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const isReady = idea.trim() && apiKey.trim();

  return (
    <div className="min-h-screen bg-surface flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 blueprint-grid opacity-30" />
      <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-400/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute top-[20%] -right-[10%] w-[35%] h-[35%] bg-indigo-400/15 rounded-full blur-[100px]" />
      <div className="absolute -bottom-[10%] left-[20%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-violet-400/10 rounded-full blur-[80px]" />

      <div className="relative z-10 w-full max-w-3xl">
        {/* Logo Section */}
        <div className="text-center mb-16">
          <h1 className="text-7xl font-black text-on-background tracking-tight leading-tight mb-6">
            ZeroToOne
            <span className="text-blue-600"> AI</span>
          </h1>
          <p className="text-2xl text-on-surface-variant mx-auto font-medium tracking-tight whitespace-nowrap">
            From idea to investor-ready startup—instantly.
          </p>
        </div>

        {/* Input Card */}
        <div className="glass-card rounded-2xl p-8 shadow-2xl relative group">
          
          {/* API Key Section */}
          <div className="mb-6 pb-6 border-b border-slate-100">
            <div className="flex justify-between items-center mb-3">
              <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">key</span>
                Gemini API Key
              </label>
              <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md bg-indigo-50 text-indigo-600 border border-indigo-100">
                Gemini Flash
              </span>
            </div>
            
            <div className="relative">
              <input
                id="api-key-input"
                type={showKey ? 'text' : 'password'}
                className="w-full border-2 border-slate-100 rounded-xl p-4 pr-12 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-400 transition-all duration-300 text-base bg-white/80 font-mono"
                placeholder="AIzaSy..."
                value={apiKey}
                onChange={(e) => handleApiKeyChange(e.target.value)}
                autoComplete="off"
              />
              <button
                type="button"
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-50 transition-colors"
                aria-label={showKey ? 'Hide API key' : 'Show API key'}
              >
                <span className="material-symbols-outlined text-[20px]">
                  {showKey ? 'visibility_off' : 'visibility'}
                </span>
              </button>
            </div>

            <div className="flex items-center justify-between mt-3">
              <label className="flex items-center gap-2 cursor-pointer select-none group/check">
                <input
                  type="checkbox"
                  checked={rememberKey}
                  onChange={handleRememberToggle}
                  className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
                />
                <span className="text-xs text-slate-500 group-hover/check:text-slate-700 transition-colors">Remember my key</span>
              </label>
              <a
                href="https://aistudio.google.com/apikey"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-blue-500 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors"
              >
                Get your free API key
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </a>
            </div>
          </div>

          {/* Idea Section */}
          <div className="flex justify-between items-center mb-3">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wider flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">lightbulb</span>
              Describe your startup idea
            </label>
            {idea.length > 0 && (
              <span className={`text-[10px] font-black uppercase tracking-widest px-2 py-0.5 rounded-md transition-all duration-300 animate-pop-in ${
                idea.length < 30 ? 'bg-orange-100 text-orange-600' : 
                idea.length < 100 ? 'bg-blue-100 text-blue-600' : 
                'bg-emerald-100 text-emerald-600 shadow-sm shadow-emerald-200'
              }`}>
                {idea.length < 30 ? 'Low Detail' : idea.length < 100 ? 'Better' : 'Optimal Depth'}
              </span>
            )}
          </div>

          <textarea
            id="idea-input"
            className={`w-full border-2 rounded-xl p-4 text-slate-900 placeholder-slate-400 resize-none focus:outline-none transition-all duration-500 text-base leading-relaxed bg-white/80 ${
              idea.length === 0 ? 'border-slate-100 focus:border-blue-400' :
              idea.length < 30 ? 'border-orange-200 focus:border-orange-400' :
              idea.length < 100 ? 'border-blue-200 focus:border-blue-400' :
              'border-emerald-200 focus:border-emerald-400'
            }`}
            rows={4}
            placeholder="e.g. An AI-powered app that connects independent gym trainers with remote clients for personalized workout plans and real-time coaching..."
            value={idea}
            onChange={(e) => setIdea(e.target.value)}
            onKeyDown={handleKeyDown}
          />

          {/* Psychological Incentive Meter - Only show when typing */}
          <div className={`mt-4 flex flex-col gap-3 transition-all duration-500 overflow-hidden ${
            idea.length > 0 ? 'opacity-100 max-h-40 translate-y-0' : 'opacity-0 max-h-0 -translate-y-2'
          }`}>
            <div className="flex justify-between items-center text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
              <span>Blueprint Precision</span>
              <span className="tabular-nums">{Math.min(100, Math.round((idea.length / 250) * 100))}%</span>
            </div>
            <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-700 ease-out ${
                  idea.length < 50 ? 'bg-orange-500' : 
                  idea.length < 150 ? 'bg-blue-500' : 
                  'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]'
                }`}
                style={{ width: `${Math.min(100, (idea.length / 250) * 100)}%` }}
              />
            </div>
            
            <p className="text-xs text-slate-600 font-medium leading-relaxed italic animate-pop-in min-h-[2.5rem]">
              <span className="material-symbols-outlined text-[14px] mr-1 inline-block align-middle text-blue-500">auto_awesome</span>
              {idea.length < 40 ? 'Start by outlining the core problem you\u2019re looking to solve.' : 
               idea.length < 80 ? 'It often helps to mention the specific group of people facing this problem.' : 
               idea.length < 130 ? 'If you haven\u2019t already, consider describing your solution and its key benefits.' : 
               idea.length < 180 ? 'You might also want to touch upon how you plan to generate revenue.' : 
               idea.length < 250 ? 'To make the blueprint truly stand out, consider highlighting what makes this idea unique.' : 
               'Looking solid! You\u2019ve provided a rich level of detail for the AI to generate a precise blueprint.'}
            </p>
          </div>

          {error && (
            <p className="mt-4 text-red-600 text-sm font-medium flex items-center gap-2 animate-pop-in">
              <span className="material-symbols-outlined text-[16px]">error</span>
              {error}
            </p>
          )}

          <button
            id="generate-button"
            onClick={handleGenerate}
            disabled={loading || !isReady}
            className={`mt-8 w-full font-bold py-4 rounded-xl text-base shadow-lg transition-all duration-300 flex items-center justify-center gap-3 active:scale-[0.98] ${
              loading || !isReady 
              ? 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none' 
              : 'bg-blue-600 hover:bg-blue-700 text-white hover:shadow-blue-200'
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                <span>Generating your blueprint...</span>
              </>
            ) : (
              <>
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>rocket_launch</span>
                Generate Blueprint
              </>
            )}
          </button>

          {/* Loading progress message */}
          {loading && (
            <div className="mt-4 flex flex-wrap gap-2 justify-center">
              {['Market Analysis', 'Competitive Intel', 'Personas', 'MVP Spec', 'Budget', 'GTM Strategy', 'Timeline', 'Investors'].map((step, i) => (
                <span key={step} className="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium rounded-full flex items-center gap-1">
                  <svg className="animate-spin h-3 w-3" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  {step}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Example Ideas */}
        <div className="mt-8 text-center">
          <p className="text-sm text-slate-500 mb-4 font-medium">✨ Try an example</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {EXAMPLE_IDEAS.map((ex) => (
              <button
                key={ex}
                onClick={() => setIdea(ex)}
                className="text-xs px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-600 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-all duration-200 shadow-sm"
              >
                {ex}
              </button>
            ))}
          </div>
        </div>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap gap-4 justify-center text-sm text-slate-500">
          {[
            { icon: 'analytics', label: 'Market Analysis' },
            { icon: 'groups', label: 'User Personas' },
            { icon: 'rocket_launch', label: 'MVP Spec' },
            { icon: 'monetization_on', label: 'Investor Fit' },
          ].map(f => (
            <div key={f.label} className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-400 text-[18px]">{f.icon}</span>
              <span>{f.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
