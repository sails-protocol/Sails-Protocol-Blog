# Salas privadas de negociação e mercados abertos

*Rascunho editorial. Publicação não aprovada.*

## O problema

Nem toda negociação P2P precisa estar num livro público de ofertas. Uma comunidade pode querer negociar dentro de um grupo; uma empresa pode restringir contrapartes; outro participante pode preferir descoberta pública.

## O limite

Salas privadas fazem parte da direção de produto do Sails Market. Mas descoberta privada, controle de acesso e liquidação econômica são preocupações diferentes. Esconder uma oferta da busca pública não criptografa automaticamente todas as mensagens, não protege todos os metadados nem garante que a contraparte seja confiável.

## O que ainda precisa ser comprovado

Um bom desenho precisa explicar quem pode criar uma sala, convidar participantes, revogar acesso, ver o histórico e iniciar negociações. Também precisa explicar quais regras de coordenação são comuns aos contextos público e privado. São perguntas de produto e segurança a validar, não funcionalidades concluídas para anunciar.

## Diagrama conceitual

```mermaid
flowchart TD
 A[Descoberta de negociações] --> B[Mercado aberto]
 A --> C[Sala privada]
 B --> D[Regras comuns de coordenação]
 C --> D
```

Equivalente textual: o diagrama mostra os limites de responsabilidade descritos acima, não uma implantação verificada.

*Referências, revisão técnica e aprovação do responsável pela publicação pendentes.*

## Cenário de falha: a participação muda durante uma negociação

O administrador remove alguém de uma sala depois que essa pessoa visualizou uma oferta, mas antes de aceitá-la. A oferta pode continuar no cache do aplicativo. Se o servidor verificar apenas que a oferta já foi descoberta, a pessoa removida ainda poderá iniciar uma negociação. Por outro lado, cancelar automaticamente toda negociação em andamento após uma remoção pode impedir a conclusão ou a disputa de obrigações legítimas. Visibilidade, autorização para iniciar uma ação nova e autoridade sobre uma obrigação já criada exigem regras distintas.

Também seria incorreto presumir que descoberta privada significa transporte confidencial. Mesmo com a lista de ofertas oculta, horários de notificações, contrapartes e metadados de liquidação podem vazar por outros sistemas. A interface não deve prometer anonimato ou mensagens criptografadas sem evidências verificadas.

## Decisão, alternativa e próximo teste

O produto precisa definir o estado da participação no momento da ação, a semântica da revogação, o destino das negociações em andamento e as permissões independentes de liquidação. Revogação rígida reduz novas ações indevidas, mas exige recuperação das obrigações existentes. Permitir sua conclusão preserva continuidade, mas não pode conceder autoridade nova silenciosamente.

**Próximo teste:** disputar a corrida entre remoção da sala e aceite da oferta, depois repetir uma solicitação anteriormente autorizada após a revogação. Verificar rejeição de novas transições não autorizadas e tratamento explícito das obrigações existentes. Testar exposição de metadados separadamente. O modelo de ameaças citado descreve riscos, **não** certifica salas privadas implantadas nem garantias de privacidade.

## Fronteira examinada e falha

Visibilidade privada não impede conluio nem transições sem autorização. **Falha:** apresentar design como implantação comprovada. A fonte fixada sustenta apenas esse escopo; gates de execução e CTO seguem abertos.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)
