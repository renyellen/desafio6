let dados={
    nome:"Renyellen",
    idade: 25,
    Cidade:"São Paulo"
}
dados.religiao="evangelica"
delete dados.idade
console.log (dados)

let cadastro=[{nome:"Fabiana",
    idade:15,
    telefone:11988884444,
    amigos:["amigo1","amigo2","amigo3","amigo4"]
},
    {nome:"Carlos",
        idade:25,
        telefone:55555555,
        amigos:["amigo1","amigo2","amigo3","amigo4"]
    },
        {nome:"Mariana",
            idade:12,
            telefone:00000000,
            amigos:["amigo1","amigo2","amigo3","amigo4"]
        },
            {nome:"Fernando",
                idade:22,
                telefone:111111110,
                amigos:["amigo1","amigo2","amigo3","amigo4"]
            },
                {nome:"Roberto",
                    idade:11,
                    telefone:22222222,
                    amigos:["amigo1","amigo2","amigo3","amigo4"]}
                ]

cadastro[0].amigos=["amigo1","amigo2","amigo3","amigo4"]
cadastro[1].amigos=["amigo1","amigo2","amigo3","amigo4"]
cadastro[2].amigos=["amigo1","amigo2","amigo3","amigo4"]
cadastro[3].amigos=["amigo1","amigo2","amigo3","amigo4"]
cadastro[4].amigos=["amigo1","amigo2","amigo3","amigo4"]

console.log (cadastro)