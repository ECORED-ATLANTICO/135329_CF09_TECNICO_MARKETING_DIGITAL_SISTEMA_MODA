<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Fundamentos del diseño gráfico

    .bg-full-width.bg-fondo-1
      .px-lg-0.py-lg-0.px-0.py-0
        img(src="@/assets/curso/tema2/img01.png", alt="")
      .row.justify-content-center.align-items-center.z-2.mb-4
        .col-lg-10(data-aos="fade-right")
          p.banner-text El diseño gráfico organiza imágenes, textos y otros elementos para comunicar un mensaje. En el Sistema Moda, permite presentar productos, explicar sus características y construir piezas coherentes con la identidad de una marca. <br> Para tomar estas decisiones es necesario comprender la composición, la percepción visual, el color y la tipografía. Su aplicación ayuda a orientar la atención y facilitar la lectura en medios impresos y digitales.

      separador
      
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
        h2 2.1 Elementos del diseño y principios de composición 

      .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img02.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 La composición es la organización de los elementos dentro de un espacio. Cada fotografía, texto o figura ocupa una posición y establece relaciones con los demás componentes de la pieza.

          p.mb-0 Antes de distribuirlos, conviene reconocer los elementos con los que se construye un diseño.

      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5.text-bold.mb-2 Tabla 2.
            span Elementos que intervienen en el diseño
          .tabla-a.tb-custom.mb-0
            table
              thead
                tr
                  th Grupo
                  th Elementos y significado
                  th Aplicación en moda
              tbody
                tr
                  td Conceptuales
                  td
                    | Punto: ubicación.
                    br
                    | Línea: recorrido.
                    br
                    | Plano: superficie.
                    br
                    | Volumen: extensión en tres dimensiones o su representación.
                  td Una línea separa secciones; las luces y sombras sugieren el volumen de un bolso.
                tr
                  td Visuales
                  td Forma, medida, color y textura: características que permiten reconocer y diferenciar los elementos.
                  td El tamaño de una fotografía destaca una prenda; un acercamiento muestra su tejido.
                tr
                  td De relación
                  td Dirección, posición, espacio y gravedad visual: organizan la orientación, ubicación, separación y sensación de peso o estabilidad.
                  td Una fotografía inclinada introduce dinamismo; los márgenes separan el contenido de los bordes.
                tr
                  td Prácticos
                  td Representación, significado y función: relacionan lo que se muestra, lo que comunica y el propósito que cumple.
                  td Una imagen de detalle permite observar el cierre de una chaqueta y comprender su funcionamiento.

      .container
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-12.bg-color-09.p-4.br-15
            p.mb-0.text-center Estos elementos se articulan mediante principios que ayudan a construir una composición comprensible en una pieza gráfica.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img03.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-2.col-md-12.mb-0.mb-lg-0
        SlyderF(columnas="col-lg-6 col-xl-6 col-md-12 col-sm-12 p-3")
          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Jerarquía y énfasis
            p.text-center.mb-0 Establecen qué debe observarse primero. El tamaño, la ubicación y el contraste permiten destacar la información principal y diferenciarla de los detalles.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Equilibrio
            p.text-center.mb-0 Distribuye el peso visual. Puede ser simétrico, con elementos semejantes a ambos lados, o asimétrico, mediante elementos diferentes que se compensan.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Unidad y armonía
            p.text-center.mb-0 Relacionan los componentes mediante criterios compartidos. Mantener una paleta, un tratamiento fotográfico y estilos tipográficos consistentes favorece la coherencia de la pieza.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Contraste y tensión
            p.text-center.mb-0 El contraste diferencia elementos por tamaño, color, forma o textura. La tensión introduce relaciones que atraen la atención, como una posición inesperada.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Repetición y ritmo
            p.text-center.mb-0 La repetición utiliza elementos semejantes; el ritmo organiza su aparición mediante intervalos o variaciones. Ambos pueden establecer continuidad entre las páginas de un catálogo.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Dirección y dinamismo
            p.text-center.mb-0 Las líneas, diagonales y orientaciones sugieren recorridos visuales. Su disposición puede conducir la mirada desde la fotografía del producto hacia su descripción.

          .tarjeta.bg-color-8.p-4.h-100.br-15
            img(src='@/assets/curso/tema2/img04.svg', alt='', style="max-width: 90px;").mx-auto.mb-3
            .bg-color-09.p-2.mb-2
              h4.text-center.mb-0 Proporción, alineación y espacio libre
            p.text-center.mb-0 Relacionan tamaños, ordenan elementos sobre ejes y reservan áreas de descanso. El espacio libre permite separar contenidos y destacar información.

    .row.justify-content-center.mb-3
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa de moda prepara una pieza para presentar una chaqueta. Utiliza una fotografía principal, un título breve y un enlace para consultar sus características. Alinea los textos, mantiene márgenes y diferencia sus tamaños para establecer un orden de lectura.

    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Percepción visual y leyes de la Gestalt

    .row.mb-lg-4.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-12.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img05.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Las leyes de la Gestalt surgen del movimiento alemán Gestalt a principios del siglo XX, este se basa en que el todo es superior a la suma de sus partes. Este movimiento permitió entender las imágenes a partir de los principios de la percepción visual.
        p.mb-0 Los principios de la Gestalt explican tendencias de agrupación y reconocimiento que pueden orientar la construcción de piezas gráficas.  

    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-c1.p-3.br-15
          p.mb-0.text-center La tabla a continuación, enumera y explica dichos principios. 


    .row.mb-5.justify-content-center.align-items-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5.text-bold.mb-2 Tabla 3.
          span Principios de percepción aplicados a la comunicación de moda
        .tabla-a.tb-custom.mb-0
          table
            thead
              tr
                th Principio
                th ¿Qué describe?
                th Aplicación
            tbody
              tr
                td Proximidad
                td Los elementos cercanos tienden a percibirse como relacionados.
                td Ubicar el precio junto al producto correspondiente.
              tr
                td Semejanza
                td Las características compartidas favorecen la agrupación visual.
                td Mantener un mismo estilo para los botones de consulta.
              tr
                td Continuidad
                td Se tiende a seguir recorridos y direcciones continuas.
                td Alinear imágenes para orientar la lectura del catálogo.
              tr
                td Cierre
                td Se pueden reconocer figuras, aunque sus contornos estén incompletos.
                td Sugerir una silueta mediante trazos separados.
              tr
                td Figura y fondo
                td Se distingue un elemento principal respecto de su entorno.
                td Separar visualmente una prenda del fondo fotográfico.
              tr
                td Simetría
                td Las partes simétricas pueden percibirse como una unidad.
                td Organizar dos vistas de un producto alrededor de un eje.
              tr
                td Dirección común
                td Los elementos que se desplazan conjuntamente tienden a agruparse.
                td Animar juntas las imágenes de una misma categoría.
              tr
                td Pregnancia o buena forma
                td Se tiende a reconocer organizaciones simples y estables.
                td Simplificar un símbolo para facilitar su identificación.


    .container
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12.bg-color-019.p-3.br-15
          p.mb-0.text-center Estos principios orientan el diseño, pero no garantizan una interpretación idéntica en todas las personas (ILERNA, 2024).
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa presenta tres bolsos en una página. Al acercar cada nombre y precio a su fotografía y separar los grupos entre sí, facilita que el consumidor relacione la información con el producto correcto.


    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Teoría del color y aplicaciones gráficas

    .row.mb-lg-5.mb-4.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-4.mb-lg-0.order-1.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img06.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-2.order-lg-2.mb-0.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 El color permite diferenciar elementos, establecer relaciones y destacar información. Su selección debe considerar la identidad de marca, el contenido y el medio de publicación.
        p.mb-2 Para describirlo se utilizan tres propiedades: tono, que identifica el color; saturación, que expresa su intensidad; y luminosidad o valor, que indica qué tan claro u oscuro se percibe.

        p.mb-0 Los colores primarios dependen del modelo utilizado. Sus combinaciones generan colores secundarios y otras variaciones. En el círculo cromático tradicional de pintura, los terciarios se obtienen al combinar un primario con un secundario adyacente.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.mb-4.mb-lg-0.col-md-8.order-1.order-lg-2
        figure
          img(src="@/assets/curso/tema2/img07.png", data-aos="zoom-in", alt="")
      .col-lg-8.order-2.order-lg-1.mb-0.mb-lg-0
        .bg-fondo-01.px-lg-5.py-lg-5.px-4.py-4.mb-0(style="border-radius: 0px !important")
          SlyderA(tipo="b").bg-color-white.p-lg-4.p-2.tarjeta
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Monocromática
                p.mb-0 Utiliza variaciones de un mismo tono. Una pieza puede combinar azules claros y oscuros para diferenciar áreas y conservar continuidad.
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Análoga
                p.mb-0 Combina tonos próximos en el círculo cromático, como amarillo, amarillo anaranjado y naranja. Permite construir relaciones cromáticas cercanas.
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Complementaria
                p.mb-0 Relaciona tonos opuestos en el círculo cromático elegido. Puede emplear uno como predominante y otro como acento para destacar información.
            .row.p-3.align-items-center
              .col-lg-12.mb-0
                h4 Triádica
                p.mb-0 Utiliza tres tonos distribuidos de manera equidistante en el círculo cromático. Conviene establecer proporciones para evitar que todos compitan por la atención.



    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12.bg-color-019.p-3.br-15
          p.mb-0.text-center En la preparación de archivos también debe distinguirse el medio de salida:

    .row.justify-content-center.mb-4
      .col-lg-5.col-md-11.mb-3.mb-lg-0
        .tarjeta.tarjeta--azul.p-4.h-100
          h4.mb-2 RGB
          p.mb-0 Combina luz roja, verde y azul; se utiliza en pantallas.
      .col-lg-5.col-md-11
        .tarjeta.tarjeta--azul.p-4.h-100
          h4.mb-2 CMYK
          p.mb-0 Combina tintas cian, magenta, amarilla y negra; se emplea habitualmente en impresión.

    .container
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-12.bg-color-09.p-3.br-15
          p.mb-0.text-center La conversión entre modelos puede modificar la apariencia de algunos colores. Por ello, conviene revisar el resultado según el destino de la pieza.

    .row.justify-content-center.mb-5
      .col-lg-12
        p.mb-0 El color debe facilitar la lectura mediante un contraste suficiente. Además, sus asociaciones culturales y emocionales dependen del contexto; no permiten predecir por sí solas la respuesta del consumidor.

    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa presenta una colección con fotografías sobre fondo claro y textos oscuros. Reserva un color de acento para el enlace de consulta e identifica las opciones de la prenda mediante muestras y nombres escritos, facilitando su reconocimiento.


    .tarjeta.bg-color-03.p-4.mb-4
      .row.justify-content-around.align-items-center
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h4.mb-1 Lectura sugerida. Teoría del color
              p.mb-0 Para ampliar los conocimientos sobre la teoría del color, se invita a consultar el recurso Teoría del color, de Andrea de la Rubia Gómez-Moran (2024), que aborda los fundamentos de la mezcla de colores y sus relaciones. Su consulta permite complementar la comprensión de las combinaciones cromáticas y orientar su aplicación en piezas de comunicación visual.
            .col-sm-auto
              a.boton.color-acento-botones.text-dark(:href="'https://hdl.handle.net/10115/39913'" target="_blank")
                span Ir al recurso
                // i.fas.fa-file-download

    separador
    
    #t_2_4.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.4 Tipografía, jerarquía y legibilidad

    .px-lg-0.py-lg-0.px-0.py-0
      img(src="@/assets/curso/tema2/img08.png", alt="")
    .row.justify-content-center.align-items-center.z-2.mb-4
      .col-lg-10(data-aos="fade-right")
        p.banner-text La tipografía organiza la presentación visual del texto. Su elección influye en el carácter de una pieza y en la facilidad con que pueden reconocerse y leerse sus mensajes. <br> Una familia tipográfica reúne caracteres con un diseño común y puede incluir variantes de peso, ancho e inclinación. Estas variantes permiten diferenciar títulos, descripciones y otros niveles de información.

   
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        TabsC.color-primario.mb-0
          .py-3.py-md-4.px-5(titulo="Romanas o con serifas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Presentan remates en sus trazos. Pueden utilizarse en títulos y contenidos editoriales, siempre que su tamaño y contraste permitan leerlas con facilidad.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img09.png', alt='')
          .py-3.py-md-4.px-5(titulo="Palo seco o sin serifas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Carecen de remates. Suelen emplearse en interfaces, catálogos y descripciones, aunque su legibilidad también depende del diseño y de las condiciones de presentación.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img10.png', alt='')
          .py-3.py-md-4.px-5(titulo="Rotuladas o de inspiración manual")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Evocan trazos caligráficos o de escritura. Pueden aportar carácter a mensajes breves; requieren especial cuidado cuando sus formas dificultan el reconocimiento de las letras.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img11.png', alt='')
          .py-3.py-md-4.px-5(titulo="Decorativas")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-10.mb-4.mb-md-0
                p.mb-0 Presentan rasgos expresivos o temáticos. Resultan útiles para acentos y títulos cortos cuando conservan la claridad y corresponden con la identidad de marca.
              .col-lg-2.col-md-4
                figure
                  img(src='@/assets/curso/tema2/img12.png', alt='')

    .row.mb-lg-5.mb-5.justify-content-center.align-items-center
      .col-lg-4.col-md-8.mb-0.mb-lg-0.order-2.order-lg-1
        figure
          img(src="@/assets/curso/tema2/img13.png", data-aos="zoom-in").mx-auto
      .col-lg-8.order-1.order-lg-2.mb-4.mb-lg-0
        .container
          .row.align-items-center.bg-color-09.mb-3.p-3.br-15
            .col-lg-12
              p.mb-0 Para establecer una jerarquía, pueden combinarse tamaño, peso y separación. Un título identifica el tema; un subtítulo organiza la información y el cuerpo desarrolla el mensaje. La inclinación, el ancho y los efectos de contorno o sombra también modifican la apariencia, pero deben utilizarse con moderación.
        p.mb-0 La legibilidad facilita reconocer los caracteres; la lecturabilidad favorece comprender y recorrer el texto. Ambas requieren revisar tamaño, contraste, interlineado, longitud de las líneas y espaciado. Las orientaciones sobre accesibilidad recomiendan cuidar estas condiciones y evitar que el color sea el único medio de diferenciación (López-Cuadrado et al., 2024).


    .row.justify-content-center.mb-5
      .col-lg-10.mb-lg-0
        .cajon.bg-color-c2.px-5.py-4.h-100.align-content-center
          h4 Ejemplo aplicado
          p.mb-0 Una empresa utiliza una misma familia tipográfica en su catálogo: negrita para el nombre del producto y peso regular para materiales y cuidados. Antes de publicar, comprueba que los textos puedan leerse desde un teléfono móvil y ajusta los tamaños cuando es necesario.

    .bloque-texto-g.bg-color-02.p-3.p-sm-4.p-md-5.mb-3
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require_src('@/assets/curso/tema2/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La composición, la percepción visual, el color y la tipografía permiten organizar mensajes gráficos con intención. Su aplicación requiere relacionar la identidad de marca con la claridad de la información y las condiciones de lectura. <br><br>
        p.mb-0 Estos fundamentos también orientan la selección y construcción de fotografías, al ayudar a reconocer qué debe destacarse y cómo presentar visualmente un producto de moda.


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
  }),
}
</script>

<style lang="sass"></style>
