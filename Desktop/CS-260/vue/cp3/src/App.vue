<template>
  <div id="app">

<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="#">Ice Box</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item to="/">Home</b-nav-item>
        <b-nav-item to="/about">About Me</b-nav-item>
        <b-nav-item to="/rings">Rings</b-nav-item>
        <b-nav-item to="/reviews">Reviews</b-nav-item>
        <b-nav-item to="/quotes">Quotes</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

    <router-view/>

    <footer>
      <nav class="navbar fixed-bottom navbar-dark bg-dark">
        <a href='https://github.com/anniech7/cp2.git'>GitHub Repository URL</a>
      </nav>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin-left: 400px;
  margin-right: 400px;;
  margin-top: 130px;
  margin-bottom: 20px;
}
p {
  font-family: arial;
  font-size: 25px;
}
figcaption {
  background-color: black;
  color: white;
  font-style: normal;
  padding: 10px;
  text-align: left;
}
h1 {
  text-align: center;
}
</style>
