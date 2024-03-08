// JavaScript Document
function sendEmail(toEmail) {
  return new Promise(function(resolve) {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const description = document.getElementById('description').value;

    setTimeout(function() {
      const mailtoUrl = `mailto:${toEmail}?subject=Message from My Pages&body=Name: ${name}%0AEmail: ${email}%0ADescription: ${description}`;

      const link = document.createElement('a');
      link.href = mailtoUrl;
      link.click();

      resolve();
    }, 0);
  });
}