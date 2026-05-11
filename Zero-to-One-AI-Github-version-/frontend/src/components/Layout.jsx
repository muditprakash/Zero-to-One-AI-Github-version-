import Sidebar from './Sidebar';
import TopHeader from './TopHeader';
import ReportTemplate from './ReportTemplate';

export default function Layout({ children, title, idea, blueprintId, data }) {
  return (
    <div className="flex bg-surface min-h-screen">
      <Sidebar idea={idea} />
      <main className="ml-64 flex-1 h-screen flex flex-col relative overflow-hidden">
        <TopHeader title={title} blueprintId={blueprintId} data={data} />
        <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
          <div className="max-w-[1280px] mx-auto">
            {children}
          </div>
        </div>
      </main>
      
      {/* Hidden Report Template for PDF Generation */}
      <div style={{ display: 'none' }}>
        {data && <ReportTemplate data={data} />}
      </div>
    </div>
  );
}
