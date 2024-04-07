<template>
  <p>Vue3 JSX</p>
  <hr>

  <scoped-slot-demo></scoped-slot-demo>
</template>

<script>
// import Demo from './components/01-basic/Demo'
// import Demo1 from './components/01-basic/Demo1'
// import Demo1 from './components/01-basic/Demo1.jsx'
// import TabsDemo from './components/02-tabs-template/Demo'
// import TabsDemo from './components/03-tabs-jsx/Demo'
// import ScopedSlotDemo from './components/04-scoped-slot-template/Demo'
import ScopedSlotDemo from './components/05-scoped-slot-jsx/Demo.jsx'

export default {
  name: 'App',
  components: {
    // Demo,
    // Demo1
    // TabsDemo
    ScopedSlotDemo
  }
}
</script>

<style>
</style>
