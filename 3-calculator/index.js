const express = require('express')
const nodemon = require('nodemon')
const app = express()
const port = 3000

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            height: 330px;
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }

        .box h1 {
            font-size: 36px;
            line-height: 36px;
            align-self: center;
        }

        .box form {
            width: 100%;
            padding: 10px;
            display: contents;
        }

        input {
            text-align: center;
        }

        button {
            width: 100%;
            border-radius: 50px;
            background-color: var(--white-green-color);
            cursor: pointer;
        }

    </style>
    <body>
        <div class="box">
            <h1 style="color: rgb(0, 95, 58);"> C A L C U L A D O R A </h1>

            <form action="/" method="post">
                <input type="text" name="num1" placeholder="Primeiro número">
                <input type="text" name="num2" placeholder="Segundo número">
                <button value="soma" type="submit" name="submit" formaction="/adicionar">SOMA</button>
                <button value="sub" type="submit" name="submit" formaction="/subtrair">SUBTRAÇÃO</button>
                <button value="mult" type="submit" name="submit" formaction="/multiplicar">MULTIPLICAÇÃO</button>
                <button value="div" type="submit" name="submit" formaction="/dividir">DIVISÃO</button>
            </form>
        </div>
    </body>
    </html>`)})

/*RESULTADO NA PAGINA*/
app.post('/adicionar', function (req, res) {
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var resultado = (a + b)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da soma é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.post('/subtrair', function (req, res) {
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var resultado = (a - b)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da subtração é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.post('/multiplicar', function (req, res) {
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var resultado = (a * b)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da multiplicação é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.post('/dividir', function (req, res) {
    var a = Number(req.body.num1)
    var b = Number(req.body.num2)
    var resultado = (a / b)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da divisão é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

/*RESULTADO DIRETO DO LINK*/
app.get('/adicionar/:num1/:num2', (req, res) => {
    var num1 = parseFloat (req.params.num1)
    var num2 = parseFloat (req.params.num2)
    var resultado = (num1 + num2).toFixed(2)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da soma é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.get('/subtrair/:num1/:num2', (req, res) => {
    var num1 = parseFloat (req.params.num1)
    var num2 = parseFloat (req.params.num2)
    var resultado = (num1 - num2).toFixed(2)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da subtração é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.get('/multiplicar/:num1/:num2', (req, res) => {
    var num1 = parseFloat (req.params.num1)
    var num2 = parseFloat (req.params.num2)
    var resultado = (num1 * num2).toFixed(2)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da multiplicação é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.get('/dividir/:num1/:num2', (req, res) => {
    var num1 = parseFloat (req.params.num1)
    var num2 = parseFloat (req.params.num2)
    var resultado = (num1 / num2).toFixed(2)
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Calculadora</title>
        <link rel="stylesheet" href="main.css">
        <script src="index.js"></script>
    </head>
    <style>
        * {
            box-sizing: border-box;
            margin: 0;
        }

        :root{
            --green-color: #0B5A2B;
            --white-color: #DFDFD6;
            --white-green-color: #D9D9D9;
        } 

        body {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            background-color: var(--green-color);
        }

        .box {
            width: 480px;
            border-radius: 30px 30px 30px 30px;
            background-color: var(--white-color);
            padding: 50px 50px;
            display: flex;
            flex-direction: column;
        }

        .box h2 {
            font-size: 36px;
            text-align: center;
        }

    </style>
    <body>
        <div class="box">
            <h2 style="color: rgb(0, 95, 58);"> Resultado da divisão é: <br>${resultado} </h2>
            </form>
        </div>
    </body>
    </html>`)
})

app.listen(port, () => {console.log("servidor rodando")})