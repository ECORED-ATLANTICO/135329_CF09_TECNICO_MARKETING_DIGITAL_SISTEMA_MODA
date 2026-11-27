<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Fundamentos de producción audiovisual



    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema4/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La producción audiovisual organiza imágenes en movimiento, sonidos y textos para comunicar una idea. En el Sistema Moda, permite presentar colecciones, mostrar el comportamiento de una prenda y explicar características o procesos que requieren una secuencia.

      .container
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12.bg-color-c1.p-3.br-15
            p.mb-0 Su desarrollo integra planeación, grabación, edición y revisión. Cada decisión debe responder al propósito del contenido, las necesidades del público y las condiciones del medio donde se publicará.

      separador
      
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 4.1 Evolución del lenguaje audiovisual



      .row.justify-content-center.mb-5
        .col-lg-12.mb-lg-0
          .container
            .row.align-items-center.bg-color-c1.br-15.mb-0
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema4/img02.png", alt="", style="max-width: 100px").mx-auto
              .col-lg.order-1.p-4
                p.mb-0 El lenguaje audiovisual se ha desarrollado mediante cambios tecnológicos y nuevas formas de narrar. El cine, la televisión y los medios digitales aportan recursos que también se utilizan en contenidos comerciales de corta duración.



      .row.justify-content-center.align-items-center.mb-5
        .col-lg-3.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema4/img03.png", data-aos="zoom-in", alt="")
        .col-lg-9.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
          LineaTiempoD.color-primario
            .row(numero="1" titulo="Finales del siglo XIX: imágenes en movimiento")
              .col-12
                p.mb-0 El cinematógrafo de los hermanos Lumière fue uno de los hitos de 1895. Las primeras exhibiciones permitieron observar acciones registradas y compartir su proyección con una audiencia.
            .row(numero="2" titulo="Primeras décadas del siglo XX: construcción de relatos")
              .col-12
                p.mb-0 El montaje, la combinación de planos y los efectos ampliaron las posibilidades narrativas. Creadores como Georges Méliès exploraron la ficción y la representación de situaciones imaginarias.
            .row(numero="3" titulo="Siglo XX: sonido, televisión y video")
              .col-12
                p.mb-0 El sonido sincronizado amplió las posibilidades expresivas del cine. La televisión y la grabación en video extendieron la producción y circulación de información, entretenimiento y publicidad.
            .row(numero="4" titulo="Finales del siglo XX y siglo XXI: producción digital")
              .col-12
                p.mb-0 La edición informática, internet y los dispositivos móviles facilitaron nuevos procesos de creación y distribución. Conviven contenidos bajo demanda, transmisiones en directo, animaciones y experiencias interactivas.


    .tarjeta.bg-color-04.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1.p-0
          img(src="@/assets/curso/tema4/img04.png", alt="", style="max-width: 130px")
        .col
          .row.justify-content-between.align-items-center.p-3
            .col.mb-3.mb-sm-0
              h4.mb-1 Lectura sugerida. 130 años del cine
              p.mb-0 Para ampliar los conocimientos los antecedentes del cine, se invita a consultar 130 años de cine, un recurso breve de RTVE sobre las primeras imágenes de los hermanos Lumière.
            .col-sm-auto
              a.boton.color-acento-botones.text-dark(:href="'https://www.rtve.es/play/videos/telediario-fin-de-semana/130-anos-cine/16503013/'" target="_blank")
                span Ir al recurso
                // i.fas.fa-file-download

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa de moda presenta una colección mediante una secuencia que combina una vista completa de la prenda, un acercamiento al tejido y una toma de su movimiento. La relación entre planos permite comunicar información que una fotografía aislada no mostraría del mismo modo.


    separador
    
    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.2 Preproducción, producción y posproducción


    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img05.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Un contenido audiovisual requiere organizar tareas antes, durante y después de la grabación. Estas fases permiten coordinar personas, recursos y decisiones, incluso cuando se trabaja con un teléfono móvil y un equipo pequeño.


    .row.justify-content-center.cursor-pointer.mb-lg-4.mb-xl-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(@mouseover="mostrarIndicador = false")
          .indicador--hover(v-if="mostrarIndicador")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img06.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Preproducción: preparar
            p.mb-3 Se definen objetivo, público, mensaje, duración aproximada y medio de publicación. Se organizan participantes, productos, espacios, equipos y tiempos.
            p.mb-0 El guion literario desarrolla acciones y textos; el guion técnico precisa planos, sonidos y otros aspectos de realización. Un <em>storyboard</em> puede representar visualmente la secuencia prevista.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img07.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Producción: registrar
            p.mb-3 Se capturan las imágenes y los sonidos según lo planeado. Se revisan encuadre, iluminación, enfoque y claridad de la voz.
            p.mb-0 La continuidad ayuda a mantener coherencia entre tomas: posición de los objetos, vestuario y acciones. Es conveniente comprobar el material antes de finalizar la grabación.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema4/img08.png", alt="")
          .crd_hover_txt--body
            h4.mb-3 Posproducción: construir y revisar
            p.mb-3 Se seleccionan y ordenan las tomas, se ajusta el sonido y se incorporan textos, gráficos y recursos de accesibilidad.
            p.mb-0 La revisión comprueba que el mensaje sea comprensible, represente correctamente el producto y cumpla las condiciones de publicación. Después se exporta la versión correspondiente.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0.text-center Estas fases articulan la preparación, la realización y la edición del contenido y la publicación, completa el proceso de difusión (Universidad Surcolombiana, 2024).

    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa prepara un video sobre una chaqueta con capucha removible. Antes de grabar, define qué mecanismo debe mostrar y organiza las tomas. Durante la producción, registra la prenda completa y la acción de retirar la capucha. En la edición, ordena la secuencia, añade una explicación breve y verifica que el procedimiento pueda comprenderse.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3 Tipos de producción audiovisual


    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema4/img09.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las producciones pueden distinguirse por su duración, propósito, estructura narrativa y forma de distribución. Estas categorías pueden combinarse: un documental puede ser un cortometraje y una serie puede difundirse por internet.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 6.
          span Producciones audiovisuales y aplicaciones en moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Tipo
                th Características
                th Aplicación posible
            tbody
              tr
                td.fw-bold Cortometraje
                td Obra de duración breve que desarrolla una propuesta narrativa o expresiva.
                td Relato sobre la relación de una persona con una prenda.
              tr
                td.fw-bold Largometraje
                td Obra de mayor duración, cuya clasificación depende del marco utilizado.
                td Desarrollo amplio de una historia relacionada con la moda.
              tr
                td.fw-bold Documental
                td Aborda hechos, personas o procesos mediante investigación y tratamiento narrativo.
                td Documentar la creación de una colección.
              tr
                td.fw-bold Serie de ficción
                td Desarrolla una historia mediante episodios relacionados.
                td Narración por capítulos vinculada con el universo de una marca.
              tr
                td.fw-bold Transmisión en directo
                td Difunde el contenido mientras ocurre, con posibilidades de interacción según el medio.
                td Presentación de una colección o conversación con el equipo de diseño.
              tr
                td.fw-bold Video comercial o demostrativo
                td Presenta una oferta o explica características y procedimientos.
                td Mostrar compartimentos de un bolso o el cuidado de una prenda.
              tr
                td.fw-bold Animación
                td Construye movimiento mediante imágenes, ilustraciones u objetos.
                td Explicar una característica mediante gráficos animados.

    

    .row.justify-content-center.mb-5
      .col-lg-12.mb-lg-0
        .container
          .row.align-items-center.bg-color-c1.br-15.mb-0
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img010.png", alt="", style="max-width: 100px").mx-auto
            .col-lg.order-1.p-4
              p.mb-0 El sector también desarrolla videojuegos y experiencias inmersivas, que combinan recursos audiovisuales e interacción. La selección del tipo de producción debe responder al objetivo y a los recursos disponibles (Servicio Público de Empleo Estatal, 2024).

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Para explicar cómo ajustar la correa de un bolso, una empresa elige un video demostrativo breve. Si busca documentar el trabajo de quienes elaboran una colección, puede desarrollar una pieza documental con entrevistas y registros del proceso.



    separador
    
    #t_4_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.4 Adaptación y accesibilidad de contenidos digitales


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0 La adaptación permite que una pieza funcione en diferentes espacios de publicación. La accesibilidad busca que su información pueda percibirse y comprenderse mediante recursos complementarios.

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img10.png", data-aos="zoom-in").mx-auto.w-md-75
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-016" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Encuadre y presentación")
            p.mb-0 Preparar versiones verticales, horizontales o cuadradas según el destino. Revisar que los recortes y los elementos de la interfaz no oculten información importante.
          .tarjeta(titulo="Subtitulado")
            p.mb-0 Incorporar textos sincronizados con las voces y los sonidos relevantes. Revisar ortografía, identificación de hablantes y tiempo de lectura; los subtítulos automáticos requieren comprobación.
          .tarjeta(titulo="Información visual y sonora")
            p.mb-0 Describir mediante la narración las acciones o características esenciales. Cuando sea necesario, incorporar audiodescripción y ofrecer una transcripción que incluya información visual relevante.
          .tarjeta(titulo="Lectura e interpretación")
            p.mb-0 Mantener textos legibles, contraste suficiente y tiempo para leer. Incorporar interpretación en la lengua de señas pertinente para el público cuando corresponda y prever su espacio desde la planeación.

    
    .row.justify-content-center.mb-5
      .col-lg-12.mb-lg-0
        .container
          .row.align-items-center.bg-color-c1.br-15.mb-0
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/img13.png", alt="", style="max-width: 100px").mx-auto
            .col-lg.order-1.p-4
              p.mb-0 La accesibilidad debe considerarse desde el inicio. La guía de López-Cuadrado y colaboradores explica recursos de subtitulado, audiodescripción e interpretación en lengua de signos (López-Cuadrado et al., 2024).

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa adapta un video horizontal sobre un bolso a una versión vertical. Reorganiza las tomas para conservar la vista del interior, ubica los subtítulos sin cubrir el producto y añade una narración que describe sus compartimentos. Antes de publicar, comprueba la lectura y la sincronización.

    .row.mb-lg-3.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema4/img11.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 La producción audiovisual relaciona planeación, registro y edición para construir un mensaje comprensible. Elegir el tipo de contenido y prever su adaptación permite utilizar los recursos de acuerdo con el propósito comunicativo.
        p.mb-0 La revisión de imagen, sonido y accesibilidad prepara la publicación y orienta el uso de las herramientas de edición que se abordarán en el siguiente capítulo.

</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
    mostrarIndicador: true,
  }),
}
</script>

<style lang="sass"></style>
