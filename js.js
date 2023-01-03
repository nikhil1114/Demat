function mail() {
    let a = document.getElementById("userName").value;
    let b = document.getElementById("contactDetail").value;
    let c = document.getElementById("gEmail").value;
    let d = document.getElementById("commentBox").value;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kajalsingh1000000@gmail.com",
        Password : "290FE5FEAADCCF8F9DF3FF3CB8B8D9B6316A",
        To : 'niksharma1209@gmail.com',
        From : "kajalsingh1000000@gmail.com",
        Subject : "This is the subject",
        Body : `${a}  ${b}  ${c} ${d}`
    }).then(
      message => alert(message)
    );
}

function closeForm() {
  document.getElementById("form").style.display = "none";
}

