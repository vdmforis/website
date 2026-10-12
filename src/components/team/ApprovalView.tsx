'use client';

import { useState } from 'react';
import { approveTimeEntryAction } from '@/lib/team/actions';
import { team } from '@/i18n/team';
import { getDemoTimeEntriesForWorker, DEMO_USERS } from '@/lib/db/demo-data';

export function ApprovalView({ isDemoMode }: { isDemoMode: boolean }) {
  const [approving, setApproving] = useState<number | null>(null);
  
  const workers = DEMO_USERS.filter(u => u.role === 'worker' && u.active);
  
  const allEntries = workers.flatMap(worker => 
    getDemoTimeEntriesForWorker(worker.id)
  );
  
  const pendingEntries = allEntries.filter(e => !e.approved);
  
  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'short', 
      day: 'numeric', 
      month: 'short' 
    };
    return new Date(date).toLocaleDateString('es-ES', options);
  };
  
  async function handleApprove(entryId: number) {
    if (isDemoMode) {
      alert('Modo demostración: no se pueden aprobar horas reales.');
      return;
    }
    
    setApproving(entryId);
    
    const result = await approveTimeEntryAction(entryId);
    
    if (result.success) {
      window.location.reload();
    } else {
      alert(result.error || 'Error al aprobar las horas');
      setApproving(null);
    }
  }
  
  if (pendingEntries.length === 0) {
    return (
      <div className="bg-card border border-border rounded-lg p-8 text-center">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <p className="text-sm text-muted-foreground">
          {team.admin.allApproved}
        </p>
      </div>
    );
  }
  
  return (
    <div className="space-y-3">
      {pendingEntries.map((entry) => (
        <div
          key={entry.id}
          className="bg-card border border-border rounded-lg p-4"
        >
          <div className="flex items-start justify-between gap-4 mb-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-foreground">
                  {entry.worker_name}
                </h3>
                <span className="text-xs text-muted-foreground">
                  •
                </span>
                <span className="text-xs text-muted-foreground">
                  {entry.job.client_name}
                </span>
              </div>
              <p className="text-sm text-muted-foreground line-clamp-1">
                {entry.job.task_description}
              </p>
            </div>
            
            <span className="text-sm font-semibold text-foreground flex-shrink-0">
              {entry.total_hours.toFixed(1)}h
            </span>
          </div>
          
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span>{formatDate(entry.entry_date)}</span>
            <span>{entry.start_time} - {entry.end_time || '...'}</span>
            {entry.break_minutes > 0 && (
              <span>Descanso: {entry.break_minutes} min</span>
            )}
          </div>
          
          {entry.notes && (
            <p className="text-sm text-muted-foreground bg-secondary rounded p-3 mb-3">
              {entry.notes}
            </p>
          )}
          
          <button
            onClick={() => handleApprove(entry.id)}
            disabled={approving === entry.id || isDemoMode}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-2 px-4 rounded-lg transition-colors text-sm"
          >
            {approving === entry.id ? 'Aprobando...' : team.admin.approve}
          </button>
        </div>
      ))}
    </div>
  );
}
