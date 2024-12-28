let isCodeVisible = false;

function showCodeInput() {
    const email = document.querySelector(".input1 input");
    const button = document.querySelector("button");

    if (!isCodeVisible) {
        if (!email.value.trim() || !email.checkValidity()) {
            alert("Por favor, digite um e-mail válido.");
            return;
        }
        document.getElementById("codeInput").style.display = "block";
        button.innerHTML = "Continuar";
        isCodeVisible = true;
    } else {
        window.location.href = "changepassword.html";
    }
}

function changePassword() {
    const senha1 = document.querySelector(".input2 input").value;
    const senha2 = document.querySelector(".input3 input").value;

    if (senha1 !== senha2) {
        alert("Por favor, digite uma senha válida.");
        return;
    }
    else {
        alert("Senha alterada com sucesso! Faça log in a seguir.");
        window.location.href = "login.html";
    }
}
