# OpenIdentity: identidade sem aprisionamento à plataforma

*Rascunho editorial. Temporada 4. Publicação não aprovada.*

## A pergunta

Identidade comprova controle de uma chave, mas quem pode agir numa negociação?

## Decisão e fronteira

O modelo separa o participante principal da carteira ou agente delegado. Autenticação por desafio e resposta não autoriza uma negociação; cada transição econômica deve verificar participante e papel.

## Falha e evidência

Assinatura válida de participante errado não pode liberar escrow. Testar escopo da delegação e resistência a replay no HEAD exato antes de afirmar portabilidade entre aplicações.

## Fluxo conceitual

```mermaid
flowchart LR
 A["Intenção de projeto"] --> B["Integração delimitada"]
 B --> C["Verificação independente"]
```

Equivalente textual: a proposta vai da intenção de projeto para uma integração delimitada e depois para verificação independente. Não é um relatório de implementação.

*Pendente: verificação na fonte técnica, citações específicas, revisão editorial e aprovação do responsável.*

## Fronteira examinada, não certificação de produção

Agentes delegados não são participantes econômicos independentes. **Falha:** confundir design documentado com comportamento implantado. Ainda são necessários testes de integração e execução no HEAD exato.

- [RFC-001-participant-model.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/rfcs/RFC-001-participant-model.md)
