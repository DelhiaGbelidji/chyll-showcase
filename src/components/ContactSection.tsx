import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-lg mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-6">Contactez-moi</h2>
        {submitted ? (
          <div className="text-green-600 text-center font-semibold">
            Merci pour votre message ! Je vous répondrai bientôt.
          </div>
        ) : (
          <form
            action="https://formspree.io/f/your-form-id" // Replace with your Formspree form ID
            method="POST"
            className="space-y-4"
            onSubmit={() => setSubmitted(true)}
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Votre nom"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              name="message"
              required
              placeholder="Votre message"
              rows={5}
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default ContactSection; 