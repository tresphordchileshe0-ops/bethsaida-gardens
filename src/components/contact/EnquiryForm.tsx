import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CheckIcon, MessageCircleIcon, ChevronDownIcon } from 'lucide-react';
import { eventCategories } from '../../data/events';
import { useEnquiryForm, EnquiryValues } from '../../hooks/useEnquiryForm';

interface EnquiryFormProps {
  initialEventType?: string;
}

const inputBase =
'mt-2 block w-full rounded-md border bg-surface px-4 py-3 text-[16px] text-ink placeholder:text-muted/70 transition-colors duration-150 ease-out focus:border-moss focus:outline-none focus:ring-2 focus:ring-moss/20';

export function EnquiryForm({ initialEventType = '' }: EnquiryFormProps) {
  const { values, errors, update, submit, reset, sentUrl, today } = useEnquiryForm(initialEventType);

  const field = (name: keyof EnquiryValues) => ({
    id: `enquiry-${name}`,
    name,
    value: values[name],
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `enquiry-${name}-error` : undefined,
    className: `${inputBase} ${errors[name] ? 'border-claydeep' : 'border-line'}`
  });

  const errorText = (name: keyof EnquiryValues) =>
  errors[name] ?
  <p id={`enquiry-${name}-error`} className="mt-1.5 text-sm text-claydeep">
        {errors[name]}
      </p> :
  null;

  return (
    <div className="rounded-lg border border-line bg-surface p-6 md:p-10">
      <AnimatePresence mode="wait" initial={false}>
        {sentUrl ?
        <motion.div
          key="sent"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="py-6"
          role="status">
          
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-moss text-surface">
              <CheckIcon className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h3 className="mt-6 font-display text-3xl text-ink">Your enquiry is ready to send</h3>
            <p className="mt-3 max-w-md leading-relaxed text-muted">
              We’ve opened WhatsApp with your details filled in. Just press send and we’ll get back to you about
              availability.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
              href={sentUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-moss px-6 py-3.5 font-medium text-surface transition-colors duration-150 ease-out hover:bg-mossdeep">
              
                <MessageCircleIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
                Open WhatsApp again
              </a>
              <button
              type="button"
              onClick={reset}
              className="inline-flex items-center justify-center rounded-full border border-ink/25 px-6 py-3.5 font-medium text-ink transition-colors duration-150 ease-out hover:border-ink">
              
                Start a new enquiry
              </button>
            </div>
          </motion.div> :

        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18, ease: [0.23, 1, 0.32, 1] }}
          onSubmit={submit}
          noValidate
          aria-labelledby="enquiry-title">
          
            <h2 id="enquiry-title" className="font-display text-3xl text-ink md:text-4xl">
              Booking enquiry
            </h2>
            <p className="mt-2 text-muted">Share a few details and we’ll confirm availability.</p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="enquiry-name" className="text-sm font-medium text-ink">
                  Full name
                </label>
                <input {...field('name')} type="text" autoComplete="name" onChange={(e) => update('name', e.target.value)} />
                {errorText('name')}
              </div>
              <div>
                <label htmlFor="enquiry-phone" className="text-sm font-medium text-ink">
                  Phone / WhatsApp
                </label>
                <input
                {...field('phone')}
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                placeholder="+260"
                onChange={(e) => update('phone', e.target.value)} />
              
                {errorText('phone')}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="enquiry-eventType" className="text-sm font-medium text-ink">
                  Event type
                </label>
                <div className="relative">
                  <select
                  {...field('eventType')}
                  onChange={(e) => update('eventType', e.target.value)}
                  className={`${field('eventType').className} appearance-none pr-10`}>
                  
                    <option value="">Choose an event type</option>
                    {eventCategories.map((ev) =>
                  <option key={ev.slug} value={ev.title}>
                        {ev.title}
                      </option>
                  )}
                  </select>
                  <ChevronDownIcon
                  className="pointer-events-none absolute right-4 top-1/2 mt-1 h-4 w-4 -translate-y-1/2 text-muted"
                  strokeWidth={1.75}
                  aria-hidden="true" />
                
                </div>
                {errorText('eventType')}
              </div>
              <div>
                <label htmlFor="enquiry-date" className="text-sm font-medium text-ink">
                  Preferred date <span className="font-normal text-muted">(optional)</span>
                </label>
                <input {...field('date')} type="date" min={today} onChange={(e) => update('date', e.target.value)} />
                {errorText('date')}
              </div>
              <div>
                <label htmlFor="enquiry-guests" className="text-sm font-medium text-ink">
                  Number of guests <span className="font-normal text-muted">(approx.)</span>
                </label>
                <input
                {...field('guests')}
                type="number"
                inputMode="numeric"
                min={1}
                onChange={(e) => update('guests', e.target.value)} />
              
                {errorText('guests')}
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="enquiry-message" className="text-sm font-medium text-ink">
                  Message <span className="font-normal text-muted">(optional)</span>
                </label>
                <textarea
                {...field('message')}
                rows={4}
                placeholder="Tell us about your plans"
                onChange={(e) => update('message', e.target.value)} />
              
              </div>
            </div>

            <button
            type="submit"
            className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-clay px-6 py-4 text-[15px] font-medium text-surface transition-colors duration-150 ease-out hover:bg-claydeep active:scale-[0.99] sm:w-auto">
            
              <MessageCircleIcon className="h-[18px] w-[18px]" strokeWidth={1.5} aria-hidden="true" />
              Send enquiry via WhatsApp
            </button>
            <p className="mt-3 text-sm text-muted">Your details open in WhatsApp so you can review before sending.</p>
          </motion.form>
        }
      </AnimatePresence>
    </div>);

}