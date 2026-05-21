function enviarMensagem(tipo) {

    var numeroTelefone = "5511954472238";
    var mensagem = "";

    if (tipo == "Agendar") {
        mensagem = "Olá, gostaria de agendar o procedimento";
    } 
    else if (tipo == "faleConNosco") {
        mensagem = "Olá, gostaria de tirar uma dúvida";
    } 
    else {
        mensagem = "Olá, gostaria de saber mais sobre os procedimentos";
    }

    var url = "https://wa.me/" + numeroTelefone + "?text=" + encodeURIComponent(mensagem);
    window.open(url, '_blank');
}