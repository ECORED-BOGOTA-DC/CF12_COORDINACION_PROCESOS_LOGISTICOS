<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 Los procesos de importación implican la selección de productos, negociación con proveedores extranjeros, obtención de documentos, despacho aduanero, recepción y almacenamiento de la mercancía, y distribución a los clientes. Cada etapa es esencial para asegurar una importación exitosa.

    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-right")
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Muestra síntesis de procesos de importación en mapa mental donde identifican los diferentes mercados, con el objetivo de participar en la compra y venta en el mercado financiero internacional, permitiendo la transferencia de fondos temporales integrando el TLC en un proceso con los diferentes tipos de transporte en la cadena de suministro.")
      .col-auto(data-aos="fade-left")
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
