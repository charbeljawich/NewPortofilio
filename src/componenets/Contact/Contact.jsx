import React, { useState } from 'react'

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "a411c93e-1035-467b-977b-a7b4720aa684");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <div className='relative flex items-center c-space section-spacing' id="Contact">
      <div className='flex flex-col items-center justify-center max-w-md mx-auto border border-white/10 rounded-2xl bg-primary p-5'>
        <div className='flex flex-col items-start w-full gap-5 mb-10'>
          <h2 className='text-heading'>Let's Talk</h2>
          <p className='font-normal text-neutral-400'>
            We’d love to hear from you! Whether you have questions, feedback, or just want to say hello, our team is always ready to help. Reach out to us via email, phone, or our social channels, and we’ll get back to you as quickly as possible. Your ideas and inquiries are important to us, and we can’t wait to connect!
          </p>
        </div>
        <form onSubmit={onSubmit} action="" className='w-full'>
          <div className='mb-5'>
            <label htmlFor='name' className='field-label'>Full Name</label>
            <input 
              id="name" 
              name="name" 
              type="text" 
              className='field-input field-input-focus' 
              placeholder='Your Name' 
              autoComplete='name' 
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='email' className='field-label'>Email</label>
            <input 
              id="email" 
              name="email" 
              type="email" 
              className='field-input field-input-focus' 
              placeholder='example@email.com' 
              autoComplete='email' 
              required
            />
          </div>
          <div className='mb-5'>
            <label htmlFor='message' className='field-label'>Message</label>
            <textarea 
              id="message" 
              name="message" 
              className='field-input field-input-focus' 
              placeholder='Share your thoughts...' 
              autoComplete='off' 
              rows="4" 
              required
            />
          </div>
          <button type="submit" className='w-full px-1 py-3 text-lg text-center rounded-md cursor-pointer bg-radial from-lavender to-royal'>
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact
