<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comunicación visual y comercial
    
    
    
    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema1/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La comunicación permite compartir información y construir significados. En una empresa de moda, interviene en la presentación de una colección, la descripción de una prenda y la atención de las consultas del consumidor. Comprender este proceso ayuda a relacionar el mensaje, los recursos visuales y el propósito comercial.

      separador
      
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 1.1 Elementos del proceso comunicativo

      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema1/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un mensaje adquiere sentido cuando las personas pueden reconocerlo e interpretarlo dentro de un contexto. Para prepararlo, es necesario identificar quién comunica, a quién se dirige, qué información comparte y mediante qué recursos lo hace.


      .row.mb-5.justify-content-center.align-items-center
        .col-lg-12
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 1.
            span Elementos de la comunicación en una empresa de moda
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Elemento
                  th ¿En qué consiste?
                  th Ejemplo aplicado
              tbody
                tr
                  td Emisor
                  td Persona u organización que construye y transmite el mensaje.
                  td Una empresa de moda presenta una colección.
                tr
                  td Receptor
                  td Persona o grupo que recibe e interpreta la información.
                  td Consumidores interesados en prendas para actividades cotidianas.
                tr
                  td Mensaje
                  td Información que se desea compartir.
                  td Características, tallas y disponibilidad de una chaqueta.
                tr
                  td Referente
                  td Producto, situación o asunto al que se refiere el mensaje.
                  td La chaqueta presentada en la publicación.
                tr
                  td Código
                  td Signos utilizados para expresar la información.
                  td Palabras, fotografías, símbolos y convenciones compartidas.
                tr
                  td Canal
                  td Medio por el que circula el mensaje.
                  td Tienda virtual, correo electrónico o red social.
                tr
                  td Contexto
                  td Circunstancias que influyen en la interpretación.
                  td Consulta de productos desde un teléfono móvil antes de comprar.
                tr
                  td Retroalimentación
                  td Respuesta que permite conocer cómo se recibió el mensaje.
                  td Una pregunta sobre el ajuste o la disponibilidad de tallas.

      .container
        .row.align-items-center.bg-color-018.mb-5.p-3.br-15
          .col-lg-12
            p.mb-0 Durante el proceso pueden aparecer interferencias, como textos ilegibles, imágenes poco claras, enlaces que no funcionan o términos desconocidos. Reconocer estas dificultades permite ajustar la comunicación.


    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa publica la fotografía de una chaqueta e indica “ajuste amplio”, pero no presenta medidas. Las consultas sobre la talla muestran que el mensaje necesita información adicional. La empresa incorpora una guía de medidas y fotografías de la prenda puesta para facilitar su interpretación.

    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Lenguaje visual y construcción del mensaje


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img03.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 El lenguaje visual utiliza formas, imágenes, colores, texturas y relaciones espaciales para comunicar. Su organización orienta la atención y contribuye a que el público reconozca el producto y comprenda la información.
        p.mb-0 Una imagen puede interpretarse de manera espontánea, sin que exista una intención comunicativa planificada para ese receptor. En cambio, una pieza diseñada para presentar una colección responde a una intención definida, aunque su interpretación también depende de las experiencias y del contexto de quien la observa.

    TabsC.color-primario.mb-5
      .py-3.py-md-4.px-5(titulo="Forma")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-7.mb-4.mb-md-0
            p Permite reconocer contornos y distinguir elementos. La silueta de un bolso ayuda a identificar su estructura; un recuadro puede separar sus características del resto de la información.      
          .col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/img04.png', alt='')
      .py-3.py-md-4.px-5(titulo="Textura")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-7.mb-4.mb-md-0
            p Sugiere cualidades de una superficie, como relieve, suavidad o rugosidad. Una fotografía de detalle permite observar el tejido de una prenda, aunque no reemplaza la experiencia de tocarla.
          .col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/img05.png', alt='')
      .py-3.py-md-4.px-5(titulo="Estructura")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-7.mb-4.mb-md-0
            p Organiza las relaciones entre los elementos de una composición. En un catálogo, mantener posiciones consistentes para fotografías, nombres y precios facilita la consulta.
          .col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/img06.png', alt='')
      .py-3.py-md-4.px-5(titulo="Módulo")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-7.mb-4.mb-md-0
            p Es una unidad que puede repetirse dentro de una composición. Una tarjeta con fotografía, nombre y referencia del producto puede funcionar como módulo en un catálogo digital.
          .col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/img07.png', alt='')
      .py-3.py-md-4.px-5(titulo="Movimiento")
        .row.justify-content-center.align-items-center.mb-0
          .col-lg-7.mb-4.mb-md-0
            p Puede representarse mediante direcciones y secuencias o mostrarse en una animación o un video. En moda, permite observar la caída de una prenda durante el desplazamiento.
          .col-lg-5.col-md-10
            figure
              img(src='@/assets/curso/tema1/img08.png', alt='')
      

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema1/img09.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-06.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La presentación visual debe facilitar la lectura. El tamaño de los textos, la separación entre elementos y el contraste contribuyen a distinguir la información principal de los detalles. Estas relaciones se evidencian en el Manual de comunicación visual del Gobierno de Chile (2025), que ofrece ejemplos de organización de piezas impresas y digitales.
        p.mb-0 También es necesario acompañar las imágenes informativas con textos alternativos cuando el medio lo permita y evitar que el color sea el único recurso para comunicar una diferencia. Estas prácticas favorecen el acceso al contenido (López-Cuadrado et al., 2024).


    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa presenta una camisa con una fotografía general, un acercamiento del tejido y un texto breve sobre su composición. Identifica cada opción de color por su nombre y ofrece un enlace denominado “Consultar medidas de la camisa”. Así, combina recursos visuales y textuales para facilitar la elección.



    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Comunicación comercial en el Sistema Moda

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-10.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img10.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-018.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La comunicación comercial presenta una oferta y busca favorecer acciones como consultar información, visitar una tienda o adquirir un producto. Su preparación debe relacionar las necesidades del público con características verificables de la oferta.
        p.mb-0 Antes de diseñar una pieza, conviene definir el objetivo, el público, el mensaje principal, el canal y la acción esperada. Estas decisiones permiten seleccionar la información y evitar publicaciones recargadas o ambiguas.

    .row.mb-lg-4.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema1/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-016" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Fácil de compartir")
            p.mb-0 Presenta información útil que pueda circular entre personas. Una guía breve de cuidado puede compartirse para resolver una necesidad concreta.
          .tarjeta(titulo="Fácil de encontrar")
            p.mb-0 Utiliza nombres, títulos y descripciones relacionados con las búsquedas del público. “Bolso de mano con cierre” ofrece más información que una referencia numérica aislada.
          .tarjeta(titulo="Fácil de comprender")
            p.mb-0 Organiza el contenido en mensajes breves y relacionados. La fotografía, el título y la descripción deben contribuir a explicar la misma oferta.
          .tarjeta(titulo="Capaz de despertar interés")
            p.mb-0 Presenta el producto desde una perspectiva pertinente para el público. Mostrar cómo se transforma una prenda mediante distintas combinaciones puede resultar más útil que añadir efectos decorativos.

    p.mb-4 Estas cualidades se relacionan con las expresiones <em>shareable</em>, <em>searchable</em>, <em>snackable</em> y <em>surprising</em>. Funcionan como orientaciones para revisar contenidos; su pertinencia depende del objetivo y del contexto de comunicación.


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa desea que los consumidores consulten una nueva línea de bolsos. Publica una fotografía que muestra el producto abierto, destaca sus compartimentos e incorpora el mensaje: “Conozca las medidas y la distribución interior”.


    .row.mb-lg-3.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema1/img12.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-019.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 El enlace conduce a la ficha del bolso, donde se amplía la información sobre materiales, dimensiones y disponibilidad. La publicación despierta interés y la página de destino permite continuar la consulta con información consistente.
        p.mb-0 La comunicación visual y comercial integra propósito, información y recursos expresivos. Identificar sus elementos permite construir mensajes comprensibles, atender las respuestas del público y seleccionar contenidos pertinentes. Sobre esta base, los fundamentos del diseño ayudan a organizar las piezas gráficas y orientar su lectura.

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
