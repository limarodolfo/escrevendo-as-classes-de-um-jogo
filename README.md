# Escrevendo as classes de um jogo

**O que deve ser utilizado:**

- Variáveis
- Operadores
- Laços de repetição
- Estruturas de decisões
- Funções
- Classes e Objetos

## Objetivo:

Criar uma classe genérica que represente um herói de uma aventura e que possua as seguintes propriedades:

- Nome
- Idade
- Tipo (Ex.: guerreiro, mago, monge, ninja)

Além disso, deve ter um método chamado _attack_ que deve atender aos seguientes requisitos:

- Exibir a mensagem: "o {tipo} atacou usando {ataque}"
- Aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
- E, no {ataque}, deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

Se mago -> no ataque exibir (magia) <br>
Se guerreiro -> no ataque exibir (espada) <br>
Se monge -> no ataque exibir (artes marciais) <br>
Se ninja -> no ataque exibir (_shuriken_) <br>

## Saída

Ao final, deve se exibir uma mensagem:

- "O {tipo} atacou usando {ataque}"
  
  Ex.: O **mago** atacou usando **magia**
       O **guerreiro** atacou usando **espada**
