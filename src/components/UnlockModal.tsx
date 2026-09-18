import React, { useState, useEffect } from 'react';
import { Lock, X, KeyRound, AlertCircle, CheckCircle2 } from 'lucide-react';
import { UNLOCK_CODE, LOCAL_STORAGE_KEYS } from '../config';

interface UnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const UnlockModal: React.FC<UnlockModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanInput = code.trim();

    if (cleanInput === UNLOCK_CODE) {
      setError(null);
      setSuccess(true);
      try {
        localStorage.setItem(LOCAL_STORAGE_KEYS.UNLOCKED_ADVANCED, 'true');
      } catch (err) {
        console.warn('LocalStorage not available', err);
      }
      setTimeout(() => {
        onSuccess();
        onClose();
        setSuccess(false);
        setCode('');
      }, 700);
    } else {
      setError('Invalid unlock code. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full p-5 sm:p-6 relative my-auto max-h-[92vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="unlock-modal-title"
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 text-slate-400 hover:text-slate-700 p-2 rounded-xl transition-colors cursor-pointer min-h-[40px] min-w-[40px] flex items-center justify-center"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-3.5 pr-8">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
            <KeyRound className="w-5 h-5" />
          </div>
          <div>
            <h2 id="unlock-modal-title" className="text-base sm:text-lg font-extrabold text-slate-900 leading-snug">
              Unlock Advanced Practice Set
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500">
              Access Questions 41–80 (40 Advanced Questions)
            </p>
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
          Enter your authorized access code below to unlock the complete 80-question test bank for this session.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="unlock-code-input" className="block text-[11px] font-bold text-slate-700 mb-1.5 uppercase tracking-wider">
              Enter unlock code:
            </label>
            <input
              id="unlock-code-input"
              type="password"
              autoComplete="off"
              value={code}
              onChange={(e) => {
                setCode(e.target.value);
                if (error) setError(null);
              }}
              placeholder="••••••••••••"
              className="w-full px-3.5 py-3 rounded-xl border border-slate-300 text-slate-900 text-sm focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none transition-all font-mono tracking-widest min-h-[44px]"
              autoFocus
            />
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs font-medium text-rose-600 bg-rose-50 p-2.5 rounded-lg border border-rose-200">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-700 bg-emerald-50 p-2.5 rounded-lg border border-emerald-200">
              <CheckCircle2 className="w-4 h-4 shrink-0" />
              <span>Code verified! Unlocking Advanced 40 questions...</span>
            </div>
          )}

          <div className="flex gap-2.5 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors cursor-pointer min-h-[44px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!code.trim() || success}
              className="flex-1 px-4 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-50 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer min-h-[44px]"
            >
              <Lock className="w-4 h-4" />
              <span>UNLOCK</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
