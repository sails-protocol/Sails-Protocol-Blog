# Adaptadores e limites da carteira: WDK, BDK e assinatura externa

*Somente rascunho. Publicação não aprovada. Season 5, article 30.*

## Pergunta

Uma carteira pode mostrar a mesma negociação que outra aplicação sem compartilhar suas chaves privadas. A pergunta relevante é qual componente pode solicitar uma transação e qual pode autorizar a assinatura.

## Limite e desenho

WDK e BDK representam superfícies diferentes de integração e não devem ser tratados como mecanismos intercambiáveis de derivação, descoberta ou assinatura. Um adaptador Sails precisa descrever suporte exato de redes, custódia de chaves, derivação de endereços, autoridade de assinatura e recuperação. Um SDK que coordena uma negociação não deve obter acesso silencioso à seed.

## Falha e evidência

Um caso de falha realista é um adaptador retornar endereço de um caminho de derivação inesperado ou uma aplicação assinar transação fora do contexto autorizado. Compatibilidade exige vetores de teste e verificações reais de recuperação, não suposições sobre marcas.

*Verificação de fontes e referências exatas de API pendentes.*
