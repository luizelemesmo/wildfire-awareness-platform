# 📂 Documentação do Código Fonte (Source Code)

Este diretório contém toda a lógica da aplicação, componentes visuais, rotas e configurações de estilo do projeto **Denuncie Queimadas**.

Abaixo estão detalhadas a estrutura de diretórios e as instruções técnicas para manutenção e execução do código.

---

## 🗂️ Estrutura de Diretórios

A organização do código segue o padrão modular do React com Vite, visando escalabilidade e facilidade de manutenção:

### `/components`

Contém os componentes reutilizáveis da interface.

* **`ui/`**: Componentes de base (botões, inputs, cards, dialogs) estilizados com Tailwind CSS e Radix UI (Shadcn).
* Componentes funcionais isolados (ex: Header, Footer, Forms) ficam na raiz desta pasta ou em subpastas específicas.

### `/pages`

Componentes que representam as páginas completas da aplicação (roteamento).

* **`Index.tsx`**: Página inicial (Dashboard / Landing Page).
* Outras páginas de funcionalidade (ex: Mapa de Ocorrências, Formulário de Denúncia).

### `/lib` (ou `/utils`)

Funções utilitárias e auxiliares do sistema.

* **`utils.ts`**: Contém a função `cn` (classname), essencial para a fusão condicional de classes do Tailwind CSS nos componentes UI.

### `/assets`

Recursos estáticos importados diretamente no JavaScript/TypeScript.

* Imagens, logotipos, ícones e vetores globais.

---

## 🚀 Como Executar o Projeto

Para manipular este código fonte, certifique-se de estar na **raiz do projeto** (um nível acima da pasta `src`) no terminal.

### 1. Instalação das Dependências

Caso seja a primeira vez executando o projeto, instale os pacotes necessários listados no `package.json`:

```bash
npm install
```

### 2. Executando o Servidor de Desenvolvimento

Para iniciar o ambiente de desenvolvimento com Hot Reload:

```bash
npm run dev
```

### 3. Acesso Local

Após o comando acima, a aplicação estará disponível no navegador, geralmente no endereço:

```text
http://localhost:8080
```

> ⚠️ Verifique o terminal para confirmar a porta exata.

---

## 🛠️ Padrões de Desenvolvimento

Para manter a consistência do código, este projeto adota as seguintes práticas:

* **Estilização**: Utilização exclusiva do Tailwind CSS. As classes utilitárias devem ser aplicadas diretamente no atributo `className` dos elementos JSX.

* **Linguagem**: O projeto utiliza TypeScript (`.tsx` e `.ts`). Todas as props de componentes, estados e retornos de funções devem ser devidamente tipados para garantir a segurança do código.

* **Componentes**: Prioridade para *Functional Components* utilizando Hooks do React (`useState`, `useEffect`, `useContext`, etc).

---

## ⚠️ Arquivos Críticos

* **`main.tsx`**: Ponto de entrada (*entry point*) da aplicação. É responsável por encontrar o elemento `#root` no HTML e renderizar a árvore do React.

* **`App.tsx`**: Componente raiz que gerencia o roteamento (`react-router-dom`) e os provedores globais (Providers, Toaster, Tooltips).

* **`index.css`**: Arquivo de estilos globais, onde estão definidas as diretivas do Tailwind e as variáveis de CSS (cores, fontes, bordas).
