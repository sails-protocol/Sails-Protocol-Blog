# Concorrência: quando duas requisições disputam a mesma operação

*Rascunho editorial. Publicação não aprovada.*

## A pergunta

Imagine dois processos tratando a mesma negociação quase ao mesmo tempo. Cada um lê um estado aparentemente válido. Cada um decide que pode continuar. Sem um limite de autoridade confiável, os dois podem tentar produzir um efeito econômico.

## O que pode dar errado

Concorrência não é apenas uma questão de desempenho. Numa negociação P2P, ela pode determinar se uma conclusão, reivindicação ou liberação será aplicada uma ou duas vezes. Uma verificação feita antes da escrita pode ficar desatualizada. É a transação no banco de dados, não a ordem aparente do código, que precisa estabelecer qual transição venceu.

## Onde a garantia deve existir

Existem ferramentas diferentes para disputas de concorrência diferentes: restrições, atualizações transacionais, locks e operações compare-and-set bem delimitadas. Nenhuma é automaticamente correta em todos os lugares. A pergunta útil é qual invariável precisa sobreviver a duas requisições simultâneas e onde ela é garantida.

## Como abordamos o problema

Nosso trabalho no Sails inclui gates explícitos de concorrência e reinicialização para transições econômicas. Usamos testes com persistência real porque mocks podem esconder comportamentos de isolamento e ordem de execução que importam. Isso descreve nosso método de validação, não significa que todos os adaptadores já passaram por todos os cenários.

## Leia a seguir

O próximo artigo conecta esse tema à recuperação: se um processo cair no meio de um fluxo, o que precisa continuar verdadeiro quando ele voltar?

*Fontes pendentes: referenciar commits imutáveis, decisões do CTO e testes antes da publicação.*

## Fronteira comprovada no código

O serviço de negociação restringe alterações manuais de status com `MANUAL_TRADE_TRANSITIONS`: PENDING pode passar a ACTIVE ou CANCELLED, ACTIVE pode passar a CANCELLED e estados terminais não admitem reescrita manual arbitrária. O código descreve a falha anterior: uma negociação concluída ou disputada podia ser sobrescrita como CANCELLED mesmo depois da movimentação de fundos no escrow. A correção protege o histórico da negociação, mas não comprova liquidação serializável em toda corrida entre provedores.

**Próximo teste:** dois participantes autenticados disputando a mesma transição, um evento de escrow concorrente e reinício com Postgres real. Sem evidência no SHA exato, não há PASS.

### Primary source / maturity

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts

*Source inspection only; no new live test, CTO approval or publication authorization.*
