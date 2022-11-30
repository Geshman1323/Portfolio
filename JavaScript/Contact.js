const submit = document.querySelector("#submit");

submit.addEventListener("click", () => {
  const Msg = document.querySelector("#Message").value;
  const Name = document.querySelector("#Name").value;
  const Email = document.querySelector("#Email").value;

  let DataObj = {
    from_name: Name,
    email: Email,
    message: Msg,
  };

  emailjs
    .send("My-Portfolio-Contact", "template_14b9zgp", DataObj)
    .then((res) => {
      console.log(res);
      Msg = " ";
      Name = " ";
      Email = " ";
    })
    .catch((err) => {
      console.log(`${err}, We are sorry for This error`);
    });
});
