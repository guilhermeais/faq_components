<template>
  <div class="faq-categories">
    <div class="header-image">
      <img src="../assets/images/astronaut.svg" alt="" />
    </div>

    <div class="header-text">
      <h2>Perguntas frequentes</h2>
      <p>Escolha a categoria desejada</p>
    </div>

    <ul class="categories">
      <li class="category-item">
        <img src="" alt="" />
        <p></p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {}
</script>

<style>
.header-image img {
  width: 242px;
}
.header-image {
  display: grid;
  justify-content: center;
}
.header-text h2,
p {
  color: #f5f6f8;
}
.header-text h2 {
  font-size: 1.25rem;
}
.header-text p {
  font-size: 0.813rem;
  padding-top: 0.288rem;
}
.header-text {
  padding: 1.1rem 1.875rem 2.125rem;
}

.categories {
  list-style: none;
}
.categories:hover {
  background-color: #3f4452;
  cursor: pointer;
}
.category-item {
  color: #f5f6f8;
  padding: 1rem 1.875rem;
  font-size: 1rem;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 2.125rem;
  background-color: transparent;
  transition: background-color 200ms ease-in-out;
}
.category-item img{
  width: 1.5rem;
}

</style>
