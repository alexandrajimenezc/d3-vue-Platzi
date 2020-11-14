<template>
  <div class="about-view mb-5">
    <div class="text-center">
      <h1 class="font-diablo my-5">Diablo 3 Buscador de perfiles</h1>

      <hr class="bg-info mb-5" />

      <p class="lead">
        Diablo III es un juego de rol de acción que define el género y que se
        desarrolla en Sanctuary, un mundo devastado por el eterno conflicto
        entre ángeles y demonios
      </p>
      <p class="lead">
        <span class="font-weight-bold">D3PF</span> te permite ingresar tu
        etiqueta de batalla para ver tu perfil, tus últimos héroes jugados, tus
        artículos, habilidades y más.
      </p>
    </div>

    <hr class="bg-info my-5" />

    <div class="mt-5">
      <h2 class="mb-4">Límite de la API</h2>
      <b-alert show variant="info">
        Los clientes que superen estos límites pueden experimentar un servicio
        más lento o un error de respuesta. Consulte la Guía de inicio para
        obtener más detalles.
        <br /><br />
        Clients exceeding these limits may experience slower service or a
        response error. See the
        <a
          href="https://develop.battle.net/documentation/guides/getting-started"
          >Getting Started Guide</a
        >
        for more details.
      </b-alert>

      <dl class="row mt-5 text-center text-sm-left">
        <div class="col-sm-6 mb-3">
          <dt>36,000 requests por hora</dt>
          <dd>Largo Plazo</dd>
        </div>

        <div class="col-sm-6">
          <dt>100 requests por segundo</dt>
          <dd>Corto Plazo</dd>
        </div>
      </dl>
    </div>

    <div class="my-5">
      <h2>Empezando</h2>

      <p>Antes de que pueda comenzar a utilizar las API de Blizzard, debe:</p>

      <ol>
        <li>Inicie sesión o cree una nueva cuenta de Battle.net.</li>
        <li>Cree un cliente a través de la opción de menú Acceso a API.</li>
      </ol>

      <p class="text-break">
        Puede leer más :
        <a
          href="https://develop.battle.net/documentation/guides/getting-started"
          >https://develop.battle.net/documentation/guides/getting-started</a
        >
      </p>
    </div>

    <hr />
  </div>
</template>

<script>
export default {
  name: 'AboutView'
}
</script>
