<template>
  <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="width:280px; height:745px">
    <div class="d-flex justify-content-center">
      <a href="/" class="mb-3 mb-md-0 me-md-auto text-white text-decoration-none" style="padding:10px; margin-left:33px">
        <span class="fs-4">Party</span>
        <font-awesome-icon :icon="['fa', 'glass-cheers']" style="margin-right:5px; margin-left:5px; font-size:25px" />
        <span class="fs-4">Maker</span>
      </a>
    </div>
    
    <hr style="background-color:white">

    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <a href="#" class="nav-link active">
          <font-awesome-icon :icon="['fa', 'home']" style="margin-right:10px" />
          Home
        </a>
      </li>

      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon :icon="['fa', 'calendar-alt']" style="margin-right:10px" />
          Agenda
        </a>
      </li>

      <hr>

      <li>
        <a href="#" class="nav-link text-white">
          <font-awesome-icon :icon="['fa', 'user']" style="margin-right:10px" />
          Usuario
        </a>
      </li>
    </ul>

    <hr>

    <div>
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <a href="#" class="nav-link active" style="background-color: #BD4DF2">
            <font-awesome-icon :icon="['fa', 'sign-out-alt']" style="margin-right:10px" />
            Cerrar Sesión
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "Sidebar",
    }
</script>
