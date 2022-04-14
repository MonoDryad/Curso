let alunos = [
    '{"nome": "Rai", "nota": "9.5"}',
    '{"nome": "Guilherme", "nota": "7.5"}',
    '{"nome": "Paulo", "nota": "6.5"}',
]

let convertToObject = alunos => JSON.parse(alunos)