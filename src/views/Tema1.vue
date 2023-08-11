<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Mercado financiero internacional
    
    .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img01.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Los mercados financieros internacionales se relacionan a la agrupación de inversionistas e instituciones de varias nacionalidades cuyo objetivo o fin es participar en la compra y venta de activos financieros como acciones, bonos, derivados, entre otros; dando un avance en la participación de los TLC.

    .h5.text-center.mb-5 Algunos términos involucrados son:

    .tarjeta--container.row.mb-5
      .col-md.tarjeta--boton.color-acento-contenido.BGRS01.p-5(data-aos="fade-right")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/tema1/img02.svg', alt='Imagen decorativa') 
        .h4.text-center Acciones
        p.mb-0 Son aquellas adquiridas en determinado momento, representadas por la inversión de capital en una empresa, donde el inversionista se convierte en propietario y socio capitalista de la compañía en proporción al valor de acciones compradas a la empresa donde desea participar.
      .col-md.tarjeta--boton.color-primario.BGRS02.p-5(data-aos="fade-left")
        .row.justify-content-center.mb-4
          .col-lg-4.col-6
            figure
              img(src='@/assets/curso/tema1/img03.svg', alt='Imagen decorativa') 
        .h4.text-center Bonos
        p.mb-0 Son un instrumento de deuda que emite una empresa; también son conocidos como una de las principales fuentes de financiación con la que cuentan las grandes empresas en el mercado global, al igual que las entidades públicas.

    separador
    #t_1_1.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.1 Conceptos

    .h5.text-center.mb-5 Los siguientes son algunos conceptos relacionados con mercado:

    TabsA.color-acento-contenido.mb-5(data-aos="zoom-in")
      .tarjeta.BG03.p-4(titulo="Mercado")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            p El mercado se reconoce como la actividad que nació con el intercambio, ya que el hombre, desde la antigüedad, descubrió esta necesidad de intercambiar cosas para la satisfacción de sus necesidades y en pro de mejorar su calidad de vida.
            p.mb-0 Es un proceso o actividad en la que participan dos o más personas cuyo objetivo es la compra o venta de mercancías.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img04.png' alt="Imagen decorativa")
      .tarjeta.BG03.p-4(titulo="Comprador")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            p Se le reconoce como comprador a la persona o empresa que por una necesidad ejerce esta actividad económica en el mercado y cuyo objetivo es adquirir un producto, materiales, insumos, entre otros.
            p.mb-0 También se puede decir que es conocido como un consumidor de productos de consumo.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img05.png' alt="Imagen decorativa")
      .tarjeta.BG03.p-4(titulo="Vendedor")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            p.mb-0 Es la persona o empresa que va a realizar la entrega del producto o servicio que está ofreciendo en el mercado, ya sea para recibir a cambio otro producto o un bien financiero económico (dinero).
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img06.png' alt="Imagen decorativa")
      .tarjeta.BG03.p-4(titulo="Mercados financieros")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            p Son aquellos conocidos como los mecanismos que permiten a las personas u empresas realizar actividades como vender y comprar activos financieros, ya sea por intermedio de un espacio físico o virtual.
            p.mb-0 Este tipo de mercado financiero funciona como cualquier otro tipo de mercado, donde su actividad es negociar los activos, permitiendo a los compradores y vendedores un buen proceso de comunicación, logrando los intercambios propuestos.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img07.png' alt="Imagen decorativa")
      .tarjeta.BG03.p-4(titulo="Tipos de mercado")
        .row.justify-content-center.align-items-center
          .col-lg-8.order-lg-1.order-2
            p Se encuentran diferentes agentes que influyen de acuerdo con las características de los compradores, cuando se lleva a cabo esta actividad. Se pueden clasificar en:
            .h5 Consumo de:
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Productos de consumo inmediato.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Productos de consumo duradero.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Servicios.
            .h5 Industriales o institucionales de: 
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Productos agropecuarios y procedentes del mar.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Materias primas.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Productos técnicos o industriales.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Productos manufacturados.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Servicios.
          .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img08.png' alt="Imagen decorativa")

    p Se puede decir que entre más competencia exista en el mercado, mejor se reconoce que la base del mercado es el intercambio, ya que el hombre, desde la antigüedad, advirtió la necesidad de intercambiar bienes y servicios, pues esto mejora las condiciones de vida.
    p.mb-5 Primero, fue el trueque, aplicado en la antigüedad, donde se intercambiaron cosas y servicios entre sí para poder sobrevivir y satisfacer las necesidades. Luego, el mundo moderno y global, donde se ve la gran importancia y el papel que juega el mercado financiero internacional, gracias a la apertura de los TLC.

    .h5.text-center.mb-5 En la siguiente imagen, se encuentran diferentes tipos y modelos de mercado con base en los productos:

    .row.justify-content-center.mb-5
      .col-lg.d-lg-flex.d-none
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img09.svg' alt="Imagen decorativa")
      .col-md-8.col-sm-10.d-lg-none.d-flex
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img10.svg' alt="Imagen decorativa")

    p El mercado financiero internacional se reconoce como el conjunto de transacciones financieras de una economía, mediante determinados instrumentos que permiten la transferencia de fondos temporales libres entre entes económicos.
    .cajon.color-primario.p-4.mb-5(data-aos="flip-up")
      p.mb-0 En el mercado global, existe variedad en el desarrollo de los diferentes estilos de compra de bienes y servicios que se aplican en las diferentes plazas, debido al avance tecnológico, donde se debe enfocar más en expandir la industria colombiana, logrando el cumplimiento de las metas u objetivos, gracias a que el país cuenta con la apertura de la política de los TLC.

    .h5.text-center.mb-5 A continuación, se encuentra la clasificación de los tipos de mercados según el comprador:

    .row.justify-content-center.mb-5
      .col-lg-6
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Figura 1.
          span Tipos de mercado dependiendo del comprador
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img11.svg' alt="Imagen decorativa")

    
    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img12.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .h5.mb-5 Dentro de los tipos de mercado reconocidos, se encuentran:
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Mercados de capitales: están los bancarios y los no bancarios.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Mercado monetario.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Mercado de divisas. 
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Mercado de derivados.

    p.mb-5 Se reconocen e identifican los diferentes mercados bancarios, entre ellos, los bancos de inversión, los bancos comerciales. Los mercados no bancarios están relacionados como: renta variable y renta fija.  Ver información complementaria en la siguiente tabla:

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Tabla 1.
          span Tipos de mercado financiero
        .tabla-a.color-primario
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: #E9F0FE")
              tr
                th(style="background-color: #E9F0FE; width: 30%; font-size: 18px;") Tipo de mercado financiero
                th(style="background-color: #E9F0FE; width: 70%; font-size: 18px;") Ejemplos
            tbody
              tr
                th(style="background-color: #FFF;").text-center Mercados capitales
                td(style="background-color: #FFF;") Compra y venta de acciones y deuda pública.
              tr
                th(style="background-color: #F9FBFF;").text-center Mercados bursátiles
                td(style="background-color: #F9FBFF;") Son todos aquellos que les permiten a los inversionistas la compra y venta de acciones de empresas.
              tr
                th(style="background-color: #FFF;").text-center Mercados monetarios
                td(style="background-color: #FFF;") Dedicados a la actividad de prestar y solicitar préstamos a corto plazo.
              tr
                th(style="background-color: #F9FBFF;").text-center Mercados de bonos
                td(style="background-color: #F9FBFF;") Dirigidos a las actividades desarrolladas por los inversores, comprar deuda pública, préstamos de dinero a los entes gubernamentales.
              tr
                th(style="background-color: #FFF;").text-center Mercado Forex e intercambiario
                td(style="background-color: #FFF;") Mercado financiero dedicado a la compra y venta de divisas, como dólares con euros y viceversa. En la actividad de mercados intercambiarios solo los bancos son los que participan en la actividad.

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img13.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        .cajon.color-acento-contenido.p-4.mb-4  
          p.mb-0  Las organizaciones están llamadas a participar en el liderazgo de aplicación de nuevas estrategias de comercio, aplicando procesos de importación y siendo parte del cambio, entrando en el TLC, comprando bienes tangibles o intangibles que no se producen en el país.
        p La industria colombiana, desde el inicio de la era de la industrialización y la revolución industrial, ha generado gran importancia en el país, ya que es pionera en la producción de bienes de alta calidad. Se han manejado importantes procesos de producción, logística, entre otros, que generan un gran avance en el mercado industrializado y global actualmente.
        p.mb-0 La industria colombiana atraviesa un gran periodo, donde se ha avanzado poco a poco en el cambio global del comercio internacional, siendo parte de las importaciones bajo las normas vigentes para el ingreso de mercancías al país que satisfagan las necesidades de los clientes.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 14%")
            img(src='@/assets/curso/temas/img02.svg' alt='Imagen decorativa')
          .tarjeta.BG04.p-4
            .row.justify-content-end.align-items-center
              .col-lg-8.order-lg-1.order-2
                p.mb-0 Toda organización debe mantener y mejorar los procesos de comunicación en busca del éxito, logrando realizar un excelente proceso de importación, al adquirir productos que satisfagan las necesidades de los clientes, aplicando las reglas y la normatividad vigente en el desarrollo de dicho proceso de comercialización.
              .col-lg-3.col-6.px-4.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img15.svg' alt="Imagen decorativa")

    separador
    #t_1_2.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.2 Participantes en los mercados financieros
    
    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img16.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 Una economía depende principalmente de las interacciones entre los compradores y los vendedores, ya que ellos son los encargados de transferir los recursos, favoreciendo, así, e incrementando el libre mercado, donde el sistema financiero es el marco institucional en el que se agrupan instituciones, agentes, activos y mercados, logrando mejorar su finalidad de transmitir los recursos financieros que proceden de las unidades económicas, en sí reactivando el mercado financiero internacional a sus agentes participantes en busca de una mejor economía financiera para el país.

    .h5.text-center.mb-5 Componentes esenciales de un sistema financiero:

    .row.justify-content-center.mb-5
      .col-xl.col-md-6.mb-xl-0.mb-4(data-aos="fade-right")
        .tarjeta-numerada.color-primario.hg-01.p-5
          .tarjeta-numerada__numero
            .h2 1
          .h5.text-center Agentes
          p.mb-0 Están representados en las unidades económicas con déficit y superávit de recursos financieros, cuyo objetivo es determinar el elemento personal.
      .col-xl.col-md-6.mb-xl-0.mb-4(data-aos="flip-up")
        .tarjeta-numerada.color-acento-contenido.hg-01.p-5
          .tarjeta-numerada__numero
            .h2 2
          .h5.text-center Activos o instrumentos
          p.mb-0 Su finalidad es determinar el elemento material o real, gracias al intercambio del recurso financiero.
      .col-xl.col-md-6(data-aos="fade-left")
        .tarjeta-numerada.color-primario.hg-01.p-5
          .tarjeta-numerada__numero
            .h2 3
          .h5.text-center Mercados
          p.mb-0 Proceden o procesan las transacciones financieras del mercado internacional, cuya finalidad es determinar el elemento formal o convencional.

    p.mb-5 En el mercado global, el propósito del sistema financiero está relacionado y consiste en la canalización de los recursos financieros o ahorros producidos, logrando que los agentes participantes que tienen la capacidad de financiación puedan brindar una mejor posibilidad a los que tienen la necesidad de financiación (prestamista / prestatario), para así poder cubrir alguna necesidad de inversión que se presente en el mercado actual.
    .h5.text-center.mb-5 Participantes de los mercados financieros: 

    .BGIMG01.px-md-5.px-4.mb-5
      .row.justify-content-center
        .col-xl.col-md-3.col-sm-4.col-6.mb-xl-0.mb-4(data-aos="fade-right")
          .BGR04.hg-02.p-2
            .h4.text-gray.text-end.mb-0 1
            .px-2
              figure.mb-4
                img(src='@/assets/curso/tema1/img17.svg' alt='Imagen decorativa')
            .h5.text-center.text-small.mb-0 Los bancos
        .col-xl.col-md-3.col-sm-4.col-6.mb-xl-0.mb-4(data-aos="flip-up")
          .BGR04.hg-02.p-2
            .h4.text-gray.text-end.mb-0 2
            .px-2 
              figure.mb-4
                img(src='@/assets/curso/tema1/img18.svg' alt='Imagen decorativa')
            .h5.text-center.text-small.mb-0 Las aseguradoras
        .col-xl.col-md-3.col-sm-4.col-6.mb-xl-0.mb-4(data-aos="flip-up")
          .BGR04.hg-02.p-2
            .h4.text-gray.text-end.mb-0 3
            .px-2 
              figure.mb-4
                img(src='@/assets/curso/tema1/img19.svg' alt='Imagen decorativa')
            .h5.text-center.text-small.mb-0 Afianzadoras
        .col-xl.col-md-3.col-sm-4.col-6.mb-xl-0.mb-4(data-aos="flip-up")
          .BGR04.hg-02.p-2
            .h4.text-gray.text-end.mb-0 4
            .px-2 
              figure.mb-4
                img(src='@/assets/curso/tema1/img20.svg' alt='Imagen decorativa')
            .h5.text-center.text-small.mb-0 Las arrendadoras
        .col-xl.col-md-3.col-sm-4.col-6.mb-xl-0.mb-4(data-aos="flip-up")
          .BGR04.hg-02.p-2
            .h4.text-gray.text-end.mb-0 5
            .px-2 
              figure.mb-4
                img(src='@/assets/curso/tema1/img21.svg' alt='Imagen decorativa')
            .h5.text-center.text-small.mb-0 Las casas de bolsa de valores
        .col-xl.col-md-3.col-sm-4.col-6(data-aos="fade-left")
          .BGR04.hg-02.p-2
            .h4.text-gray.text-end.mb-0 6
            .px-2 
              figure.mb-4
                img(src='@/assets/curso/tema1/img22.svg' alt='Imagen decorativa')
            .h5.text-center.text-small.mb-0 Las administradoras de los fondos de inversión

    p.mb-5 El mercado financiero es el mecanismo que permite el desarrollo de la actividad de vender y comprar fácilmente los títulos financieros (bonos y acciones), las materias primas y otros productos de valor, mediante transacciones de bajos costes, en el mercado global, ya sea por medio de un espacio físico o virtual.  La siguiente imagen muestra un esquema de estos participantes:       

    .row.justify-content-center.mb-5
      .col-lg-8
        figure(data-aos="zoom-in")
          img(src='@/assets/curso/tema1/img23.svg' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 14%")
            img(src='@/assets/curso/temas/img02.svg' alt='Imagen decorativa')
          .tarjeta.BG04.p-4
            .row.justify-content-end.align-items-center.mt-lg-4
              .col-lg-8.order-lg-1.order-2
                p.mb-0 En Colombia, para que una entidad pueda invertir en valores, debe obtener la autorización de la Superintendencia Financiera de Colombia (SFC).
              .col-lg-3.col-6.px-4.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img25.svg' alt="Imagen decorativa")

    separador
    #t_1_3.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.3 Sistema Monetario Internacional
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p En el mercado global, las empresas dedicadas a la comercialización de productos por medio de la aplicación del  proceso de exportación e importación reconocen la gran importancia de ser parte del mercado financiero internacional y que la globalización se incrementa de una manera acelerada, ya que para lograr establecer un sistema monetario se da paso al manejo del conjunto de instituciones, normas y acuerdos encargados del proceso de regulación de la actividad financiera de todo el mercado internacional.
        .cajon.color-primario.p-4
          p.mb-0 En Colombia, el sistema monetario internacional (SMI) se encuentra estructurado por el Banco de la República (BANREP), organismo encargado de dirigir y controlar las políticas monetarias, cambiarias y crediticias del país, y por instituciones avaladas por la SFC, quien se encarga de captar, administrar y colocar los recursos, tanto de las empresas como de las personas, reglamentadas por el cumplimiento de un conjunto de reglas, acuerdos, leyes e instituciones encargadas de regular el intercambio de los flujos financieros entre países.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img26.png' alt="Imagen decorativa")
      
    p De acuerdo con lo establecido por el mercado financiero internacional, una de las necesidades del SMI es la que se deriva del manejo de la gran variedad de monedas nacionales que se utilizan en las transacciones reales o financieras por los distintos agentes del mercado industrial global.

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img27.svg' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        p El SMI está encargado de ejecutar la actividad de regulación de los pagos y los cobros de las transacciones económicas internacionales. Su objetivo principal es la generación de liquidez monetaria, la cual está relacionada con los siguientes aspectos:
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Determinar los tipos de cambio de las diferentes monedas.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Acomodar los flujos de comercio internacional y de capital.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Realizar  los ajustes necesarios en la balanza de los diferentes pagos entre los diferentes países.

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Tabla 2.
          span Ventajas y desventajas SMI
        .tabla-a.color-primario
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: #E9F0FE")
              tr
                th(style="background-color: #E9F0FE; font-size: 18px;") Ventajas
                th(style="background-color: #E9F0FE; font-size: 18px;") Desventajas
            tbody
              tr
                td(style="background-color: #FFF;") Las depreciaciones son reversibles en el mercado global.
                td(style="background-color: #FFF;") La flexibilidad puede ser inflacionaria.
              tr
                td(style="background-color: #F9FBFF;") No debe existir necesidad en las grandes reservas internacionales del mercado global.
                td(style="background-color: #F9FBFF;") Solo se interesa y se encarga de beneficiar a los países productores y poseedores de oro.
              tr
                td(style="background-color: #FFF;") Fortalece el crecimiento de los mercados financieros internacionales.
                td(style="background-color: #FFF;") La cantidad del dinero que circula en el país se encuentra limitada por la cantidad de oro existente.
              tr
                td(style="background-color: #F9FBFF;") Fomentar e incrementar el ahorro y la inversión en el país.
                td(style="background-color: #F9FBFF;")

    separador
    #t_1_4.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.4 Tasa de cambio - Riesgo cambiario
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img28.jpg')})`}" alt="Imagen decorativa" data-aos="fade-right"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En el mercado internacional, las empresas cuya actividad está relacionada con la producción y comercialización de productos tangibles o intangibles, siendo partícipes de los TLC, han logrado una participación alta, dejando muy claro que la tasa de cambio se encarga de mostrar la interacción existente del movimiento entre dos o más monedas extranjeras.
    
    p.mb-5 En Colombia, se puede relacionar a la cantidad de pesos que se debe pagar por una unidad de moneda extranjera, por ejemplo, tomando como base la moneda extranjera representada por el dólar, ya que es una de las divisas de mayor uso en el mercado internacional.
    .h5.text-center.mb-5 A continuación, se describen algunos conceptos relacionados con esta temática:

    .BGM03.p-md-5.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-10
          SlyderB(:datos="datosSlyder")

    separador
    #t_1_5.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.5 Devaluación y revaluación de la moneda
    
    p.mb-5 En la mayoría de los casos, son los conceptos más útiles usados en el mercado financiero global.  Una moneda se devalúa cuando se dan muchas más monedas locales por una moneda extranjera, lo cual significa que esta devaluación de la moneda local, en este caso el peso colombiano, estaría perdiendo competitividad en el mercado, ya que vale menos que la moneda extranjera.
    .h5.text-center.mb-5 La siguiente información ilustra estos conceptos:

    TabsB.color-acento-contenido.mb-5(data-aos="zoom-in")
      .BG01.px-4.py-4.py-md-5(titulo="Devaluación" :icono="require('@/assets/curso/tema1/img34.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Es aquella que se da cuando la moneda de un país reduce su valor en comparación con las otras monedas del mercado global (extranjeras), en llegado caso, se puede producir por diferentes motivos, por ejemplo: cuando aumenta la masa monetaria, es decir, cuando se aumenta el número de billetes o monedas de un país, se aumenta inmediatamente la oferta, lo que genera una pérdida de valor en la moneda.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | En el caso de Colombia, es la reducción del peso frente al dólar, euro, etc.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Como consecuencia: las divisas de otros países se vuelven más caras ante el mercado en el país y, para los extranjeros, las divisas se convierten en más económicas en el mercado internacional.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | La devaluación se conoce como una caída del valor de la moneda local en el mercado internacional.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img34.png' alt="Imagen decorativa")
      .BG01.px-4.py-4.py-md-5(titulo="Revaluación" :icono="require('@/assets/curso/tema1/img35.svg')")
        .row.justify-content-center.align-items-center
          .col-lg-7.order-lg-1.order-2
            ul.lista-ul--color
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | Ocurre en caso contrario, es decir, la moneda de un país aumenta su valor en comparación con las demás monedas en el mercado internacional. Por lo tanto, se reconoce una baja en la tasa de cambio. Por ejemplo, en Colombia, se dan menos pesos por una unidad de moneda extranjera.  La revaluación, en algunos casos, es vista como que el país está perdiendo competitividad porque por cada dólar que se venda en los mercados globales e internacionales se estaría obteniendo menos unidades en la local.
              li(style="margin-bottom: 2px")
                i.fas.fa-check-circle(style="color: #57DBD8;")
                | En la revaluación, las divisas de referencia de otros países se convierten en más económicas en el mercado local, en el caso contrario, para los extranjeros las divisas suben de valor, siendo más costosas.
          .col-lg-5.col-10.order-lg-2.order-1.mb-lg-0.mb-4
            img(src='@/assets/curso/tema1/img35.png' alt="Imagen decorativa")

    separador
    #t_1_6.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.6 Índices financieros
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9.order-lg-1.order-2(data-aos="fade-right")
        p En el mercado financiero, los índices financieros están relacionados en el movimiento de varios activos financieros, representados en los indicadores financieros, los cuales se utilizan para mostrar las relaciones que existen entre las diferentes cuentas de los estados financieros basados en el mercado actual, dejando claro que sirven para analizar la liquidez, solvencia, rentabilidad y eficiencia operativa de la entidad. 
        .cajon.color-secundario.p-4  
          p.mb-0 El indicador financiero muestra el comportamiento o el logro durante el desempeño de toda una organización, gracias a los resultados arrojados en los informes contables.
      .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img36.svg' alt="Imagen decorativa")

    .h5.text-center.mb-5 Los siguientes son los tipos de indicadores financieros:

    .row.justify-content-center.mb-5
      .col-lg-10
        PasosA.color-acento-botones.mb-5(tipo="n")
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              .h4.text-secundario Indicador de rentabilidad
              p Es el encargado de medir la evolución de las ganancias con respecto a las operaciones realizadas y se logra obtener de la siguiente manera:
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Utilidad Neta / Activo, o]
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Utilidad Neta / Patrimonio.]
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img37.svg' alt="Imagen decorativa")
          .row.justify-content-center
            .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
              img(src='@/assets/curso/tema1/img38.svg' alt="Imagen decorativa")
            .col-lg-8(data-aos="fade-left")
              .h4.text-secundario.text-start Indicador de rentabilidad
              ul.lista-ul--color.text-start
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Índice Rotación de Inventario = Costo de Venta / Inventario].  Está representado por los resultados que indican el número de veces que el inventario puede rotar durante el año en curso.
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Índice de Rotación de Activos Fijos = Ventas / Activos Fijos Netos].  Representa la cantidad de veces que pueden rotar los activos fijos en el año en curso.
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Índice de Rotación de Activos Totales = Ventas / Total de Activos].  Indica el número o cantidad de veces que puede rotar el total de sus activos fijos durante el año en curso en la empresa.
          .row.justify-content-center.align-items-center
            .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
              .h4.text-secundario Indicador de liquidez
              p Se utiliza para calcular la capacidad que tiene una empresa para enfrentar los compromisos adquiridos a corto plazo, está representado en la solidez o base financiera con la que cuenta una empresa para cumplir con las obligaciones contraídas a corto plazo y se mide así: 
              ul.lista-ul--color
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Índice de Solvencia = Activos Corrientes / Pasivos Corrientes]. Representa la cantidad de veces que la empresa puede cubrir su pasivo corriente con el activo corriente.
  
                li(style="margin-bottom: 2px")
                  i.fas.fa-caret-square-right(style="color: #FE7062;")
                  p.mb-0 #[strong Capital Trabajo = Activo Circulante - Pasivo Circulante].  Representa los recursos que tiene la empresa para cumplir con sus actividades diarias.
            .col-lg-3.col-6.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/tema1/img39.svg' alt="Imagen decorativa")

    separador
    #t_1_7.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.7 Medios de pago
    
    .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/img40.jpg')})`}" alt="Imagen decorativa" data-aos="fade-left"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-right")
        p.mb-0 Es un instrumento que se utiliza para realizar la actividad de adquisición de un bien o servicio en el mercado; en pocas palabras, el medio de pago es aquel que se utiliza cuando se realiza la actividad de comprar un producto; por ejemplo, cuando se realiza una actividad de compra en un supermercado, al realizar el pago, se utiliza un medio de pago, ya sea efectivo, tarjeta débito, crédito, entre otros.

    p.mb-5 Se recomienda a todas las organizaciones, a la hora de realizar importaciones o exportaciones, tener un diseño propio estratégico de mercadeo internacional, que cumpla con los estándares de calidad para el desarrollo de las actividades, como los medios de pago internacionales. En este caso, se aplica con las entidades o personas con las que se va a interactuar en el desarrollo del proceso de traslado y entrega final de las mercancías en el lugar indicado. Es muy preciso tener presente siempre cómo encontrar un agente comercial con quien se llevará a cabo la actividad, ya sea de compra o venta.

    .row.justify-content-center.mb-5
      .col-lg-5.col-10.mb-lg-0.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/tema1/img41.png' alt="Imagen decorativa")
      .col-lg-7(data-aos="fade-left")
        p Todo proceso o medio de pago utilizado por las empresas o personas en el momento de realizar una importación o exportación debe tener su diseño de plan de comercio basado en los siguientes aspectos:
        ul.lista-ul--color.lista-ul--separador
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Realizar un estudio de investigación de mercado.
          li(style="margin-bottom: 2px")
            i.fas.fa-caret-square-right(style="color: #FE7062;")
            | Buscar los agentes comerciales que conozcan el mercado al cual se dirige o donde se va a importar o exportar. 
        p.mb-0 Con esto, se pueden plantear qué tipos o medios de financiación se deben utilizar o aplicar en el desarrollo de la actividad en curso.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 14%")
            img(src='@/assets/curso/temas/img02.svg' alt='Imagen decorativa')
          .tarjeta.BG04
            .row.justify-content-end.align-items-center
              .col-lg-7.order-lg-1.order-2.p-4
                p.mb-0 Cada compra/venta internacional que se realiza se debe reconocer, ya que es diferente, por mucho que se crea que son iguales, lo que llevaría a requerir aspectos diferentes para su buena ejecución de desarrollo. 
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img43.svg' alt="Imagen decorativa")

    .row.justify-content-center.mb-5
      .col-lg-10
        .titulo-sexto.color-acento-botones(data-aos="fade-right")
          h5 Tabla 3.
          span Tipos y medios de pago
        .tabla-a.color-primario
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            thead(style="border-color: #E9F0FE")
              tr
                th(style="background-color: #E9F0FE; font-size: 18px;" colspan="2") Medios de pago
        .tabla-a.color-primario
          table(data-aos="zoom-in"  alt="Texto alternativo tabla")
            caption Nota. <span style="font-weight: 400">Medios de pago - simples y documentarios.</span>
            thead(style="border-color: #FFF")
              tr
                th(style="background-color: #FFF; width: 30%;").text-center Billete
                td(style="background-color: #FFF; width: 70%;") Papel que representa el medio de pago en efectivo entre dos o más personas o entidades que realizan una actividad, ya sea por compra o venta de productos o servicios.
            tbody
              tr
                th(style="background-color: #F9FBFF;").text-center Cheque bancario
                td(style="background-color: #F9FBFF;") Documento o título valor mediante el cual una persona llamada girador ordena a la entidad bancaria (girado) que realice la actividad de cancelar una determinada cantidad de dinero a la orden de un tercero, llamado beneficiario.
              tr
                th(style="background-color: #FFF;").text-center Orden de pago simple
                td(style="background-color: #FFF;") Consiste en dar una orden de pago al banco, cuando se es el comprador, donde se ordena que se efectúe un abono o pago total en la cuenta de otro banco (corresponsal) de un beneficiario extranjero.
              tr
                th(style="background-color: #F9FBFF;").text-center Remesa simple
                td(style="background-color: #F9FBFF;") Se representa en letras de cambio, giros, cheques, pagarés, recibos, etc., que gira el exportador a cargo del importador.
              tr
                th(style="background-color: #E9F0FE; font-size: 18px;" colspan="2") Medios Documentarios
              tr
                td(style="background-color: #FFF;" colspan="2") Se encuentran relacionados con la actividad financiera internacional de diligenciamiento y entrega de los documentos, se realiza con la actividad de entrega de la mercancía. Entre ellos se encuentran:
              
              tr
                th(style="background-color: #FFF;").text-center La orden de pago documentario
                td(style="background-color: #FFF;") Está representada en una orden de mandato que realiza el importador a su entidad bancaria, con el fin de realizar un pago al beneficiario de cierta cantidad de dinero.
              tr
                th(style="background-color: #F9FBFF;").text-center La remesa documentaria
                td(style="background-color: #F9FBFF;") Está relacionada con la actividad financiera donde el vendedor (exportador) entrega a su banco los documentos necesarios para la expedición de la mercancía comercializada, con orden de que los entregue al comprador (importador) como contrapago de los mismos.
              tr
                th(style="background-color: #FFF;").text-center Crédito documental
                td(style="background-color: #FFF;") Es emitido por una entidad financiera solvente.  Es uno de los medios de pago más seguros para ambas partes.
              tr
                th(style="background-color: #F9FBFF;").text-center Garantía bancaria
                td(style="background-color: #F9FBFF;") Está relacionada como aquella donde se elabora un contrato como garantía de la entidad bancaria, la cual asume inmediatamente el papel de avalista o garante.

    separador
    #t_1_8.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.8 Riesgos en la negociación internacional
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p En la actualidad, se encuentran una serie de riesgos que afectan el mercado internacional financiero. Los riesgos del comercio internacional ya existen, lo recomendable es saber identificarlos para, llegado el caso, poder actuar ante ellos y lograr soluciones a futuro. 
        .cajon.color-acento-contenido.p-4.mb-4  
          p.mb-0 Se puede definir el riesgo que se da en el desarrollo de la actividad de negociación internacional como un riesgo comercial, el cual proviene de no tener suficiente información sobre los vendedores y compradores, las costumbres comerciales del país con el cual se está llevando a cabo la actividad de negociación y, por otro lado, el entorno legal.
        p.mb-0 Es de gran importancia tener presente una serie de estrategias para aplicar en todo tipo de proceso de negociación internacional, ya sea en caso de realizar una actividad de importación o una de exportación. Este ejercicio abre oportunidades, ya que crece la economía y se pueden tener más opciones para incrementar los empleos.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img44.png' alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10(data-aos="fade-right")
        .tarjeta-avatar-b
          .tarjeta-avatar-b__img(style="min-width: 14%")
            img(src='@/assets/curso/temas/img02.svg' alt='Imagen decorativa')
          .tarjeta.BG04
            .row.justify-content-end.align-items-center
              .col-lg-7.order-lg-1.order-2.p-4
                p.mb-0 Es de gran importancia dejar muy claro que en el mercado financiero internacional se encuentran diferentes tipos de riesgos comerciales, los cuales se pueden identificar en el desarrollo de la actividad en la que se encuentre, ya sea compra o venta.
              .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4
                img(src='@/assets/curso/tema1/img46.svg' alt="Imagen decorativa")

    p.mb-5 A continuación, se describen los tipos de riesgos en el comercio internacional:

    .row.justify-content-center.mb-5
      .col-lg-3.col-6.mb-lg-0.mb-4(data-aos="fade-right")
        .h5.text-center.mb-4 A continuación, se describen los tipos de riesgos en el comercio internacional:
        img(src='@/assets/curso/tema1/img47.png' alt="Imagen decorativa")
      .col-lg-9(data-aos="fade-left")
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Impago") Se presenta por causa del incumplimiento y se genera cuando el comprador, después de recibir la mercancía, no cumple con sus obligaciones de pago.<br><br>#[strong Nota]: en el mercado global, las organizaciones dedicadas a esta actividad son precavidas y están siempre un paso adelante para evitar este caso o tipo de riesgo de incumplimiento en el pago. Para esto, diseñaron la estrategia de contrarrestar el riesgo con la implementación de asegurar la actividad con el seguro de crédito a la exportación.
          p.text-small(numero="2" titulo="Fraude") Conocido como una nueva estrategia realizada por las personas o empresas encargadas de realizar este tipo de engaño.<br><br>#[strong Nota]: en el mercado financiero, a este tipo de riesgo se le suman las nuevas empresas que ingresan a realizar actividades comerciales como exportar y/o importar.
          p.text-small(numero="3" titulo="Entrega") Se refleja en la actividad donde quien ofrece su mercancía se compromete con quien le compra, dejando claro el lugar y día de entrega acordados por ambas partes.<br><br>En el caso de que no se logren satisfacer los requisitos contractuales de entrega, se pierde el voto de confianza y fidelización de las partes.
          p.text-small(numero="4" titulo="Transporte") Actividad relacionada entre el punto de partida y de llegada de las mercancías, ya que el producto terminado debe ser transportado al punto de partida, para luego cumplir con los requerimientos de embarque o transporte con destino al punto de llegada del cliente. Aquí se encuentra un aumento del riesgo.<br><br>Es importante contar o contratar con empresas de logística expertas en esta actividad de mercado.
          p.text-small(numero="5" titulo="Cambiario") Está relacionado con el uso de una moneda que no es de propiedad, ya que esta actividad podrá alterar el beneficio esperado en los momentos de la comercialización de mercancías (devaluación, revaluación).
          p.text-small(numero="6" titulo="Legal") Se presenta cuando las organizaciones o empresas dedicadas a esta actividad no investigan sobre la normatividad vigente. Bajo las leyes, se rigen la actividad, los sistemas jurídicos, los convenios, entre otros.

    separador
    #t_1_9.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.9 Sistema financiero colombiano
    
    figure(data-aos="zoom-in")
      img(src='@/assets/curso/tema1/img48.png' alt="Imagen decorativa")
    .row.justify-content-center.mb-lg-0.mb-4
      .col-lg-10.col-11.img-01(data-aos="fade-right")
        .BGR05.p-4
          p.mb-0 De acuerdo con las normas establecidas, está encargado de diseñar planes estratégicos financieros que brinden información a las personas para que logren comprender y colocar en la práctica todo lo relacionado con los temas financieros básicos, como seguridad financiera, ahorro, crédito e inversión. El propósito es dar a conocer a toda persona o empresa el sistema financiero colombiano.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8.order-lg-1.order-2(data-aos="fade-right")
        p Se reconoce como sistema financiero a toda actividad realizada en el mercado internacional, ya que se comprende que está conformado por un conjunto de organizaciones, entidades y el mercado, cuyo objetivo está canalizado en garantizar la seguridad en los movimientos del dinero de los clientes. Se puede reconocer que es el medio como se canalizan recursos, desde las personas que tienen un excedente económico hacia las que necesitan dinero para financiación.
        .cajon.color-acento-contenido.p-4
          p.mb-0 El BANREP es el organismo encargado de dirigir y controlar las políticas monetarias, cambiarias y crediticias del país, avalado por la SFC, quien está encargada de la actividad de captar, administrar y controlar los recursos financieros, tanto de las empresas como de las personas que se encargan de ejercer las actividades de exportación e importación de mercancías.
      .col-lg-4.col-8.order-lg-2.order-1.mb-lg-0.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/tema1/img49.png' alt="Imagen decorativa")
  
    p.mb-5 El sistema financiero, de acuerdo con las normas, exige responsabilidades que corresponden al cumplimiento de normas, reglas y leyes. Ser un buen usuario del sistema financiero está sujeto a que se debe tener toda la información, tanto personal como de la empresa, en orden, conocer y sustentar la capacidad de respuesta a cualquier obligación financiera, sustentar su actividad económica u operacional en el mercado global, dentro del marco de legalidad.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="flip-up")
        .BGR06.p-4
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/img01.svg" alt="Imagen decorativa")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h4.text-white.mb-1 SFC
                  p.text-white.mb-0 Zuleta, H. (1997). Una visión general del sistema financiero colombiano. Banco de la República.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Visiongeneral_SFC.pdf')" target="_blank" type="application/pdf")
                    span Ir al enlace
                    i.fas.fa-link

    separador
    #t_1_10.titulo-segundo.color-acento-botones(data-aos="fade-right")
      h2 1.10 Régimen cambiario colombiano
    
    p Según la Dirección de Impuestos y Aduanas Nacionales (DIAN), es reconocido como una actividad de vender, comprar o transferir divisas, pero en algunos casos, se puede abonar o disponer de moneda legal colombiana en desarrollo de las diferentes operaciones de cambio celebradas por conducto de los intermediarios del mercado cambiario. (DIAN, s. f.)
    .h5.text-center.mb-5 Para explicar con mayor detalle este componente, se hará a través del planteamiento de las siguientes preguntas:

    .BGM03.p-md-5.p-4.mb-5(data-aos="zoom-in")
      .row.justify-content-center
        .col-lg-10
          SlyderB(:datos="datosSlyderA")

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Régimen cambiario',
        texto:
          'Son las normas encargadas de regular aspectos de los cambios internacionales, los cuales se definen como las diferentes actividades realizadas como transacciones en el exterior que impliquen el pago de divisas o títulos representativos.<br><br>De acuerdo con el régimen cambiario colombiano, existen dos mercados:<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Regulado<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Libre<br><br>(DIAN, s. f.)',
        imagen: require('@/assets/curso/tema1/img29.png'),
      },
      {
        titulo: 'Tasa de cambio fija',
        texto:
          'Según criterio del BANREP, se conoce como el sistema que tiene por objetivo mantenerse constante en el mercado con relación al uso y manejo de las monedas extranjeras; es decir, que la cantidad de pesos que se necesiten para comprar un dólar (u otra moneda extranjera) sea la misma siempre. En el mercado global, se debe regular según la normatividad vigente, bajo las entidades encargadas de su control.',
        imagen: require('@/assets/curso/tema1/img30.png'),
      },
      {
        titulo: 'Tasa de cambio flotante',
        texto:
          'Se encuentra representada en una divisa cuyo precio está determinado por los diferentes factores de oferta y demanda, relacionados con otras divisas, las cuales funcionan por medio de un sistema de mercado abierto.',
        imagen: require('@/assets/curso/tema1/img31.png'),
      },
      {
        titulo: 'Fluctuación',
        texto:
          'En el mercado económico global, la fluctuación hace referencia a la pérdida monetaria que se da por la reducción de una cantidad de la producción de mercancías o de la aplicación de un <em>stock</em>, el cual trata de la diferencia existente entre lo que reflejan los libros de inventarios y la existencia real (física) de los diferentes bienes. También se dice que está reflejada en el dinero, entre lo que se tiene y con lo que se debería contar de acuerdo con los resultados arrojados por los inventarios.',
        imagen: require('@/assets/curso/tema1/img32.png'),
      },
      {
        titulo: 'Riesgo cambiario',
        texto:
          'Se reconoce en el mercado económico como el encargado de hacer referencia a los posibles cambios de cotización de una divisa frente a otra, y se va dando de acuerdo con las actividades representadas en las diferentes transacciones financieras de monedas extranjeras, ya sea en el propio país o en el exterior.',
        imagen: require('@/assets/curso/tema1/img33.png'),
      },
    ],
    datosSlyderA: [
      {
        titulo: '¿Qué es el régimen cambiario?',
        texto:
          '<i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Según criterio basado en fuente de consulta de la DIAN, se reconoce como un conjunto de normas encargadas de la regulación de aspectos que generan los diferentes cambios internacionales.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Se puede decir que se definen como todas las transacciones generadas con el exterior, las cuales implican el pago de las transferencias de divisas o títulos representativos.<br><br>De acuerdo con el régimen cambiario colombiano, se estipula que existen dos tipos de mercados:<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Regulado y<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Libre',
        imagen: require('@/assets/curso/tema1/img50.png'),
      },
      {
        titulo: '¿Cómo está constituido el mercado cambiario?',
        texto:
          'Se encuentra conformado por la totalidad de divisas, las cuales, según normas en Colombia, deben ser canalizadas obligatoriamente por los intermediarios que conforman el mercado cambiario. <br><br>Se maneja exclusivamente por medio de dos canales autorizados legalmente para su buen funcionamiento en la ejecución de las actividades, según la normatividad vigente entre ellos:<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Canal suministrado por los IMC<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Canal de las cuentas de compensación registradas ante el BANREP.',
        imagen: require('@/assets/curso/tema1/img51.png'),
      },
      {
        titulo: '¿Qué es canalizar?',
        texto:
          'Según la terminología económica, por canalizar se entiende la actividad de vender, comprar o transferir divisas y, en algunos casos, abonar o disponer de moneda legal colombiana, por medio del desarrollo de las operaciones de cambio, las cuales son celebradas por los IMC.',
        imagen: require('@/assets/curso/tema1/img52.png'),
      },
      {
        titulo:
          '¿Cuáles son las operaciones obligatorias en el proceso de canalización en el mercado cambiario?',
        texto:
          'Se originan en: <br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>El desarrollo de la actividad importación y exportación de bienes.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Las diferentes operaciones de endeudamiento externo celebradas por residentes en el país, así como los costos financieros inherentes a las mismas.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Las inversiones de capital del exterior en el país, así como los rendimientos asociados a las mismas.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Las inversiones financieras en títulos emitidos y en activos radicados en el exterior.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Los avales y garantías en moneda extranjera.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>El desarrollo de las operaciones de derivados.',
        imagen: require('@/assets/curso/tema1/img53.png'),
      },
      {
        titulo:
          '¿Cuáles son los intermediarios participantes del mercado cambiario?',
        texto:
          'Banco de comercio<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Banco hipotecario<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Corporación financiera<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Compañía de financiamiento comercial<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>La Financiera Energética Nacional (FEN)<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>El Banco de Comercio Exterior de Colombia S. A.<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Bancoldex<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>La cooperativa financiera<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>La sociedad comisionista de bolsa<br><br><i class="fas fa-check-circle" style="color: #57DBD8; margin-right: 5px;"></i>Las sociedades de intermediación cambiaria y de servicios financieros especiales.<br><br>(DIAN, s. f.)',
        imagen: require('@/assets/curso/tema1/img54.png'),
      },
    ],
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
