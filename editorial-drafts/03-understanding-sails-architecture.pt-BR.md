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

## Fronteira de evidência: arquitetura e implementação

O documento de invariantes separa princípios arquiteturais, obrigações de implementação e evidência executável. Isso importa aqui: nomear Sails Core e Sails Node define responsabilidades pretendidas, mas não comprova que um nó independente já executa todos os módulos. O repositório examinado contém um serviço concreto de negociação OpenP2P e um cliente SDK. São pontos de implementação mais delimitados, não prova automática de interoperabilidade entre Satsails Wallet, Sails Market e aplicações de terceiros. Alegações públicas sobre implantação e compatibilidade entre aplicações ainda exigem contratos versionados, testes e evidência operacional.

**Falha a evitar:** alguém vê um diagrama com cinco camadas e conclui que todas são implantáveis separadamente e verificadas em produção. O diagrama organiza responsabilidades, não versões prontas.

### Fontes e limites

- [Invariantes do protocolo](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
- [Serviço de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Cliente OpenP2P do SDK](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)

*Código examinado em revisão fixada; não equivale a aprovação do CTO ou comprovação de produção.*


*Revisão técnica e factual pendente. Não publicar sem aprovação explícita.*
