import React from 'react';

export default function ReportTemplate({ data }) {
  const { idea, blueprint } = data;
  const market = blueprint.market_analysis;
  const competition = blueprint.competitive_landscape;
  const personas = blueprint.personas;
  const mvp = blueprint.mvp_spec;
  const budget = blueprint.budget_and_team;
  const gtm = blueprint.gtm_strategy;
  const timeline = blueprint.timeline;
  const investors = blueprint.investor_suggestions;

  // Use standard HEX colors to avoid 'oklch' issues with html2canvas
  const colors = {
    primary: '#2563eb',
    primaryLight: '#eff6ff',
    primaryDark: '#1e4ed8',
    slate900: '#0f172a',
    slate600: '#475569',
    slate500: '#64748b',
    slate400: '#94a3b8',
    slate100: '#f1f5f9',
    slate50: '#f8fafc',
    white: '#ffffff',
    emerald: '#10b981',
    red: '#ef4444'
  };

  return (
    <div id="full-report-content" style={{ 
      backgroundColor: colors.white, 
      padding: '28px 40px', 
      color: colors.slate900,
      width: '794px', 
      fontFamily: 'Inter, system-ui, sans-serif',
      boxSizing: 'border-box',
      maxWidth: '794px',
      overflow: 'hidden'
    }}>
      {/* Cover Page */}
      <div style={{ 
        height: '1100px', 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center', 
        textAlign: 'center', 
        borderBottom: `4px solid ${colors.primary}`,
        marginBottom: '80px'
      }}>
        <h1 style={{ fontSize: '80px', fontWeight: 900, marginBottom: '40px' }}>
          ZeroToOne<span style={{ color: colors.primary }}> AI</span>
        </h1>
        <div style={{ width: '120px', height: '8px', backgroundColor: colors.primary, marginBottom: '60px' }}></div>
        <h2 style={{ fontSize: '48px', fontWeight: 700, color: colors.slate900, marginBottom: '24px' }}>
          Startup Blueprint Report
        </h2>
        <p style={{ fontSize: '32px', color: colors.slate600, fontWeight: 500, maxWidth: '700px' }}>{idea}</p>
        <div style={{ marginTop: '160px', color: colors.slate400, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.2em' }}>
          Confidential Strategic Document
        </div>
      </div>

      {/* Market Analysis */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ 
            width: '48px', height: '48px', backgroundColor: colors.primary, color: colors.white, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' 
          }}>1</div>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>Market Analysis</h2>
        </div>
        
        <div style={{ display: 'flex', gap: '32px', marginBottom: '48px' }}>
          {[
            { label: 'TAM', amount: market?.tam?.amount, desc: market?.tam?.description },
            { label: 'SAM', amount: market?.sam?.amount, desc: market?.sam?.description },
            { label: 'SOM', amount: market?.som?.amount, desc: market?.som?.description },
          ].map(m => (
            <div key={m.label} style={{ 
              flex: 1, padding: '32px', border: `2px solid ${colors.slate100}`, borderRadius: '24px', backgroundColor: colors.slate50 
            }}>
              <div style={{ fontSize: '12px', fontWeight: 900, color: colors.primary, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>{m.label}</div>
              <div style={{ fontSize: '36px', fontWeight: 900, marginBottom: '16px' }}>{m.amount}</div>
              <p style={{ color: colors.slate600, fontSize: '14px', lineHeight: '1.6' }}>{m.desc}</p>
            </div>
          ))}
        </div>

        <div style={{ padding: '40px', border: `2px solid ${colors.slate100}`, borderRadius: '24px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            Key Market Trends
          </h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {market?.trends?.map((t, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'start', gap: '16px', padding: '16px', backgroundColor: colors.slate50, borderRadius: '16px' }}>
                <span style={{ color: colors.primary, fontWeight: 'bold' }}>0{i+1}</span>
                <p style={{ fontWeight: 500, color: colors.slate900 }}>{t}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Competition */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ 
            width: '48px', height: '48px', backgroundColor: colors.primary, color: colors.white, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' 
          }}>2</div>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>Competitive Landscape</h2>
        </div>

        <div style={{ border: `2px solid ${colors.slate100}`, borderRadius: '24px', overflow: 'hidden', marginBottom: '40px' }}>
          <table style={{ width: '100%', textAlign: 'left', borderCollapse: 'collapse' }}>
            <thead style={{ backgroundColor: colors.slate50, borderBottom: `2px solid ${colors.slate100}` }}>
              <tr>
                <th style={{ padding: '24px', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', color: colors.slate500 }}>Competitor</th>
                <th style={{ padding: '24px', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', color: colors.slate500 }}>Strategic Profile</th>
                <th style={{ padding: '24px', fontWeight: 700, textTransform: 'uppercase', fontSize: '12px', color: colors.slate500, textAlign: 'right' }}>Share</th>
              </tr>
            </thead>
            <tbody>
              {competition?.competitors?.map((c, i) => (
                <tr key={i} style={{ borderBottom: `2px solid ${colors.slate100}` }}>
                  <td style={{ padding: '24px', fontWeight: 700, fontSize: '20px' }}>{c.name}</td>
                  <td style={{ padding: '24px', color: colors.slate600, lineHeight: '1.6' }}>{c.description}</td>
                  <td style={{ padding: '24px', textAlign: 'right', fontWeight: 900, color: colors.primary, fontSize: '20px' }}>{c.share}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ display: 'flex', gap: '32px' }}>
          <div style={{ flex: 1, backgroundColor: colors.primary, color: colors.white, padding: '40px', borderRadius: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Strategic Moat</h3>
            <p style={{ color: colors.primaryLight, lineHeight: '1.6', fontSize: '18px' }}>{competition?.moat}</p>
          </div>
          <div style={{ flex: 1, backgroundColor: colors.slate900, color: colors.white, padding: '40px', borderRadius: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '16px' }}>Differentiation</h3>
            <p style={{ color: colors.slate400, lineHeight: '1.6', fontSize: '18px' }}>{competition?.differentiation}</p>
          </div>
        </div>
      </div>

      {/* Personas */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ 
            width: '48px', height: '48px', backgroundColor: colors.primary, color: colors.white, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' 
          }}>3</div>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>User Personas</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px' }}>
          {personas?.map((p, i) => (
            <div key={i} style={{ border: `2px solid ${colors.slate100}`, borderRadius: '32px', padding: '40px', backgroundColor: colors.slate50 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '28px', fontWeight: 700 }}>{p.name}</h3>
                <span style={{ padding: '4px 16px', backgroundColor: colors.primaryLight, color: colors.primaryDark, borderRadius: '20px', fontSize: '12px', fontWeight: 900, textTransform: 'uppercase' }}>{p.segment}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 900, color: colors.slate400, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Core Goals</h4>
                  {p.goals.map((g, j) => <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 500 }}><div style={{ width: '6px', height: '6px', backgroundColor: colors.primary, borderRadius: '50%' }}></div>{g}</div>)}
                </div>
                <div>
                  <h4 style={{ fontSize: '12px', fontWeight: 900, color: colors.slate400, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '12px' }}>Pain Points</h4>
                  {p.pain_points.map((g, j) => <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px', fontWeight: 500, color: colors.slate600 }}><div style={{ width: '6px', height: '6px', backgroundColor: colors.red, borderRadius: '50%' }}></div>{g}</div>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* MVP Specs */}
      <div style={{ marginBottom: '80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ 
            width: '48px', height: '48px', backgroundColor: colors.primary, color: colors.white, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' 
          }}>4</div>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>MVP Specifications</h2>
        </div>
        <div style={{ backgroundColor: colors.slate900, color: colors.white, borderRadius: '40px', padding: '48px', marginBottom: '40px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '40px', color: colors.primary }}>Core Feature Set</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '48px', rowGap: '24px' }}>
            {mvp?.features?.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px', borderBottom: '1px solid #1e293b', paddingBottom: '16px' }}>
                <span style={{ color: colors.slate600, fontWeight: 700, fontSize: '24px' }}>{i+1}</span>
                <span style={{ fontSize: '20px', fontWeight: 500 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ backgroundColor: '#f0f9ff', border: '2px solid #bae6fd', borderRadius: '40px', padding: '48px' }}>
          <h3 style={{ fontSize: '28px', fontWeight: 700, marginBottom: '40px', color: '#0369a1' }}>Primary User Flows</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {mvp?.user_flows?.map((f, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
                <div style={{ width: '40px', height: '40px', backgroundColor: colors.primary, color: colors.white, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>{i+1}</div>
                <div style={{ padding: '24px', backgroundColor: colors.white, borderRadius: '16px', border: '1px solid #bae6fd', flex: 1, fontWeight: 500, color: '#0c4a6e', fontSize: '18px' }}>{f}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* GTM & Investors */}
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '40px' }}>
          <div style={{ 
            width: '48px', height: '48px', backgroundColor: colors.primary, color: colors.white, 
            display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', fontSize: '24px', fontWeight: 'bold' 
          }}>5</div>
          <h2 style={{ fontSize: '36px', fontWeight: 700 }}>GTM & Funding</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', marginBottom: '40px' }}>
          <div style={{ padding: '40px', border: `2px solid ${colors.slate100}`, borderRadius: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>GTM Channels</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {gtm?.channels?.map((c, i) => <span key={i} style={{ padding: '12px 24px', backgroundColor: colors.slate100, borderRadius: '12px', fontWeight: 700, color: colors.slate600 }}>{c}</span>)}
            </div>
          </div>
          <div style={{ padding: '40px', border: `2px solid ${colors.slate100}`, borderRadius: '32px' }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>Key Metrics</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
              {gtm?.metrics?.map((c, i) => <span key={i} style={{ padding: '12px 24px', backgroundColor: colors.primaryLight, color: colors.primaryDark, border: `1px solid ${colors.primaryLight}`, borderRadius: '12px', fontWeight: 700 }}>{c}</span>)}
            </div>
          </div>
        </div>

        <div style={{ border: `2px solid ${colors.slate100}`, borderRadius: '32px', overflow: 'hidden' }}>
          <div style={{ padding: '32px', backgroundColor: colors.slate50, borderBottom: `2px solid ${colors.slate100}` }}>
            <h3 style={{ fontSize: '24px', fontWeight: 700 }}>Target Investor Fit</h3>
          </div>
          <table style={{ width: '100%', textAlign: 'left' }}>
            <thead>
              <tr style={{ borderBottom: `2px solid ${colors.slate100}` }}>
                <th style={{ padding: '24px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: colors.slate400 }}>Investor</th>
                <th style={{ padding: '24px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: colors.slate400 }}>Focus Area</th>
                <th style={{ padding: '24px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', color: colors.slate400, textAlign: 'right' }}>Match Score</th>
              </tr>
            </thead>
            <tbody>
              {investors?.map((inv, i) => (
                <tr key={i} style={{ borderBottom: `1px solid ${colors.slate50}` }}>
                  <td style={{ padding: '24px', fontWeight: 700, fontSize: '20px' }}>{inv.name}</td>
                  <td style={{ padding: '24px', color: colors.slate600, fontWeight: 500 }}>{inv.focus}</td>
                  <td style={{ padding: '24px', textAlign: 'right', fontWeight: 900, fontSize: '24px', color: colors.emerald }}>{inv.fit_score}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: '80px', textAlign: 'center', color: colors.slate400, fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
        End of Document | ZeroToOne AI © 2026
      </div>
    </div>
  );
}
