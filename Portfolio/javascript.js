
function sendEmail() {
    
    Email.send({
        Host : "smtp.gmail.com",
        Username : "fidaurr900@gmail.com",
        Password : "Faryad7866",
        To : 'fidaurr900@gmail.com',
        From : document.getElementById("exampleInputEmail1").value,
        Subject : "New Contact From message",
        Body : "Email : " + document.getElementById("exampleInputEmail1").value  <br>
        + "Message: " + document.getElementById("floatingTextarea2").value
    }).then(
         message => alert(message)
    );
}


