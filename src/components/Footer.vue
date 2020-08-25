<template>
  <div class="footer">
    <p class="copyright">
      all gif provided by <a href="https://www.giphy.com">Giphy</a>
    </p>

    <h3 class="copyright">Copyright &copy; Michael</h3>

    <div class="social-media">
      <a href="https://www.facebook.com/michaelzz/"
        ><font-awesome-icon
          :icon="['fab', 'facebook-messenger']"
        ></font-awesome-icon
      ></a>
      <a href=""
        ><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon
      ></a>

      <a href=""
        ><font-awesome-icon :icon="['fab', 'instagram']"></font-awesome-icon
      ></a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.5);
  background-color: var(--border-color);
  color: #333333;
  padding: 4em 10em;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.footer h3 {
  color: #f6f6f6;
  font-size: 0.8em;
  text-transform: uppercase;
}
.footer p {
  padding-bottom: 20px;
  color: #f6f6f6;
  font-size: 0.6em;
  text-transform: uppercase;
}
.footer a {
  font-size: 1.1em;
  text-transform: uppercase;
  color: var(--primary-background);
}

span {
  color: var(--primary-background);
}
.social-media {
  padding-bottom: 2em;
  width: 100%;
  text-align: center;
  position: absolute;
  bottom: 0px;
}

.social-media a {
  color: #f6f6f6;
  text-decoration: none;
}

.social-media a svg {
  margin: 0px 10px;
}
</style>
