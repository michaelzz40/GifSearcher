<template>
  <div class="footer">
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
  margin-top: 3em;
  padding: 4em 10em;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer h3 {
  color: #f6f6f6;
  font-size: 0.8em;
  text-transform: uppercase;
}
.social-media {
  padding: 2em 4em;
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
