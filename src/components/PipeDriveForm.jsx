import { useState } from 'react';
import { submitPD } from '../config/pipedrive';

export default function PipeDriveForm({ entity, formType, children, submitLabel = 'Submit' }) {
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  async function handleSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    await submitPD(entity, formType, data, setStatus);
  }

  if (status === 'success') {
    return (
      <div className="fsucc">
        Thank you — your inquiry has been received. Our team will respond within three business days.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit" className="fsub" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending…' : submitLabel}
      </button>
      {status === 'error' && (
        <p style={{ color: 'var(--red)', fontSize: 13, marginTop: 10 }}>
          Submission error — please try again or contact us directly.
        </p>
      )}
    </form>
  );
}