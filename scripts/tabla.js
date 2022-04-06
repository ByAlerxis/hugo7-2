var api = new apiSchema();

fetch(api.products + "/getAll", {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => {
    if (data.length > 0) {
      $("#idBody").empty();
      data.forEach((doc) => {
        metodoAppend(doc);
      });
    }
  })
  .catch((err) => {});

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

function metodoAppend(doc) {
  $("#idBody").append(
    "<tr>" +
      "<td>" +
      doc.PD_ID +
      "</td>" +
      "<td>" +
      doc.PD_name +
      "</td>" +
      "<td><a onclick='dell(id=" +
      doc.PD_ID +
      ")' class='btn' id='del'>Eliminar</a></td>" +
      "</tr>"
  );
}

function dell(id) {
  fetch(api.products + "/delete/" + id, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      Toast.fire({
        icon: "success",
        title: "Producto eliminado!",
      });

      window.setTimeout(function () {
        window.location = "?view=tabla";
      }, time);
    })
    .catch((err) => {});
}
