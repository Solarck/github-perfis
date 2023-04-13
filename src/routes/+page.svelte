<script>
  import InputPesquisar from "../components/Input-pesquisar.svelte";
  import Title from "../components/Title.svelte";
</script>

<div class="container-app">
  <div class="container">
    <header>
      <Title />
      <InputPesquisar />
    </header>
  </div>
</div>

<style>
  .container-app {
    padding: 0;
    margin: 0;
    border: 0;
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
  }

  .container {
    margin-top: 20px;
    width: 90%;
    height: 590px;
    background: #272a37;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    font-weight: 500;
  }

  header {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
</style>
