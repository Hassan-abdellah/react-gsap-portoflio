// useSendEmail.js
// Drop this hook into your React project and call it instead of emailjs.send()

import { useState } from "react";

const API_URL = import.meta.env.VITE_EMAIL_API_URL || "http://localhost:3001";

export function useSendEmail() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function send(templateParams: {
    from_name: string;
    reply_to: string;
    message: string;
  }) {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const res = await fetch(`${API_URL}/api/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ templateParams }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send email.");
      }

      setSuccess(true);
    } catch (err: Error) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return { send, loading, error, success };
}
