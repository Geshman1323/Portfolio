const submit = document.querySelector("#submit");
const Name = document.querySelector("#Name");
const Email = document.querySelector("#Email");
const Msg = document.querySelector("#Message");
const Alert = document.querySelector('#Warning')

submit.addEventListener("click", (e) => {
  e.preventDefault();

  let DataObj = {
    from_name: Name.value,
    email: Email.value,
    message: Msg.value,
  };

  if (Name.value == "" || Email.value == "" || Msg.value == "")
  {
    let alertMsg = document.createTextNode("Please complete the form before Submit");
    Alert.appendChild(alertMsg);
    let alertSty = Alert.getElementsByClassName;
    alertSty.color = "red";
  }
  else {
    Alert.removeChild();
    emailjs
    .send("My-Portfolio-Contact", "template_14b9zgp", DataObj)
    .then((res) => {
      Msg.value = "";
      Name.value = "";
      Email.value = "";
      console.log(res);
    })
    .catch((err) => {
      console.log(`${err}, We are sorry for This error`);
    });
  }
});
