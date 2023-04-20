{/* <script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
  const contactForm = document.getElementById('contact-form');
  const messageInput = document.getElementById('message-input');

  contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const message = messageInput.value;
    const fromEmail = 'michaelabrahamrequest@gmail.com'; // Change to your email address
    const toEmail = '20abrahamic@gmail.com'; // Change to your email address
    const username = '20abrahamic@gmail.com'; // Change to your Elastic Email username
    const password = 'Ma329516$'; // Change to your Elastic Email password

    Email.send({
      SecureToken: '91778601E2432EAF33BD481BA35300995FA3',
      Host : 'smtp.elasticemail.com',
      Username : "20abrahamic@gmail.com",
      Password : "Ma329516$",
      To : "20abrahamic@gmail.com",
      From : fromEmail,
      Subject : 'Job request from personal website',
      Body : message
    }).then(
      function(response) {
        alert('Message was sent successfully!');
        messageInput.value = '';
      },
      function(error) {
        alert('Message failed to send. Please try again later.');
      }
    );
  });
</script> */}



// 91778601E2432EAF33BD481BA35300995FA3
// smtp.elasticemail.com
// 2525