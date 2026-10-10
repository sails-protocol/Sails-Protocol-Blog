# Recuperação após falhas e o significado de exactly-once

*Rascunho editorial. Publicação não aprovada.*

## A pergunta

O momento mais difícil de um fluxo distribuído pode ser aquele que ninguém vê: um processo para depois de fazer algo importante, mas antes de informar que deu certo.

## O que pode dar errado

Imagine que um serviço registra a conclusão de uma negociação, aplica um efeito e perde energia. Ao reiniciar, precisa decidir se continua, tenta novamente ou devolve o resultado anterior. Uma recuperação descuidada pode perder uma ação ou aplicá-la duas vezes. A expressão exactly-once parece tranquilizadora, mas esconde uma pergunta importante: exatamente uma vez dentro de qual limite do sistema?

## Onde a garantia deve existir

Uma transação de banco de dados pode tornar atômicas mudanças relacionadas no estado local. Ela não faz automaticamente um banco, blockchain ou provedor externo participar da mesma transação. Efeitos externos exigem seu próprio modelo de reconciliação, idempotência e falhas. Não devemos confundir atomicidade local com finalidade universal de ponta a ponta.

## Como abordamos o problema

No Sails, cenários de falha e recuperação fazem parte das evidências de engenharia que buscamos para transições econômicas. Queremos testes que interrompam um processo em pontos importantes, reiniciem com estado durável e verifiquem se as invariáveis continuam válidas. Uma afirmação sobre exactly-once precisa identificar a operação, o limite de persistência e a evidência que a sustenta.

## Leia a seguir

No próximo artigo vamos sair do comportamento dos processos e falar de pessoas e permissões: saber quem alguém é não significa saber o que ela pode fazer.

*Fontes pendentes: referenciar commits imutáveis, decisões do CTO e testes antes da publicação.*

## Persistência durável, resposta perdida e repetição

O módulo comum de idempotência examinado distingue a criação durável dos efeitos posteriores e documenta janelas de falha anteriores: a gravação no banco funciona, mas o registro da conclusão falha; duas tentativas disputam a recuperação de uma operação; ou uma exceção posterior à persistência é confundida com ausência de efeito. O serviço de negociação entrega funções separadas de persistência e pós-persistência ao `withIdempotency()`. Resultado UNKNOWN exige reconciliação, não repetição cega de efeitos externos.

**Cenário adversarial:** a negociação existe, mas a publicação do evento falha. Retornar erro não desfaz a negociação. Repetir com a mesma chave deve seguir o protocolo delimitado de idempotência; repetir sem chave pode gerar duplicação. A atomicidade do banco também não garante execução única em banco externo, blockchain ou provedor.

**Próxima pergunta:** quais testes com Postgres real, reinício no SHA exato, evidências de outbox e recibos de provedores comprovam a recuperação de cada operação?

### Source ledger and maturity

- [SDK method](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [HTTP route](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Trade service](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Common idempotency mechanism](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Source-inspected only. No new runtime verification, CTO approval or publication authorization.*
