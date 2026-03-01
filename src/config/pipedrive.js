// Sarbok Group — PipeDrive Configuration
// Credentials are loaded from environment variables — never hardcode here

export const PD = {
  token: import.meta.env.VITE_PD_TOKEN || '610fbc548d3f2b313870e631fb2e1942d75e118f',
  pipelines: {
    'General Contact':  Number(import.meta.env.VITE_PD_PIPELINE_GENERAL)  || 2,
    'Investor Inquiry': Number(import.meta.env.VITE_PD_PIPELINE_INVESTOR) || 3,
    'Vendor Intake':    Number(import.meta.env.VITE_PD_PIPELINE_VENDOR)   || 4,
  }
};

export async function submitPD(entity, formType, data, setStatus) {
  setStatus('sending');

  try {
    const base = 'https://api.pipedrive.com/v1';
    const t    = PD.token;

    // 1. Create person
    const pRes = await fetch(`${base}/persons?api_token=${t}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:  data.name || data.contact || 'Unknown',
        email: data.email ? [{ value: data.email, primary: true }] : undefined,
        phone: data.phone ? [{ value: data.phone, primary: true }] : undefined,
      })
    });
    const person = await pRes.json();

    // 2. Create deal with source tagging
    const title = `[${entity}][${formType}] ${data.name || data.contact || 'Inquiry'}${data.org || data.company ? ' — ' + (data.org || data.company) : ''}`;
    await fetch(`${base}/deals?api_token=${t}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title,
        person_id:   person.data?.id,
        pipeline_id: PD.pipelines[formType] || undefined,
      })
    });

    setStatus('success');
  } catch (err) {
    console.error('PipeDrive submission error:', err);
    setStatus('error');
  }
}