'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import type { TeamUser } from '@/lib/db/types';
import { createJobAction } from '@/lib/team/actions';
import { team } from '@/i18n/team';

export function JobForm({ workers, isDemoMode }: { workers: TeamUser[]; isDemoMode: boolean }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const today = new Date().toISOString().split('T')[0];
  
  const [formData, setFormData] = useState({
    job_date: today,
    start_time: '09:00',
    estimated_hours: 2,
    client_name: '',
    client_address: '',
    client_phone: '',
    task_description: '',
    notes: '',
    assigned_to: workers.length > 0 ? workers[0].id : 0,
  });
  
  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    
    if (isDemoMode) {
      alert('Modo demostración: no se pueden crear trabajos reales. Configura la base de datos para usar esta función.');
      return;
    }
    
    setLoading(true);
    setError('');
    
    const result = await createJobAction(formData);
    
    if (result.success) {
      router.push('/team/dashboard');
    } else {
      setError(result.error || team.jobForm.error);
      setLoading(false);
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="job_date" className="block text-sm font-medium text-foreground mb-2">
            {team.jobForm.date}
          </label>
          <input
            id="job_date"
            type="date"
            value={formData.job_date}
            onChange={(e) => setFormData({ ...formData, job_date: e.target.value })}
            required
            disabled={loading}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
        </div>
        
        <div>
          <label htmlFor="start_time" className="block text-sm font-medium text-foreground mb-2">
            {team.jobForm.startTime}
          </label>
          <input
            id="start_time"
            type="time"
            value={formData.start_time}
            onChange={(e) => setFormData({ ...formData, start_time: e.target.value })}
            required
            disabled={loading}
            className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="estimated_hours" className="block text-sm font-medium text-foreground mb-2">
          {team.jobForm.estimatedHours}
        </label>
        <input
          id="estimated_hours"
          type="number"
          step="0.5"
          min="0.5"
          max="12"
          value={formData.estimated_hours}
          onChange={(e) => setFormData({ ...formData, estimated_hours: parseFloat(e.target.value) })}
          required
          disabled={loading}
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
        />
      </div>
      
      <div>
        <label htmlFor="assigned_to" className="block text-sm font-medium text-foreground mb-2">
          {team.jobForm.assignTo}
        </label>
        <select
          id="assigned_to"
          value={formData.assigned_to}
          onChange={(e) => setFormData({ ...formData, assigned_to: parseInt(e.target.value) })}
          required
          disabled={loading}
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
        >
          {workers.map((worker) => (
            <option key={worker.id} value={worker.id}>
              {worker.name}
            </option>
          ))}
        </select>
      </div>
      
      <div className="border-t border-border pt-4">
        <h3 className="text-sm font-semibold text-foreground mb-4">
          Información del cliente
        </h3>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="client_name" className="block text-sm font-medium text-foreground mb-2">
              {team.jobForm.clientName}
            </label>
            <input
              id="client_name"
              type="text"
              value={formData.client_name}
              onChange={(e) => setFormData({ ...formData, client_name: e.target.value })}
              required
              disabled={loading}
              className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="client_address" className="block text-sm font-medium text-foreground mb-2">
              {team.jobForm.clientAddress}
            </label>
            <input
              id="client_address"
              type="text"
              value={formData.client_address}
              onChange={(e) => setFormData({ ...formData, client_address: e.target.value })}
              required
              disabled={loading}
              className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
          </div>
          
          <div>
            <label htmlFor="client_phone" className="block text-sm font-medium text-foreground mb-2">
              {team.jobForm.clientPhone}
            </label>
            <input
              id="client_phone"
              type="tel"
              value={formData.client_phone}
              onChange={(e) => setFormData({ ...formData, client_phone: e.target.value })}
              placeholder="+34 611 222 333"
              disabled={loading}
              className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
          </div>
        </div>
      </div>
      
      <div>
        <label htmlFor="task_description" className="block text-sm font-medium text-foreground mb-2">
          {team.jobForm.task}
        </label>
        <textarea
          id="task_description"
          value={formData.task_description}
          onChange={(e) => setFormData({ ...formData, task_description: e.target.value })}
          required
          disabled={loading}
          rows={3}
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 resize-none"
        />
      </div>
      
      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-foreground mb-2">
          {team.jobForm.notes}
        </label>
        <textarea
          id="notes"
          value={formData.notes}
          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
          disabled={loading}
          rows={2}
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 resize-none"
        />
      </div>
      
      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-3 text-sm">
          {error}
        </div>
      )}
      
      <div className="flex gap-3 pt-4">
        <button
          type="button"
          onClick={() => router.back()}
          disabled={loading}
          className="flex-1 bg-secondary text-foreground hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          {team.jobForm.cancel}
        </button>
        
        <button
          type="submit"
          disabled={loading}
          className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-2.5 px-4 rounded-lg transition-colors"
        >
          {loading ? team.jobForm.creating : team.jobForm.save}
        </button>
      </div>
    </form>
  );
}
