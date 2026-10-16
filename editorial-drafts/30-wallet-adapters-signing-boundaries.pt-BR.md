# Adaptadores e limites da carteira: WDK, BDK e assinatura externa

*Somente rascunho. Publicação não aprovada. Season 5, article 30.*

## Pergunta

Uma carteira pode mostrar a mesma negociação que outra aplicação sem compartilhar suas chaves privadas. A pergunta relevante é qual componente pode solicitar uma transação e qual pode autorizar a assinatura.

## Limite e desenho

WDK e BDK representam superfícies diferentes de integração e não devem ser tratados como mecanismos intercambiáveis de derivação, descoberta ou assinatura. Um adaptador Sails precisa descrever suporte exato de redes, custódia de chaves, derivação de endereços, autoridade de assinatura e recuperação. Um SDK que coordena uma negociação não deve obter acesso silencioso à seed.

## Falha e evidência

Um caso de falha realista é um adaptador retornar endereço de um caminho de derivação inesperado ou uma aplicação assinar transação fora do contexto autorizado. Compatibilidade exige vetores de teste e verificações reais de recuperação, não suposições sobre marcas.

*Verificação de fontes e referências exatas de API pendentes.*

## Teste de falha: assinatura correta para a negociação errada

Um adaptador exibe um endereço aparentemente válido, mas de outra rede ou caminho de derivação. O usuário assina uma transação cujo destino difere daquele autorizado na negociação. Uma assinatura válida comprova consentimento sobre os bytes, não que a aplicação representou corretamente a obrigação econômica. A recuperação também falha se uma seed importada produzir endereços diferentes dos da carteira original.

**Alternativa:** vincular o produto a uma carteira facilita suporte, mas reduz portabilidade; adaptadores abstratos permitem escolha, porém exigem contratos explícitos de rede, derivação, assinatura e recuperação. Nenhuma opção autoriza acesso implícito do SDK à seed.

**Próximo teste:** comparar vetores determinísticos de derivação, rejeitar destino de rede errada, alterar a saída proposta após a confirmação do usuário e restaurar em outra carteira. Registrar versões e comportamento real dos assinantes. O registro de provedores citado não comprova compatibilidade WDK/BDK nem isolamento de seed em produção.

## Fronteira examinada no código

O roteamento de provedores não comprova isolamento da seed nem compatibilidade de derivação. Fronteira documentada não é prova de execução no HEAD atual; testar a falha contra estado durável antes de afirmar prontidão.

- [escrow-providers.ts](https://github.com/sails-protocol/Sails-Protocol/blob/be6d3bc2ddfc384cfafa4276e01b8aacc096d421/src/modules/open-settlement/escrow-providers.ts)
