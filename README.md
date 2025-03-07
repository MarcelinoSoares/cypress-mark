# cypress-mark

## Descrição
Projeto de testes automatizados utilizando Cypress para validação de um gerador de tarefas. O framework garante a qualidade e confiabilidade das funcionalidades principais do sistema.

## Pré-requisitos
- Node.js instalado
- NPM ou Yarn como gerenciador de pacotes
- Conhecimento básico em JavaScript e Cypress

## Instalação
1. Clone o repositório:
```bash
git clone https://github.com/MarcelinoSoares/cypress-mark.git
```

```bash
cd cypress-mark
```

```bash
npm install
```

## Estrutura do Projeto
```plaintext
cypress-mark/
├── cypress/
│   ├── e2e/                    # Testes end-to-end
│   │   └── tasks/             
│   │       └── tasks.cy.js    # Casos de teste para tarefas
│   ├── fixtures/              # Dados de teste
│   │   └── tasks.json        # Massa de dados para tarefas
│   ├── plugins/              # Plugins do Cypress
│   │   └── index.js
│   ├── support/             # Arquivos de suporte
│   │   ├── commands.js     # Comandos customizados
│   │   └── e2e.js         # Configurações globais
├── cypress.config.js       # Configuração do Cypress
└── package.json           # Dependências e scripts
```

## Executando os Testes

### Modo Interativo
Para abrir o Cypress em modo interativo:
```bash
npm run cypress:open
```

### Modo Headless
Para executar os testes em modo headless:
```bash
npm run cypress:run
```

## Funcionalidades Testadas
- Criação de novas tarefas
- Validação de campos obrigatórios
- Edição de tarefas existentes
- Exclusão de tarefas
- Marcação de tarefas como concluídas

## Padrões de Teste
- Cada arquivo de teste (.cy.js) contém casos de teste relacionados a uma funcionalidade específica
- Utilização de fixtures para gerenciamento de dados de teste
- Comandos customizados para ações repetitivas
- Boas práticas de seleção de elementos usando data-testid

## Contribuição
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## Suporte
Para dúvidas ou sugestões, abra uma issue no repositório do projeto.

## Licença
Este projeto está sob a licença MIT.
