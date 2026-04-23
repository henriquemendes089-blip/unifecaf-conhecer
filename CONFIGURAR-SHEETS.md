# Como configurar o Google Sheets

## Passo 1 — Abrir a planilha
Acesse: https://docs.google.com/spreadsheets/d/1OGdsOUSREMMj6amQ4VzCTFax4kZJG5_EDuDWEthvzI8/edit

## Passo 2 — Adicionar cabeçalhos
Na linha 1, preencha as colunas:
- A1: Data e Hora
- B1: Nome
- C1: WhatsApp
- D1: E-mail
- E1: Interesse
- F1: Modalidade
- G1: Área
- H1: Curso Desejado

## Passo 3 — Abrir o Apps Script
Clique em **Extensões → Apps Script**

## Passo 4 — Colar o código
Apague o código existente e cole o conteúdo do arquivo `apps-script.js`

## Passo 5 — Publicar
1. Clique em **Implantar → Nova implantação**
2. Tipo: **App da Web**
3. Executar como: **Eu**
4. Quem tem acesso: **Qualquer pessoa**
5. Clique em **Implantar**
6. Autorize quando pedir permissão
7. **COPIE a URL gerada** (começa com `https://script.google.com/macros/s/...`)

## Passo 6 — Colar a URL no site
1. Abra o `index.html`
2. Localize: `COLE_A_URL_DO_APPS_SCRIPT_AQUI`
3. Substitua pela URL copiada
4. Salve o arquivo
5. Faça o deploy novamente

---

> Dúvidas? Entre em contato com o desenvolvedor.
