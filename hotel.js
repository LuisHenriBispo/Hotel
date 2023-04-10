var lista_hos = [];
var nomehotel = 0;
var nomeusuario = 0;
var senha = "";

function inicio(){
    nomehotel = prompt("Digite o nome do hotel: ");
    nomeusuario = prompt("Digite seu nome: ");
    senha = prompt("Digite a senha para acessar o sistema:");

    if (senha == "2678") {
        alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario}. É um imenso prazer ter você por aqui!`);
        escolha();
    } else {
        console.log("caiu aqui no else", nomeusuario);
        alert("SENHA INCORRETA!");
        inicio();
    }
}

function escolha() {
    var escolha = parseInt(prompt('Selecione uma opção: \n1.) Reserva de Quartos \n2.) Cadastro de Hóspedes \n3.) Abastecimento de Carros \n4.) Eventos \n5.) Manutenção de Ar condicionado \n6.) Sair'));
    if (escolha === 1) {
        reserva_quartos();
    } else if (escolha === 2) {
        sis_cadastro_hospedes();
    } else if (escolha === 3) {
        abastecer_carros();
    } else if (escolha === 4) {
        evento();
    }else if (escolha === 5) {
        ar_condic();
    }else if (escolha === 6) {
        sair();        
    } else {
        erro();
    }
}		

function reserva_quartos() {
    var diaria = parseInt(prompt("Digite o valor da diária:"));
    var qntddias = parseInt(prompt("Digite a quantidade de dias de hospedagem:"));
  
    if (diaria <= 0 || qntddias <= 0 || qntddias > 30) {
      alert("Valor inválido");
      menu();
    } else {
      var name_hospede = prompt("Digite o nome do hóspede:");
      confirmar_reserva(diaria, qntddias, nomeusuario);
    }
  }
  
  function confirmar_reserva(diaria, qntddias, nomeusuario) {
    var confirmacao = confirm(`Confirma a reserva para ${nomeusuario} por ${qntddias} dias, com o valor total de R$ ${(diaria * qntddias).toFixed(2)}?`);
    if (confirmacao) {
      alert(`Reserva confirmada para ${nomeusuario} por ${qntddias} dias, com o valor total de R$ ${(diaria * qntddias).toFixed(2)}.`);
      escolha();
    } else {
      escolha();
    }
  }
  

function sis_cadastro_hospedes() {
    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - CADASTRO DE HOSPEDES`);
    var hospedes = parseInt(prompt("Cadastro de hospedagem\nSelecione uma opção: \n1.) Cadastrar \n2.) Pesquisar \n3.) Listar \n4.) Sair"));

    switch (hospedes) {
        case 1:
        cadastro_hospedes();
        break;
        case 2:
        pesquisar_hospedes();
        break;
        case 3:
        listar_hospedes();
        break;
        case 4:
        escolha();
        break;
        default:
            console.log(hospedes);

    }

    
}

function cadastro_hospedes(){
    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - CADASTRO DE HOSPEDES`);

    var diaria_hos = parseFloat(prompt('Informe o valor padrão da diária:'))
    if (diaria_hos <= 0 || isNaN(diaria_hos)) {
        alert('Valor Inválido.');
        cadastro_hospedes();
    }

    var gratuidade = 0;
	var meia = 0;
	var normal = 0;
	var Total = 0;

    while (true) {
        if (lista_hos.length >=15) {
            alert("Número máximo de hóspedes cadastrados");
            sis_cadastro_hospedes();
        }else {
            var name_hospede = prompt('Digite seu nome para começar o cadastramento ( ou clique em "CANCELAR" para parar o cadastramento).');
            
            if (name_hospede === null){
                alert(`Quantidade de gratuidades: ${gratuidade}\nQuantidade de meias hospedagens: ${meia}\nQuantidade de hospedagens normais: ${normal}\nValor total da hospedagem: R$ ${Total}`);
				sis_cadastro_hospedes();
                return;
            } else {
                lista_hos.push(name_hospede);
                console.log(lista_hos);
            }
        
            var diarias = parseInt(prompt(`Informe o número de diárias do hóspede ${name_hospede}`));
			var valorHos= diaria_hos * diarias;

					var idade_hospede = parseInt(prompt(`Informe a idade do hóspede ${name_hospede}`));
					if (idade_hospede < 6 && idade_hospede > 0) {
						alert(`${name_hospede} possui gratuidade.`);
						alert("Sucesso! Hóspede " + name_hospede + " foi cadastrada(o) com sucesso!\n");
						gratuidade++;

					} else if (idade_hospede >= 6 && idade_hospede < 60) {
						alert(`${name_hospede} paga o valor normal.`)
						alert("Sucesso! Hóspede " + name_hospede + " foi cadastrada(o) com sucesso!\n");
						normal++;
						Total += valorHos;

					} else {
						Total - diaria_hos;
						alert(`${name_hospede} paga meia.`);
						alert("Sucesso! Hóspede " + name_hospede + " foi cadastrada(o) com sucesso!\n");
						meia++;
						Total += valorHos / 2;
                    }            
        }
    }
}

function pesquisar_hospedes() {
    var name_hospede = prompt('Por favor, informe o nome da(o) hóspede para pesquisa:');
    if (lista_hos.includes(name_hospede)) {
        alert(`${name_hospede} encontrada(o).`);
    } else {
        alert(`${name_hospede} não foi encontrada(o).`);
    }
    sis_cadastro_hospedes();
}

function listar_hospedes() {
    var hospedes = "Hóspedes cadastrados:\n";
    for (var i = 0; i < lista_hos.length; i++) {
        hospedes += (i+1) + ". " + lista_hos[i] + "\n";
    }
    alert(hospedes);
    sis_cadastro_hospedes();
}

function evento() {

    var escolha_evento = parseInt(prompt('Serviço de Eventos, Selecione uma opção: \n1) Serviço de garçons \n2) Serviço de Buffet \n3) Reserva de Espaços \n4) Reserva de restaurante\n5) Sair'));

    switch (escolha_evento) {
        case 1:
            garcon_evento();
            break;
        case 2:
            buffet_evento();
            break;
        case 3:
            espaco_evento();
            break;
        case 4:
            restaurante_evento();
            break;
        case 5:
            escolha();
            break;
        default:
            erro_evento();
    }
}

function garcon_evento() {

    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - CONTRATO DE GARÇONS`);
    alert('Bem-vindo(a) à área de eventos do hotel.\nVocê pode contratar nossos serviços de garçon com os preços abaixo:\nGarçon: R$ 10,50/hora.');

    var valor_garcon = 10.50;
    var quant_garcon = parseInt(prompt('Informe a quantidade de garçons necessários'));
    var horas = prompt('Informe o total de horas de duração do evento:');

    var custo_evento = (valor_garcon * quant_garcon) * horas;
			var confirma = prompt(`O custo total do evento é de R$ ${custo_evento}. Deseja confirmar a reserva? S/N`);
			if (confirma == 'S') {
				alert('Reserva efetuada com sucesso.');
			} else {
				alert('Reserva não efetuada');
			}

			evento();

}

function buffet_evento() {

    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - BUFFET DE EVENTO`);
    alert('Bem-vindo(a) à área do Buffet de eventos do hotel.\nVocê pode contratar nossos serviços com os preços abaixo:\nCafé: R$ 0,16 por convidado (0,2 litros por pessoa a R$ 0,80 o litro);\nÁgua: R$ 0,20 por convidado (0,5 litros por pessoa a R$ 0,40 o litro);\nSalgado: R$ 2,38 por convidado (7 salgados por pessoa a R$ 0,34 cada).');

    var cafe_conv = 0.2; //é calculada como 0,2 litro para cada convidado
			var cafe_preco = 0.8 / 5; //cada litro de café custa, 0,80 centavos
			var agua_conv = 0.5; //0,5 litro para cada convidado
			var agua_preco = 0.4 / 2; //cada litro de água custa 0,40 centavos
			var salgado_conv = 7; // 7 salgados por pessoa
			var salgado_preco = (34 / 100) * 7; //cento de salgados custa 34 reais

			var quant_conv = parseInt(prompt('Informe a quantidade de convidados:'));
			if (quant_conv < 0) {
				alert('Informe dados válidos.');
			} else if (quant_conv > 350) {
				alert('Quantidade de convidados superior à capacidade máxima');
			} else {
				var agua_Qtotal = agua_conv * quant_conv;
				var agua_Ptotal = agua_preco * quant_conv;
				var cafe_Qtotal = cafe_conv * quant_conv;
				var cafe_Ptotal = cafe_preco * quant_conv;
				var salgado_Qtotal = salgado_conv * quant_conv;
				var salgado_Ptotal = salgado_preco * quant_conv;
				var evento_total = agua_Ptotal + salgado_Ptotal + cafe_Ptotal;

				alert(`Quantidade e preços totais:\nCafé: ${cafe_Qtotal.toFixed(2)} litros por R$ ${cafe_Ptotal.toFixed(2)};\nÁgua: ${agua_Qtotal.toFixed(2)} litros por R$ ${agua_Ptotal.toFixed(2)};\nSalgados: ${salgado_Qtotal} unidades por R$ ${salgado_Ptotal.toFixed(2)};`)

				var confirma = prompt(`O custo total do evento é de R$ ${evento_total.toFixed(2)}. Deseja confirmar a reserva? S/N`);
				if (confirma == 'S') {
					alert('Reserva efetuada com sucesso.');
				} else {
					alert('Reserva não efetuada');
				}

				evento();

			}
		

}

function espaco_evento() {
    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - ESPAÇO PARA EVENTOS`);
    alert('Bem-vindo(a) à área de eventos do hotel.\nAqui você pode escolher qual auditório se adequa ao seu evento:\nAuditório Laranja conta com 150 lugares e espaço para até 70 cadeiras adicionais;\nAuditório Colorado conta com 350 lugares, sem espaço para mais cadeiras.');

    var numero_convidados = parseInt(prompt('Informe o número de convidados:'));
    if (numero_convidados <= 0 || numero_convidados > 350) {
        alert("Número de convidados inválido.");
        evento();
    } else if (numero_convidados <= 220) {
        if (numero_convidados > 150) {
            alert(`Auditório Laranja é o mais adequado para o evento. Serão necessárias ${numero_convidados - 150} cadeiras adicionais.`);
            evento();
        } else {
            alert("Auditório Laranja é o mais adequado para o evento.");
            evento();
        }
    } else {
        alert("Auditório Colorado é o mais adequado para o evento.");
        evento();
    }
}

function restaurante_evento() {
    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - RESERVA DE RESTAURANTE`);
    var diaS = prompt("Digite o dia da semana desejado:").toLowerCase();

    var hora = Math.floor(parseFloat(prompt("Digite a hora desejada:")));

    var disponivel = false;
    if (diaS === "segunda" || diaS === "terca" || diaS === "quarta" || diaS === "quinta" || diaS === "sexta") {
        if (hora >= 7 && hora <= 23) {
            disponivel = true;
        }
    } else if (diaS === "sabado" || diaS === "domingo") {
        if (hora >= 7 && hora <= 15) {
            disponivel = true;
        }
    }

    if (disponivel) {
        var empresa = prompt("Restaurante disponível! Informe o nome da empresa:");
        alert(`Restaurante reservado para ${empresa}: ${diaS} às ${hora}hs.`);
    } else {
        alert("Restaurante não disponível para o dia e hora informados.");
    }

    evento();

}

function abastecer_carros() {
    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - ABASTECER`);

			var gasolina_Wayne = parseFloat(prompt('Informe o valor da gasolina no posto Wayne Oil:'));
			var alcool_Wayne = parseFloat(prompt('Informe o valor do álcool no posto Wayne Oil:'));
			var gasolina_Stark = parseFloat(prompt('Informe o valor da gasolina no posto Stark Petrol:'));
			var alcool_Stark = parseFloat(prompt('Informe o valor do álcool no posto Stark Petrol:'));

			var proporcaoAlcoolWayne = alcool_Wayne / gasolina_Wayne;
			var proporcaoAlcoolStark = alcool_Stark / gasolina_Stark;

			var combustivel;
			var posto;
            var precoAlcoolWayne;
            var precoAlcoolStark;
			if (proporcaoAlcoolWayne <= 0.7 * proporcaoAlcoolStark) {
				combustivel = "álcool";
				if (precoAlcoolWayne <= precoAlcoolStark) {
					posto = "Wayne Oil";
				} else {
					posto = "Stark Petrol";
				}
			} else {
				combustivel = "gasolina";
				if (gasolina_Wayne <= gasolina_Stark) {
					posto = "Wayne Oil";
				} else {
					posto = "Stark Petrol";
				}
			}
			alert(`O combustível que vale mais apena é o/a ${combustivel}, e o posto mais barato é o ${posto}.`);

    escolha();
}

function ar_condic() {
    alert(`Bem vindo ao Hotel ${nomehotel}, ${nomeusuario} - MANUTENÇÃO DE AR CONDICIONADOS`);

    var empresas = [];
    var continuar = true;

    while (continuar) {
        var nome_empresa = prompt("Digite o nome da empresa:");
        var valor_aparelho = parseInt(prompt("Digite o valor do serviço por aparelho:"));
        var quantidade_aparelho = parseInt(prompt("Digite a quantidade de aparelhos em manutenção:"));
        var desconto_aparelho = parseInt(prompt("Digite o percentual de desconto (em %):"));
        var quantidadeMinimaDesconto = parseInt(prompt("Digite a quantidade mínima de aparelhos para ter desconto:"));

        var valorTotal = valor_aparelho * quantidade_aparelho;
        var valorDesconto = 0;

        if (quantidade_aparelho >= quantidadeMinimaDesconto) {
            valorDesconto = valorTotal * (desconto_aparelho / 100);
        }

        var valorFinal = valorTotal - valorDesconto;

        empresas.push({
            nome_empresa: nome_empresa,
            valor_aparelho: valorFinal,
        });

        continuar = prompt("Deseja informar novos dados? (S/N)").toLowerCase() === "s";
    }

    var menorValor = empresas[0].valor_aparelho;
    var nomeMenorValor = empresas[0].nome_empresa;

    for (var i = 1; i < empresas.length; i++) {
        if (empresas[i].valor_aparelho < menorValor) {
            menorValor = empresas[i].valor_aparelho;
            nomeMenorValor = empresas[i].nome_empresa;
        }
    }

    alert("Orçamentos:");

    for (var i = 0; i < empresas.length; i++) {
        alert(`${empresas[i].nome_empresa}: R$ ${empresas[i].valor_aparelho.toFixed(2)}`);
    }

    alert(`O orçamento de menor valor é o de ${nomeMenorValor} por R$ ${menorValor.toFixed(2)}`);

    escolha();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 4');
    inicio();
}

function sair() {
    var confirma = confirm('Você deseja sair?');
    console.log(confirma)
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}

inicio();