    function msg() {
        /////puxando os id do html
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var tel = document.getElementById('tel').value;
        var day = document.getElementById("day").value
        var month = document.getElementById("month").value;
        var year = document.getElementById("year").value;
        //////
        //////CAMPO VAZIO
        if(firstName.trim() === '' || lastName.trim() === '' || tel.trim() === ''){
            alert("Preencha todos os campos");
            return false;
        }
        ///////NÃO PODE CONTER NÚMERO NO NOME
        else if(!/^[A-Za-z\s]+$/.test(firstName)){
            alert("O campo Nome não pode conter números");
            return false;
        }
        ////// NÃO PODE CONTER NÚMERO NO SEGUNDO NOME
        else if(!/^[A-Za-z\s]+$/.test(lastName)){
            alert("O campo Sobrenome não pode conter números");
            return false;
        }/////campo telefone não pode conter letras
         else if (!/^[0-9]+$/.test(tel)) {
            alert("O campo telefone não pode conter letras.");
            return false;
        }
        /////////////DATA DE NASCIMENTO VAZIA
        else if (day < 1 || day > 31 || month < 1 || month > 12 || year <= 0) {
            alert("Data de nascimento inválida.");
            return false;
        }

        ///// LINHAS PARA CALCULAR IDADE APARTI DO DIA QUE NASCEU
        var resultoyear = 2023 - year;

        if (month >= 7 || (month == 7 && day >= 23)) {
        resultoyear--;
        }
        else{
            resultoyear;
        }
        /////////////////
        //////PUXANDO A FUNÇÃO DA ESCOLHA DO SEXO
        var escolha = mostrarEscolha();
        /////// MENSGAEM QUE ESTA APARECENDO NA TELA
        var mensagem = "Olá " + firstName + " " + lastName + ", seu telefone é " + tel + ", sua idade é " + resultoyear +" anos e você é do sexo " + escolha;
        /////////////////// DIZENDO QUE O CAMPO MENSAGEM VAI RECEBER O VALOR DE MENSAGEM DEFINIDO ACIMA
        document.getElementById('resultado').innerHTML = mensagem;
        ////////////////RETORNA FALSE QUANDO NADA FUNCIONA
        return false;
    }
    /////////////FUNÇÃO DA ESCOLHA DO SEXO
    function mostrarEscolha(){
            var selectElement = document.getElementById("escolha");
            var escolha = selectElement.value;
            return escolha;
        }