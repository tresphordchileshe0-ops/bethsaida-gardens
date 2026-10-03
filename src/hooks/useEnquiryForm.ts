import { FormEvent, useState } from 'react';
import { format, parseISO } from 'date-fns';
import { site } from '../data/site';
import { whatsappLink } from '../utils/contact';

export interface EnquiryValues {
  name: string;
  phone: string;
  eventType: string;
  date: string;
  guests: string;
  message: string;
}

export type EnquiryErrors = Partial<Record<keyof EnquiryValues, string>>;

const fieldOrder: (keyof EnquiryValues)[] = ['name', 'phone', 'eventType', 'date', 'guests', 'message'];

export function useEnquiryForm(initialEventType = '') {
  const today = format(new Date(), 'yyyy-MM-dd');
  const [values, setValues] = useState<EnquiryValues>({
    name: '',
    phone: '',
    eventType: initialEventType,
    date: '',
    guests: '',
    message: ''
  });
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [sentUrl, setSentUrl] = useState<string | null>(null);

  const update = (field: keyof EnquiryValues, value: string) => {
    setValues((v) => ({ ...v, [field]: value }));
    if (errors[field]) setErrors((e) => ({ ...e, [field]: undefined }));
  };

  const validate = (): EnquiryErrors => {
    const e: EnquiryErrors = {};
    if (!values.name.trim()) e.name = 'Please enter your name.';
    const digits = values.phone.replace(/\D/g, '');
    if (!digits) e.phone = 'Please enter a phone or WhatsApp number.';else
    if (digits.length < 9) e.phone = 'Please check the number — it looks too short.';
    if (!values.eventType) e.eventType = 'Please choose an event type.';
    if (values.date && values.date < today) e.date = 'Please choose a date in the future.';
    if (values.guests && (!/^\d+$/.test(values.guests) || Number(values.guests) < 1))
    e.guests = 'Please enter a whole number of guests.';
    return e;
  };

  const buildMessage = () => {
    const lines = [
    `Hello ${site.name}, I'd like to enquire about a booking.`,
    '',
    `Name: ${values.name.trim()}`,
    `Phone/WhatsApp: ${values.phone.trim()}`,
    `Event type: ${values.eventType}`,
    values.date ? `Preferred date: ${format(parseISO(values.date), 'EEEE d MMMM yyyy')}` : 'Preferred date: Flexible',
    values.guests ? `Number of guests: ${values.guests}` : 'Number of guests: Not sure yet'];

    if (values.message.trim()) lines.push('', values.message.trim());
    return lines.join('\n');
  };

  const submit = (ev: FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    const first = fieldOrder.find((f) => e[f]);
    if (first) {
      document.getElementById(`enquiry-${first}`)?.focus();
      return;
    }
    const url = whatsappLink(buildMessage());
    window.open(url, '_blank', 'noopener,noreferrer');
    setSentUrl(url);
  };

  const reset = () => {
    setValues({ name: '', phone: '', eventType: '', date: '', guests: '', message: '' });
    setErrors({});
    setSentUrl(null);
  };

  return { values, errors, update, submit, reset, sentUrl, today };
}