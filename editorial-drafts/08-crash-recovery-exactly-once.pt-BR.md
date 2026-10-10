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
