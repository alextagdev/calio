'use client';

import { useState } from 'react';

export default function LoginForm() {
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');

    const res = await fetch('/api/admin/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      // Hard navigation so the server layout sees the new cookie immediately
      window.location.href = '/admin';
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error || 'Autentificare esuata');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl font-light tracking-[0.45em] text-white">CALIO</span>
              <span className="text-[#c8a96e] text-[11px] tracking-[0.25em] pt-1">ADMIN</span>
            </div>
          </div>
          <p className="text-[#666] text-sm tracking-widest">PANOU DE CONTROL</p>
        </div>

        <div className="bg-[#111] border border-[#1f1f1f] rounded-2xl p-8">
          <div className="mb-6">
            <h2 className="text-xl font-light tracking-tight">Autentificare</h2>
            <p className="text-[#666] text-sm mt-1">Introdu parola de administrator</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[10px] tracking-[0.2em] text-[#777] mb-2">PAROLA</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#0a0a0a] border border-[#222] focus:border-[#c8a96e] px-4 py-3 text-lg rounded-lg outline-none transition-colors"
                placeholder="••••••••••"
                required
                autoFocus
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm bg-red-950/40 border border-red-900/50 px-3 py-2 rounded">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-12 bg-[#c8a96e] hover:bg-[#e8d5a3] active:bg-[#c8a96e] text-black font-medium tracking-[0.1em] text-sm rounded-lg transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? 'SE VERIFICA...' : 'INTRA IN ADMIN'}
            </button>
          </form>
        </div>

        <p className="mt-8 text-center text-[10px] text-[#444] tracking-widest">
          ACCES RESTRICTIONAT • CONTINUT SALVAT LOCAL
        </p>
      </div>
    </div>
  );
}
