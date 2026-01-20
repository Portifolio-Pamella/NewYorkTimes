# Coleta de Notícias do New York Times (NYTimes)

Projeto desenvolvido em **JavaScript (Node.js)** para realizar a coleta automatizada de notícias do **New York Times**, com base em um tema informado pelo usuário, e exportar os resultados para um arquivo **Excel (.xlsx)**.

Este projeto foi desenvolvido como parte de um **teste técnico para a posição de Desenvolvedor Júnior – JavaScript**.

---

## Objetivo

Desenvolver um script que seja capaz de:

* Buscar notícias diretamente do site do New York Times
* Receber um tema informado pelo usuário via linha de comando
* Coletar **no mínimo 50 notícias** relacionadas ao tema informado
* Extrair os seguintes dados de cada notícia:

  * Título
  * Data de publicação
  * Descrição ou resumo
* Gerar um arquivo **Excel (.xlsx)** contendo os dados coletados

---

## Tecnologias Utilizadas

* Node.js
* JavaScript (ES Modules)
* Axios – Consumo de API HTTP
* XLSX – Geração de arquivos Excel
* Dotenv – Gerenciamento de variáveis de ambiente
* API oficial do New York Times (Article Search API)

---

## Estrutura do Projeto

```
NewYorkTimes/
│
├── src/
│   └── index.js
│
├── .env
├── .gitignore
├── package.json
└── README.md
```

---

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

* Node.js (versão 18 ou superior)
* NPM
* Uma API Key válida do New York Times

### Criação da API Key

1. Acesse [https://developer.nytimes.com/](https://developer.nytimes.com/)
2. Crie uma conta gratuita
3. Gere uma API Key para o serviço **Article Search API**

---

## Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:

```env
NYT_API_KEY=SUA_API_KEY_AQUI
```

O arquivo `.env` não deve ser versionado e já está incluído no `.gitignore`.

---

## Instalação das Dependências

No diretório raiz do projeto, execute:

```bash
npm install
```

---

## Execução do Projeto

Execute o script informando o tema desejado como argumento:

```bash
node src/index.js tecnologia
```

Alternativamente, utilizando o script configurado no `package.json`:

```bash
npm start tecnologia
```

---

## Saída Gerada

Ao final da execução, será gerado um arquivo Excel no seguinte formato:

```
noticias-<tema>.xlsx
```

Exemplo:

```
noticias-tecnologia.xlsx
```

O arquivo conterá:

* Apenas uma aba
* As seguintes colunas:

  * Título
  * Data de Publicação
  * Descrição

---

## Comportamento do Script

* Realiza paginação automática na API do New York Times
* Continua a busca até atingir pelo menos 50 notícias
* Caso não existam 50 resultados disponíveis, o script informa o usuário
* Exibe logs simples de progresso no terminal

---

## Diferenciais

* Uso de variáveis de ambiente para configuração sensível
* Logs de progresso durante a execução
* Código organizado e de fácil manutenção
* Utilização da API oficial do New York Times, evitando scraping

---

## Autoria

Projeto desenvolvido por **Pamella Christiny Chaves Brito**.

---

## Licença

Este projeto está licenciado sob a licença ISC.
