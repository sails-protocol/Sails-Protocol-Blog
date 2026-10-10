# OpenSettlement: coordenando diferentes meios de pagamento

*Rascunho editorial. Temporada 4. Publicação não aprovada.*

## A questão

 

## Direção de projeto

m

## Evidência antes das afirmações

n

## Fluxo conceitual

```mermaid
flowchart LR
 A["Intenção de projeto"] --> B["Integração delimitada"]
 B --> C["Verificação independente"]
```

Equivalente textual: a proposta vai da intenção de projeto para uma integração delimitada e depois para verificação independente. Não é um relatório de implementação.

*Pendente: verificação na fonte técnica, citações específicas, revisão editorial e aprovação do responsável.*

## Fronteira examinada, não certificação de produção

O registro descreve redes com autoridades e prontidão diferentes; nem todas estão elegíveis para produção. **Falha:** confundir design documentado com comportamento implantado. Ainda são necessários testes de integração e execução no HEAD exato.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
