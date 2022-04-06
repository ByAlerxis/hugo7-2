$("#btnLogin").click(function () {
  login();
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

function login() {
  let email = $("#email").val();
  let password = $("#password").val();

  if (email === "" || password === "") {
    Toast.fire({
      icon: "error",
      title: "No se permite campos vacios!",
    });
  } else {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        var user = userCredential.user;
        
        window.location = "?view=home";
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        M.toast({ html: errorCode + " - " + errorMessage });
      });
  }
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
   
    window.location = "?view=home";
   
  } else {
  }
});
