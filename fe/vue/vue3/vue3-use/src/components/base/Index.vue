<template>
  <!-- <Tpl />\ -->
  <!-- <Condition /> -->
  <!-- <Event /> -->
  <!-- <List /> -->
  <!-- <ClassUse /> -->
  <!-- <ComputedUse /> -->
  <WatchUse />
</template>
<script>
import Tpl from "./Tpl.vue";
import Condition from "./Condition.vue";
import Event from "./Event.vue";
import List from "./List.vue";
import ClassUse from "./ClassUse.vue";
import ComputedUse from "./ComputedUse.vue";
import WatchUse from "./WatchUse.vue";

export default {
  name: "base-options-use",
  components: {
    Tpl,
    Condition,
    Event,
    List,
    ClassUse,
    ComputedUse,
    WatchUse,
  },
};
</script>
