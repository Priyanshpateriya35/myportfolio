import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.min.css';
import './contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLocationArrow, faPhone } from '@fortawesome/free-solid-svg-icons';
const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();
  const [disabled, setDisabled] = useState(false);

  // Function that displays a success toast on bottom right of the page when form submission is successful
  const toastifySuccess = () => {
    toast.success('Your message sent successfully.', {
      position: 'bottom-right',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      className: 'submit-feedback success',
      toastId: 'notifyToast'
    });
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message
      };

      // Use emailjs to email contact form data
      
      await emailjs.send(
        'service_5ymwmbl',
        'template_vg7f7do',
         templateParams,
      
        "user_Ti1JKWEWPxLL1K1yfc4GF"
      );

      // Reset contact form fields after submission
      reset();
      // Display success toast
      toastifySuccess();
      // Re-enable form submission
      setDisabled(false);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <section className='section bg-light pt-3 pb-5 mb-0'>
      <h3 className='contact-text'>CONTACT US</h3>
      <div className='container my-4'>
        <div className='row'>
          <div className='Contact-Left-Details col-lg-4 bg-dark py-4'>
            <FontAwesomeIcon className='icon' icon={faLocationArrow}></FontAwesomeIcon><p  className='left-text'>Address</p>
            <p className='left-text'>67/6 Mayur Nagar Musakhedi Indore Madhya Pradesh India.</p>

            <FontAwesomeIcon className='icon' icon={faPhone}></FontAwesomeIcon><p  className='left-text'>Give us a ring</p>
            <p className='left-text'>Mob no. 9131588543, Mon-Fri 9AM to 6PM</p>

            <FontAwesomeIcon className='icon' icon={faEnvelope}></FontAwesomeIcon>
            <p className='left-text'>priyanshpateriya384@gmail.com.</p>

          </div>
          <div className='Contact-form col-lg-8 text-center bg-white'>
          <h3 className='contact-text'>Send us a message</h3>
            <div className='Right-Side-Form'>
              <form id='contact-form' onSubmit={handleSubmit(onSubmit)} noValidate>
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-lg-6 mt-4'>
                    <input
                      type='text'
                      name='name'
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name'
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Full Name'
                    ></input>
                    {errors.name && <span className='errorMessage'>{errors.name.message}</span>}
                  </div>
                  <div className='col-lg-6 mt-4'>
                    <input
                      type='email'
                      name='email'
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>Please enter a valid email address</span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col-12 mt-4'>
                    <input
                      type='text'
                      name='subject'
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject'
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters'
                        }
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>{errors.subject.message}</span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col-12 mt-4 mb-3'>
                    <textarea
                      rows={3}
                      name='message'
                      {...register('message', {
                        required: true
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && <span className='errorMessage'>Please enter a message</span>}
                  </div>
                </div>

                <button className='submit-btn btn-contact mb-3' disabled={disabled} type='submit'>
                  Submit
                </button>
              </form>
            </div>
            <ToastContainer />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;