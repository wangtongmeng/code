<template>
  <div>
    <svg width="400px" height="400px">
  <defs>
    <path id="longPath" d="M100,200 Q200,100 300,200" />
    
    <clipPath id="myClipPath">
      <animate attributeName="startOffset" from="0%" to="100%" dur="4s" repeatCount="indefinite" />
      <use href="#longPath" />
    </clipPath>
  </defs>
  
  <use href="#longPath" fill="none" stroke="black" clip-path="url(#myClipPath)" />
</svg>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
</style>