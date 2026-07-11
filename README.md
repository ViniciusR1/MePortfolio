# Meu Portfólio

Esse é o repositório do meu portfólio pessoal, onde reúno os projetos que venho construindo, minhas skills e um pouco sobre minha trajetória até aqui. Comecei ele com um objetivo simples: ter um lugar decente pra mostrar meu trabalho enquanto busco minha primeira oportunidade como Desenvolvedor Backend.

Não é um site "genérico de portfólio" — fui ajustando cada seção conforme fui aprendendo coisas novas (animações com Framer Motion, CSS Modules, boas práticas de acessibilidade em formulário, etc). Ainda tem espaço pra evoluir, mas já representa bem onde estou hoje.

## 🔗 Demo

> https://dev-vinicius.netlify.app/

## 🖥️ Sobre o projeto

O site é dividido em seções que contam minha história como dev:

- **Hero** — apresentação rápida, com CTA pra ver os projetos e baixar meu currículo
- **Sobre** — um pouco sobre quem eu sou, minha foto e o que estou buscando
- **Skills** — as tecnologias que uso no dia a dia, organizadas por Frontend, Backend, Bancos de Dados e DevOps/Tools
- **Projetos** — os projetos reais que desenvolvi, com prints, descrição, tags e links pro GitHub/demo, tudo com filtro por categoria e modal com galeria
- **Experiência** — minha formação (SENAI) em formato de timeline, com espaço pra ir adicionando experiências profissionais conforme forem surgindo
- **Contato** — formulário que, ao ser preenchido, monta a mensagem automaticamente e já abre direto no meu WhatsApp

A ideia por trás disso foi criar algo que parecesse vivo — com micro-interações, hover states, animações de entrada conforme o scroll — sem exagerar a ponto de distrair de que o objetivo final é: recrutador entrou, recrutador entendeu quem eu sou e o que eu sei fazer, recrutador me chamou.

## 🚀 Tecnologias utilizadas

- **React** — biblioteca principal, com componentes funcionais e hooks
- **Vite** — bundler e servidor de dev
- **Framer Motion** — todas as animações de entrada, transições de scroll (`useInView`) e do menu mobile
- **Lucide React** — ícones usados em todo o site
- **CSS Modules** — cada componente tem seu próprio arquivo `.module.css`, escopado, sem conflito de classes
- **JavaScript (JSX)** — todo o projeto está em JS puro por enquanto (posso migrar pra TS no futuro)

## 📁 Estrutura de pastas

```
src/
├── assets/              # fotos e imagens dos projetos
├── components/
│   ├── About.jsx / About.module.css
│   ├── Contact.jsx / Contact.module.css
│   ├── Experience.jsx / Experience.module.css
│   ├── Footer.jsx / Footer.module.css
│   ├── Hero.jsx / Hero.module.css
│   ├── Navbar.jsx / Navbar.module.css
│   ├── Projects.jsx / Projects.module.css
│   └── Skills.jsx / Skills.module.css
├── App.jsx
├── App.css
└── index.css
```

Cada seção do site é um componente isolado, com seu próprio CSS Module. Isso deixa fácil mexer numa parte sem quebrar o resto.


## 📬 Sobre o formulário de contato

O formulário da seção de Contato não envia e-mail nem grava em nenhum banco — ele monta a mensagem com nome, e-mail e o texto digitado, e abre o WhatsApp automaticamente (via link `wa.me`) já com tudo preenchido. Assim, quem quiser falar comigo cai direto numa conversa comigo, sem fricção.

## 🖼️ Adicionando novos projetos

Os projetos ficam no array `projects` dentro de `Projects.jsx`. Pra adicionar um novo:

1. Coloque os prints do projeto em `src/assets/`
2. Importe a imagem no topo do `Projects.jsx`
3. Adicione um novo objeto no array `projects`, seguindo o mesmo formato dos existentes (título, descrição, tags, categoria, imagens, links de GitHub/demo)

## 🧑‍💻 Sobre mim

Sou estudante de Desenvolvimento de Sistemas (SENAI/PE) e estou focado em me tornar Desenvolvedor Backend. Estudo diariamente Node.js, TypeScript, bancos de dados relacionais, APIs REST e Git, aplicando tudo isso em projetos práticos — inclusive nos que estão listados aqui no portfólio.

Estou aberto a oportunidades de estágio, freelance ou CLT. Se quiser trocar uma ideia:

- **GitHub:** [github.com/ViniciusR1](https://github.com/ViniciusR1)
- **LinkedIn:** [linkedin.com/in/viniciusrodriguesc](https://www.linkedin.com/in/viniciusrodriguesc/)
- **E-mail:** dev.viniciusr@gmail.com
- **WhatsApp:** +55 (81) 9 9642-6039

---

Feito com React, bastante café e vontade de aprender sempre um pouco mais. ☕
