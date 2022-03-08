<template>
  <div class="quotes">
    <p>We were lucky enough to get Kanye to sponsor our rings. Below, you can
      generate any quote from Kanye and we will have it engraved on the inside
      of your new ring. You can use it as inspiration or take it word for word
      from Ye's mouth.</p>
    <p style="text-align:center;"><img src="@/assets/images/kanyerings-copy.png" alt="guy"  width='700px'></p>
    <h1>Ye Quotes</h1>

    <form id="genQuote">
      <input @click="quote()" type="submit" value="Generate">
      <!-- <button onclick="generate()">Generate</button> -->
      <!-- <textarea id="textarea"></textarea> -->
    </form>
    <div id="myData"></div>
  </div>
</template>

<script>
export default {
  name: 'Quotes',
  methods: {
    async quote() {
      event.preventDefault();
      var jokes = "https://api.kanye.rest/";
          console.log(jokes);
          fetch(jokes, {mode: 'cors'})
          .then(function(response){
            // console.log(response);
            return response.json();

          }).then(function(json) {
            console.log(json);

          document.getElementById("myData").innerHTML = "<p><em>" + json.quote + "</em></p>";
      })
    }
  }
}

</script>

<style scoped>
p {
  margin-left: 50px;
  margin-right: 50px;
  margin-top: 25px;
}
#genQuote {
  display: flex;
  justify-content: center;

}
#myData {
  display: flex;
  justify-content: center;
}

</style>
