import React, { useEffect } from 'react';
import { AlertTriangle, CheckCircle2, Bookmark, HelpCircle } from 'lucide-react';

interface ConfirmSubmitModalProps {
  isOpen: boolean;
  answeredCount: number;
  unansweredCount: number;
  markedCount: number;
  totalAvailable: number;
  onClose: () => void;
  onConfirm: () => void;
}

export const ConfirmSubmitModal: React.FC<ConfirmSubmitModalProps> = ({
  isOpen,
  answeredCount,
  unansweredCount,
  markedCount,
  totalAvailable,
  onClose,
  onConfirm,
}) => {
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

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-slate-900/75 backdrop-blur-xs overflow-y-auto">
      <div 
        className="bg-white rounded-2xl shadow-2xl border border-slate-200 max-w-md w-full p-5 sm:p-6 my-auto animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 sm:h-11 sm:w-11 rounded-xl bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 id="confirm-modal-title" className="text-base sm:text-lg font-extrabold text-slate-900">
              Submit Test Confirmation
            </h2>
            <p className="text-[11px] sm:text-xs text-slate-500">
              NISM Series XV Practice Examination
            </p>
          </div>
        </div>

        {/* Clear Summary per Requirement 5 */}
        <div className="bg-slate-50 border border-slate-200/90 rounded-xl p-3.5 mb-4 space-y-2 text-xs sm:text-sm">
          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Answered:</span>
            </span>
            <strong className="font-mono text-slate-900 text-sm">{answeredCount}</strong>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <HelpCircle className="w-4 h-4 text-slate-500" />
              <span>Unanswered:</span>
            </span>
            <strong className={`font-mono text-sm ${unansweredCount > 0 ? 'text-rose-700 font-bold' : 'text-slate-900'}`}>
              {unansweredCount}
            </strong>
          </div>

          <div className="flex items-center justify-between">
            <span className="flex items-center gap-1.5 text-slate-700 font-medium">
              <Bookmark className="w-4 h-4 text-amber-600" />
              <span>Marked for Review:</span>
            </span>
            <strong className="font-mono text-amber-800 text-sm">{markedCount}</strong>
          </div>
        </div>

        {/* Warning if unanswered exist */}
        {unansweredCount > 0 && (
          <div className="p-3 bg-amber-50/80 border border-amber-200/90 rounded-xl mb-5 text-xs text-amber-900 space-y-1">
            <p className="font-bold text-amber-950">
              You still have {unansweredCount} unanswered question{unansweredCount > 1 ? 's' : ''}.
            </p>
            <p className="text-[11px] text-amber-800">
              Unanswered questions will receive 0 marks in your practice score simulation.
            </p>
          </div>
        )}

        {unansweredCount === 0 && (
          <p className="text-xs sm:text-sm text-slate-600 mb-5 leading-relaxed">
            All {totalAvailable} questions in this test session have been answered. Would you like to finish and view your performance scorecard?
          </p>
        )}

        {/* Action buttons: GO BACK & SUBMIT TEST */}
        <div className="flex gap-2.5">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs sm:text-sm font-bold hover:bg-slate-50 transition-colors cursor-pointer min-h-[44px]"
          >
            GO BACK
          </button>
          <button
            type="button"
            onClick={onConfirm}
            className="flex-1 px-4 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-sm transition-colors cursor-pointer min-h-[44px]"
          >
            SUBMIT TEST
          </button>
        </div>
      </div>
    </div>
  );
};
