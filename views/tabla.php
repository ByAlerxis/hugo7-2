<br><br><br><br>
<form class="form">
    <div class="cas">
        <input placeholder="Ingresa un limite" id="limite" value="0">
        <a id="btnLimite">Limite</a>
    </div>

    <div class="cas">
        <input placeholder="Ingrese un id" id="where" value="0">
        <a id="btnBuscar">Buscar</a>
    </div>

</form>
<table class="tabla">
    <thead>
        <tr>
            <th width="10%">ID</th>
            <th width="80%">Nombre</th>
            <th width="10%">Operacion</th>
        </tr>
    </thead>

    <tbody id="idBody">

    </tbody>
</table>

<div class="op">
    <a href="?view=products">Agregar producto</a>
</div>

<br><br><br><br>
<link rel="stylesheet" href="./res/css/tabla.css" />
<script type="text/javascript" src="./scripts/tabla.js?v1.0.0"></script>