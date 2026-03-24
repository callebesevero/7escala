# 7escala
Make the church schedules

---

## Ideias
- Fazer a escala de qualquer departamento através desse sistema -> Opção para selecionar o departamento, pois o de música tem dois campos para adicionar: momentos de louvor e louvor especial
- (ideia) Pegar os nomes dos membros batizados -> Para facilitar adicionar os nomes (o que evita dois nomes diferentes manualmente escritos para uma mesma pessoa)
- Calcular se não tem membros escalados para coisas diferentes no mesmo dia (quem faz a escala validará se dá para o membro executar as tarefas)
- Pegar as datas da Agenda da Associação -> para fazer com mais ciência das pessoas que podem participar em determinado evento
- Impressão das escalas formatadas

Modelo de JSON: 
"escala": {
    "domingo, 01 de março": [
        "pessoa",
        "pessoa2",
        "pessoa3"
    ],
    "quarta, 04 de março": [
        "pessoa",
        "pessoa2",
        "pessoa3"
    ]
}
