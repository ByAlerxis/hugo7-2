var api = new apiSchema();

$("#btnRegistrar").click(function () {
  registrar();
});

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function registrar() {
  let email = $("#email").val();
  let password = $("#password").val();
  let name = $("#name").val();

  if (email === "" || password === "" || name === "") {
    Toast.fire({
      icon: "error",
      title: "No se permite campos vacios!",
    });
  } else {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        let uid = user.uid;

        fetch(api.users, {
          method: "POST",
          body: JSON.stringify({
            UID: uid,
            US_name: name,
            US_email: email
          }),
          headers: {
            "Content-type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {})
          .catch((err) => {});

        Toast.fire({
          icon: "success",
          title: "Usuario creado!",
        });

        window.setTimeout(function () {
          window.location = "?view=login";
        }, 3000);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        Toast.fire({
          icon: "error",
          title: errorCode + " - " + errorMessage,
        });
      });
  }
}
