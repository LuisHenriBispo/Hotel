# Hotel Terabithia
Recentemente, o hotel passou por uma atualização em seu site, utilizando a linguagem de programação JavaScript para tornar a navegação mais dinâmica e interativa. Agora, os usuários podem explorar todas as opções de quartos disponíveis, fazer cadastros, fazer eventos e outras opções.

Hoje vamos desenvolver um programa feito com vários outros programas utilizando um conceito de software modulado, feito com partes independentes. 
O objetivo é desenvolver uma plataforma para funcionários do hotel usarem, não os hóspedes. 
  
De acordo com cada uma das solicitações abaixo, adapte o programa principal: 
Ao acessar o sistema, pergunte o nome do Hotel e diga "O nome do hotel é {Hotel}".
Ao acessar o sistema, pergunte o nome do usuário e uma senha. O nome do usuário não precisa de validação. (senha: 2678)   
Na função "inicio", utilize escolha/caso (switch/case) para validar a opção escolhida pelo do usuário.
Sempre que o usuário acessar o sistema, diga "Bem vindo ao Hotel {Hotel}, {Nome}. É um imenso prazer ter você por aqui!".
Substituir a expressão {Hotel} pelo nome do hotel informado pelo usuário em todos os pontos do código.
Substituir a expressão {Nome} pelo nome do usuário informado pelo usuário em todos os pontos do código.
Sempre que o usuário sair do sistema, exiba a mensagem "Muito obrigado e até logo, {Nome}."
Para cada escolha que o usuário fizer no menu principal, deve ser desenvolvido um programa seguindo as instruções abaixo. Esse programa deve ser criado utilizando uma função principal como chamada. Todo o restante é feito com sua liberdade.
Atualize o menu de opções e a função inicio com todas as opções de programas abaixo. 
Atualize a função "erro" com as novas opções do menu.
Ao encerrar qualquer programa abaixo, sempre retorne ao menu inicial.

Desenvolva um programa que: 
1) Receba o valor de uma diária no hotel e a quantidade de dias de hospedagem. Valide as informações, ou seja, impeça que o usuário informe dados inválidos, de maneira que o valor da diária não seja negativo e que a quantidade de dias não seja negativa, nem maior que 30. 
Em caso de informação inválida escreva na tela “Valor Inválido” e volte ao menu inicial. 

1.1) Em seguida, caso o usuário tenha informado um valor correto, pergunte o nome do hóspede. 

1.2) O próximo passo é perguntar se o usuário confirma a reserva. Caso não aceite, volte ao menu inicial.

2) Aqui vamos tratar do cadastro de hóspedes. 
Imagine que uma família acaba de chegar ao balcão do hotel e quer se hospedar. 

Primeiro diremos ao programa o valor padrão da diária e só então cadastraremos todos os hóspedes. 
O programa receberá vários nomes de hóspedes e suas idades, sem limites. 

Caso o hóspede tenha menos de 6 anos, ela ou ele não paga a diária – nesses casos mostre na tela “[Nome do hóspede] possui gratuidade”.
Caso o hóspede tenha mais de 60, ela ou ele paga metade da diária – mostre na tela “[Nome do hóspede] paga meia”.

O usuário informará hóspedes até digitar a palavra “PARE”, que interrompe a entrada de dados. 

Ao fim, mostre a quantidade de gratuidades, a quantidade de meias hospedagens e o valor total, considerando todos os hóspedes informados.

3) Aqui vamos tratar do cadastro de hóspedes, mas de uma forma diferente. 
Como no programa anterior, imagine que uma família acaba de chegar ao balcão do hotel e quer se hospedar. 

Monte um programa em que o usuário poderá cadastrar e pesquisar hóspedes. 

O programa deve oferecer um menu com algumas opções ao usuário: 1- cadastrar; 2- pesquisar; 3-listar; 4- sair. 

A opção “cadastrar” deve permitir que o usuário informe um nome de hóspede, gravando-o em memória (máximo de 15 cadastros; caso atinja essa quantidade, mostre “Máximo de cadastros atingido”). 

A opção “pesquisar” deve permitir que o usuário informe um nome e, caso seja encontrado um nome exatamente igual, mostre a mensagem “Hospede (nome) foi encontrado". Se o nome não foi encontrado mostre “Hóspede não encontrado”. 

A opção “listar” exibe todos os hóspedes do hotel um a um. 

O programa deve permitir que o usuário realize essas operações repetidas várias vezes, até que use a opção “4”, que retorna ao menu principal.

4) Neste cenário, o hotel receberá não hóspedes, mas eventos. 
Quando uma empresa contrata o hotel para eventos, são oferecidos garçons para servir os convidados. Considerando que cada garçom custa R$ 10,50 por hora, escreva um programa que receba o número de garçons necessários e o total de horas do evento. 

Depois calcule o custo total que o hotel terá com a contratação desses profissionais e exiba o resultado em tela. 

Por último, pergunte se o usuário aceita os valores. Se "S", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."

5) Neste cenário vamos tratar do Buffet do hotel.
O hotel oferece café, água e salgados para cada um dos convidados de um evento alocado em seus salões. A quantidade de café, em litros, é calculada como 0,2 litro para cada convidado; a quantidade de água é calculada como 0,5 litro para cada convidado; são oferecidos 7 salgados por pessoa. 

Faça um programa que:<br /> 
1.Receba a quantidade de convidados e valide se o número de pessoas excede 350 (a capacidade máxima do salão), mostrando, nesse caso, a mensagem “quantidade de convidados superior à capacidade máxima”.<br /> 
1.1 Caso a quantidade de convidados seja válida, calcule a quantidade de água, café e salgados para o evento, mostrando em tela esses valores.<br />
1.2 Sabendo que cada litro de café custa, 0,80 centavos, cada litro de água custa 0,40 centavos e o cento de salgados custa 34 reais, calcule o custo total com comida do evento.<br /> 
1.3 Por último, pergunte se o usuário aceita os valores. Se "SIM", exiba a mensagem "Reserva efetuada com sucesso". Caso contrário, exiba a mensagem "Reserva não efetuada."<br />

6) O hotel necessita de uma funcionalidade que indique qual de seus dois auditórios é o mais adequado para um evento.

O auditório Laranja conta com 150 lugares e espaço para até 70 cadeiras adicionais. 
O auditório Colorado conta com 350 lugares, sem espaço para mais cadeiras. 

Desenvolva um programa que receba o número de convidados do evento e faça uma verificação sobre a quantidade: se for maior que 350 ou se for menor que zero, mostre a mensagem “Número de convidados inválido”. Se o valor informado é válido, mostre na tela qual dos auditórios é o mais adequado, dando prioridade ao Auditório Laranja. 

No caso do auditório Laranja, ainda, calcule quantas cadeiras adicionais serão necessárias, observando o limite citado acima.

7) Ainda em relação aos eventos, o hotel oferece reserva de seu restaurante caso o contratante necessite. O restaurante está disponível para reservas de segunda a sexta das 7hs às 23hs; sábados e domingos apenas das 7hs às 15hs. 


1. Monte um programa que receba o dia da semana em texto.
Importante: na entrada de dados para dia da semana, desconsidere acentos e use letra minúscula. Não é necessário validação para isso no código.<br />

1.1 Também receba a hora (número inteiro, desprezando minutos e segundos)<br />

1.2 Diga se o restaurante está disponível ou  não de acordo com as regras especificadas acima.<br />  
1.3 Quando o restaurante estiver disponível, receba ainda o nome da empresa e mostre na tela a mensagem “Restaurante reservado para (nome da empresa): (dia da semana) às (horas)hs”.

8) O hotel tem um carro para levar seus hóspedes a passeios. O carro é sempre abastecido pelo hotel que tem convênios com dois postos de Gasolina: o Wayne Oil e o Stark Petrol. Os carros podem ser abastecidos tanto com álcool quanto gasolina, mas os preços têm flutuado bastante, então é necessário que que um funcionário cheque qual o posto mais em conta para abastecimento. 

Para isso, é necessário desenvolver um programa em que o usuário informe os valores de álcool e gasolina dos dois postos e depois calcule qual o combustível mais atraente e o posto mais barato. Considere que o tanque do carro comporta 42 litros de combústivel e esse sempre será o volume a ser abastecido. 
Considere que quando o álcool estiver 30% mais barato que a gasolina, é mais barato abastecer com álcool.
Dica: Regra de três.

9) A manutenção dos ares condicionados no hotel é realizada por empresas terceirizadas que, em alguns casos, oferecem desconto quando o serviço é realizado em uma quantidade determinada de aparelhos. 

Dentro desse contexto, crie um programa em que:
1. O usuário informe o valor do serviço por aparelho, a quantidade de aparelhos em manutenção, o percentual de desconto (que pode ser zero) e a quantidade mínima de aparelhos para que o desconto seja dado.

1.1 Calcule o valor total do serviço a partir do valor por aparelho e da quantidade de aparelhos. Aplique sobre esse valor o desconto, caso a quantidade de aparelhos seja maior que a mínima informada para que haja desconto. Ao fim mostre a mensagem “O serviço de [nome da empresa] custará R$ [total calculado]”.

1.2 Permita que o usuário informe várias empresas e os outros dados necessários para o cálculo, usando a função/procedimento para mostrar o total orçado de cada empresa. Termine o algoritmo quando o usuário responder ‘N’ à mensagem “Deseja informar novos dados? (S/N)

1.3 Seja possível obter os diferentes valores orçados e verificar o menor valor. Mostre ao final a mensagem “O orçamento de menor valor é o de (nome da empresa) por R$ (menor valor)".
Considere que sempre serão informados ao menos duas empresas.
