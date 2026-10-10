# Confiança, evidências e liquidação nos mercados P2P

*Rascunho editorial. Publicação não aprovada.*

## Um comprovante não conta a história inteira

Um comprador envia um comprovante de pagamento. Isso prova que o vendedor recebeu o dinheiro? Não necessariamente. O comprovante pode ser verdadeiro, mas pertencer a outra transação. Pode estar incompleto. O pagamento pode continuar pendente. Evidências ajudam participantes e revisores a entender uma disputa, mas não são automaticamente a verdade sobre um sistema externo de pagamentos.

## Identidade, origem e limites

Antes de perguntar se uma evidência é convincente, o sistema precisa saber quem a enviou, a qual negociação ou prova ela pertence e quais limites se aplicam. Temos definido limites explícitos de recursos para o tratamento de evidências e considerado a origem autenticada parte do modelo. Isso ajuda tanto a conter abuso e custos inesperados quanto a preservar um histórico útil para auditoria.

## Liquidação exige um modelo de autoridade

Uma negociação pode envolver transferência on-chain, carteira, provedor de pagamento ou transferência bancária. Esses sistemas não seguem as mesmas regras de finalidade. Por isso, a camada de coordenação precisa distinguir um evento observado de uma transição econômica autorizada. Estamos trabalhando nas condições para estados finais, novas tentativas e recuperação após falhas, inclusive para evitar aplicar o mesmo efeito duas vezes. Isso não significa que o protocolo controle fundos externos ou consiga reverter pagamentos.

## Por que insistimos em testar falhas

As afirmações mais importantes sobre um fluxo financeiro precisam resistir a perguntas desconfortáveis. E se duas requisições de conclusão chegarem ao mesmo tempo? E se o serviço reiniciar entre registrar uma operação e aplicar seu efeito? E se um provedor ficar indisponível? Usamos esses cenários nas revisões para exigir evidências, em vez de confiar em diagramas otimistas. Quando um cenário não está resolvido, isso também precisa ficar claro na nossa comunicação pública.

## Fronteira comprovada no código e próximo teste

Uma assinatura de evidência atribui bytes a uma chave registrada, não comprova pagamento bancário.

**Falha a evitar:** apresentar a fronteira examinada como garantia de ponta a ponta já implantada. **Próxima verificação:** comportamento no HEAD exato, testes de integração e evidência operacional. Somente inspeção de código; aprovação editorial e do CTO pendentes.

- [proof.service.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-proof/proof.service.ts)

*Revisão técnica e factual pendente. Não publicar sem aprovação explícita.*
