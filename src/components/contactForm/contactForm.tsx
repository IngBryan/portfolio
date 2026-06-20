import { useForm, ValidationError } from '@formspree/react';
import { useEffect, useState, type FormEvent } from 'react';
import { z } from 'zod';
import { siteConfig } from '../../data/site';

const formSchema = z.object({
  name: z.string().min(1, 'El nombre es obligatorio'),
  email: z.string().email('Correo inválido'),
  phone: z.string(),
  message: z.string().min(1, 'Debe ingresar un mensaje'),
});

type ZodErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;

export const ContactForm = () => {
  const [formspreeState, formspreeSubmit] = useForm('xzzlbowq');
  const [zodErrors, setZodErrors] = useState<ZodErrors>({});
  const [showToast, setShowToast] = useState(false);
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    if (showToast) {
      setFadeClass('show');
      const timer = setTimeout(() => closeToast(), 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const closeToast = () => {
    setFadeClass('hide');
    setTimeout(() => setShowToast(false), 400);
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
      message: (form.elements.namedItem('message') as HTMLTextAreaElement).value,
    };

    const result = formSchema.safeParse(formData);

    if (!result.success) {
      const err = result.error.format();
      setZodErrors({
        name: err.name?._errors?.[0],
        email: err.email?._errors?.[0],
        phone: err.phone?._errors?.[0],
        message: err.message?._errors?.[0],
      });
      return;
    }

    setZodErrors({});
    await formspreeSubmit(e);
    setShowToast(true);
    form.reset();
  };

  return (
    <>
      <div className="contact-grid">
        <aside className="contact-info">
          <h3 className="contact-info__title">Hablemos</h3>
          <div className="contact-info__item">
            <span className="contact-info__label">Ubicación</span>
            <span className="contact-info__value">{siteConfig.location}</span>
          </div>
          <div className="contact-info__item">
            <span className="contact-info__label">Redes</span>
            <span className="contact-info__value">
              <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              {' · '}
              <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              {' · '}
              <a href={`mailto:${siteConfig.email}`}>Email</a>
            </span>
          </div>
        </aside>

        <form className="contact-form" onSubmit={onSubmit} noValidate>
          <div className="contact-form__field">
            <label htmlFor="name" className="form-label-custom">
              Nombre<span className="text-danger">*</span>
            </label>
            <input
              id="name"
              name="name"
              className="form-control-custom"
              placeholder="Nombre / Empresa"
            />
            {zodErrors.name && <p className="form-error">{zodErrors.name}</p>}
            <ValidationError prefix="Name" field="name" errors={formspreeState.errors} />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email" className="form-label-custom">
              Correo<span className="text-danger">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-control-custom"
              placeholder="Correo"
            />
            {zodErrors.email && <p className="form-error">{zodErrors.email}</p>}
            <ValidationError prefix="Email" field="email" errors={formspreeState.errors} />
          </div>

          <div className="contact-form__field">
            <label htmlFor="phone" className="form-label-custom">
              Teléfono
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              className="form-control-custom"
              placeholder="Teléfono (opcional)"
            />
            {zodErrors.phone && <p className="form-error">{zodErrors.phone}</p>}
            <ValidationError prefix="Phone" errors={formspreeState.errors} />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message" className="form-label-custom">
              Mensaje<span className="text-danger">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="form-control-custom"
              placeholder="Mensaje..."
              rows={4}
            />
            {zodErrors.message && <p className="form-error">{zodErrors.message}</p>}
            <ValidationError prefix="Message" field="message" errors={formspreeState.errors} />
          </div>

          <div className="contact-form__submit">
            <button
              type="submit"
              className={`btn btn-primary-custom btn-lg ${formspreeState.submitting ? 'contact-form__submit--loading' : ''}`}
              disabled={formspreeState.submitting}
            >
              {formspreeState.submitting ? 'Enviando...' : 'Enviar'}
            </button>
          </div>
        </form>
      </div>

      {showToast && (
        <div className="toast-container-custom position-fixed bottom-0 end-0 p-3">
          <div className={`custom-toast d-flex ${fadeClass}`} role="alert">
            <div className="toast-body-custom">Tu mensaje fue enviado correctamente.</div>
            <button
              type="button"
              className="btn-close btn-close-white me-2 m-auto"
              aria-label="Cerrar notificación"
              onClick={closeToast}
            />
          </div>
        </div>
      )}
    </>
  );
};
