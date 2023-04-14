<script>
    let value = "teste";
</script>

<label class="botao-input">
    <input type="text" class="input" bind:value />
    <button type="submit" class="botao">Buscar</button>
</label>

<style>
    input {
        padding-left: 10px;
        width: 220px;
        height: 35px;
        font-size: 1rem;
        border-radius: 8px;
        border: 1.5px solid #2e80fa;
        border-right: 0px;
        box-shadow: 0px 10px 20px rgba(222, 231, 247, 0.4);
        outline: 0;
    }

    .input::placeholder {
        font-family: "Roboto";
        font-style: italic;
        font-weight: 300;
        font-size: 19.5px;
        line-height: 26px;
        color: #6e8cba;
    }

    .botao-input {
        justify-content: start;
        display: flex;
    }

    .botao {
        margin-left: -10px;
        padding: 7px 18px;
        border-radius: 8px;
        border: none;
        background: #2e80fa;
        box-shadow: 0px 10px 20px rgba(222, 231, 247, 0.4);
        color: #fff;
        font-size: 22px;
        cursor: pointer;
    }

    .botao:hover {
        background: #4590ff;
    }
</style>
