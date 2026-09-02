const LESSONS = {
  fundamentos: {
    title: 'Fundamentos da Musculação',
    subtitle: 'Entenda o que o treino de força desenvolve, como o corpo se adapta e como começar com critério.',
    image: '../img/hologram-squat.png',
    alt: 'Holograma executando agachamento com músculos das pernas destacados',
    secondaryImage: '../img/hologram-push.png',
    objectives: ['Diferenciar musculação e treinamento de força', 'Usar os princípios que organizam a evolução', 'Transformar um objetivo em uma sessão possível'],
    sections: [
      ['O que é treinado de verdade', 'Musculação é o uso planejado de resistência — pesos livres, máquinas, cabos, elásticos ou o próprio corpo — para produzir adaptações. O alvo não é apenas “levantar mais”: o treinamento pode aprimorar coordenação, força, resistência local, controle corporal e, conforme o contexto, composição corporal. Um mesmo exercício pode ter finalidades diferentes. O que define a finalidade é a combinação entre carga, número de séries, repetições, descanso, técnica e constância. Por isso, copiar a rotina de outra pessoa raramente é o melhor ponto de partida.'],
      ['Os quatro princípios que guiam a evolução', 'Sobrecarga progressiva significa oferecer um desafio suficiente para o corpo continuar se adaptando; isso pode ser uma repetição a mais, uma execução mais estável, uma amplitude melhor ou uma carga maior. Especificidade pede que o treino se pareça com a habilidade ou capacidade desejada. Individualidade reconhece experiência, rotina, preferências e limitações. Adaptação lembra que o corpo responde ao estímulo e também à recuperação. Se uma variável sobe rápido demais, técnica e recuperação podem não acompanhar.'],
      ['Como transformar intenção em plano', 'Comece por um objetivo claro e observável: por exemplo, dominar o agachamento com boa amplitude, completar duas sessões semanais ou aumentar repetições mantendo a mesma carga. Depois selecione poucos movimentos básicos e uma dose que caiba na agenda. Registre exercício, carga, repetições e percepção de esforço. Esse registro separa evolução real de impressão momentânea. A sessão inicial não precisa ser exaustiva; ela precisa ser repetível, compreensível e segura.']
    ],
    deepDive: [['Carga não é só quilogramas', 'A carga externa é apenas uma das formas de tornar uma sessão mais exigente. Uma repetição mais lenta, uma pausa em uma posição estável, uma amplitude que você consegue controlar ou menos ajuda do corpo também aumentam a demanda. Isso é útil para iniciantes porque permite evoluir sem perseguir números cedo demais. Compare sessões semelhantes e pergunte: a técnica se manteve? O esforço ficou adequado? A recuperação permitiu treinar novamente?'], ['Exemplo de decisão bem feita', 'Se você executou três séries de agachamento com estabilidade, mas perdeu o controle na quarta, a informação não é “preciso dobrar a carga”. Talvez a melhor decisão seja manter a dose, praticar o padrão e registrar a resposta. Com base em semanas, e não em um dia isolado, fica mais fácil decidir entre repetir, progredir ou reduzir a exigência.']],
    quiz: [{q: 'Qual é um exemplo de sobrecarga progressiva?', a: ['Aumentar todas as variáveis ao mesmo tempo', 'Melhorar uma repetição mantendo a técnica', 'Treinar até perder a postura'], c: 1}, {q: 'Qual deve ser a prioridade na primeira sessão?', a: ['Exaustão máxima', 'Rotina de outra pessoa', 'Movimento compreensível e repetível'], c: 2}],
    demo: ['Leitura de uma sessão iniciante', 'Escolha um movimento para pernas, um empurrar, um puxar e um exercício de tronco.', 'Faça uma série leve de reconhecimento para ajustar banco, apoios e trajetória.', 'Anote o que foi realizado e só progrida quando o padrão estiver estável.'],
    mistakes: ['Aumentar peso antes de dominar a trajetória.', 'Mudar todos os exercícios e variáveis na mesma semana.', 'Tratar fadiga extrema como único sinal de um treino produtivo.'],
    challenge: 'Escreva uma meta de processo para os próximos 14 dias e escolha uma forma simples de registrá-la.'
  },
  rotina: {
    title: 'Anatomia Aplicada ao Treino',
    subtitle: 'Veja como músculos, articulações e padrões de movimento orientam a escolha dos exercícios.',
    image: '../img/hologram-pull.png',
    alt: 'Holograma realizando remada com costas e bíceps destacados',
    secondaryImage: '../img/hologram-squat.png',
    objectives: ['Relacionar função muscular e movimento', 'Reconhecer padrões de empurrar, puxar e agachar', 'Escolher variações sem decorar nomes'],
    sections: [
      ['Músculo produz força, articulação organiza movimento', 'Para interpretar um exercício, observe primeiro o que se move. Flexão e extensão de cotovelo aparecem em roscas e tríceps; quadril, joelho e tornozelo participam de agachamentos e avanços; ombros e escápulas coordenam empurradas e puxadas. Peitoral, deltoide anterior e tríceps ajudam a empurrar. Dorsais, romboides, trapézio e bíceps aparecem em puxadas e remadas. Quadríceps, glúteos, posteriores de coxa e panturrilhas atuam nos padrões de membros inferiores. Não existe músculo trabalhando totalmente isolado: há ênfases diferentes em um sistema integrado.'],
      ['Padrões que montam uma rotina completa', 'Uma rotina equilibrada costuma alternar padrões, não apenas nomes de músculos. Agachar exige flexão e extensão coordenadas de quadril e joelho; dobrar o quadril enfatiza a cadeia posterior; empurrar pode ser horizontal ou vertical; puxar também; carregar, estabilizar e controlar o tronco completam o repertório. A máquina e o peso livre não são “melhores” por si mesmos. A escolha depende de controle, acesso ao equipamento, objetivo e capacidade de repetir uma boa execução.'],
      ['Como usar a imagem da aula', 'No holograma, a área luminosa representa musculatura com maior participação no gesto, e não uma lista absoluta de músculos ativos. Na remada, comece com peito organizado e braços estendidos sem perder o controle do ombro. Ao puxar, conduza os cotovelos para trás e aproxime as escápulas sem jogar o tronco. A volta é parte da repetição: retornar com controle mantém a referência da trajetória e facilita perceber compensações.']
    ],
    deepDive: [['Padrão antes do músculo', 'Em vez de decorar longas listas, pergunte qual padrão o exercício realiza e quais articulações se movimentam. Uma puxada vertical e uma remada trabalham costas de formas distintas porque a direção da resistência e o caminho dos cotovelos mudam. Essa leitura ajuda a evitar rotinas com cinco exercícios quase iguais e nenhuma atenção a outro padrão importante.'], ['Estabilidade cria referência', 'O tronco e as escápulas não são “detalhes estéticos”: eles criam uma base para braços e pernas produzirem força. Em uma remada, estabilizar primeiro evita transformar o exercício em um balanço. Se para puxar o peso você precisa mudar muito a posição, use menos carga, mais apoio ou outra variação.']],
    quiz: [{q: 'Na remada, o que deve guiar o movimento?', a: ['Balançar o tronco', 'Conduzir os cotovelos com tronco estável', 'Elevar os ombros'], c: 1}, {q: 'O que a área verde do holograma indica?', a: ['Ênfase muscular no gesto', 'Um diagnóstico médico', 'O único músculo ativo'], c: 0}],
    demo: ['Análise de uma remada sentada', 'Ajuste o apoio para conseguir iniciar com braços longos e tronco estável.', 'Puxe o pegador aproximando os cotovelos do corpo, sem elevar os ombros.', 'Retorne devagar até sentir o alongamento controlado das costas.'],
    mistakes: ['Transformar a remada em balanço de tronco.', 'Encolher os ombros durante a puxada.', 'Escolher uma amplitude que obriga a perder a posição lombar.'],
    challenge: 'Em sua próxima sessão, classifique cada exercício por padrão: agachar, dobrar quadril, empurrar, puxar, carregar ou estabilizar.'
  },
  execucao: {
    title: 'Execução Correta e Segurança',
    subtitle: 'Aprenda a preparar, executar e encerrar uma repetição com estabilidade, amplitude e atenção ao corpo.',
    image: '../img/hologram-push.png',
    alt: 'Holograma realizando supino com peitoral, ombros e tríceps destacados',
    secondaryImage: '../img/hologram-pull.png',
    objectives: ['Preparar equipamento e posição inicial', 'Controlar trajetória e respiração', 'Identificar sinais para interromper ou reduzir o exercício'],
    sections: [
      ['A repetição começa antes do movimento', 'Segurança não é um detalhe acrescentado ao final: ela começa no ajuste do banco, pinos, altura de cabos, apoios e carga. Antes de uma série de trabalho, faça uma série de ensaio com esforço baixo. Ela revela se o assento está adequado, se a pegada é confortável e se a amplitude escolhida permite controle. Organize a postura antes de mover a carga: pés apoiados quando possível, tronco estável, pescoço neutro e articulações sem posições forçadas.'],
      ['Trajetória, amplitude e velocidade', 'Boa técnica é uma trajetória consistente que respeita a estrutura e o objetivo do praticante. A amplitude útil é aquela em que há controle e ausência de dor aguda; ela pode variar entre pessoas e exercícios. Evite usar impulso para atravessar o ponto difícil. A fase de retorno merece atenção porque é quando muitos perdem posição ou deixam a carga cair. Respire de forma contínua e organizada; em esforços altos, estratégias específicas exigem orientação presencial.'],
      ['Dor não é sinônimo de esforço', 'Ardor muscular e fadiga são sensações comuns de uma série desafiadora, mas dor aguda, pontada, formigamento, tontura, falta de ar incomum ou perda súbita de controle são sinais para interromper. Reduza a exigência, ajuste a variação ou procure avaliação profissional conforme o caso. Treinar com qualidade não significa ignorar o corpo. Se uma técnica só se sustenta na primeira repetição, a carga, a amplitude ou a escolha do exercício precisam ser revistas.']
    ],
    deepDive: [['Checklist de preparação', 'Antes de iniciar, confira se o equipamento está travado, se o banco permite os apoios necessários e se o espaço ao redor está livre. Faça algumas repetições leves para reconhecer a trajetória. Só depois escolha a carga da série principal. Esse ritual reduz improvisos e torna cada sessão comparável à anterior.'], ['Qualidade de repetição', 'Considere uma repetição válida quando você mantém apoios, trajetória e ritmo planejados. Quando uma compensação aparece, ela pode indicar fadiga, carga excessiva, ajuste ruim ou amplitude inadequada. Encerrar uma série antes do colapso técnico preserva a qualidade do estímulo e fornece um dado mais útil para a próxima sessão.']],
    quiz: [{q: 'O que vem antes da série principal?', a: ['Série de ensaio com baixa exigência', 'A maior carga possível', 'Impulso para aquecer'], c: 0}, {q: 'Qual sinal pede interrupção e avaliação?', a: ['Respiração organizada', 'Dor aguda ou tontura', 'Cansaço esperado'], c: 1}],
    demo: ['Demonstração: supino com barra', 'Apoie pés e costas, ajuste a pegada e posicione a barra acima da linha dos ombros.', 'Desça de forma controlada, mantendo punhos alinhados e escápulas organizadas.', 'Empurre sem perder os apoios; termine a série antes que a trajetória se torne instável.'],
    mistakes: ['Retirar a barra sem conferir travas e altura dos suportes.', 'Deixar punhos dobrarem excessivamente sob a carga.', 'Usar um arco ou amplitude que causa desconforto em vez de estabilidade.'],
    challenge: 'Filme apenas para sua análise uma série leve de um movimento e observe apoios, ritmo e simetria; ajuste uma coisa por vez.'
  },
  progressao: {
    title: 'Hipertrofia, Força e Resistência',
    subtitle: 'Entenda como objetivo, volume, intensidade e descanso mudam o desenho de uma sessão.',
    image: '../img/hologram-hinge.png',
    alt: 'Holograma executando levantamento com ênfase em glúteos e posteriores da coxa',
    secondaryImage: '../img/hologram-press.png',
    objectives: ['Distinguir metas de força, hipertrofia e resistência', 'Compreender volume, intensidade e proximidade da falha', 'Progredir sem perder a técnica'],
    sections: [
      ['Três capacidades, uma base comum', 'Força é a capacidade de produzir força em uma tarefa; hipertrofia é o aumento do tamanho muscular ao longo do tempo; resistência muscular é sustentar ou repetir esforço com qualidade. Elas se sobrepõem: quem treina força pode ganhar massa, e quem busca hipertrofia também precisa ficar mais capaz de lidar com o treino. O ponto central é priorizar. Uma prática voltada para força tende a incluir mais contato com cargas altas e movimentos específicos. Hipertrofia requer volume produtivo e estímulo bem distribuído. Resistência usa exposições repetidas, sem abandonar a execução.'],
      ['Variáveis que realmente importam', 'Volume é a quantidade de trabalho acumulada — frequentemente observada por séries desafiadoras ao longo da semana. Intensidade pode significar carga relativa ou esforço percebido, por isso é importante dizer qual está sendo usada. Descanso influencia a recuperação entre séries e a qualidade da próxima tentativa. Chegar perto da falha pode ser útil em alguns contextos, mas falhar em toda série não é obrigatório e pode degradar técnica. A melhor dose é a que gera progresso e permite voltar bem à próxima sessão.'],
      ['Progressão sem pressa', 'Use a dupla progressão como exemplo prático: mantenha uma faixa de repetições e uma carga estável; ao alcançar o topo da faixa em todas as séries com boa técnica, faça um pequeno aumento de carga e retorne à base da faixa. Também é possível progredir com amplitude, pausa, estabilidade ou consistência semanal. Escolha apenas uma mudança por vez. Se a técnica, o sono ou as dores piorarem, o plano pede ajuste antes de exigir mais.']
    ],
    deepDive: [['Volume e recuperação caminham juntos', 'Adicionar séries pode elevar o estímulo, mas também aumenta a fadiga a administrar. Não existe uma quantidade universal: experiência, alimentação, sono, disponibilidade e seleção de exercícios alteram a resposta. O plano precisa produzir desafio suficiente sem impedir a próxima sessão produtiva. Registros simples de desempenho e recuperação ajudam a encontrar uma dose sustentável.'], ['Usando esforço percebido', 'Ao terminar uma série, pergunte quantas repetições boas ainda seriam possíveis. Não é necessário que a resposta seja exata; a finalidade é aprender a diferenciar uma série confortável, desafiadora e próxima do limite técnico. Com esse dado, é possível manter esforço consistente mesmo quando a carga absoluta muda entre máquinas e exercícios.']],
    quiz: [{q: 'Na dupla progressão, quando a carga costuma aumentar?', a: ['Ao atingir o topo da faixa com boa técnica', 'Depois da primeira repetição', 'Sempre que houver dor muscular'], c: 0}, {q: 'Volume se refere principalmente a:', a: ['Quantidade de trabalho acumulada', 'Apenas peso da barra', 'Velocidade da música'], c: 0}],
    demo: ['Demonstração: progressão de repetições', 'Defina uma faixa, como 8 a 12 repetições, e uma carga que permita controle.', 'Registre quantas repetições boas ocorreram em cada série, sem transformar a última em compensação.', 'Quando todas as séries chegarem ao topo da faixa, faça aumento pequeno e recomece a progressão.'],
    mistakes: ['Confundir aumento de suor com progresso mensurável.', 'Ir à falha técnica em todos os exercícios e todas as semanas.', 'Mudar carga, exercícios, divisão e volume ao mesmo tempo.'],
    challenge: 'Escolha um exercício e acompanhe por quatro sessões: carga, repetições, descanso e qualidade da técnica.'
  },
  mobilidade: {
    title: 'Montagem de Programas de Treino',
    subtitle: 'Estruture uma rotina que respeite objetivo, agenda, experiência e recuperação.',
    image: '../img/hologram-lunge.png',
    alt: 'Holograma executando avanço reverso com músculos das pernas destacados',
    secondaryImage: '../img/hologram-hinge.png',
    objectives: ['Organizar frequência e divisão semanal', 'Selecionar exercícios por função', 'Criar uma rotina adaptável à vida real'],
    sections: [
      ['A melhor divisão é a que você consegue repetir', 'Antes de escolher uma divisão famosa, defina quantos dias e quantos minutos você realmente tem. Duas ou três sessões de corpo inteiro podem servir muito bem a quem está começando. Mais dias permitem distribuir trabalho, mas também aumentam a necessidade de planejamento e recuperação. O programa deve cobrir padrões importantes ao longo da semana, sem forçar todos os movimentos em um único dia. Consistência por meses vale mais que uma rotina perfeita mantida por poucos dias.'],
      ['Ordem e escolha dos exercícios', 'Coloque primeiro os movimentos que pedem mais atenção técnica, energia ou prioridade pessoal. Depois acrescente exercícios complementares para grupos ou padrões que precisam de mais volume. Alterne sessões de empurrar e puxar, inclua membros inferiores e trabalho de tronco conforme a necessidade. Máquina, cabo, halter ou barra são ferramentas: escolha a opção que possibilita executar com segurança e progredir. Uma rotina não precisa ter dezenas de exercícios para ser completa.'],
      ['Plano A, Plano B e revisão', 'Crie uma versão principal e uma versão curta para dias corridos. O Plano B pode preservar dois ou três movimentos prioritários em vez de cancelar a semana inteira. Revise o plano após algumas semanas usando registros: houve evolução? A sessão cabe no horário? A técnica continua estável? Há recuperação adequada? Ajuste frequência, seleção, séries ou intervalos conforme a resposta. Planejamento não é rigidez; é usar informação para decidir melhor.']
    ],
    deepDive: [['Como escolher exercícios', 'Priorize movimentos que você compreende, consegue montar no ambiente disponível e repete com controle. Depois considere se o exercício atende a um padrão que falta na rotina. Trocar um movimento não apaga o trabalho anterior se a função é parecida; uma variação de empurrar pode substituir outra quando preserva objetivo, segurança e possibilidade de progresso.'], ['Sessões curtas ainda contam', 'Em uma semana apertada, proteja o essencial: um exercício de membros inferiores e uma empurrada ou puxada podem manter contato com o treino. A sessão curta não precisa compensar tudo o que ficou de fora. Ela mantém o hábito, oferece informação sobre sua resposta e evita a lógica de “tudo ou nada”.']],
    quiz: [{q: 'O que deve definir a divisão semanal?', a: ['A rotina que você consegue manter', 'A tendência da internet', 'O maior número de exercícios'], c: 0}, {q: 'Qual é a função do Plano B?', a: ['Cancelar a semana', 'Preservar prioridades em pouco tempo', 'Aumentar todas as séries'], c: 1}],
    demo: ['Demonstração: sessão de corpo inteiro', 'Comece por um padrão de pernas, como agachar ou dobrar o quadril.', 'Inclua uma empurrada e uma puxada em versões que você consegue controlar.', 'Finalize com acessórios ou tronco somente se ainda houver tempo e qualidade para realizá-los.'],
    mistakes: ['Escolher a divisão pela moda, sem olhar a disponibilidade.', 'Duplicar muitos exercícios que fazem o mesmo papel.', 'Abandonar a rotina porque uma sessão não saiu exatamente como planejado.'],
    challenge: 'Monte uma semana realista em uma folha: dias, duração, padrões de movimento e plano curto para imprevistos.'
  },
  recuperacao: {
    title: 'Métodos e Acompanhamento',
    subtitle: 'Use técnicas avançadas com intenção e acompanhe dados para saber quando ajustar o plano.',
    image: '../img/hologram-press.png',
    alt: 'Holograma realizando desenvolvimento acima da cabeça com ombros destacados',
    secondaryImage: '../img/hologram-lunge.png',
    objectives: ['Conhecer métodos de intensificação e seus limites', 'Registrar desempenho e recuperação', 'Tomar decisões com dados e não apenas impulso'],
    sections: [
      ['Métodos são ferramentas, não obrigação', 'Supersérie combina dois exercícios com pouco intervalo; drop set reduz a carga após uma série; pirâmide altera carga ou repetições entre séries; rest-pause usa pausas breves dentro de uma sequência. Eles podem tornar uma sessão mais densa ou aumentar o desafio local, mas não substituem técnica, progressão e recuperação. Quanto mais intensa a estratégia, maior a importância de selecionar exercícios estáveis e praticantes experientes. Use uma técnica por vez, com objetivo claro, em vez de transformar todo treino em teste de resistência.'],
      ['O que registrar', 'O mínimo útil é exercício, carga, séries, repetições e uma nota de esforço ou qualidade. Acrescente sono, dor muscular, disposição e duração da sessão quando quiser observar padrões. Fotos, medidas ou testes simples podem complementar, desde que sejam comparados em condições semelhantes e não gerem ansiedade. Uma única sessão ruim não define regressão; procure tendências de semanas. Dados servem para abrir perguntas: o volume está alto? O descanso caiu? A técnica mudou?'],
      ['Quando ajustar o programa', 'Progrida quando desempenho e técnica mostram margem; mantenha quando o plano está funcionando; reduza ou reorganize quando há queda persistente de rendimento, técnica degradada ou recuperação insuficiente. Uma semana menos exigente pode ser uma escolha estratégica, não fracasso. Ao ajustar, altere uma variável de cada vez para saber o que produziu o efeito. Em caso de dor persistente ou sintomas fora do esperado, a prioridade é avaliação adequada, não insistir em um método.']
    ],
    deepDive: [['Intensificação com propósito', 'Superséries e drop sets ocupam um lugar específico: podem economizar tempo ou elevar o desafio de um músculo quando a técnica básica já está consolidada. Escolha exercícios estáveis, comece com pouca frequência e mantenha a possibilidade de parar a série ao perder controle. Não use método avançado para mascarar ausência de plano.'], ['Leitura de tendências', 'Observe o conjunto: desempenho, disposição, sono e qualidade de movimento durante semanas. Uma sessão abaixo do esperado pode acontecer por vários motivos e não exige mudança imediata. Por outro lado, queda persistente junto a recuperação ruim pede revisão. Fazer uma alteração de cada vez torna a causa mais clara e evita trocar de plano sem aprender com ele.']],
    quiz: [{q: 'Métodos como drop set devem ser usados:', a: ['Como ferramenta pontual e planejada', 'Em todos os exercícios', 'Para ignorar a técnica'], c: 0}, {q: 'Para avaliar um programa, é melhor observar:', a: ['Tendências de várias sessões', 'Apenas um dia ruim', 'Somente suor'], c: 0}],
    demo: ['Demonstração: supersérie consciente', 'Escolha dois exercícios simples e que não prejudiquem a técnica um do outro.', 'Execute o primeiro, transite com organização para o segundo e mantenha o registro das duas partes.', 'Aumente o descanso ou interrompa a técnica se o padrão do movimento começar a se perder.'],
    mistakes: ['Usar drop sets e falha em quase todos os exercícios.', 'Comparar medidas feitas em horários e condições totalmente diferentes.', 'Trocar o programa antes de ter registros suficientes para avaliá-lo.'],
    challenge: 'Durante duas semanas, registre uma nota de 1 a 5 para recuperação e compare-a com seu desempenho nos exercícios principais.'
  }
};

function list(items) {
  return items.map((item) => `<li>${item}</li>`).join('');
}

const lesson = LESSONS[document.body.dataset.lesson] || LESSONS.fundamentos;

document.querySelector('#app').innerHTML = `
  <span class="tag">AULA COMPLETA · POTÊNCIA TRAINING</span>
  <h1>${lesson.title}</h1>
  <p class="lead">${lesson.subtitle}</p>
  <aside class="notice">Conteúdo educacional. Ajuste a prática ao seu nível e procure orientação profissional em caso de dor persistente, condição clínica ou insegurança na execução.</aside>
  <div class="lesson-hero">
    <img src="${lesson.image}" alt="${lesson.alt}">
    <p><strong>Leitura visual:</strong> o verde destaca os principais grupos envolvidos. A imagem é uma demonstração didática, não substitui ajuste individual.</p>
  </div>
  <section class="objectives card">
    <span class="eyebrow">AO FINAL DESTA AULA</span>
    <ul>${list(lesson.objectives)}</ul>
  </section>
  <section class="content-grid">
    ${lesson.sections.map(([heading, text], index) => `<article class="card lesson-section"><span class="section-number">0${index + 1}</span><h2>${heading}</h2><p>${text}</p></article>`).join('')}
  </section>
  <section class="deep-dive">
    <span class="tag">APROFUNDE O CONTEÚDO</span>
    <h2>Aplicação e tomada de decisão</h2>
    ${lesson.deepDive.map(([heading, text], index) => `<article class="card lesson-section"><span class="section-number">0${index + 4}</span><h2>${heading}</h2><p>${text}</p></article>`).join('')}
  </section>
  <section class="visual-explainer card">
    <img src="${lesson.secondaryImage}" alt="Ilustração holográfica complementar de exercício">
    <div><span class="eyebrow">REFERÊNCIA VISUAL COMPLEMENTAR</span><h2>Observe antes de executar</h2><p>Use o holograma para identificar a posição geral, os apoios e os grupos com maior ênfase. Em seguida, adapte a variação, amplitude e carga à sua capacidade de controlar o movimento.</p></div>
  </section>
  <section class="demo">
    <span class="tag">DEMONSTRAÇÃO GUIADA</span>
    <h2>${lesson.demo[0]}</h2>
    ${lesson.demo.slice(1).map((step, index) => `<div class="step"><b>${index + 1}</b><p>${step}</p></div>`).join('')}
  </section>
  <section class="two-columns">
    <article class="card mistakes"><h2>Erros comuns</h2><ul>${list(lesson.mistakes)}</ul></article>
    <article class="card challenge"><span class="eyebrow">PRÁTICA DE ESTUDO</span><h2>Missão da aula</h2><p>${lesson.challenge}</p></article>
  </section>
  <section class="quiz card" aria-labelledby="quizTitle"><span class="eyebrow">QUESTIONÁRIO RÁPIDO</span><h2 id="quizTitle">Confira o que aprendeu</h2><p>Responda às duas perguntas antes de concluir a aula.</p>${lesson.quiz.map((item, index) => `<fieldset data-question="${index}"><legend>${index + 1}. ${item.q}</legend>${item.a.map((answer, answerIndex) => `<label><input type="radio" name="question-${index}" value="${answerIndex}"> ${answer}</label>`).join('')}</fieldset>`).join('')}<button type="button" class="quiz-button" id="checkQuiz">Corrigir respostas</button><p class="quiz-result" id="quizResult" aria-live="polite"></p></section>
  <section class="completion card"><span class="eyebrow">FINAL DA AULA</span><h2>Pronto para avançar?</h2><p>Revise os pontos centrais, aplique apenas o que você consegue executar com controle e use o registro para orientar o próximo treino.</p><button type="button" class="complete-button" id="completeLesson">Concluir aula</button><p class="completion-message" id="completionMessage" aria-live="polite"></p><a href="../index.html#area-do-aluno">Voltar para a área do aluno</a></section>
`;

const STUDENT_PROGRESS_KEY = 'potenciaLessonProgress';
const lessonKey = document.body.dataset.lesson;
const completeButton = document.querySelector('#completeLesson');
const completionMessage = document.querySelector('#completionMessage');
const checkQuiz = document.querySelector('#checkQuiz');
const quizResult = document.querySelector('#quizResult');
let studentId = null;

function showCompleteState() {
  completeButton.textContent = '✓ Aula concluída';
  completeButton.classList.add('is-complete');
  completionMessage.textContent = 'Aula concluída e progresso atualizado na Área do Aluno.';
}

function readProgress() {
  try { return JSON.parse(localStorage.getItem(STUDENT_PROGRESS_KEY) || '{}'); } catch { return {}; }
}

function saveCompletion() {
  if (!studentId) return false;
  const progress = readProgress();
  const completed = Array.isArray(progress[studentId]) ? progress[studentId] : [];
  if (!completed.includes(lessonKey)) completed.push(lessonKey);
  progress[studentId] = completed;
  localStorage.setItem(STUDENT_PROGRESS_KEY, JSON.stringify(progress));
  return true;
}

async function connectProgress() {
  if (!window.supabase) {
    completionMessage.textContent = 'Não foi possível conectar seu progresso agora.';
    return;
  }
  const client = window.supabase.createClient('https://qskikljnenmozeanygtw.supabase.co', 'sb_publishable_5ymf4X_2eJY0lL2qItjEgw_bNoyWEh-');
  const { data } = await client.auth.getSession();
  studentId = data.session?.user?.id || null;
  if (!studentId) {
    completionMessage.textContent = 'Entre na sua conta para registrar a conclusão no seu progresso.';
    return;
  }
  const progress = readProgress();
  const completed = Array.isArray(progress[studentId]) ? progress[studentId] : [];
  if (completed.includes(lessonKey)) showCompleteState();
}

completeButton.addEventListener('click', () => {
  if (saveCompletion()) showCompleteState();
  else completionMessage.textContent = 'Entre na sua conta para registrar a conclusão.';
});

checkQuiz.addEventListener('click', () => {
  let correct = 0;
  let answered = 0;
  lesson.quiz.forEach((item, index) => {
    const selected = document.querySelector(`input[name="question-${index}"]:checked`);
    const fieldset = document.querySelector(`fieldset[data-question="${index}"]`);
    fieldset.classList.remove('is-correct', 'is-wrong');
    if (!selected) return;
    answered += 1;
    if (Number(selected.value) === item.c) {
      correct += 1;
      fieldset.classList.add('is-correct');
    } else fieldset.classList.add('is-wrong');
  });
  if (answered < lesson.quiz.length) {
    quizResult.className = 'quiz-result is-pending';
    quizResult.innerHTML = `<strong>QUASE LÁ</strong><span>Responda às ${lesson.quiz.length} perguntas para liberar uma correção completa. Releia a aula com calma: o objetivo é aprender, não correr.</span>`;
    return;
  }
  if (correct === lesson.quiz.length) {
    quizResult.className = 'quiz-result is-success';
    quizResult.innerHTML = `<strong>DOMÍNIO CONFIRMADO · ${correct}/${lesson.quiz.length}</strong><span>Excelente leitura. Você identificou os pontos centrais desta aula; registre a conclusão e siga para o próximo passo da trilha.</span>`;
    return;
  }
  quizResult.className = 'quiz-result is-review';
  quizResult.innerHTML = `<strong>BOA TENTATIVA · ${correct}/${lesson.quiz.length}</strong><span>Você já consolidou parte do conteúdo. Os destaques em verde mostram os acertos; revise os pontos sinalizados e tente novamente quando quiser.</span>`;
});

connectProgress();
