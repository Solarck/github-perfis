<script>
     let texto = "Clique aqui para mudar o texto."

     function trocaTexto(){
        texto = "Novo texto após o clique!"
     }
  </script>
  
  <button class="title" on:click={trocaTexto}>{texto}</button>
  
  <style>
    .title {
      padding: 1rem 1.75rem;
      font-family: 'Rubik', sans-serif;
      font-size: 1.25rem;
      font-weight: 300;
      color: #fff;
      background-color: #6930c3;
      border: none;
      border-radius: 0.5rem;
    }
  </style>