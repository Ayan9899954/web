// Initialize EmailJS with your public key
emailjs.init('Fdl3uP5kNqufz_yjt'); // Replace with your actual public key

const sendBtn = document.getElementById('send-btn');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

sendBtn.addEventListener('click', () => {
  const name = nameInput.value;
  const email = emailInput.value;
  const message = messageInput.value;

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert('Please enter a valid email address.');
    return;
  }

  // Construct the email body
  const emailBody = `
    Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  // Send email using EmailJS
  emailjs.send('service_n7iebwc', 'template_qiou1e5', {
    from_name: name,
    from_email: email,
    message: emailBody
  })
  .then(() => {
    alert('Email sent successfully!');
    document.getElementById('contact-form'); 

// Optionally clear the email input
emailInput.value = '';
nameInput .value = '';
messageInput.value = '';


  })
   


   

  .catch((error) => {
    console.error('Error sending email:', error);
    alert('Message could not be sent. Please try again later.');
  });
});