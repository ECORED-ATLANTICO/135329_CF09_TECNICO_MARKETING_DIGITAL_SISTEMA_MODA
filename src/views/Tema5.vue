<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 5
      h1 Herramientas de edición de piezas gráficas y comunicacionales



    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema4/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text Las herramientas de edición permiten organizar textos, imágenes, gráficos, sonidos y videos para construir piezas comunicacionales. Su selección depende del producto que se desea elaborar, las características de los archivos y los recursos disponibles.

      .container
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-12.bg-color-09.p-4.br-15
            p.mb-0 En una empresa de moda, estas herramientas facilitan preparar fotografías, diagramar catálogos y adaptar contenidos audiovisuales. Su uso requiere conservar archivos editables, revisar la información y generar versiones adecuadas para cada medio de publicación.

      separador
      
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 5.1 Digitalización, vectorización y diagramación


      .row.justify-content-center.mb-5
        .col-lg-12.mb-lg-0
          .container
            .row.align-items-center.bg-color-c2.br-15.mb-0
              .col-lg-auto.order-2
                img.d-none.d-lg-flex(src="@/assets/curso/tema5/img02.png", alt="", style="max-width: 100px").mx-auto
              .col-lg.order-1.p-4
                p.mb-0 La elaboración de una pieza digital puede comenzar con una fotografía, un boceto, una ilustración o un archivo existente. Reconocer cómo se obtiene y organiza cada recurso permite elegir el procedimiento de trabajo.


      .row.justify-content-center.align-items-center.mb-5
        .col-lg-4.mb-4.mb-lg-0.col-md-12.order-1.order-lg-1
          figure
            img(src="@/assets/curso/tema5/img03.png", data-aos="zoom-in", alt="")
        .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
          TabsA.color-acento-botones
            .tarjeta.color-acento-botones--borde.p-4(titulo="Digitalización").align-content-center
              h4 Digitalización
              p.mb-0 Consiste en convertir información de un soporte físico en un archivo digital. Un boceto puede digitalizarse mediante escáner o fotografía, procurando conservar sus detalles y proporciones.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Vectorización").align-content-center
              h4 Vectorización
              p.mb-0 Transforma contornos y formas en trazados definidos por puntos y curvas. Puede realizarse manualmente o mediante funciones automáticas que requieren revisión. Es útil para preparar símbolos, ilustraciones y otros elementos que necesitan cambiar de tamaño.
            .tarjeta.color-acento-botones--borde.p-4(titulo="Diagramación").align-content-center
              h4 Diagramación
              p.mb-0 Organiza textos, imágenes y gráficos dentro de un espacio. Utiliza márgenes, columnas, alineaciones y jerarquías para facilitar la lectura y mantener coherencia entre las partes de una publicación.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c2.p-3.br-15
          p.mb-0.text-center Las imágenes pueden construirse con píxeles o con trazados. Esta diferencia influye en su comportamiento al cambiar de tamaño.

    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-12
        .titulo-sexto.color-acento-contenido.mb-4
          h5.text-bold Figura 1.
          span Mapa de bits y gráfico vectorial
        img.mb-0.d-none.d-lg-block(data-aos="zoom-in", src="@/assets/curso/tema5/img04.png", alt="La figura 1 iustra una comparación entre una fotografía formada por píxeles y un icono construido con trazados. Al ampliarlos, el mapa de bits puede perder definición, mientras el vector conserva sus contornos.")
        img.mb-0.d-lg-none(data-aos="zoom-in", src="@/assets/curso/tema5/img05.png", alt="La figura 1 iustra una comparación entre una fotografía formada por píxeles y un icono construido con trazados. Al ampliarlos, el mapa de bits puede perder definición, mientras el vector conserva sus contornos.")


    //- .container
    //-   .row.justify-content-center.align-items-center.mb-5
    //-     .col-lg-12.bg-color-09.p-3.br-15
    //-       h5.text-bold.mb-0.text-center Una misma pieza puede combinar fotografías y gráficos vectoriales.
    //-       p.mb-0.text-center Nota: las imágenes de mapa de bits incorporadas en un archivo vectorial conservan sus límites de resolución.

    .container
      .row.justify-content-center.align-items-center.mb-5.mb-lg-4
        .col-lg-12.bg-color-c2.p-3.br-15
          p.mb-0.text-center La documentación de Adobe explica las características de las imágenes de mapa de bits y las precauciones al modificar su escala (Adobe, 2025).

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa digitaliza el boceto de un símbolo, reconstruye sus contornos como vectores y lo incorpora a un catálogo. Las fotografías de los productos se mantienen como mapas de bits. Ambos recursos se integran mediante la diagramación, conservando sus archivos de origen.



    separador
    
    #t_5_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.2 Selección y uso de herramientas de edición

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img06.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  Una herramienta debe elegirse por las tareas que permite resolver. Algunas se especializan en fotografías o gráficos vectoriales; otras facilitan la composición mediante plantillas o la edición de secuencias audiovisuales.



    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 7.
          span Herramientas según la necesidad de edición
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 25%") Necesidad
                th(style="width: 45%") Funciones que conviene identificar
                th(style="width: 30%") Ejemplos de herramientas
            tbody
              tr
                td.fw-bold Editar fotografías
                td Recorte, ajustes de exposición y color, selección y trabajo por capas.
                td GIMP o Adobe Photoshop.
              tr
                td.fw-bold Construir gráficos vectoriales
                td Edición de nodos, curvas, formas, rellenos y trazos.
                td Inkscape o Adobe Illustrator.
              tr
                td.fw-bold Componer piezas y publicaciones
                td Organización de textos e imágenes, plantillas, alineación y adaptación de tamaños.
                td Canva.
              tr
                td.fw-bold Editar video y sonido
                td Organización de clips, cortes, pistas de audio, títulos y exportación.
                td Shotcut o Adobe Premiere Pro.

    .px-lg-0.py-lg-0.px-0.py-0
      img(src="@/assets/curso/tema5/img07.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text Las categorías pueden superponerse. Una herramienta de composición también puede incorporar edición básica de fotografías o video, sin ofrecer el mismo control que una aplicación especializada. <br>Para comparar alternativas conviene revisar:



    .row.justify-content-center.mb-2.mb-lg-4
      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img08.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Acceso:</b> licencia, registro y funciones disponibles.

      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img09.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Compatibilidad:</b> funcionamiento en el equipo y manejo de los formatos necesarios.

    .row.justify-content-center.mb-4
      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img10.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Edición:</b> posibilidades de modificar textos, capas, objetos y secuencias.

      .col-lg-6.col-xl-5.col-md-11.mb-4
        .tarjeta-avatar-b.h-100
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/tema5/img11.svg', alt='')
          .tarjeta.tarjeta--azul
            .p-4
              p.mb-0 <b>Entrega:</b> opciones de exportación y conservación del proyecto.


    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img12.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Existen alternativas libres, gratuitas y de pago. Algunas funciones o recursos incorporados pueden tener condiciones específicas de uso.
        p.mb-0 Las plantillas pueden facilitar la producción, pero requieren adaptar fotografías, textos, colores y composición a la marca. Canva presenta ejemplos de personalización y colaboración en su publicación sobre herramientas de trabajo visual (Canva, 2024).


    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa necesita recortar fotografías, preparar un icono y elaborar una pieza promocional. Utiliza un editor fotográfico para las imágenes, una herramienta vectorial para el icono y una aplicación de composición para integrar los elementos. Selecciona cada herramienta según la tarea y conserva los archivos editables.


    separador
    
    #t_5_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 5.3 Preparación, revisión y exportación de archivos

    .container
      .row.justify-content-center.align-items-center.mb-5.mb-lg-4
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0 Guardar el proyecto permite continuar la edición; exportar genera una versión destinada a consulta, publicación o intercambio. Ambos archivos cumplen funciones diferentes y deben organizarse para facilitar futuras actualizaciones.



    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-3.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img13.png", data-aos="zoom-in").mx-auto.w-md-75
      .col-lg-7.order-2.order-lg-2.mb-0.mb-lg-0
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-016" data-aos="zoom-in").mb-0
          .tarjeta(titulo="Organizar los materiales")
            p.mb-0 Reunir fotografías, textos, gráficos y sonidos aprobados. Identificar sus versiones y comprobar las condiciones de uso de los recursos externos.
          .tarjeta(titulo="Conservar la edición")
            p.mb-0 Mantener capas, objetos y pistas organizados. Guardar el proyecto y los archivos vinculados para poder modificar información sin reconstruir toda la pieza.
          .tarjeta(titulo="Revisar el contenido")
            p.mb-0 Comprobar referencias de producto, textos, colores, proporciones y legibilidad. En video, revisar también cortes, sonido y subtítulos. Si se utilizan funciones de inteligencia artificial, verificar sus resultados antes de incorporarlos.
          .tarjeta(titulo="Exportar y comprobar")
            p.mb-0 Elegir formato, dimensiones y calidad según el destino. Abrir el archivo exportado y revisar su apariencia, reproducción y peso antes de publicarlo.


    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema5/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0  La elección del formato responde al contenido y al uso previsto. En la tabla a continuación se describen los diferentes formatos, su uso habitual y el aspecto que debe revisarse de acuerdo al uso que se le quiera dar al mismo:


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 8.
          span Formatos, usos habituales y aspectos a tener en cuenta
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th(style="width: 20%") Formato
                th(style="width: 45%") Uso habitual
                th(style="width: 35%") Aspecto que debe revisarse
            tbody
              tr
                td.fw-bold JPEG
                td Fotografías para consulta digital.
                td La compresión puede reducir el detalle.
              tr
                td.fw-bold PNG
                td Imágenes y gráficos que pueden requerir transparencia.
                td El peso del archivo y la conservación de bordes.
              tr
                td.fw-bold SVG
                td Gráficos vectoriales compatibles con el medio de destino.
                td Fuentes, efectos y recursos vinculados.
              tr
                td.fw-bold PDF
                td Catálogos y documentos para distribución o impresión.
                td Textos, enlaces, accesibilidad y condiciones de salida.
              tr
                td.fw-bold MP4
                td Distribución de video.
                td El códec utilizado, la calidad y la compatibilidad de reproducción.


    .container
      .row.justify-content-center.align-items-center.mb-5.mb-lg-5
        .col-lg-12.bg-color-018.p-3.br-15
          p.mb-0 La exportación puede modificar características del archivo de trabajo. Por ello, debe revisarse la versión final y conservarse el proyecto editable. La documentación de Adobe y los objetivos formativos de Certiport incluyen criterios de exportación y preparación de entregables (Adobe, 2024; Certiport, 2025).


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa guarda el proyecto editable de su catálogo y exporta una versión PDF para consulta. Antes de compartirla, verifica fotografías, precios, enlaces y lectura desde un teléfono móvil. Cuando cambia una referencia, actualiza el proyecto y genera una nueva versión identificada con fecha.


    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema5/img15.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Las herramientas de edición permiten transformar recursos en piezas comunicacionales organizadas. Reconocer sus funciones, conservar los proyectos y comprobar las exportaciones facilita actualizar contenidos y mantener su calidad.
        p.mb-0 Estas decisiones deben responder a criterios compartidos de identidad visual. Los fundamentos de marca permiten establecer esas orientaciones y aplicarlas de manera coherente en distintos medios.


</template>

<script>
export default {
  name: 'Tema5',
  data: () => ({}),
}
</script>

<style lang="sass"></style>
