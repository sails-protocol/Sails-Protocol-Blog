# OpenAgents: coordenação econômica para agentes de IA

*Rascunho editorial. Temporada 4. Publicação não aprovada.*

## A pergunta

Um agente de IA pode negociar sem virar dono independente dos fundos?

## Decisão e fronteira

O RFC trata agentes como delegados, não principais econômicos independentes. OpenAgents precisa de escopo, revogação, limites e autoridade responsável; a saída do modelo não autoriza liquidação.

## Falha e evidência

Um agente pode propor negociação após o mandato expirar. O nó deve rejeitar antes de efeitos econômicos; comprovar autorização no commit exato. Não há garantia de agente autônomo implantado.

## Fluxo conceitual

```mermaid
flowchart LR
 A["Intenção de projeto"] --> B["Integração delimitada"]
 B --> C["Verificação independente"]
```

Equivalente textual: a proposta vai da intenção de projeto para uma integração delimitada e depois para verificação independente. Não é um relatório de implementação.

*Pendente: verificação na fonte técnica, citações específicas, revisão editorial e aprovação do responsável.*

## Fronteira examinada no código

Um agente delegado não adquire autoridade econômica independente. Fronteira documentada não é prova de execução no HEAD atual; testar a falha contra estado durável antes de afirmar prontidão.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
