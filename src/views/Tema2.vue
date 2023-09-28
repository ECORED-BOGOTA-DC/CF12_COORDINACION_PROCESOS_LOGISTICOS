<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Distribución Física Internacional
    
    .cajon.color-acento-contenido.p-4.mb-5
      .row.justify-content-center.align-items-center
        .col-lg-7.order-lg-1.order-2(data-aos="fade-right")
          p.mb-0 La DFI está relacionada en sí, ya que es un conjunto de operaciones necesarias que se realizan en las empresas que practican esta actividad en el mercado global. Se reconoce que su función radica en el proceso de desplazamiento de la carga de las mercancías desde un punto de origen hasta un punto de destino final de entrega.  En la siguiente imagen, se ilustra el proceso de transporte en una cadena de suministro:
        .col-lg-5.col-10.px-5.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img01.svg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10.d-lg-flex.d-none
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img02.svg' alt="Imagen distribución física internacional muestra el proceso:<br>-Proveedores fabricantes-")
      .col-sm-8.d-lg-none.d-flex
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema2/img03.svg' alt="Imagen distribución física internacional muestra el proceso:<br>-Proveedores fabricantes-")
    
    separador
    #t_2_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.1 Conceptos generales
    
    p.mb-5(data-aos="fade-right") A continuación, se describen algunos conceptos relacionados con distribución internacional:

    .BGM07.px-md-5.px-4
      .row.justify-content-center.align-items-center.mb-4
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Logística]: de ella depende la competitividad, la dinámica comercial y empresarial que tenga la empresa dedicada al comercio internacional, dejando claro que toda empresa se ve en la obligación de ajustar su proceso con base en nuevos esquemas que se han dado como consecuencia de las buenas prácticas logísticas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Cadena de suministro]: Ballou (2004) la define como un conjunto de actividades funcionales (transporte, control de inventarios, etc.) que se repite muchas veces a lo largo del canal de flujo, mediante las cuales la materia prima se convierte en productos terminados y se añade valor para el consumidor.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Centro logístico]: corresponde al lugar donde se almacena el producto que ha pasado por un proceso de transformación, luego de establecer las directrices para su recepción, transporte y distribución.
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img04.svg' alt="Imagen decorativa")

      .row.justify-content-center.mb-4
        .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
          img(src='@/assets/curso/tema2/img05.svg' alt="Imagen decorativa")
        .col-lg-8(data-aos="fade-left")
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Flota de transporte logístico]: hace referencia al parque automotor de transporte con el que cuenta la empresa para realizar la actividad de traslado de las mercancías desde el punto de partida hasta el punto final del proceso logístico. Si no se cuenta con la flota de transporte, la empresa debe contratar inmediatamente este servicio con una que genere confianza y sea responsable en el mercado internacional.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Distribución logística]: está relacionada con la actividad de distribución de materiales, materias primas e insumos a la planta de producción, donde se lleva a cabo el proceso de transformación en un producto final, que luego será evaluado y verificado para garantizar que cumple con todos los estándares de calidad y que, posteriormente, será trasladado hasta la bodega de almacenaje, de la cual saldrá al punto final de entrega.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Logística inversa]: es la que hace referencia a una etapa que no es estrictamente necesaria, pues su objetivo es devolver el producto desde el consumidor final hasta el distribuidor o proveedor.

      .row.justify-content-center.align-items-center.mb-5
        .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Entrega de última milla]: esta consiste en la entrega directa del producto al cliente final a través de un proceso de delivery (entrega).
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Entrega fallida]: es aquella que está relacionada con el fracaso, y se da cuando el producto final llega defectuoso o no es el requerido por el cliente. En algunos casos, no llega a tiempo, dejando muy claro que se está perdiendo el grado de fidelización por falta de compromiso y cumplimiento por parte de la empresa a la cual se le requiere la mercancía. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #57DBD8;")
              p.mb-0 #[strong Entrega segura]: es aquella que hace referencia al mecanismo realizado en el proceso de la compra, traslado y entrega de la mercancía a su respectivo cliente final, quien es el encargado de evaluar el proceso adquirido con el proveedor, logrando la satisfacción de sus necesidades. 
        .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
          img(src='@/assets/curso/tema2/img06.svg' alt="Imagen decorativa")

    separador
    #t_2_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.2 Modos y medios de transporte
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.order-lg-1.order-2(data-aos="fade-right")
        p En el mundo global del comercio internacional, existen muchos medios de transporte que son utilizados por las diferentes empresas dedicadas y encargadas de exportar e importar.
        p.mb-0 Entre los medios de transporte, los más asequibles para cumplir con la satisfacción de las necesidades de las empresas están los de carácter aéreo, marítimo, terrestre y ferrovial.  En la siguiente imagen, se representan los más utilizados:
      .col-lg-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img07.png' alt="Imagen decorativa")

    .BGIMG01.px-md-5.px-4.mb-4
      .row.justify-content-center
        .col-lg-6
          .titulo-sexto.color-acento-botones(data-aos="fade-right")
            h5 Figura 3.
            span Medios de transporte
          figure(data-aos="zoom-in")
            img(src='@/assets/curso/tema2/img08.svg' alt="Muestra medios de transporte:<br>-transporte marítimo<br>-transporte terrestre<br>-transporte aéreo<br>-transporte ferrovial<br>-transporte multimodal")
    
    separador
    #t_2_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.3 Documentación para la exportación (vistos buenos)
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p La exportación está relacionada con la actividad de salida de mercancías del territorio aduanero nacional, donde el agente aduanero debe aplicar un proceso de verificación de que la mercancía saliente del país cumpla con los estándares de calidad y la normatividad vigente, con destino a otro país o zona franca industrial de bienes y servicios.
        .cajon.color-acento-contenido.p-4
          p.mb-0 En el decreto 2685 de diciembre 28 de 1999, se establecen una serie de parámetros y normas para realizar los trámites y documentos pertinentes para el libre tránsito de entrada y salida de mercancías del país.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img09.png' alt="Imagen decorativa")
    
    .h5.text-center.mb-5(data-aos="fade-left") A continuación, se describen estos parámetros y normas:

    .BGR08.p-4.mb-5(data-aos="zoom-in")
      LineaTiempoC.color-acento-botones(text-small)
        .row.justify-content-center(titulo="Registro")
          .col-lg-8.order-lg-1.order-2
            .h4 Registro como exportador
            p Está compuesto por los interrogantes: 
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FE7062;")
                p.mb-0 #[strong ¿Qué hacer?]  Lo primero es inscribirse en el RUT; si ya está inscrito, se debe actualizar y agregar en las casillas correspondientes la actividad en uso como exportador.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FE7062;")
                p.mb-0 #[strong ¿Dónde realizo el trámite?] En las diferentes oficinas pertenecientes a la DIAN.
              li(style="margin-bottom: 2px")
                i.fas.fa-caret-square-right(style="color: #FE7062;")
                p.mb-0 #[strong ¿Qué beneficios se obtienen?] La devolución o descuento del IVA.
            p.mb-0 Para utilizar las aduanas colombianas, la empresa debe estar inscrita en el Régimen Común, según la reforma tributaria 863 en su artículo 49, de diciembre de 2003.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img10.png' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Calificación")
          .col-lg-8.order-lg-1.order-2
            .h4 Autocalificación origen
            p Es el trámite más común, está encargado de determinar el origen de las mercancías objeto de exportación y se debe marcar con una etiqueta de reconocimiento de qué país de origen procede.
            p.mb-0 #[strong Ejemplo]: #[em Made in Colombia] (Hecho en Colombia)
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img11.png' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Certificado")
          .col-lg-8.order-lg-1.order-2
            .h4 Certificado de origen
            p.mb-0 Este documento permite exportar productos con descuentos arancelarios a aquellos países con los que Colombia ha negociado convenios y TLC.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img12.png' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Vo.Bo")
          .col-lg-8.order-lg-1.order-2
            .h4 Vistos buenos
            p En la exportación de ciertos productos, se exige que el exportador se encuentre inscrito en la entidad encargada de su control y/o del otorgamiento del visto bueno.
            p El exportador debe tramitar, ante la autoridad correspondiente y obtener con anterioridad a la exportación, los vistos buenos o requisitos especiales, de conformidad con las normas vigentes, entre ellos:
            .row.justify-content-center
              .col-lg-6
                ul.lista-ul--color
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | CITES
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | Ministerio de cultura
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | INVIMA
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | ICA
              .col-lg-6
                ul.lista-ul--color
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | Instituto colombiano de antropología e historia
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | FDA
                  li(style="margin-bottom: 2px")
                    i.fas.fa-caret-square-right(style="color: #FE7062;")
                    | APHIS
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img13.png' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Aduana")
          .col-lg-8.order-lg-1.order-2
            .h4 Trámites aduaneros
            p.mb-0 Los trámites llevan su trazabilidad, que se encarga de la entrega de la carga, seguida de la solicitud y autorización de embarque, la aplicación de la inspección, para luego realizar la Declaración de Exportación (DEX).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img14.png' alt="Imagen decorativa")
        .row.justify-content-center(titulo="Divisas")
          .col-lg-8.order-lg-1.order-2
            .h4 Registro de divisas
            p.mb-0 Está relacionado con el medio de pago. Según este recurso, es el intermediario del mercado cambiario, donde se debe preparar luego la presentación de la declaración de cambio.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema2/img15.png' alt="Imagen decorativa")

    separador
    #t_2_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.4 Costos de exportación
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p Para calcular el precio de un producto para la exportación, se debe tener presente:
        .cajon.color-acento-contenido.p-4.mb-4  
          p.mb-0 Que el medio correcto para calcular el precio de un producto cuya finalidad es la exportación debe tener presente la oferta clara y completa, y la adecuada elección de los términos de venta y de pago, ya que son los elementos críticos cuando se vende a nivel internacional, basándose en la normatividad vigente de exportación e importación.
        p.mb-0 Entonces, para poder lograr definir el precio de venta de un producto, es conveniente tomar en cuenta las siguientes consideraciones:
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img16.png' alt="Imagen decorativa")

    ul.lista-ul--color.lista-ul--separador.mb-5
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-caret-square-right(style="color: #FE7062;")
        | Se debe seguir una estrategia de penetración del nuevo mercado, la cual se basa en una mera operación puntual en el mercado global.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-caret-square-right(style="color: #FE7062;")
        | Analizar todos los precios de la competencia presente en el mercado-objetivo, para identificar en qué rango de precios se podría vender el producto en el mercado actual.
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-caret-square-right(style="color: #FE7062;")
        | ¿Qué tipo de descuentos ofrecer a la firma de los compradores extranjeros?
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-caret-square-right(style="color: #FE7062;")
        | ¿Cuáles son las alternativas de precios si los costos de su empresa aumentan o disminuyen?
      li(style="margin-bottom: 2px" data-aos="fade-right")
        i.fas.fa-caret-square-right(style="color: #FE7062;")
        | ¿Se debe implementar una política gubernamental de intervención sobre los precios?

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 14%")
            img(src='@/assets/curso/temas/img02.svg' alt='Imagen decorativa')
          .tarjeta.BG04.p-4
            .row.justify-content-end.align-items-center
              .col-lg-8.order-lg-1.order-2
                p.mb-0 Es de gran importancia reconocer que los elementos básicos tradicionales deben determinar el precio de venta.
              .col-lg-3.col-6.px-4.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img18.svg' alt="Imagen decorativa")

    .h5.text-center.mb-5 A continuación, se describen elementos para integrar y distribuir los distintos tipos de costos, a partir de su correspondiente identificación y clasificación:

    LineaTiempoD.color-secundario.mb-4(data-aos="zoom-in")
      .row(numero="1" titulo="Producción")
        .col-lg-9.order-lg-1.order-2
          p Son aquellos gastos necesarios que se usan para el desarrollo de una línea de producción, estos están representados por los recursos humanos, hasta los gastos de materia prima, aprovisionamiento de mano de obra calificada, entre otros costes.
          p A continuación, se definen algunos costos variables de producción:
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong Materia prima]: corresponde a la materia extraída de otros materiales y que es sometida a un proceso de producción y transformación en un producto final, cumpliendo con todos los estándares de control de calidad, para ser distribuido y comercializado en el país.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong Mano de obra]: es el trabajo realizado por una persona dedicada a cumplir con diferentes actividades, la cual puede ser mano de obra calificada o no calificada.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong Costos variables]: son los que, por ejemplo, se generan por la movilización del vehículo. Dentro de estos, se reconocen los siguientes: combustible, mantenimiento, reparaciones, llantas, peajes, lubricantes, lavado, engrase e imprevistos.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img19.png' alt="Imagen decorativa")
      .row(numero="2" titulo="Comercialización")
        .col-lg-9.order-lg-1.order-2
          p Son los que se involucran en el proceso de venta de un producto, por ejemplo: costos de gestión, ampliación de cartera de clientes, entre otros.
          p Estos costos se originan, entre otras, por las siguientes actividades:
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              | Investigaciones y estudios de mercado.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              | Promoción de ventas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              | Publicidad.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              | Distribución.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              | Ventas y sus costos administrativos.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img20.png' alt="Imagen decorativa")
      div(numero="3" titulo="Exportación")
        p Son la suma de los gastos que originan los diferentes actos encaminados a la exportación. Estos actos a veces logran variar, dependiendo del tipo de negociación que se realizó, donde se establecen cuáles términos de venta internacional se deben seguir, utilizando “Incoterms”.
        p A continuación, se describen los componentes del precio de exportación y público: 
        .row.justify-content-center
          .col-lg-6
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #1A0F91;")
                | Precio de exportación: FOB = CP+ CE + CF + IM - In + U
            p.ms-4 #[strong CP] = Costos de producción (fijos y variables)
            p.ms-4 #[strong CE] = Costos de exportación (fijos y variables)
            p.ms-4 #[strong CF] = Costos financieros
            p.ms-4 #[strong IM] = Impuestos internos o no recuperables
            p.ms-4 #[strong In] = Incentivos
            p.ms-4.mb-0 #[strong U] = Utilidad buscada
          .col-lg-6
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #1A0F91;")
                | Precio al público: PE + FS + TI + UI + UM
            p.ms-4 El precio al público está compuesto por el precio de exportación FOB
            p.ms-4 #[strong PE] = Precio de exportación
            p.ms-4 #[strong FS] = Fletes y seguros
            p.ms-4 #[strong TI] = Tasas de importación / impuestos de nacionalización
            p.ms-4 #[strong UI] = Utilidad del importador / distribuidor
            p.ms-4.mb-0 #[strong UM] = Utilidad minorista.

    separador
    #t_2_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.5 Costos de importación
    
    p.mb-5(data-aos="fade-right") El costo de importación está constituido por el precio origen de compra. Se debe realizar el costeo de importación porque es necesario saber cuánto vale el producto puesto en origen y cuánto vale puesto en el local de la empresa, incluso, aquí se puede incluir todo lo que se ha pagado para que el producto llegue al país destino, como:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Costo de producto
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Flete internacional
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Gastos locales en el país
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Comisión del agente de aduana
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Tributos o impuestos
          li(style="margin-bottom: 2px" data-aos="fade-right")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Comisión que cobra el banco al momento de pagar al proveedor
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img21.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img
            img(src='@/assets/curso/temas/img02.svg' alt='Imagen decorativa')
          .tarjeta.BG04.p-4
            .row.justify-content-end.align-items-center
              .col-lg-8.order-lg-1.order-2
                p.mb-0 #[strong ¿Un costeo de importación se realiza antes o después de pagarle al proveedor?] Claro que se debe realizar antes de pagarle al proveedor.
              .col-lg-3.col-6.px-4.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema2/img22.svg' alt="Imagen decorativa")

    separador
    #t_2_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.6 Simulador de costos de Procolombia DFI
    
    p.mb-5(data-aos="fade-right") Los simuladores de costos logísticos se reconocen como una herramienta que ofrece Procolombia a los exportadores colombianos con el único propósito de apoyarles en la realización del análisis de costos de DFI.

    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema2/img23.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Se reconoce que los costos de la DFI no presentan un valor concreto y estimado en el producto final, sino que se debe evaluar en términos de competitividad, oportunidad de entrega y satisfacción del cliente, logrando determinar la rentabilidad de una operación de comercio internacional.

    .BGM03.p-md-5.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center.mb-4
        .col-lg-3.col-6
          img(src='@/assets/curso/tema2/img24.svg' alt="Imagen decorativa")
        .col-lg-3.col-8
          .h5 Costos directos:
          p #[strong * S] = Bodega de almacenaje
          p #[strong T] = Flete interno país destino
          p #[strong U] = Seguro interno país destino
          p #[strong V] = Documentación
          p #[strong W] = Tributos aduaneros
          p #[strong W] = Tributos bancarios
          p #[strong Y] = Agentes
        .col-lg-3.col-8
          .h5 Costos indirectos:
          p.mb-0 #[strong Z] = Administrativos
      .row.justify-content-center
        .col-lg-10
          p.mb-0 Se debe tener muy presente que todo proceso de una operación de exportación e importación está conformado por una serie de etapas, donde las empresas son las encargadas de tomar la decisión de comprar o vender productos en el mercado internacional global.

    separador
    #t_2_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 2.7 TIC aplicados a la DFI
    
    .row.justify-content-center.mb-5
      .col-lg-4.col-8.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img25.png' alt="Imagen decorativa")
      .col-lg-8(data-aos="fade-left")
        p La aplicación de las TIC en las empresas con función en la administración y coordinación en los procesos logísticos son de gran ayuda en la implementación, ya que se relacionan con todos los procesos de comunicación más comunes e innovadores en el mercado internacional. A partir de allí, estas tecnologías les permiten a todas las empresas que la ejecución de su actividad específica esté relacionada con la coordinación de los procesos logísticos, logrando mejorar las condiciones de la compra entre el comprador y vendedor, de la siguiente manera: almacenar, procesar y difundir todo tipo de información.
        p.mb-0 Cabe destacar que las TIC reducen costos, mejoran la eficiencia y aumentan la productividad en los procesos de la empresa.  A continuación, se presentan algunas de las ventajas de utilizar TIC en las empresas:

    .row.justify-content-center.mb-5
      .col-lg-10.mb-4(data-aos="flip-up")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 8%; left: -3%")
            img(src='@/assets/curso/tema2/img26.svg' alt='Imagen decorativa')
          .tarjeta.BGR05.p-4
            p.ms-5.mb-0 Por su rapidez y precisión en la toma de decisiones. Gracias a la aplicación de las siguientes herramientas, se facilita el desarrollo de las tareas en función: Macrodatos, Google Analytics, Microsoft CRM Dynamics, entre otras.
      .col-lg-10(data-aos="flip-up")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 8%; left: -3%")
            img(src='@/assets/curso/tema2/img27.svg' alt='Imagen decorativa')
          .tarjeta.BGR05.p-4
            p.ms-5.mb-0 En el #[em marketing], permiten identificar el público objetivo, sus necesidades y tendencias relacionadas con el proceso.

    .h5.text-center.mb-5(data-aos="fade-left") En la aplicación de los procesos logísticos se identifican y relacionan las siguientes TIC:

    LineaTiempoD.color-secundario(data-aos="zoom-in")
      .row(numero="1" titulo="Aprovisionamiento")
        .col-lg-9.order-lg-1.order-2
           ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Electronic Data Interchange] (EDI)]: intercambio electrónico de datos, por ejemplo, los utilizados para realizar transacciones bancarias a través de Internet.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em E-Procurement]]: es la herramienta más útil en el proceso que busca automatizar y optimizar los procesos relacionados con las compras, mediante el #[em software] e Internet. Con la aplicación de las TIC, se buscan las interrelaciones de la dinámica que debe existir para mejorar la comunicación entre el comprador y el vendedor, logrando obtener mejores resultados.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Vendor-Managed Inventory] (VMI) / #[em Continuos Replenishment Program] (CRP)]: constituyen el sistema de aprovisionamiento, el cual está basado en el intercambio de información usada a través de internet o el EDI.  El propio proveedor debe gestionar los niveles de #[em stock] de la empresa a la que vende, generando así buenos resultados en la adquisición de los pedidos.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img28.png' alt="Imagen decorativa")
      .row(numero="2" titulo="Internos")
        .col-lg-9.order-lg-1.order-2
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Enterprise Resource Planning] (ERP)]: es una herramienta relacionada con la planificación de recursos de la empresa, y se usa mediante un #[em software] concebido para gestionar en forma integrada las funciones de la organización, cuyo objetivo es mejorar los estilos y procesos de comunicación en las compras y ventas.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Warehouse Management System] (WMS)]: está representado o relacionado como un subsistema de información que ayuda a administrar el flujo de los productos y manejo de las instalaciones en la red logística en el mercado global. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong Código de barras]: es la herramienta que permite capturar rápidamente la información relacionada con los números de identificación de cada artículo comercial, así como las unidades logísticas y la localización en cualquier punto de la red de valor. 
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Radio Frequency Identification] (RFID)]: esta es una de las aplicaciones diseñadas como un término genérico para referirse a todas las tecnologías que usan las ondas de radio para identificar productos en forma automática. Se emplean etiquetas especiales o tags que emiten señales de radio a dispositivos lectores encargados de recoger las señales.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Pick up to Light y Pick up to Voice]]: esta nueva técnica fue diseñada y trata los sistemas de #[em picking] que no requieren del uso de papeles, se basan en redes luminosas y sistemas de voz, respectivamente, y son muy útiles en las empresas.
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img29.png' alt="Imagen decorativa")
      .row(numero="3" titulo="Salidas")
        .col-lg-9.order-lg-1.order-2
          ul.lista-ul--color
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Transportation Management System] (TMS)]: este es uno de los procesos donde se representa una serie de alternativas de modos de transporte, costos de fletes, tiempos esperados de cargue, etc., lo que permite optimizar los recursos de transporte, haciendo coincidir su menor costo con los estándares de servicios requeridos por el cliente para lograr satisfacer sus necesidades.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Consumer Relationship Management] (CRM)]: corresponde a la administración de relaciones con el cliente, esta es una estrategia que permite a las empresas identificar, atraer y retener a sus clientes, logrando mejorar y poder cubrir los procesos de mercadeo, ventas y servicio al cliente.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Efficient Consumer Response] (ECR)]: denominado como un modelo estratégico de respuesta eficiente al cliente, el cual trabaja y se aplica conjuntamente entre clientes y proveedores, logrando entregar el mayor valor agregado al consumidor final.
            li(style="margin-bottom: 2px")
              i.fas.fa-check-circle(style="color: #1A0F91;")
              p.mb-0 #[strong #[em Global Position System] (GPS)]: permite determinar la ubicación de un objeto con gran exactitud. Con el uso de la aplicación del GPS, se puede realizar monitoreo en tiempo real en los diversos puntos de cadena de suministros, así como de cargas de vehículos de transporte, que permiten un mejor uso y desarrollo de las actividades en el tiempo específico y acordado por ambas partes.
          p.mb-0 (Correa y Gómez, 2009).
        .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4
          img(src='@/assets/curso/tema2/img30.png' alt="Imagen decorativa")

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
