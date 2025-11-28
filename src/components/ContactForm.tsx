import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import '../styles/AcademyStyles/ContactForm.css';

interface FormData {
  nombre: string;
  email: string;
  asunto: string;
  mensaje: string;
}

interface ContactFormProps {
  onSubmit?: (formData: FormData) => Promise<void>;
  successMessage?: string;
  errorMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({
  onSubmit,
  successMessage = 'Mensaje enviado correctamente!',
  errorMessage = 'Hubo un error al enviar el mensaje',
}) => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    asunto: '',
    mensaje: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.nombre.trim() !== '' &&
      emailRegex.test(formData.email) &&
      formData.asunto.trim() !== '' &&
      formData.mensaje.trim() !== ''
    );
  };

  const handleSubmit = async () => {
    setTouched({
      nombre: true,
      email: true,
      asunto: true,
      mensaje: true,
    });

    if (!validateForm()) {
      setStatus('error');
      return;
    }

    setStatus('loading');

    try {
      if (onSubmit) {
        await onSubmit(formData);
      }
      setStatus('success');
      setFormData({ nombre: '', email: '', asunto: '', mensaje: '' });
      setTouched({});

      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  const isFieldInvalid = (field: string) => {
    if (!touched[field]) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (field === 'email') return !emailRegex.test(formData.email);
    return formData[field as keyof FormData].trim() === '';
  };

  return (
    <div className="contact-form-container">
      <div className="contact-form">
        <div className="form-group">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            id="nombre"
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu nombre completo"
            className={`form-input ${isFieldInvalid('nombre') ? 'invalid' : ''}`}
            disabled={status === 'loading'}
          />
          {isFieldInvalid('nombre') && (
            <span className="form-error">El nombre es requerido</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="tu@email.com"
            className={`form-input ${isFieldInvalid('email') ? 'invalid' : ''}`}
            disabled={status === 'loading'}
          />
          {isFieldInvalid('email') && (
            <span className="form-error">Email inválido</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="asunto" className="form-label">Asunto</label>
          <input
            id="asunto"
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Asunto de tu mensaje"
            className={`form-input ${isFieldInvalid('asunto') ? 'invalid' : ''}`}
            disabled={status === 'loading'}
          />
          {isFieldInvalid('asunto') && (
            <span className="form-error">El asunto es requerido</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="mensaje" className="form-label">Mensaje</label>
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Tu mensaje aquí..."
            rows={5}
            className={`form-input form-textarea ${isFieldInvalid('mensaje') ? 'invalid' : ''}`}
            disabled={status === 'loading'}
          ></textarea>
          {isFieldInvalid('mensaje') && (
            <span className="form-error">El mensaje es requerido</span>
          )}
        </div>

        {status === 'success' && (
          <div className="form-message success">
            <CheckCircle size={20} />
            <span>{successMessage}</span>
          </div>
        )}

        {status === 'error' && (
          <div className="form-message error">
            <AlertCircle size={20} />
            <span>{errorMessage}</span>
          </div>
        )}

        <button
          className="form-button"
          onClick={handleSubmit}
          disabled={status === 'loading'}
        >
          {status === 'loading' ? (
            <>
              <span className="spinner"></span>
              Enviando...
            </>
          ) : (
            <>
              <Send size={18} />
              Enviar Mensaje
            </>
          )}
        </button>
      </div>
    </div>
  );
};