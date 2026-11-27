<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    #Actividad                
    <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Comunicación gráfica',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar la comprensión de comunicación visual, diseño, fotografía, producción audiovisual, edición digital e identidad de marca mediante preguntas de selección múltiple con única respuesta.',
      barajarPreguntas: true,
      titulo_aprobado: '¡EXCELENTE!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      mensaje_aprobado:
        'Alcanzó al menos 14 respuestas correctas de 20. Reconoció conceptos sobre comunicación gráfica aplicada al Sistema Moda. Revise la retroalimentación para fortalecer su comprensión.',
      mensaje_reprobado:
        'Revise los temas asociados con sus respuestas incorrectas y vuelva a intentarlo. Puede repetir la actividad para fortalecer su comprensión de la comunicación gráfica.',
      mensaje_final_aprobado:
        'Alcanzó al menos 14 respuestas correctas de 20. Reconoció conceptos sobre comunicación gráfica aplicada al Sistema Moda. Revise la retroalimentación para fortalecer su comprensión.',
      mensaje_final_reprobado:
        'Revise los temas asociados con sus respuestas incorrectas y vuelva a intentarlo. Puede repetir la actividad para fortalecer su comprensión de la comunicación gráfica.',
      preguntas: [
        {
          id: 1,
          texto:
            'Una publicación genera preguntas sobre las tallas. ¿Qué elemento del proceso comunicativo representan esas respuestas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Emisor.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Retroalimentación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Referente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Canal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificó la retroalimentación como la respuesta que permite conocer cómo se recibió el mensaje.',
          mensaje_incorrecto:
            'Revise la retroalimentación: las consultas del público aportan información para ajustar el mensaje.',
        },
        {
          id: 2,
          texto:
            'Una empresa explica materiales y cuidados mediante palabras, fotografías y símbolos. ¿Qué elemento reúne esos signos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Canal.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Contexto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Receptor.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Código.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Reconoció el código como el conjunto de signos utilizado para expresar el mensaje.',
          mensaje_incorrecto:
            'Distinga los signos utilizados del medio de difusión: palabras, fotografías y símbolos forman parte del código.',
        },
        {
          id: 3,
          texto:
            'Una empresa quiere que el público consulte las medidas de una prenda. ¿Qué llamado corresponde con ese propósito?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Consulte las medidas de esta prenda.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Conozca la historia de nuestro edificio.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Observe el paisaje de la campaña.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Visite una sección sin información del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó la acción esperada con un mensaje que dirige a información pertinente.',
          mensaje_incorrecto:
            'El llamado debe orientar a la acción definida y conducir a información relacionada con ella.',
        },
        {
          id: 4,
          texto:
            '¿Qué decisión establece una jerarquía clara entre el título y la descripción de un producto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aplicar el mismo tamaño a todos los elementos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Superponer el título sobre la descripción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Diferenciar su tamaño y peso tipográfico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Distribuir los textos sin un orden definido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció que el tamaño y el peso tipográfico permiten diferenciar niveles de información.',
          mensaje_incorrecto:
            'Revise la jerarquía visual: debe distinguir la información principal de sus detalles.',
        },
        {
          id: 5,
          texto:
            'Una ficha coloca nombre y precio junto a su fotografía, separados de otros productos. ¿Qué principio favorece esa relación?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cierre.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Proximidad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Simetría.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Dirección común.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificó la proximidad: los elementos cercanos tienden a percibirse como relacionados.',
          mensaje_incorrecto:
            'Observe la distancia entre los elementos: acercar información al producto facilita reconocer su relación.',
        },
        {
          id: 6,
          texto:
            '¿Qué modelo de color se utiliza para representar imágenes mediante luz roja, verde y azul en las pantallas?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'RGB.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'CMYK.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Escala de grises.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Blanco y negro.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció RGB como el modelo que combina luz roja, verde y azul.',
          mensaje_incorrecto:
            'Distinga pantalla e impresión: RGB combina luz; CMYK se relaciona con tintas.',
        },
        {
          id: 7,
          texto:
            'Una descripción resulta difícil de leer en un teléfono. ¿Qué ajuste debe priorizarse?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Añadir sombras a todas las letras.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducir el espacio entre todas las palabras.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Usar una fuente decorativa más compleja.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Revisar tamaño, contraste e interlineado.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Relacionó la facilidad de lectura con las condiciones de presentación del texto.',
          mensaje_incorrecto:
            'Compruebe tamaño, contraste y separación antes de añadir efectos tipográficos.',
        },
        {
          id: 8,
          texto:
            'Una imagen muestra una camisa azul sobre una silla. ¿Qué enunciado corresponde a una lectura denotativa?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La persona propietaria prefiere la vida urbana.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La escena demuestra una personalidad independiente.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Se observa una camisa azul sobre una silla.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La prenda representa el éxito de quien la usa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Diferenció la descripción de elementos visibles de las interpretaciones sobre su significado.',
          mensaje_incorrecto:
            'La denotación describe lo observable; las motivaciones o asociaciones requieren información adicional.',
        },
        {
          id: 9,
          texto:
            'Una fotografía del bolso completo no permite observar las costuras. ¿Qué toma complementaria resulta pertinente?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Un acercamiento enfocado en las costuras.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Una toma más lejana del mismo conjunto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una vista del espacio sin el bolso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Una imagen que oculte la superficie del material.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Seleccionó una toma de detalle que responde a la información que falta.',
          mensaje_incorrecto:
            'El acercamiento debe permitir observar la característica consultada sin ocultarla ni desenfocarla.',
        },
        {
          id: 10,
          texto:
            'Una empresa registra hechos y testimonios sobre la elaboración de una colección. ¿Qué enfoque fotográfico corresponde mejor?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Abstracto.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Documental.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Surrealista.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Gastronómico.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó el registro de hechos y procesos con la fotografía documental.',
          mensaje_incorrecto:
            'Revise la intención del registro: documentar un proceso requiere atender a hechos, participantes y contexto.',
        },
        {
          id: 11,
          texto:
            'Antes de grabar un video, el equipo define guion, participantes y espacio. ¿En qué fase trabaja?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Producción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Posproducción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preproducción.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Identificó la preproducción como la fase de preparación anterior a la grabación.',
          mensaje_incorrecto:
            'Revise las fases: preparar guion y recursos corresponde a la preproducción.',
        },
        {
          id: 12,
          texto:
            'Durante la grabación, un bolso cambia de posición entre tomas consecutivas de la misma acción. ¿Qué aspecto debe revisarse?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Licencia del programa.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Nombre de exportación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Continuidad.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Número de publicaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció la continuidad como la coherencia entre posiciones y acciones de las tomas.',
          mensaje_incorrecto:
            'Compare las tomas relacionadas para mantener coherencia en objetos, vestuario y acciones.',
        },
        {
          id: 13,
          texto:
            'El equipo selecciona tomas, organiza la secuencia y ajusta el sonido. ¿En qué fase realiza estas tareas?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Preproducción.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Posproducción.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Selección de participantes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Preparación del espacio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Identificó tareas de edición y montaje propias de la posproducción.',
          mensaje_incorrecto:
            'La posproducción organiza y ajusta el material registrado para construir la versión final.',
        },
        {
          id: 14,
          texto:
            'Un video incluye subtítulos automáticos. ¿Qué debe hacerse antes de publicarlo?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Publicarlos sin revisar porque son automáticos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Eliminar las voces para evitar su comprobación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reducir su tamaño hasta que resulten imperceptibles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Comprobar texto, sincronización y sonidos relevantes.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Reconoció que los subtítulos requieren revisión para comunicar correctamente la información sonora.',
          mensaje_incorrecto:
            'Verifique palabras, tiempos e identificación de sonidos relevantes; la generación automática puede contener errores.',
        },
        {
          id: 15,
          texto:
            'Una empresa necesita modificar el tamaño de un icono conservando sus contornos. ¿Qué representación es adecuada?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Gráfico vectorial.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Fotografía ampliada por encima de su detalle disponible.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Imagen borrosa de baja resolución.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Captura de pantalla del icono.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó los trazados vectoriales con el cambio de tamaño de contornos definidos.',
          mensaje_incorrecto:
            'Los gráficos vectoriales representan formas mediante trazados; una captura rasterizada puede perder definición al ampliarse.',
        },
        {
          id: 16,
          texto:
            '¿Qué criterio debe orientar la elección de una herramienta para preparar una pieza comunicacional?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Únicamente el número de efectos decorativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo la popularidad de su nombre.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Las tareas, los formatos y los recursos disponibles.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La apariencia del icono del programa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Seleccionó criterios relacionados con el trabajo que debe realizarse y las condiciones de entrega.',
          mensaje_incorrecto:
            'Compare funciones, compatibilidad, acceso y exportación según el propósito de la pieza.',
        },
        {
          id: 17,
          texto:
            'Una empresa entrega un catálogo PDF y necesita actualizarlo después. ¿Qué archivo debe conservar además?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Solo una captura de la portada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Únicamente el mensaje que anuncia el catálogo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una imagen reducida de una página.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El proyecto editable y sus recursos vinculados.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Reconoció la necesidad de conservar el proyecto para modificar textos, imágenes y composición.',
          mensaje_incorrecto:
            'El archivo de distribución no sustituye la conservación del proyecto y sus recursos de edición.',
        },
        {
          id: 18,
          texto: '¿Cuál es la diferencia entre identidad e imagen de marca?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La identidad expresa la propuesta; la imagen corresponde a la percepción del público.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'La identidad es el precio; la imagen es el inventario.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ambas describen exclusivamente el tamaño del logotipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La imagen define las medidas; la identidad define las tallas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Diferenció lo que la marca define y comunica de la percepción que construyen sus públicos.',
          mensaje_incorrecto:
            'Revise ambos conceptos: la identidad orienta la expresión de marca; la imagen se relaciona con su percepción.',
        },
        {
          id: 19,
          texto:
            '¿Qué pregunta ayuda a definir la misión de una empresa de moda?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '¿Cómo desea ser reconocida en el futuro?',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '¿Qué formato de video usará esta semana?',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '¿Cuál es su propósito actual y a quién sirve?',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: '¿Cuántos colores contiene una fotografía?',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Relacionó la misión con el propósito actual y el público al que sirve la empresa.',
          mensaje_incorrecto:
            'Distinga misión y visión: la misión explica el propósito actual; la visión plantea una aspiración futura.',
        },
        {
          id: 20,
          texto:
            'Una plantilla obliga a estirar el logotipo para ocupar más espacio. ¿Qué decisión mantiene la identidad visual?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Estirar el logotipo hasta llenar el espacio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Reorganizar la composición conservando las proporciones autorizadas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Cambiar sus letras sin consultar el manual.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Añadir efectos que modifiquen su forma.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Reconoció que debe adaptar la composición respetando las reglas de aplicación del identificador.',
          mensaje_incorrecto:
            'Revise el manual y utilice una versión autorizada sin deformar sus proporciones.',
        },
      ],
    },
  }),
}
</script>
