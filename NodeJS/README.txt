//* GET = Buscas
//POST = Criação
//PUT = Alteração
//DELETE = Deleter
//PATCH = Alterar uma informação especifica

//GET => Linha 9
app.get("/", (request, response) => {
    return response.json({
        message: "Ôla, Bem vindo ao Chat da SESAC",
    });
});
//POST => Linha 10
app.post("/", (request, response) =>{
    return response.json({
        message: "Usuário criado com sucesso!",
    });
});
// PUT => Linha 11
app.put("/", (request, response) => {
    return response.json({
        message: "Dados Alterados com sucesso",
    });
});

// DELETE =>12
app.delete("/", (request, response) => {
    return response.json({
        message: "Usuário deletedo com sucesso, Apatir de agora, não será possui efetuar login",
    });
});

//PATCH => Linha 13
app.patch("/", (request, response) => {
    return response.json({
        message: "Alteração feita com sucesso",
    });
});