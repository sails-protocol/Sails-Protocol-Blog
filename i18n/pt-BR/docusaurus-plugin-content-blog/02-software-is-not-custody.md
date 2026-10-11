---
slug: season-2-02-software-is-not-custody
title: "Software não é custódia"
description: "A FinCEN afirmou na decisão FIN-2014-R002 que produzir e distribuir software, por si só, não equivale a aceitar e transmitir valor."
tags: [protocol, editorial]
draft: false
---

## A mudança

A FinCEN afirmou na decisão FIN-2014-R002 que produzir e distribuir software, por si só, não equivale a aceitar e transmitir valor. Em março de 2026, a equipe da CFTC emitiu uma posição condicional de não recomendação de enforcement para atividades específicas da carteira autocustodial Phantom ligadas a mercados registrados. Nenhum dos dois atos autoriza automaticamente qualquer negócio não custodial. Transmissão de dinheiro sob a FinCEN, funções de mercado sob a CFTC e licenças estaduais são questões diferentes.

<!-- truncate -->

## A resposta arquitetural

O teste arquitetural não pode se resumir ao slogan de que o protocolo não toca nos saldos. É preciso identificar quem pode iniciar ou redirecionar transferências, guardar chaves, determinar a execução, selecionar contrapartes, cobrar taxas, resolver disputas e operar cada nó. O Sails deve documentar esses poderes por integração. Fornecer software pode ser substancialmente diferente de operar um serviço financeiro regulado, mas as funções exercidas e a jurisdição determinam o enquadramento.

## Uma árvore de decisões, não um slogan

A primeira pergunta é se a entidade apenas publica código ou também opera um serviço. Depois vem a autoridade: ela pode redirecionar fundos, aprovar transferências sem o usuário ou decidir quais ordens serão executadas? Em seguida, o produto: negociação à vista, transmissão de dinheiro e derivativos não são categorias intercambiáveis. Por fim, é preciso analisar a jurisdição e o operador efetivo. Fornecedor de software, desenvolvedor de carteira, operador de marketplace e provedor de liquidação podem ter obrigações diferentes, mesmo utilizando o mesmo SDK aberto. Uma análise jurídica deve descrever cada ator, não atribuir um único rótulo a todo o ecossistema.

## Siga a autoridade, não o rótulo

Um produto pode se apresentar como não custodial enquanto seu operador mantém uma chave de recuperação, consegue redirecionar transações ou controla discricionariamente a liquidação. Em contrapartida, um usuário pode autorizar uma transferência por uma interface que nunca recebe seus ativos. A auditoria precisa identificar quem assina, quem pode interromper a operação, quem altera o destino, quem recebe taxas e o que acontece quando a infraestrutura falha. Essas respostas importam mais do que o nome do SDK.

No caso do Sails, a afirmação editorial deve ser precisa: a arquitetura pretende coordenar operações P2P sem custodiar saldos. Saber se uma implementação específica cumpre essa promessa exige evidência técnica e análise jurídica, não apenas um artigo.

## Três arquiteturas que parecem iguais na tela

Imagine três aplicativos com o mesmo botão de envio. No primeiro, o usuário assina localmente uma transação para um endereço que ele próprio verificou. No segundo, um servidor recebe instruções, escolhe a rota e transmite fundos mantidos em contas sob sua autoridade. No terceiro, um marketplace não guarda os ativos, mas administra uma infraestrutura que decide quais operações podem ser concluídas. A experiência visual pode ser quase idêntica; as responsabilidades econômicas e jurídicas, não.

O debate sobre software e custódia precisa começar nessa diferença. A posse de chaves é um indicador importante, mas não esgota o exame. Também importam poderes administrativos, mecanismos de recuperação, controle sobre contratos inteligentes, capacidade de substituir destinatários e dependências de provedores. Uma integração de terceiros pode introduzir funções reguladas mesmo quando o SDK principal não mantém saldos.

## Como transformar o princípio em evidência

Uma revisão séria deveria produzir uma tabela por fluxo: quem inicia a operação, quem assina, quem recebe o ativo, quem define a taxa, quem pode cancelar, qual entidade presta o serviço e quais registros sobrevivem a uma falha. O teste precisa cobrir o caminho excepcional, não apenas o caminho feliz. Se uma disputa, indisponibilidade ou atualização de contrato devolver ao operador controle unilateral, a caracterização deve refletir isso.

Para o Sails, essa documentação seria tão importante quanto o código-fonte. A tese não é escapar de regras pela escolha de um nome. É tornar visíveis os limites de autoridade de cada participante para que usuários, integradores e assessores jurídicos possam avaliá-los.

## Fontes e limites de verificação

*As fontes oferecem contexto regulatório, não uma auditoria de uma implantação do Sails nem um parecer jurídico. O enquadramento depende das atividades reais de cada operador e da jurisdição.*

### Documento primário para contexto jurídico

- [FinCEN FIN-2014-R002](https://www.fincen.gov/resources/statutes-regulations/administrative-rulings/application-fincens-regulations-virtual)

A orientação da FinCEN sobre software é uma referência jurídica limitada, não uma decisão sobre qualquer operador ou integração do Sails.

- [Posição condicional da equipe da CFTC sobre a Phantom (2026)](https://www.cftc.gov/PressRoom/PressReleases/9197-26)
