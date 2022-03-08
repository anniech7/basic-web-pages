<template>
  <div class='rings'>
    <div class='intro'>

  <p>Due to problems with the distribution company, this is our current inventory.</p>
  </div>
<div class='photos'>
  <div class='pops'>
    <figure class="photos__item photos__item--1" v-for="product in $root.$data.products" :key="product.id">
      <img :src="'/images/'+product.image" :alt="product.name">
      <figcaption>{{product.name}}</figcaption>
      <figcaption>{{product.price}}</figcaption>
    </figure>
  </div>
</div>
  </div>
</template>

<style scoped>
.photos {
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  flex-wrap: wrap;
}
.pops{
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 20vw);
  grid-gap: 5em;
  margin: 20px;
  margin-top:20px;
  justify-content: center;
  align-content: center;
}
.pops img {
    width: 50%;
}
</style>
