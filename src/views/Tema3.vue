<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Fundamentos de fotografía

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema3/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text La fotografía permite mostrar productos, registrar acontecimientos y construir relatos visuales. En una empresa de moda, ayuda a comunicar características como la forma, el tejido, los acabados y las posibilidades de uso de una prenda o accesorio. <br> Su preparación requiere definir qué se desea mostrar y tomar decisiones sobre iluminación, encuadre y composición. Estas elecciones deben responder al propósito de la imagen y ofrecer información coherente con el producto.
      
      separador
      
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 3.1 Evolución de la fotografía y lectura de imágenes

      .row.mb-lg-5.mb-4.justify-content-center.align-items-center
        .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema3/img02.png", data-aos="zoom-in").mx-auto
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          .container
            .row.align-items-center.bg-color-09.mb-3.p-3.br-15
              .col-lg-12
                p.mb-0 La fotografía registra imágenes mediante la acción de la luz sobre una superficie o un sensor sensible. Su evolución ha transformado tanto las técnicas de captura como las formas de producir, conservar y compartir imágenes.
          p.mb-0 En la siguiente línea de tiempo, se presentan momentos detallados de la evolución de la fotografía: 


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/img03.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
          .bg-fondo-01.px-lg-5.py-lg-5.px-4.py-4.mb-0(style="border-radius: 0px !important")
            SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
              .row.p-3.align-items-center
                .col-lg-12.mb-0
                  h4 Siglo XIX: primeros procedimientos
                  p.mb-0 La presentación pública del daguerrotipo en 1839 fue un hito en la difusión de la fotografía. Otros procedimientos ampliaron las posibilidades de obtener imágenes y reproducirlas.
              .row.p-3.align-items-center
                .col-lg-12.mb-0
                  h4 Finales del siglo XIX y siglo XX: expansión de usos
                  p.mb-0 La película y las cámaras portátiles favorecieron nuevos usos personales, documentales y comerciales. La fotografía adquirió presencia en publicaciones, publicidad y comunicación de moda.
              .row.p-3.align-items-center
                .col-lg-12.mb-0
                  h4 Finales del siglo XX: expansión digital
                  p.mb-0 La captura mediante sensores y el procesamiento informático facilitaron revisar, editar y almacenar imágenes. La fotografía digital transformó los procesos de producción y circulación.
              .row.p-3.align-items-center
                .col-lg-12.mb-0
                  h4 Siglo XXI: fotografía móvil y conectada
                  p.mb-0 Los teléfonos con cámara y las plataformas digitales integraron captura, edición y publicación. Las imágenes participan en conversaciones, recomendaciones y experiencias de compra.

      .container
        .titulo-con-imagen.mb-5(data-aos="fade-right")
          .titulo-con-imagen__fondo
            img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
            h3.titulo-con-imagen__texto Lectura de una fotografía

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-3.br-15
          p.mb-0.text-center Analizar una imagen implica distinguir lo que muestra de los significados que puede sugerir:


    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img04.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Lectura denotativa:</b> describe elementos observables, como prendas, personas, objetos, colores y espacios.


      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img05.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Lectura connotativa:</b> interpreta asociaciones posibles, como elegancia, cercanía o pertenencia, considerando el contexto.

    
    .tarjeta.bg-color-04.p-4.mb-5
      .row.justify-content-around.align-items-center
        .col-md-auto.col-sm-3.col-4.mb-3.mb-md-0.text-center.d-none.d-lg-block
          img(src="@/assets/curso/tema3/img06.png", style="max-width: 90px", alt="").mx-auto
        .col-lg.col-md-12.col-sm-12.col-12.mb-3.mb-lg-0
          h4.mb-1 Lectura de una fotografía
          p.mb-0 Las técnicas históricas y las prácticas contemporáneas conviven en archivos, exposiciones y proyectos artísticos. En los recursos que compartimos a continuación, se presentan un par de ejemplos para apoyar y reforzar el conocimiento de la lectura de imágenes. El Museo Universidad de Navarra muestra ejemplos de este recorrido, mientras que Mira analiza las transformaciones sociales y culturales de la fotografía digital.
        .col-lg-auto.col-12.mt-3.mt-lg-0.text-center
          .d-flex.flex-column.align-items-center
            a.boton.color-acento-botones.text-dark.mb-2(style="min-width: 140px", :href="'https://museo.unav.edu/el-museo/noticias/-/contents/24/09/2024/un-viaje-desde-el-daguerrotipo-a-la-inteligencia-artificial-en-la-primera-exposicion-de-la-coleccion-del-mun/content/Hw7G/124089569'" target="_blank")
              span Ir al recurso 1
            a.boton.color-acento-botones.text-dark(style="min-width: 140px", :href="'https://dialnet.unirioja.es/descarga/articulo/9342223.pdf'" target="_blank")
              span Ir al recurso 2


    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una fotografía muestra una chaqueta sobre una silla, junto a un bolso. Esa descripción corresponde a elementos visibles. Interpretar que representa una jornada laboral es una posibilidad que debe contrastarse con el mensaje de la campaña; la imagen, por sí sola, no confirma esa situación.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.2 Elementos básicos y composición fotográfica

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img07.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición organiza los elementos dentro del encuadre. Para fotografiar productos de moda, es necesario decidir qué características deben observarse y cómo utilizar la luz, el espacio y el punto de vista para mostrarlas. 

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1.d-none.d-lg-block
        figure
          img(src="@/assets/curso/tema3/img08.png", data-aos="zoom-in").mx-auto
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-016" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Encuadre y composición")
            p.mb-0 El encuadre delimita qué aparece en la imagen. Una vista general muestra el producto completo; un acercamiento permite observar detalles. La regla de los tercios propone dividir el encuadre en nueve partes para explorar la ubicación del motivo principal. Es una orientación, no una obligación.
          .tarjeta(titulo="Luz y textura")
            p.mb-0 La dirección y la calidad de la luz modifican la apariencia de las superficies. Una iluminación lateral puede destacar el relieve de un tejido; una luz difusa puede suavizar las sombras. Conviene comprobar que los detalles relevantes sigan siendo visibles.
          .tarjeta(titulo="Líneas, formas y patrones")
            p.mb-0 Costuras, pliegues, bordes y estampados pueden orientar la mirada. La repetición genera ritmo; la simetría organiza elementos alrededor de un eje y las disposiciones triangulares permiten relacionar varios objetos dentro del encuadre.
          .tarjeta(titulo="Punto de vista y profundidad")
            p.mb-0 La posición de la cámara modifica la representación del producto. Una toma frontal facilita observar su forma; una vista oblicua puede mostrar volumen. La perspectiva y la profundidad de campo influyen en la separación entre el producto y su entorno.



    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0 La composición permite relacionar encuadre, líneas, equilibrio y profundidad con el mensaje que se desea comunicar. Estas decisiones deben responder a cada situación fotográfica (Pino, 2024).


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 4.
          span Controles básicos de captura
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Control
                th Función principal
            tbody
              tr
                td Apertura del diafragma
                td Regula la entrada de luz e influye en la profundidad de campo.
              tr
                td Velocidad de obturación
                td Determina el tiempo de exposición y la representación del movimiento.
              tr
                td ISO
                td Ajusta la respuesta de la cámara para obtener la imagen; valores altos pueden aumentar el ruido visible.
              tr
                td Balance de blancos
                td Ayuda a compensar dominantes de color producidas por la iluminación.
              tr
                td Enfoque
                td Permite seleccionar la zona que debe aparecer nítida.

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-10.bg-color-c1.p-3.br-15
          p.mb-0 La iluminación se complementa con ajustes de cámara. Los ajustes deben comprobarse mediante imágenes de prueba. En un teléfono móvil, algunas funciones pueden operar automáticamente o tener posibilidades de control limitadas.

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa necesita mostrar la textura de un bolso. Prepara una fotografía completa y otra de detalle, utiliza iluminación lateral suave y comprueba el enfoque sobre el material. Revisa que las sombras permitan observar las costuras y que la edición mantenga la apariencia del producto.


    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3 Tipos de fotografía y aplicaciones en moda

    .px-lg-0.py-lg-0.px-0.py-0
      img(src="@/assets/curso/tema3/img09.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Los tipos de fotografía pueden distinguirse por su propósito, temática o enfoque creativo. Estas categorías se relacionan entre sí: una fotografía de moda puede ser publicitaria, incluir un retrato y utilizar recursos artísticos.


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 5.
          span Tipos de fotografía y posibilidades de aplicación
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Tipos relacionados
                th Características
                th Aplicación posible en moda
            tbody
              tr
                td De producto, de moda y publicitaria
                td Presentan artículos, propuestas de vestuario o mensajes orientados a promover una oferta.
                td Catálogo de bolsos, editorial de colección o anuncio de una prenda.
              tr
                td De retrato y <em>boudoir</em>
                td El retrato se centra en las personas. El <em>boudoir</em> desarrolla una representación íntima mediante ambientación y dirección.
                td Retratos de participantes o campañas de lencería con un tratamiento acordado.
              tr
                td Documental y reportaje fotográfico
                td Registran situaciones y desarrollan relatos sobre acontecimientos, personas o procesos.
                td Documentar la elaboración de una colección o cubrir un evento.
              tr
                td Artística, de autor, abstracta y surrealista
                td Priorizan la expresión y la exploración visual. Pueden destacar una mirada personal, formas no figurativas o asociaciones imaginarias.
                td Una serie conceptual sobre tejidos, siluetas o transformaciones del vestuario.
              tr
                td De arquitectura, paisaje y aérea
                td Exploran espacios construidos, entornos y vistas desde posiciones elevadas.
                td Presentar una tienda, contextualizar una campaña o registrar un espacio de evento.
              tr
                td Deportiva y gastronómica
                td Abordan acciones deportivas o alimentos y sus formas de presentación.
                td Mostrar vestuario en actividad o complementar la comunicación de un evento de marca.



    .row.justify-content-center.mb-5
      .col-lg-12.mb-lg-0
        .container
          .row.align-items-center.bg-color-c1.br-15.mb-0
            .col-lg-auto.order-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/img10.svg", alt="", style="max-width: 180px").mx-auto
            .col-lg.order-1.p-4
              p.mb-0 La fotografía de <em>stock</em> corresponde a imágenes disponibles en bancos para usos sujetos a licencia. Puede pertenecer a distintas categorías. Antes de utilizarla, se deben comprobar sus condiciones de uso y su pertinencia para el mensaje.


    .container
      .titulo-con-imagen.mb-5(data-aos="fade-right")
        .titulo-con-imagen__fondo
          img.titulo-con-imagen__imagen(src="@/assets/curso/icono-subtitulo.svg")
          h3.titulo-con-imagen__texto Selección de imágenes para comunicar un producto

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img11.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La elección depende de la información que necesita el consumidor. Una imagen de campaña puede presentar una propuesta estética, mientras que la ficha comercial requiere vistas que permitan reconocer el artículo y sus detalles.

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-3.br-15
          p.mb-0.text-center Para preparar el conjunto fotográfico conviene considerar:


    .row.justify-content-center.mb-2.mb-lg-4
      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img12.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Cobertura:</b> incluir vistas generales y detalles pertinentes.

      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img13.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Consistencia:</b> mantener criterios de iluminación, encuadre y fondo.

    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img14.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Fidelidad:</b> evitar modificaciones que alteren características relevantes.

      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema3/img15.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Contexto:</b> diferenciar el producto ofrecido de los accesorios utilizados para ambientarlo.


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa combina una fotografía de campaña de una camisa con vistas frontal, posterior y de detalle en la tienda virtual. La primera presenta una propuesta de uso; las demás permiten observar cuello, mangas y acabados. La descripción aclara qué artículo se comercializa.




    .row.mb-lg-5.mb-4.justify-content-center
      .col-lg-8.col-md-12.mb-0.mb-lg-0.order-2.order-lg-2
        .container.h-100
          .row.bg-color-03.br-15.p-0.h-100.justify-content-center.align-content-center
            .col-md-8.col-lg-5.mb-2.mb-lg-0.order-1.order-md-1.order-lg-1.p-0
              figure
                img(src="@/assets/curso/tema3/img16.png", data-aos="fade-right").w-md-75.mx-md-auto
            .col-lg-6.order-2.order-md-2.order-lg-2.p-4.p-lg-4
              h4 ¿Sabías que?
              p(data-aos="fade-left").mb-4 Lo invitamos a escuchar el siguiente Pódcast: 
              TarjetaAudio.color-acento-contenido.bg-color-white.mb-0(
                texto="Fotografías que informan: del producto a la imagen"
                tiempo
                :audio="require_src('@/assets/curso/podcast/podcast1.mp3')"
              )

      .col-lg-4.order-1.order-lg-1.mb-4.mb-lg-0
        .container.h-100
          .row.align-content-center.bg-color-09.mb-0.p-3.br-15.h-100
            .col-lg-12
              p.mb-0 Para complementar los conocimientos sobre fotografía de moda, se invita a consultar el pódcast Fotografías que informan: del producto a la imagen, que aborda la selección de vistas, la iluminación y la composición para mostrar características del producto y ofrecer información útil al consumidor.


    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema3/img17.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La fotografía combina decisiones técnicas y comunicativas. Reconocer sus usos, interpretar las imágenes y organizar la captura permite presentar productos con mayor claridad y coherencia. <br> Estos fundamentos también aportan al trabajo audiovisual, donde el encuadre, la iluminación y la composición se articulan con el movimiento, el sonido y la secuencia narrativa.



</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
