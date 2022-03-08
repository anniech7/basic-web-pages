<template>
  <div class="home">

      <p style="text-align:center;"><img src="@/assets/images/icebox-copy.jpeg" alt="IceBox"></p>

  <div class='photos'>
    <div class='rings'>
      <figure class="photos__item photos__item--1">
        <img src="@/assets/images/gold1-copy.png" alt="gold1">
      </figure>
      <figure class="photos__item photos__item--1">
        <img src="@/assets/images/gold2-copy.png" alt="gold2">
      </figure>
      <figure class="photos__item photos__item--1">
        <img src="@/assets/images/gold3-copy.png" alt="gold3">
      </figure>
      <figure class="photos__item photos__item--1">
        <img src="@/assets/images/silver1-copy.png" alt="silver1">
      </figure>
      <figure class="photos__item photos__item--1">
        <img src="@/assets/images/silver3-copy.png" alt="silver3">
      </figure>
      <figure class="photos__item photos__item--1">
        <img src="@/assets/images/silver2-copy.png" alt="silver2">
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
.rings {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 30vw);
  grid-gap: 15px;
  margin: 20px;
  justify-content: center;
}
</style>
