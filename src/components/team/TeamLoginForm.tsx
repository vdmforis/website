'use client';

import { useState } from 'react';
import { sendMagicLinkAction } from '@/lib/team/actions';
import { team } from '@/i18n/team';

export function TeamLoginForm() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [demoMode, setDemoMode] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const result = await sendMagicLinkAction(email);

    if (result.success) {
      setSent(true);
      setDemoMode(result.demoMode || false);
    } else {
      setError(result.error || team.login.errorSending);
    }

    setLoading(false);
  }

  if (sent) {
    return (
      <div className="text-center space-y-4">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
          <svg
            className="w-6 h-6 text-primary"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
        </div>
        
        <div>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            {team.login.checkEmail}
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            {team.login.checkEmailMessage}
          </p>
        </div>
        
        {demoMode && (
          <div className="bg-secondary border border-border rounded-lg p-4 text-left">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg
                  className="w-3 h-3 text-primary"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground mb-1">
                  {team.login.demoMode}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {team.login.demoModeMessage}
                </p>
              </div>
            </div>
          </div>
        )}
        
        <button
          type="button"
          onClick={() => {
            setSent(false);
            setDemoMode(false);
            setEmail('');
          }}
          className="text-sm text-primary hover:underline"
        >
          {team.common.back}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          {team.login.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={team.login.emailPlaceholder}
          required
          disabled={loading}
          className="w-full px-4 py-2.5 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
        />
      </div>

      {error && (
        <div className="bg-destructive/10 border border-destructive/20 text-destructive rounded-lg p-3 text-sm">
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed font-medium py-2.5 px-4 rounded-lg transition-colors"
      >
        {loading ? team.common.loading : team.login.sendLink}
      </button>
      
      <div className="text-xs text-muted-foreground text-center pt-2">
        Demo: dennis@vdmforis.com o mohamed@vdmforis.com
      </div>
    </form>
  );
}
