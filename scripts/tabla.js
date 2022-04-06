var api = new apiSchema();

var limite = $("#limite").val();

if (limite == 0) {
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
}

$("#btnLimite").click(function () {
  validar();
});
function validar() {
  var limite = $("#limite").val();
  if (limite == 0) {
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
  } else {
    var limite = $("#limite").val();
    fetch(api.products + "/getLimite/" + limite, {
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
  }
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
      window.setTimeout(function () {
        window.location = "?view=tabla";
      }, 500);
    })
    .catch((err) => {});
}


var where = $("#where").val();

if (where == 0) {
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
}

$("#btnBuscar").click(function () {
  validarId();
});
function validarId() {
  var where = $("#where").val();
  if (where == 0) {
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
  } else {
    var where = $("#where").val();
    fetch(api.products + "/getId/" + where, {
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
  }
}