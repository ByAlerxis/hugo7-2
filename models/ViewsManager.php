<?php

/**
*
*/
class ViewsManager
{

  private $head;
  private $fileName;

  function __construct()
  {
    $this->head = new Head();
  }

  function setFileName($fileName) {

    $this->fileName = $fileName;
    if($fileName == "login.php" || $fileName == 'signup.php') {
      $this->generateBody();
    } else if($fileName == "home.php" || $fileName == 'products.php' || $fileName == 'tabla.php'){
      $this->generateAdminBody();
    }

  }

  function generateBody(){
    echo '<body style="background: linear-gradient(#212121, #212121);
    width: 100vw;
    height: 100vh;">';
    echo '<div class="container">';
    echo '<div class="row">';
    echo '<div id="main_container" class="col s12">';
    include './views/' . $this->fileName;
    echo '</div>';
    echo '</div>';
    echo '</div>';
    echo '<script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>';
    echo '</body>';
    echo '</html>';
  }

  function generateAdminBody() {
    echo '<body  class="card-footer">';
    echo '<header>';
    include './views/navbar.php';
    echo '</header>';
    echo '<main>';
    echo '<div class="container">';
    echo '<div id="main_container" class="col s12">';
    include './views/' . $this->fileName;
    echo '</div>';
    echo '</div>';
    echo '</main>';
    include './views/footer.php';
    echo '</body>';
    echo '</html>';
  }

  # 2. Crear método con nombre loadNombreDeVista
    // Asignar el título del encabezado
    // Asignar el nombre de la vista

  function loadLogin(){
    $this->head->setTitle("Inicio de sesión");
    $this->setFileName("login.php");
  }

  function loadHome(){
    $this->head->setTitle("Dashboard");
    $this->setFileName("home.php");
  }

  function loadSignup(){
    $this->head->setTitle('Registro');
    $this->setFileName('signup.php');
  }

  function loadProducts(){
    $this->head->setTitle('Productos');
    $this->setFileName('products.php');
  }

  function loadTabla(){
    $this->head->setTitle('Tabla');
    $this->setFileName('tabla.php');
  }

}
?>
