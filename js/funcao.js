
        var empresa="Gama Academy";
        var curso="JavaScript";

        // alert("Sejam bem vindo ao curso de JavaScript");
        //alert("Bem vindo a "+empresa+ " hoje iremos iniciar o curso de "+curso );

        // var nome=prompt("Seja bem bem vindo "+ empresa +" ,digite o seu nome");
        // alert ("Olá "+nome+ " hoje iremos iniciar o curso de JS");

        /* function mensagem()
        {
            alert("Nossa "+ nome+ " como você é curioso heim!!!");
        }*/

        function validar()
        {
            
            var nome=formuser.nome.value;
            var email=formuser.email.value;
            var senha=formuser.senha.value;

            if(nome ==""){

                alert("Prencha o campo Nome, pois o mesmo é obrigatório");
                formuser.nome.focus();
                return false;
            }
 
            if(email=="" || email.indexOf('@')==-1){
            alert("Preencha o campo email com um email válido");
                formuser.email.focus();
            return false;
            }

            if(senha="" || senha.length <=5){
                alert("Preencha o campo senha com no mínimo 6 caracteres");
                formuser.senha.focus();
                return false;
            }

            alert("Prezado(a) " +nome +"em breve estaremos disponibilizando todo o conteúdo do nosso curso para o seu email "+email);
            

        }
