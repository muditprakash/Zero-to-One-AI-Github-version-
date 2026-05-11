import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export default function TopHeader({ title, blueprintId, data }) {

  const handleExportPDF = async () => {
    if (!data) {
      alert('Blueprint data not found. Please regenerate and try again.');
      return;
    }

    const sourceEl = document.getElementById('full-report-content');
    if (!sourceEl) {
      alert('Report template not found. Please refresh the page.');
      return;
    }

    try {
      // Clone the element and append directly to body
      const clone = sourceEl.cloneNode(true);
      clone.style.position = 'fixed';
      clone.style.top = '0';
      clone.style.left = '0';
      clone.style.width = '794px';
      clone.style.zIndex = '-9999';
      clone.style.visibility = 'visible';
      clone.style.display = 'block';
      clone.style.backgroundColor = '#ffffff';
      document.body.appendChild(clone);

      // Wait longer for full rendering of complex elements/fonts
      await new Promise(resolve => setTimeout(resolve, 1000));

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        logging: true,
        backgroundColor: '#ffffff',
        width: 794,
        windowWidth: 794
      });

      document.body.removeChild(clone);

      // A4 dimensions in px at 96dpi
      const A4_W_PX = 794;
      const A4_H_PX = 1123;

      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      const pdf = new jsPDF({ unit: 'px', format: 'a4', orientation: 'portrait' });

      const pdfW = pdf.internal.pageSize.getWidth();
      const pdfH = pdf.internal.pageSize.getHeight();

      // canvas is at scale 2, so actual pixel dims are double
      const canvasW = canvas.width;
      const canvasH = canvas.height;

      // How many px of the original (scale=1) content fit per page
      const pageContentH = (pdfH / pdfW) * 794; // maintain A4 aspect for original px
      const totalPages = Math.ceil((canvasH / 2) / pageContentH);

      for (let i = 0; i < totalPages; i++) {
        if (i > 0) pdf.addPage();

        // Crop the canvas for this page
        const srcY = i * pageContentH * 2; // *2 because canvas is scale:2
        const srcH = Math.min(pageContentH * 2, canvasH - srcY);

        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvasW;
        pageCanvas.height = srcH;
        const ctx = pageCanvas.getContext('2d');
        ctx.drawImage(canvas, 0, srcY, canvasW, srcH, 0, 0, canvasW, srcH);

        const pageImgData = pageCanvas.toDataURL('image/jpeg', 1.0);
        const pageImgH = (srcH / 2) * (pdfW / 794);
        pdf.addImage(pageImgData, 'JPEG', 0, 0, pdfW, pageImgH);
      }

      pdf.save(`ZeroToOne_Report_${data.idea.replace(/ /g, '_')}.pdf`);

    } catch (error) {
      console.error('PDF export failed:', error);
      alert('Export failed: ' + error.message);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 h-16 flex justify-between items-center px-8 shadow-sm">
      <div className="flex items-center gap-4">
        <h2 className="text-lg font-bold tracking-tight text-slate-900">{title || 'ZeroToOne AI Startup Builder'}</h2>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 text-slate-500 hover:bg-slate-50 rounded-full transition-colors flex items-center gap-2 group">
          <span className="material-symbols-outlined text-[20px]">share</span>
          <span className="text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">Share</span>
        </button>
        <button 
          onClick={handleExportPDF}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-md hover:shadow-lg active:scale-95 transition-all flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[20px]">picture_as_pdf</span>
          Export PDF
        </button>
      </div>
    </header>
  );
}
