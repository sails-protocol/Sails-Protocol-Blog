# Satsails Wallet e Sails Market: duas aplicações, um protocolo

*Season 7 / Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

## Pergunta

Uma carteira e um mercado web podem mostrar a mesma oferta com interfaces e ambientes de assinatura diferentes. Não devem inventar realidades econômicas conflitantes.

## Limite e decisão

Sails Protocol define contratos de coordenação; o Trading SDK é uma superfície de integração; Satsails Wallet e Sails Market são aplicações. O Market não deve exigir liquidez própria isolada, nem qualquer aplicação deve assumir custódia apenas para mostrar uma negociação.

## Falha e evidência

Se duas aplicações exibirem estados diferentes após reconexão, a autoridade econômica precisa ser explícita e a reconciliação testável. Isto é um objetivo arquitetural, não prova de interoperabilidade implantada.

*Este texto não afirma implementação em produção nem aprovação para publicação.*

## Fronteira de evidência

Semântica econômica compartilhada exige provas executáveis entre clientes, não apenas o nome do protocolo. **Falha:** confundir intenção documentada com comportamento verificado em produção. Evidência de execução no HEAD exato e aprovação pendentes.

- [PROTOCOL_INVARIANTS.md](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/docs/PROTOCOL_INVARIANTS.md)
