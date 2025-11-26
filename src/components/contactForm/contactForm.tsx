import { useForm, ValidationError } from '@formspree/react';
import {useEffect, useState } from 'react';
import { z } from "zod";

const formSchema = z.object({
    name: z.string().min(1,'El nombre es obligatorio'),
    email: z.string().email("Correo inválido"),
    phone: z.string(),
    message: z.string().min(1,'Debe ingresar un mensaje')

});
type ZodErrors = Partial<Record<keyof z.infer<typeof formSchema>, string>>;
export const ContactForm = () => {
    const [state, handleSubmit] = useForm("xzzlbowq");
    const [zodErrors, setZodErrors] = useState<ZodErrors>({});
    const [showToast, setShowToast] = useState(false);
    const [fadeClass, setFadeClass] = useState("");

    useEffect(() => {
    if (showToast) {
        setFadeClass("show");
        const timer = setTimeout(() => {
        closeToast();
        }, 3000);

        return () => clearTimeout(timer);
    }
    }, [showToast]);

    const closeToast = () => {
        setFadeClass("hide");

        setTimeout(() => {
            setShowToast(false);
        }, 400);
    };

    
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement & {
            name: { value: string };
            email: { value: string };
            phone: { value: number };
            message: { value: string };
        };
        const formData = {
            name:form.name.value,
            email: form.email.value,
            phone:form.phone.value,
            message:form.message.value,
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
        await handleSubmit(e);  
        setShowToast(true);
        form.reset();          
    };

  return (
    <>
    <form
      className="mx-auto tipografia tipografia_color2 mt-5"
      style={{
        background: "#251840",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "500px"
      }}
      onSubmit={onSubmit}
    >

      <div className="mb-3 text-start">
        <label htmlFor="name" className="form-label">
            Nombre<span className="text-danger">*</span>:
        </label>
        <input id="name" name="name" className="form-control" placeholder="Nombre/Empresa" />
        {zodErrors.name && (
          <p className="text-danger">{zodErrors.name}</p>
        )}
        <ValidationError prefix="Name" field="name" errors={state.errors} />
      </div>

      <div className="mb-3 text-start">
        <label htmlFor="email" className="form-label">
            Correo<span className="text-danger">*</span>:
        </label>
        <input id="email" name="email" className="form-control" placeholder="Correo" />
        {zodErrors.email && (
          <p className="text-danger">{zodErrors.email}</p>
        )}
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>

      <div className="mb-3 text-start">
        <label htmlFor="phone" className="form-label">
            Telefono:
        </label>
        <input id="phone" name="phone"className="form-control" placeholder="Telefono" />
        {zodErrors.phone && (
          <p className="text-danger">{zodErrors.phone}</p>
        )}
        <ValidationError prefix="Phone" errors={state.errors} />
      </div>

      <div className="mb-3 text-start">
        <label htmlFor="message" className="form-label">
            Mensaje<span className="text-danger">*</span>:
        </label>
        <textarea id="message" name="message" className="form-control" placeholder="Mensaje..." />
        {zodErrors.message && (
          <p className="text-danger">{zodErrors.message}</p>
        )}
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>
      <div className="text-start">
        <button type="submit" className="btn tipografia_color2 tipografia1 custom-button btn-lg" disabled={state.submitting}>
            Enviar
        </button>
      </div>
    </form>
    {showToast && (
        <div className="toast-container-custom position-fixed bottom-0 end-0 p-3">
            <div className={`custom-toast d-flex ${fadeClass}`} role="alert">
                <div className="toast-body-custom">
                    Tu mensaje fue enviado correctamente.
                </div>
                <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    onClick={closeToast}
                >
                </button>
            </div>
        </div>
    )}
    </>
  );
};
