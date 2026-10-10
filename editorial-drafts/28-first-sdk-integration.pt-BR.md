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
