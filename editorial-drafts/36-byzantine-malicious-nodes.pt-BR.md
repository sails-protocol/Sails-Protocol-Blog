# Nodes bizantinos e maliciosos: quais premissas adotar

*Season 6 / Temporada 6. Somente rascunho editorial. Auditoria de fontes e aprovação pendentes.*

## Pergunta

Um node pode estar online e ainda assim agir de forma desonesta. Verificar disponibilidade não prova que seus estados, assinaturas ou observações externas sejam corretos.

## Limites e escolhas

Distinga participante malicioso, operador comprometido e nodes em conluio. Pergunte quais transições podem ser verificadas independentemente, quais fatos dependem de provedores e onde o protocolo precisa falhar de forma segura. Vários nodes não comprovam, por si, tolerância bizantina.

## Falha e verificação

Este tema pertence à preparação adversarial. Qualquer alegação de resiliência bizantina exige modelo de falhas, topologia de teste e evidência além de diagramas.

*No verified implementation claim or permission to publish is implied by this draft.*

## Verificabilidade independente ainda é propriedade em aberto

A investigação Durable Protocol Truth identifica uma propriedade material ausente: um verificador independente ainda não consegue demonstrar toda a ligação Authority assinada → Outcome → DestinationBinding sem confiar nas associações guardadas pelo operador. O relatório situa a maior lacuna entre Outcome e DestinationBinding, inclusive para MULTISIG, e registra ausência de exportação dos fatos pelos participantes. É lacuna documentada de projeto e evidência, não prova de ataque explorado.

**Pergunta adversarial:** se um operador alterar a associação no banco ou reter evidências, qual artefato exportável e vinculado criptograficamente permite a outro nó conferir o destino autorizado? As evidências não justificam alegação universal de resistência Byzantine.

### Evidence ledger

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Historical evidence record and source inspection; latest deployment, CTO review and publication remain unverified.*
