# Salas privadas, ofertas públicas e abuso de mercado

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

Uma sala privada facilita a coordenação entre participantes conhecidos, mas também pode ocultar condições abusivas, falsificação de identidade ou visibilidade seletiva.

## Limite e decisão

Separe participação na sala, descoberta de ofertas, controle de acesso e autorização econômica. Administrar uma sala não deve conferir silenciosamente poder de assinatura sobre carteiras. Ofertas públicas e privadas podem compartilhar regras econômicas, mas expor metadados diferentes.

## Falha e evidência

Um membro removido tenta aceitar uma oferta em cache. O node precisa verificar autorização atual e validade da oferta, não confiar na interface antiga. Privacidade e moderação continuam sendo questões de desenho.

*Este texto não afirma implementação em produção nem aprovação para publicação.*

## Fronteira de evidência

Controle de acesso a salas privadas não impede sozinho conluio, Sybil ou abuso de mercado. **Falha:** confundir intenção documentada com comportamento verificado em produção. Evidência de execução no HEAD exato e aprovação pendentes.

- [THREAT_MODEL.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/THREAT_MODEL.md)

## Teste de falha: acesso revogado e ofertas antigas

Um moderador remove um participante enquanto o navegador dele ainda mantém uma oferta em cache. O navegador envia o aceite após a revogação; outra conta controlada pela mesma pessoa tenta voltar com nova identidade. O selo de sala privada não comprova participação atual, preço honesto nem identidade independente.

**Alternativa:** descoberta privada reduz exposição indesejada, mas também pode ocultar condições discriminatórias ou manipulação coordenada. Política de acesso à sala deve permanecer separada da autoridade sobre negociações, e regras de moderação exigem possibilidade de contestação e auditoria.

**Próximo teste:** disputar a corrida entre revogação e aceite em duas sessões, repetir oferta antiga e verificar rejeição sem efeito econômico. Revisar separadamente denúncias de abuso e metadados da sala expostos a terceiros. É teste proposto, não prova de salas privadas implantadas.
