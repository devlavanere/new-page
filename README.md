<img style="width: 100%; height:200px" src="assets/img-readme-header.jpg">

# PROGRAMAÇÃO WEB

## Atividade 04: Refatorando Landing Page Portfólio

Este repositório contém o código fonte refatorado da Atividade 03: Landing Page Portfólio, que visa a utilização de flexbox e grid layout, a utilização de  transições assíncronas através de: ajax, fetch e promises. Além da utilização de operações de CRUD com o LocalStorage e também a possibilidade de utilização em qualquer tamanho de tela de dispositivo.

### Objetivo

Aprimorar o projeto da atividade 03 com todo o conhecimento adquirido.

### Conteúdo da Landing Page

A landing page portfólio possui os seguintes elementos:

- **Inicio:**
    - Meu logotipo.
    - Menu para acessar as seções do projeto.
    - Slogan com uma breve descrição.
    - Botão ("Saiba Mais").

- **Seção Sobre:**
    - Mostra um pouco sobre mim.

- **Seção Habilidades:**
    - Descrição de habilidades adquiridas ao longo do tempo.

- **Seção Projetos:**
    - Contém três projetos que, utilizam diferentes teclogias.

- **Contato**
    - Formulário de contato simples com os campos: nome, email e mensagem.
    - Botão de envio do formulário com ação JavaScript para exibr a informação que a mensagem foi enviada.

### Estrutura do Repositório
- **Pasta: Landing-Page-Portfolio**

    - **Pasta: assets.**
    - **Pasta: css.**
        - **Pasta: components.**
            - **`navbar.css:`** Arquivo css.
            - **`header.css:`** Arquivo css.
            - **`about.css:`** Arquivo css.
            - **`skills.css:`** Arquivo css.
            - **`projects.css:`** Arquivo css.
            - **`contact.css:`** Arquivo css.
            - **`footer.css:`** Arquivo css.
        - **`extends.css:`** Arquivo css.
        - **`globals.css:`** Arquivo css.
        - **`variables.css:`** Arquivo css.
    - **Pasta: scrpts.**
        - **`index.js:`** Arquivo javascript.
    - **`index.html`:** Arquivo HTML principal da landing page.
    - **`README.md`**

A landing page portfólio refatorada possui os seguintes elementos:

- **Header**
    - Botão para alternar tema dark/light mode.
    - Meu logotipo.
    - Menu para acessar as seções do projeto.

- **Inicio:**
    - Slogan com uma breve descrição.
    - Minha foto.
    - Botão ("Contratar").
    - Botão ("Contato").

- **Seção Sobre:**
    - Mostra um pouco sobre mim.

- **Seção Habilidades:**
    - Descrição de habilidades adquiridas ao longo do tempo.

- **Seção Projetos:**
    - Contém três projetos que, utilizam diferentes teclogias, agora dentro de um carrossel implementado pela biblioteca JavaScript Swiper.

- **Contato**
    - Formulário de contato reformulado para ficar mais bonito e elegante com os campos: nome, email, telefone, assunto e mensagem. Contando também com critérios de validação.

    - Botão de envio do formulário agora com objetivo de enviar os dados do formulário para o LocaStorage. Caso a mensagem esteja com suas validações todas corretas, será mostrado uma mensagem de sucesso e outro bloco mostrando todos dados e a mensagem digitada, que pode atualizado ou deletado do LocalStorage.

### Nova Estrutura do Repositório
- **Pasta: New-Page**

    - **Pasta: assets.**
    - **Pasta: css.**
        - **Pasta: components.**
            - **`header.css:`** Arquivo css.
            - **`home.css:`** Arquivo css.
            - **`about.css:`** Arquivo css.
            - **`skills.css:`** Arquivo css.
            - **`projects.css:`** Arquivo css.
            - **`contact.css:`** Arquivo css.
            - **`footer.css:`** Arquivo css.
            - **`media.css:`**Arquivo.css.
            - **`dark-light-mode.css:`** Arquivo.css.
        - **`extends.css:`** Arquivo css.
        - **`globals.css:`** Arquivo css.
        - **`variables.css:`** Arquivo css.
    - **Pasta: scrpts.**
        - **Pasta: modules.**
            - **`dark-light-mode.js:`** Arquivo javascript.
            - **`menu-burguer.js:`** Arquivo javascript.
            - **`swiper.js:`** Arquivo javascript.
        - **`index.js:`** Arquivo javascript principal
        - **`form.js:`** Arquivo javascript.
    - **`index.html:`** Arquivo HTML principal da landing page.
    - **`projetos.json`** Arquivo que contém os dados dos projetos em formato JSON, para serem carregados dinamicamente pelo swiper.
    - **`README.md`**

### Branches Landing Page Portfólio

- **`main`:** Branch principal do projeto, contendo a versão final da landing page.
- **`develop`:** Branch de desenvolvimento, para implementação de novas funcionalidades e correções de bugs.

### Branches Refatoração Landing Page Portfólio

- **`main`:** Branch principal do projeto, contendo a versão final da landing page.
- **`refactor`:** Branch para trabalhar de outra máquina usando outro perfil do github, possibilitando assim o envio de Pull Requests.

### Instruções de Uso da Landing Page Refatorada

1. **Clone o repositório:** 
    ```bash
    https://github.com/devlavanere/new-page.git
    ```
2. **Acesse a pasta do projeto:**
    ```bash
    cd new-page
    ```
3. **Abra o arquivo `index.html` em seu navegador para visualizar a landing page.**

### Recursos Utilizados

- HTML5
- CSS3
- JavaScript
- Swiper(Biblioteca Javascript)
- Fetch API
- JSON
- Git
- GitHub

### Video da Landing Page Atividade 03
<video src="https://github.com/user-attachments/assets/f0d026ae-48ca-4268-bc12-e5d9cddcad79" controls></video>

### Video da Landing Page Refatorada
<video src="https://github.com/user-attachments/assets/453c2994-a7fb-4298-a1c9-467382b087dc" controls></video>

### Link para Acesso a Landing Page Ativade 03, Hospedada na Vercel

[Landing-Page-Portfolio](https://landing-page-portfolio-eight.vercel.app/)

### Link para Acesso a Landing Page Ativade 04, Hospedada na Vercel

[New-Page](https://new-page-omega.vercel.app/)

### Autor

[<img src="https://avatars.githubusercontent.com/u/125924854?s=400&u=505601333417c0f00a726bb3e1e757dcaa874463&v=4" width=115><br><sub>Michel L. Sampaio</sub>](https://github.com/devlavanere)


