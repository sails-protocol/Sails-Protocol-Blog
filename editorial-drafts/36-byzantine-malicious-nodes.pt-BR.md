# Nodes bizantinos e maliciosos: quais premissas adotar

*Temporada 6. Rascunho editorial. Auditoria das fontes e aprovação pendentes.*

## Pergunta

Um node pode estar online e ainda assim agir de forma desonesta. Verificar disponibilidade não prova que seus estados, assinaturas ou observações externas sejam corretos.

## Limites e escolhas

Distinga participante malicioso, operador comprometido e nodes em conluio. Pergunte quais transições podem ser verificadas independentemente, quais fatos dependem de provedores e onde o protocolo precisa falhar de forma segura. Vários nodes não comprovam, por si, tolerância bizantina.

## Falha e verificação

Este tema pertence à preparação adversarial. Qualquer alegação de resiliência bizantina exige modelo de falhas, topologia de teste e evidência além de diagramas.

*Este rascunho não comprova uma implementação nem autoriza publicação.*

## Verificabilidade independente ainda é propriedade em aberto

A investigação Durable Protocol Truth identifica uma propriedade material ausente: um verificador independente ainda não consegue demonstrar toda a ligação Authority assinada → Outcome → DestinationBinding sem confiar nas associações guardadas pelo operador. O relatório situa a maior lacuna entre Outcome e DestinationBinding, inclusive para MULTISIG, e registra ausência de exportação dos fatos pelos participantes. É lacuna documentada de projeto e evidência, não prova de ataque explorado.

**Pergunta adversarial:** se um operador alterar a associação no banco ou reter evidências, qual artefato exportável e vinculado criptograficamente permite a outro nó conferir o destino autorizado? As evidências não justificam alegação universal de resistência bizantina.

### Registro de evidências

- https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/DURABLE_PROTOCOL_TRUTH_EVIDENCE.md

*Registro histórico de evidências e inspeção do código. Implantação atual, revisão do CTO e publicação ainda não verificadas.*
