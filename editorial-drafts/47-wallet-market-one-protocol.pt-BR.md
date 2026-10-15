# Satsails Wallet e Sails Market: duas aplicações, um protocolo

*Temporada 7. Rascunho editorial. Fontes e revisão do CTO pendentes.*

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

## Teste de falha: duas interfaces, autoridades conflitantes

Uma carteira mostra negociação pendente enquanto o mercado web exibe concluída após receber evento fora de ordem. A pessoa tenta liberar os fundos novamente pela carteira. Compartilhar o nome do protocolo não comprova estado durável comum, mesma chave de idempotência ou permissões de assinatura equivalentes.

**Alternativa:** cada aplicação pode ter experiência própria, mas transições econômicas precisam permanecer vinculadas à mesma autoridade de nó verificada. Backend compartilhado simplifica reconciliação e cria dependência operacional; múltiplos nós exigem provas mais fortes de verificabilidade independente e resolução de conflitos.

**Próximo teste:** abrir a mesma negociação na carteira e no mercado, desconectar um cliente, entregar eventos duplicados e fora de ordem e reconectar. Verificar resultado autoritativo idêntico e ausência de segunda liberação. É cenário de aceitação de interoperabilidade, não prova de que as aplicações já interoperam.

**Vetor de reconciliação:** registrar identificador canônico, decisão de autoridade, resultado persistente e referência de liquidação externa de uma negociação. Entregar os mesmos eventos à carteira e ao mercado em ordens diferentes, incluindo conclusão duplicada após reconexão. Comparar as interfaces com um snapshot autoritativo consultado novamente e tentar uma segunda liberação. O resultado exigido é convergência **sem segundo efeito econômico**; compartilhar SDK não comprova isso. O teste permanece proposto, não executado.
