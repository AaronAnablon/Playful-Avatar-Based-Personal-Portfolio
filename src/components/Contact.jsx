import { forwardRef, useState } from 'react';

function Contact({ title }, ref) {
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
      setLoading(false);
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    } else {
      console.log(response);
      setLoading(false);
    }
  }
  return (
    <div ref={ref}>
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h2>{title}</h2>
        <form onSubmit={handleSubmit} className='bg-slate-400 lg:w-2/5 md:w-8/12 w-10/12 w- h-max my-10 rounded-md p-10'>
          <div className="w-full flex flex-col md:my-4">
            <label className="font-bold text-gray-800" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              minLength={3}
              maxLength={150}
              required
              className=" p-4 border rounded-md text-slate-700 border-gray-100 "
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
              className=" p-4 border rounded-md text-slate-700 border-gray-100 "
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
              className="w-full p-4 border rounded-md text-slate-700 border-gray-100 "
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-4 py-2 w-40 bg-gray-700 rounded-md disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default forwardRef(Contact);

