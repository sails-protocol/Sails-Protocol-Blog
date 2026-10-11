# Primeira integração: da instalação do SDK a uma negociação P2P segura

*Somente rascunho. Publicação não aprovada. Season 5, article 28.*

## Pergunta

Uma integração não termina quando o SDK é importado sem erros. Imagine um comprador que confirma um pagamento, perde a conexão e aperta o botão novamente. A aplicação não pode transformar a segunda tentativa em um segundo efeito econômico.

## Limite e desenho

A integração precisa de responsabilidades distintas: a interface apresenta a negociação; a identidade autentica quem age; o SDK envia uma intenção delimitada; o node aplica estado e autoridade; a carteira assina apenas o que o usuário autoriza; o meio externo fornece suas próprias evidências de liquidação. Nenhuma camada deve reivindicar todas essas funções.

## Falha e evidência

Um primeiro teste útil deve repetir a mesma intenção, disputar duas ações concorrentes, reiniciar o processo antes da confirmação e verificar o resultado persistido. Até conferir assinaturas de API, adaptadores suportados e testes reproduzíveis no repositório, isto é um guia de desenho de integração, não um tutorial pronto para copiar e executar.

*Verificação de fontes e referências exatas de API pendentes.*

## Escopo fundamentado em fonte

O SDK oferece chave opcional de idempotência; o cliente precisa preservá-la entre tentativas. **Falha:** tratar design ou API examinada como prontidão universal de produção. Testes no HEAD exato e aprovação seguem pendentes.

- [openp2p.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/packages/sails-sdk/src/modules/openp2p.ts)

## Contrato de aceitação da integração

A assinatura examinada do SDK é `trade(offerId, amount, idempotencyKey?)`. Como a chave é opcional na API, o cliente deve gerar uma chave estável para cada aceitação lógica, persisti-la antes do envio e reutilizá-la após uma resposta ambígua. A rota valida a chave recebida; o serviço a delimita ao participante autenticado, à ação e aos dados da negociação. Uma nova aceitação do usuário é outra intenção, não uma tentativa repetida.

**Contraexemplo:** o aplicativo recria a chave ao reconectar. A segunda chamada pode ser interpretada como nova aceitação. **Evidência necessária:** teste de integração no HEAD exato com mesma chave, payload diferente, chamadas concorrentes e reinício do processo, usando persistência real. Este artigo não afirma que esses testes foram executados.

- [Rota de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.routes.ts)
- [Serviço de negociação](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-p2p/trade.service.ts)
