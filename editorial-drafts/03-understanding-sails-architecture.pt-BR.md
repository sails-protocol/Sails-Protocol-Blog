# Entendendo a arquitetura do Sails

*Rascunho editorial. Publicação não aprovada.*

## Um protocolo não é uma aplicação

Essa distinção importa quando queremos que produtos diferentes compartilhem regras de coordenação sem compartilhar interface, modelo de negócio ou controle sobre os fundos dos usuários. Sails Protocol define o modelo de coordenação. Sails Core é o núcleo semântico puro, onde pertence o significado das transições. Sails Node implementa o protocolo e oferece capacidades de execução. Os SDKs disponibilizam fluxos específicos aos desenvolvedores. As aplicações decidem como as pessoas interagem com tudo isso.

## Por que separar as camadas?

Imagine uma carteira que quer oferecer negociações P2P e um marketplace web que pretende criar salas privadas. Ambos podem precisar de regras para o ciclo da negociação, autorização e tratamento de evidências, mas suas interfaces e formas de distribuição são diferentes. Se as regras estiverem presas a uma aplicação, a outra terá de reconstruí-las. Quando são definidas de forma independente, cada integração pode cuidar da sua experiência sem perder a referência das mesmas regras econômicas.

## O que o primeiro SDK representa

O Sails P2P Trading SDK é o primeiro módulo em foco. Isso não significa que todos os módulos previstos já estejam disponíveis. Sails Market é uma aplicação web de referência planejada para consumir capacidades do protocolo e serviços externos; Satsails Wallet é uma integração de carteira separada. Nenhuma das duas é o próprio protocolo. Também exploramos módulos de identidade, reputação, provas e liquidação, mas o estágio de cada um precisa ser informado individualmente.

## Arquitetura como divisão de responsabilidades

Um diagrama organizado ajuda, mas não prova que o sistema funciona. As perguntas importantes são práticas: quem pode mudar o estado de uma negociação, qual operação no banco de dados tem autoridade, o que sobrevive a uma falha e o que nunca pode ser repetido? Usamos essas perguntas para verificar se a separação das camadas é real, e não apenas visual. Nos próximos artigos vamos explorar as respostas, inclusive quando ainda faltam evidências.

*Revisão técnica e factual pendente. Não publicar sem aprovação explícita.*
