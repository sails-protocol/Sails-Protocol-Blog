---
slug: season-2-05-noncustodial-business-model
title: "O modelo de negócios não custodial"
description: "Durante anos, modelos de negócio de carteiras dependeram de custódia, spreads ou acesso privilegiado ao fluxo de ordens."
tags: [protocol, editorial]
draft: false
---

## A mudança

Durante anos, modelos de negócio de carteiras dependeram de custódia, spreads ou acesso privilegiado ao fluxo de ordens. Uma carteira também pode gerar valor ajudando usuários a descobrir contrapartes, compreender condições, apresentar evidências e concluir transações que autorizaram. Taxas de software, coordenação e indicações são possibilidades, mas a forma de cobrança e a atuação concreta do operador importam para a classificação jurídica.

<!-- truncate -->

## A resposta arquitetural

A proposta do Sails é tornar visíveis as fronteiras comerciais e de segurança: usuários mantêm autoridade de assinatura; aplicações informam as cobranças; provedores respondem pela própria execução; e estados de coordenação não são apresentados falsamente como prova de liquidação. É uma direção de arquitetura que precisa de evidência de implementação, não uma afirmação de que toda taxa ou integração está fora da regulação.

## Uma falha que precisamos testar

Uma comissão escondida no preço, uma indicação não identificada ou uma promessa de execução que o aplicativo não controla podem transformar monetização em conflito de interesses.

## Receita sem manter o saldo

Uma interface não custodial pode cobrar por software útil, descoberta avançada, fluxos verificáveis ou indicações transparentes. Essas receitas não exigem uma reserva própria de ativos dos clientes, mas podem criar conflitos: um rebate oculto distorce rankings, e um marketplace supostamente neutro pode favorecer um provedor. Transparência sobre incentivos é, portanto, requisito de produto.

O modelo do Sails Market deve separar taxa de protocolo, taxa da interface, rebate de provedor e custo de rede. Nenhuma dessas categorias define sozinha o enquadramento regulatório. Importa a conduta concreta, sobretudo quem controla a execução, mantém valores ou intermedeia instrumentos regulados.

## A receita precisa ser compreensível

Uma taxa sobre negociação concluída, um rebate de integração e uma assinatura de ferramentas profissionais são negócios diferentes. Cada um exige transparência sobre incentivos e sobre o que o operador controla. Receita sustentável sem custódia não deve depender de roteamento oculto nem de assumir controle dos fundos em situações excepcionais.

## O problema dos incentivos

Um negócio que nunca guarda o saldo dos clientes ainda possui incentivos que merecem atenção. Pode ganhar mais quando um provedor específico recebe a ordem, quando a rota inclui etapas adicionais ou quando o usuário escolhe um produto afiliado. Nada disso é automaticamente abusivo. O risco aparece quando o usuário não consegue enxergar o incentivo, comparar alternativas ou verificar se a execução respeitou as regras anunciadas. Um modelo sustentável deve identificar quem paga cada taxa, quando ela é devida, como reembolsos e disputas a afetam e se o operador consegue alterar condições após o início da negociação.

Imagine uma carteira que apresenta cotação de um provedor externo de swap. Se recebe rebate, o usuário precisa entender se ele está embutido no preço e se outras rotas foram consideradas. Imagine também um marketplace P2P que cobra por coordenação concluída. O sistema precisa distinguir resultado econômico confirmado de uma notificação otimista; caso contrário, pode cobrar sobre negociações falhas ou inconclusivas. São questões comerciais e técnicas. No Sails, contabilização de taxas e autoridade sobre resultados duráveis exigem evidências próprias antes de serem descritas como funcionalidades entregues.

## Um teste prático de transparência da receita

Antes de confirmar uma operação, o usuário deveria conseguir responder quatro perguntas: quem cobra a taxa, qual evento torna a cobrança devida, quem recebe eventual comissão de indicação e qual parte pode contestá-la ou revertê-la. Uma taxa percentual sobre a negociação não é necessariamente a mesma coisa que custo de rede, spread do provedor ou rebate de afiliado. Misturar tudo em uma única rubrica dificulta a comparação, mesmo quando o aplicativo não mantém custódia.

Imagine um comerciante comparando duas rotas para receber stablecoins. A rota A apresenta uma taxa visível menor, mas remunera melhor a interface; a rota B cobra mais na primeira tela, porém entrega um valor líquido superior. Um produto útil deveria comparar o resultado final para o usuário e revelar incentivos relevantes. Também não deveria apresentar uma cotação como garantia de liquidação. O modelo se torna mais defensável quando a interface explica sua remuneração sem depender apenas da palavra do provedor e quando uma operação inconclusiva não dispara silenciosamente uma taxa de sucesso. Trata-se de um padrão de produto proposto, não de uma funcionalidade comprovadamente entregue pelo Sails Market.

## Limite das evidências

Este é um modelo de incentivos proposto. Taxas reais, contrapartes e controle dos fundos exigem verificação por integração.
