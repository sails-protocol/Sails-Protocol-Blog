# OpenSettlement: coordenando diferentes meios de pagamento

*Rascunho editorial. Temporada 4. Publicação não aprovada.*

## A pergunta

Um mesmo fluxo pode liquidar Bitcoin multisig, um pagamento Lightning em retenção e um token EVM com as mesmas regras de finalidade? Não. Cada rede tem autoridade externa e janelas de falha próprias.

## Decisão e fronteira

O registro examinado inclui caminhos MULTISIG, LIGHTNING_HODL, WDK_USDT_EVM e SAFE_GUARD_EVM. A prontidão não é equivalente: o caminho WDK_USDT_EVM com custódia no servidor não está elegível para produção, e SAFE_GUARD_EVM exige prova ao vivo com RPC financiado e bundler. A evidência registrada de recuperação e reconciliação cobre cenários MULTISIG específicos, não todas as redes. A coordenação OpenSettlement precisa preservar essas diferenças, não reduzi-las a um único estado Liquidado.

## Falha e evidência

Um provedor expira após transmitir uma operação. Repetir o efeito econômico sem reconciliação pode duplicá-lo; assumir falha pode deixar a negociação travada. A evidência de recuperação vale para a rede testada. Uma garantia entre redes exige recibos independentes, testes de reinício no HEAD exato e verificação do vínculo com o destino.

## Próxima pergunta

Qual rede demonstra finalidade, recuperação e vínculo com o destino diante de uma falha real do provedor?

## Fluxo conceitual

```mermaid
flowchart LR
 A["Intenção de projeto"] --> B["Integração delimitada"]
 B --> C["Verificação independente"]
```

Equivalente textual: a proposta vai da intenção de projeto para uma integração delimitada e depois para verificação independente. Não é um relatório de implementação.

*Pendente: verificação na fonte técnica, citações específicas, revisão editorial e aprovação do responsável.*

## Cenário de falha: timeout não significa reversão

Um coordenador transmite uma liberação em determinada rede e perde a resposta do provedor. Outro worker encontra um timeout e repete o efeito econômico antes de reconciliar a transação original. Pode surgir liberação duplicada ou resultado local conflitante se autorização e observações do provedor não estiverem vinculadas à mesma intenção durável. As regras de confirmação de multisig Bitcoin não podem ser copiadas automaticamente para Lightning hold ou contrato EVM.

**Escolha arquitetural:** um indicador genérico de liquidação é simples, mas apaga finalidade, recuperação e autoridade específicas de cada rede. Estados explícitos do provedor e reconciliação aumentam a complexidade, porém preservam a incerteza.

**Próximo teste:** injetar timeout após transmissão, reiniciar dois workers e repetir a solicitação de liberação. Exigir uma única transição autorizada, vínculo ao destino e resultado do provedor observado independentemente para a rede testada. O registro e a conformidade histórica delimitada a MULTISIG não comprovam segurança entre redes nem elegibilidade de produção de WDK_USDT_EVM ou SAFE_GUARD_EVM.

## Fronteira examinada, não certificação de produção

O registro descreve redes com autoridades e prontidão diferentes; nem todas estão elegíveis para produção. **Falha:** confundir design documentado com comportamento implantado. Ainda são necessários testes de integração e execução no HEAD exato.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
