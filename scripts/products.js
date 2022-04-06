var api = new apiSchema();

$("#add").click(function () {
  addProduct();
});
time = 1500;
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: time,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

function addProduct() {
  var name = $("#name").val();
  var desc = $("#desc").val();
  var price = $("#price").val();
  var code = $("#code").val();

  if (name === "" || desc === "" || price === "" || code === "") {
    Toast.fire({
      icon: "error",
      title: "No se permite campos vacios!",
    });
  } else {
    fetch(api.products+"/post", {
      method: "POST",
      body: JSON.stringify({
        PD_name: name,
        PD_descrip: desc,
        PD_price: price,
        PD_code: code,
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
      title: "Producto creado!",
    });
    window.setTimeout(function () {
      window.location = "?view=tabla";
    }, time);
  }
}
