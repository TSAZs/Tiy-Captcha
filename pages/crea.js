function generate() {
    let int = document.getElementById("intestazione").value;
    let icon = document.getElementById("icon").value
    let verif = document.getElementById("verifica").value
    if(!icon) {
        icon = "https://cdn.discordapp.com/attachments/839189307637497890/1102624069247041666/3039437.png"
    }
    if(!int) {
        int = "Sei umano?"
    }
    if(!verif) {
        verif = "Verificato"
    }
    let code = `<div id="captcha-container"
    style="position:absolute;background-color: rgb(237, 235, 235); border-radius: 8px;width: 250px;height: 90px;">
    <div id="adv"
        style="margin-left:10px;margin-top: 3px;float:inline-end;font-family: 'Roboto', sans-serif;color:grey">${int}</div>

    <center><button id="btn">Verify</button></center>
    <img id="icon" src=\"${icon}\">
    <div id="adv" style="margin-top: 80px;float:inline-end;font-family: 'Roboto', sans-serif;color:grey">Powered with
        Tiy-Captcha</div>

</div>
<style>
    #icon {
        position: absolute;
        width: 64px;
        height: 64px;
        margin-left: 160px;
        margin-top: -10px;
    }

    #btn {
        font-family: "Roboto", sans-serif;
        position: absolute;

        font-weight: 300;
        font-size: 17px;
        color: #fff;
        background-color: #0066cc;
        padding: 3px 10px;
        border: 2px solid #0066cc;
        box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px;
        border-radius: 8px;
        transition: 1000ms;
        transform: translateY(0);
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        text-transform: uppercase;
        margin-top: 28px;
        margin-left: 10px;
    }

    #btn:hover {
        transition: 1000ms;

        transform: translateY(-0px);
        background-color: #fff;
        color: #0066cc;
        border: solid 2px #0066cc;
    }

    #btn:active {
        transition: 0.1s;

        transform: translateY(-0px);
        background-color: #75ff05;
        color: #18cc00;
        border: solid 2px #18cc00;
    }
</style>

<script>
    document.getElementById("btn").onclick = function () {
        let firstNum = Math.floor(Math.random() * 30);
        let secondNum = Math.floor(Math.random() * 30);
        let result = firstNum + secondNum;
        let res = window.prompt(\`What's \${firstNum} + \${secondNum}\`);
        function captchaVer() {
            if (res != result) {
                alert("Wrong answer");
                return false;
            } else {
                alert("${verif}");
                return true;
            }
        }
        if (captchaVer()) {
            //codice dopo il captcha riuscito
            alert("Riuscito");
        }
    }
</script>`

document.getElementById("code").value = code.toString()
}