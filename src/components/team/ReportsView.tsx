'use client';

import { useState } from 'react';
import { exportTimeEntriesCSV } from '@/lib/team/actions';
import { team } from '@/i18n/team';
import { getDemoTimeEntriesForWorker, DEMO_USERS } from '@/lib/db/demo-data';

type Period = 'week' | 'month';

function getWeekStart() {
  const now = new Date();
  const day = now.getDay();
  const diff = now.getDate() - day + (day === 0 ? -6 : 1);
  const start = new Date(now);
  start.setDate(diff);
  start.setHours(0, 0, 0, 0);
  return start;
}

function getMonthStart() {
  const now = new Date();
  const start = new Date(now.getFullYear(), now.getMonth(), 1);
  start.setHours(0, 0, 0, 0);
  return start;
}

export function ReportsView({ isDemoMode }: { isDemoMode: boolean }) {
  const [period, setPeriod] = useState<Period>('week');
  const [exporting, setExporting] = useState(false);
  
  const workers = DEMO_USERS.filter(u => u.role === 'worker' && u.active);
  
  const startDate = period === 'week' ? getWeekStart() : getMonthStart();
  
  const workerStats = workers.map(worker => {
    const entries = getDemoTimeEntriesForWorker(worker.id, startDate);
    const totalHours = entries.reduce((sum, e) => sum + (e.total_hours || 0), 0);
    const approvedHours = entries.filter(e => e.approved).reduce((sum, e) => sum + (e.total_hours || 0), 0);
    const pendingHours = totalHours - approvedHours;
    
    return {
      worker,
      totalHours,
      approvedHours,
      pendingHours,
    };
  });
  
  async function handleExport() {
    setExporting(true);
    
    try {
      if (isDemoMode) {
        const demoCSV = generateDemoCSV(period);
        downloadCSV(demoCSV, `horas-${period}-demo.csv`);
      } else {
        const result = await exportTimeEntriesCSV(
          undefined,
          startDate.toISOString().split('T')[0],
          new Date().toISOString().split('T')[0]
        );
        
        if (result.success && result.csv) {
          downloadCSV(result.csv, `horas-${period}.csv`);
        } else {
          alert('Error al exportar el CSV');
        }
      }
    } finally {
      setExporting(false);
    }
  }
  
  function generateDemoCSV(period: Period): string {
    const entries = workers.flatMap(worker => 
      getDemoTimeEntriesForWorker(worker.id, startDate)
    );
    
    const rows = [
      ['Fecha', 'Trabajador', 'Cliente', 'Inicio', 'Fin', 'Descanso (min)', 'Horas totales', 'Aprobado'].join(',')
    ];
    
    for (const entry of entries) {
      rows.push([
        entry.entry_date.toISOString().split('T')[0],
        entry.worker_name,
        entry.job.client_name,
        entry.start_time,
        entry.end_time || '',
        entry.break_minutes.toString(),
        entry.total_hours.toFixed(2),
        entry.approved ? 'Sí' : 'No'
      ].join(','));
    }
    
    return rows.join('\n');
  }
  
  function downloadCSV(csv: string, filename: string) {
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setPeriod('week')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
            period === 'week'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          {team.admin.weekly}
        </button>
        
        <button
          onClick={() => setPeriod('month')}
          className={`flex-1 py-2 px-4 rounded-lg font-medium transition-colors ${
            period === 'month'
              ? 'bg-primary text-primary-foreground'
              : 'bg-secondary text-foreground hover:bg-secondary/80'
          }`}
        >
          {team.admin.monthly}
        </button>
      </div>
      
      <div className="bg-card border border-border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-secondary border-b border-border">
              <tr>
                <th className="px-4 py-3 text-left text-xs font-semibold text-foreground uppercase tracking-wider">
                  {team.admin.worker}
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                  {team.admin.totalHours}
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                  {team.admin.approvedHours}
                </th>
                <th className="px-4 py-3 text-right text-xs font-semibold text-foreground uppercase tracking-wider">
                  {team.admin.pendingHours}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {workerStats.map(({ worker, totalHours, approvedHours, pendingHours }) => (
                <tr key={worker.id}>
                  <td className="px-4 py-3 text-sm text-foreground font-medium">
                    {worker.name}
                  </td>
                  <td className="px-4 py-3 text-sm text-foreground text-right font-mono">
                    {totalHours.toFixed(1)}h
                  </td>
                  <td className="px-4 py-3 text-sm text-primary text-right font-mono">
                    {approvedHours.toFixed(1)}h
                  </td>
                  <td className="px-4 py-3 text-sm text-muted-foreground text-right font-mono">
                    {pendingHours.toFixed(1)}h
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot className="bg-secondary border-t-2 border-border">
              <tr>
                <td className="px-4 py-3 text-sm font-bold text-foreground">
                  Total
                </td>
                <td className="px-4 py-3 text-sm font-bold text-foreground text-right font-mono">
                  {workerStats.reduce((sum, s) => sum + s.totalHours, 0).toFixed(1)}h
                </td>
                <td className="px-4 py-3 text-sm font-bold text-primary text-right font-mono">
                  {workerStats.reduce((sum, s) => sum + s.approvedHours, 0).toFixed(1)}h
                </td>
                <td className="px-4 py-3 text-sm font-bold text-muted-foreground text-right font-mono">
                  {workerStats.reduce((sum, s) => sum + s.pendingHours, 0).toFixed(1)}h
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      
      <button
        onClick={handleExport}
        disabled={exporting}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
          />
        </svg>
        {exporting ? 'Exportando...' : team.admin.exportCSV}
      </button>
    </div>
  );
}
