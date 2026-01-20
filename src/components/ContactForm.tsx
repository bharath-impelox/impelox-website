import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const ContactForm: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    Name_First: '',
    Name_Last: '',
    Email: '',
    SingleLine: '',
    MultiLine: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (_e: React.FormEvent<HTMLFormElement>) => {
    // Form will submit directly to Zoho
    // The form action and method handle the submission
    setIsSubmitting(true);
    
    // Reset form after a short delay (form submits in new tab)
    setTimeout(() => {
      setFormData({
        Name_First: '',
        Name_Last: '',
        Email: '',
        SingleLine: '',
        MultiLine: '',
      });
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 500);
  };

  return (
    <section className="bg-white py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-12">
          {t('aboutPage.contactForm.title')}
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-100 rounded-xl p-8 shadow-sm">
            <form 
              onSubmit={handleSubmit}
              action="https://forms.zohopublic.in/impeloxtechprivatelimited1/form/ContactUs/formperma/gLXzm3558O5-6BZWsuJoZ1OnJ3cJ5BBdaFLJLpIsaJI/htmlRecords/submit"
              method="POST"
              acceptCharset="UTF-8"
              encType="multipart/form-data"
              target="_blank"
              className="space-y-6"
            >
              {/* Hidden Zoho fields */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="Name_First" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('aboutPage.contactForm.firstName')}<span className="text-[#1B44FE]">*</span>
                  </label>
                  <input
                    type="text"
                    id="Name_First"
                    name="Name_First"
                    value={formData.Name_First}
                    onChange={handleChange}
                    maxLength={255}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#1B44FE] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="Name_Last" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('aboutPage.contactForm.lastName')}
                  </label>
                  <input
                    type="text"
                    id="Name_Last"
                    name="Name_Last"
                    value={formData.Name_Last}
                    onChange={handleChange}
                    maxLength={255}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#1B44FE] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="Email" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('aboutPage.contactForm.email')}<span className="text-[#1B44FE]">*</span>
                </label>
                <input
                  type="email"
                  id="Email"
                  name="Email"
                  value={formData.Email}
                  onChange={handleChange}
                  maxLength={255}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#1B44FE] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="SingleLine" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('aboutPage.contactForm.subject')}
                </label>
                <input
                  type="text"
                  id="SingleLine"
                  name="SingleLine"
                  value={formData.SingleLine}
                  onChange={handleChange}
                  maxLength={255}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#1B44FE] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="MultiLine" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('aboutPage.contactForm.message')}<span className="text-[#1B44FE]">*</span>
                </label>
                <textarea
                  id="MultiLine"
                  name="MultiLine"
                  value={formData.MultiLine}
                  onChange={handleChange}
                  rows={6}
                  maxLength={65535}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-[#1B44FE] focus:border-transparent"
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  {t('aboutPage.contactForm.successMessage') || 'Thank you! Your message has been sent successfully.'}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  {t('aboutPage.contactForm.errorMessage') || 'Something went wrong. Please try again.'}
                </div>
              )}

              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="text-white px-8 py-3 rounded-lg hover:opacity-90 transition-opacity font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                  style={{
                    background: 'radial-gradient(88% 75% at 50% 50%, #1B44FE 37.45%, #5375FE 100%)'
                  }}
                >
                  {isSubmitting 
                    ? (t('aboutPage.contactForm.sending') || 'Sending...') 
                    : `${t('aboutPage.contactForm.sendMessage')} →`}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;

