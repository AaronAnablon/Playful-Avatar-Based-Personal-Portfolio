import { forwardRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsFacebook, BsLinkedin, BsEnvelopeAtFill, BsGithub } from 'react-icons/bs';

function Contact({ title, setStatusText }, ref) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {

    event.preventDefault();
    setLoading(true);

    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };
    const response = await fetch("/api/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      console.log('Sent Successfully')
      setStatusText(true)
      setLoading(false);
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    } else {
      console.log(response);
      setLoading(false);
    }
  }
  const handleSendEmail = () => {
    const recipientEmail = 'aaronanablon6@gmail.com';
    const subject = 'Hi Aaron! Can we schedule a meeting?';
    const encodedSubject = encodeURIComponent(subject);
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodedSubject}`;
    window.open(mailtoLink, '_blank');
  };
  return (
    <div className='h-screen z-0' ref={ref}>
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ delay: 1, type: 'spring' }}
        className='text-4xl ml-10 flex justify-start'>{title} ---
      </motion.h2>
     
      <div className='relative'>
      <div className='flex flex-col h-screen justify-center'>
          <div className='flex flex-col bg-slate-900 text-white p-0 md:p-10 gap-2 justify-start'>
            <button className='flex items-center gap-3' onClick={handleSendEmail}>
              <BsEnvelopeAtFill size={28} />
              <div className='lg:block hidden'> aaronanablon6@gmail.com</div>
            </button>
            <Link className='flex items-center gap-3' href='https://github.com/AaronAnablon' target='_blank'>
              <BsGithub size={28} /> <div className='lg:block hidden'> https://github.com/AaronAnablon</div></Link>
            <Link className='flex items-center gap-3' href='https://www.facebook.com/techibot' target='_blank'>
              <BsFacebook size={28} />
              <div className='lg:block hidden'> https://www.facebook.com/techibot</div>
            </Link>
            <Link className='flex items-center gap-3' href='https://www.linkedin.com/in/aaronpanablon' target='_blank'>
              <BsLinkedin size={28} />
              <div className='lg:block hidden'> https://www.linkedin.com/in/aaronpanablon</div>
            </Link>
          </div>
        </div>
        <div className="absolute top-4 sm:right-10 right-0 lg:right-44">
          <form onSubmit={handleSubmit} className='bg-slate-400 h-max my-10 p-6'>
            <div className="w-full flex flex-col md:my-4">
              <label className="font-bold text-gray-800" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                minLength={3}
                maxLength={150}
                required
                className=" p-4 border text-slate-700 border-gray-100 "
                autoComplete="off"
                id="name"
              />
            </div>
            <div className="w-full flex flex-col my-4">
              <label className="font-bold text-gray-800" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                minLength={5}
                maxLength={150}
                required
                className=" p-4 border text-slate-700 border-gray-100 "
                autoComplete="off"
                id="email"
              />
            </div>
            <div>
              <label className="font-bold text-gray-800" htmlFor="message">
                Message
              </label>
              <textarea
                rows={4}
                required
                minLength={10}
                maxLength={500}
                name="message"
                className="w-full p-4 border text-slate-700 border-gray-100 "
              />
            </div>
            <motion.button
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{ duration: 2, delay: 1 }}
              type="submit"
              disabled={loading}
              className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4">
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default forwardRef(Contact);

