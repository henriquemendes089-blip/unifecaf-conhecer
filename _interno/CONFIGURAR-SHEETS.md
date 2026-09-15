# Como configurar o Google Sheets

A planilha recebe todos os leads do quiz do site (botões de WhatsApp, seção Contato e páginas de curso).
Ela funciona como cópia de segurança enquanto a entrada de leads do Brota Flow não está ligada.

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
- I1: Ensino Médio
- J1: Unidade
- K1: Serviço
- L1: Origem (utm_source)
- M1: Mídia (utm_medium)
- N1: Campanha (utm_campaign)
- O1: Botão clicado
- P1: Página
- Q1: Site de referência

## Passo 3 — Abrir o Apps Script
Clique em **Extensões → Apps Script**

## Passo 4 — Colar o código
Apague o código existente e cole o conteúdo do arquivo `apps-script.js`

## Passo 5 — Publicar
**Se o script já estava publicado** (atualização): clique em **Implantar → Gerenciar implantações → ✏️ Editar → Versão: Nova versão → Implantar**. Assim a URL continua a mesma e o site não precisa ser alterado. Enquanto isso não for feito, a planilha segue gravando só as colunas A–H.

**Primeira publicação:**
1. Clique em **Implantar → Nova implantação**
2. Tipo: **App da Web**
3. Executar como: **Eu**
4. Quem tem acesso: **Qualquer pessoa**
5. Clique em **Implantar**
6. Autorize quando pedir permissão
7. **COPIE a URL gerada** (começa com `https://script.google.com/macros/s/...`)

## Passo 6 — Colar a URL no site (só na primeira publicação)
1. Abra `tecnico/js/lead-quiz.js`
2. Localize `sheetsEndpoint` no bloco `CONFIG`
3. Substitua pela URL copiada
4. Rode `node _interno/sincronizar.js` (copia para o portal e para o site de graduação)
5. Faça o deploy novamente

---

> Dúvidas? Entre em contato com o desenvolvedor.
