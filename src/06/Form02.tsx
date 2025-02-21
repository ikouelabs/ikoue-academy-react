import {ChangeEvent, FormEvent, useState} from "react";
import {RiLoader5Line} from "react-icons/ri";
import {BiError} from "react-icons/bi";


interface ContactForm {
  to: string
  subject: string
  message: string
}


export default function Form02() {

    const [form, setForm] = useState<ContactForm>({
      to: "",
      subject: "",
      message: ""
    });
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState("");

    function resetForm() {
        setForm({
          to: "",
          subject: "",
          message: ""
        })
        setSubmitting(false);
        setError("");
    }

    function sendMessage(event: FormEvent<HTMLFormElement>) {
      // stop l'envoi du formulaire au backend (action)
      event.preventDefault();
      // Valider le formulaire
      // Envoyer au backend
      // Gérer les messages d'erreur

      if (form.subject.length < 10) {
        setError("Le sujet doit comporter au moins 10 caractères.");
      } else {
        setError("");
        setSubmitting(true);
        setTimeout(resetForm, 5000)
      }
    }

    function handleChangeTo(event: ChangeEvent<HTMLInputElement>) {
        setForm({
          ...form,
          to: event.target.value,
        })
    }

    function handleChangeSubject(event: ChangeEvent<HTMLInputElement>) {
      setForm({
        ...form,
        subject: event.target.value,
      })
    }

    function handleChangeMessage(event: ChangeEvent<HTMLTextAreaElement>) {
      setForm({
        ...form,
        message: event.target.value
      })
    }

    return (
        <div className="p-12 space-y-2">
            <form onSubmit={sendMessage}>
                <div>
                    <label>Destinataire <span className="text-red-500">*</span></label>
                    <input type="email" value={form.to}
                           required
                           onChange={handleChangeTo}
                           className="block border p-1" placeholder="contact@email.com"/>
                </div>
                <div>
                    <label>Sujet du message <span className="text-red-500">*</span></label>
                    <input type="text" value={form.subject}
                           required
                           onChange={handleChangeSubject}
                           className="block border p-1" placeholder="Sujet"/>
                </div>
                <div>
                    <label>Message <span className="text-red-500">*</span></label>
                    <textarea value={form.message}
                              required
                              onChange={handleChangeMessage}
                              className="block border p-1" placeholder="Le contenu de votre message"/>
                </div>
                <div className="pt-2 space-x-2">
                    <button type="submit"
                            disabled={submitting}
                            className="bg-black text-white uppercase text-xs tracking-wide px-4 py-1">
                      {submitting ?<RiLoader5Line className="animate-spin" /> : "Envoyer" }
                    </button>
                    <button className="text-gray-600"
                            onClick={resetForm}>Effacer
                    </button>
                </div>
            </form>

          {error && (
            <div className="bg-red-50  p-3 text-red-500 text-xs flex items-center space-x-2">
            <BiError />
            <span>Le formulaire comporte des erreurs.</span>
          </div>)}
        </div>
    )
}
