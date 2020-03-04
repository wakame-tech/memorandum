
<template>
  <div id="global-layout">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header'
import Main from '../components/Main'
import Footer from '../components/Footer'
  
export default {
  components: { Header, Main, Footer },
}
</script>
