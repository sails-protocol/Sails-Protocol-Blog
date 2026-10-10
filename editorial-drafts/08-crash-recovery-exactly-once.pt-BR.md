# Recuperação após falhas e o significado de exactly-once

*Rascunho editorial. Publicação não aprovada.*

## A pergunta

O momento mais difícil de um fluxo distribuído pode ser aquele que ninguém vê: um processo para depois de fazer algo importante, mas antes de informar que deu certo.

## O que pode dar errado

Imagine que um serviço registra a conclusão de uma negociação, aplica um efeito e perde energia. Ao reiniciar, precisa decidir se continua, tenta novamente ou devolve o resultado anterior. Uma recuperação descuidada pode perder uma ação ou aplicá-la duas vezes. A expressão exactly-once parece tranquilizadora, mas esconde uma pergunta importante: exatamente uma vez dentro de qual limite do sistema?

## Onde a garantia deve existir

Uma transação de banco de dados pode tornar atômicas mudanças relacionadas no estado local. Ela não faz automaticamente um banco, blockchain ou provedor externo participar da mesma transação. Efeitos externos exigem seu próprio modelo de reconciliação, idempotência e falhas. Não devemos confundir atomicidade local com finalidade universal de ponta a ponta.

## A decisão de recuperação

O módulo comum de idempotência e o serviço de negociação examinados separam persistência durável de trabalho posterior à gravação. Essa estrutura é ponto de partida, não prova de exactly-once universal. Uma alegação de recuperação precisa identificar operação, fronteira transacional, janela de falha e teste no commit exato com reinício sobre estado persistido. Provedores externos exigem evidência própria de recibos e reconciliação.

## Persistência durável, resposta perdida e repetição

O módulo comum de idempotência examinado distingue a criação durável dos efeitos posteriores e documenta janelas de falha anteriores: a gravação no banco funciona, mas o registro da conclusão falha; duas tentativas disputam a recuperação de uma operação; ou uma exceção posterior à persistência é confundida com ausência de efeito. O serviço de negociação entrega funções separadas de persistência e pós-persistência ao `withIdempotency()`. Resultado UNKNOWN exige reconciliação, não repetição cega de efeitos externos.

**Cenário adversarial:** a negociação existe, mas a publicação do evento falha. Retornar erro não desfaz a negociação. Repetir com a mesma chave deve seguir o protocolo delimitado de idempotência; repetir sem chave pode gerar duplicação. A atomicidade do banco também não garante execução única em banco externo, blockchain ou provedor.

**Próxima pergunta:** quais testes com Postgres real, reinício no SHA exato, evidências de outbox e recibos de provedores comprovam a recuperação de cada operação?

### Fontes e nível de comprovação

- [Método do SDK](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)
- [Rota HTTP](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Serviço de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
- [Mecanismo comum de idempotência](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/common/idempotency.ts)

*Somente inspeção de código. Sem nova verificação em execução, aprovação do CTO ou autorização de publicação.*

## Leia a seguir

No próximo artigo vamos sair do comportamento dos processos e falar de pessoas e permissões: saber quem alguém é não significa saber o que ela pode fazer.
