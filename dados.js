const dados = [
    {
        nome: 'Fluminense',
        fundacao: '21 de julho de 1902',
        descricao: 'Fundado em 21 de julho de 1902, por Oscar Cox, jovem filho de um cidadão inglês vice-cônsul da Inglaterra no Equador, o Fluminense Football Club levava, à época, as cores cinza e branco. Cox é um dos grandes responsáveis pela chegada do futebol ao Brasil.',
        link: 'https://pt.wikipedia.org/wiki/Fluminense_Football_Club',
    },
    {
        nome: 'Flamengo',
        fundacao: '1895',
        descricao: 'O Flamengo foi fundado em 17 de novembro de 1895 para as disputas de remo. A entrada da equipe no futebol aconteceu em 1912. Atualmente, o time rubro-negro é o maior vencedor da história do Campeonato Carioca, com 31 títulos. Segundo diversas pesquisas, é o clube com o maior número de torcedores do País.',
        link: 'https://pt.wikipedia.org/wiki/Clube_de_Regatas_do_Flamengo',
    },

    {
        nome: 'Corinthians',
        fundacao: '1910',
        descricao: 'Em 1º de setembro de 1910 um grupo de operários do bairro do Bom Retiro, localizado em São Paulo, inspirados na passagem de um time Inglês pelo Brasil, denominado Corinthian Football Club, criaram o Sport Club Corinthians Paulista.',
        link: 'https://pt.wikipedia.org/wiki/Sport_Club_Corinthians_Paulista',

    },
    {
        nome: 'Palmeiras',
        fundacao: '1914',
        descricao: 'O Palmeiras é um time paulista criado por membros da comunidade italiana no começo do século XX, no bairro do Brás, na cidade de São Paulo. Possui conquistas estaduais, nacionais e internacionais, como as Libertadores de 1999, 2020 e 2021. Entre os ídolos do Palmeiras, podemos citar os pentacampeões Cafu e Marcos.',
        link: 'https://pt.wikipedia.org/wiki/Sociedade_Esportiva_Palmeiras',

    },
    {
        nome: 'Botafogo',
        fundacao: '1904',
        descricao: 'O Botafogo foi fundado por um grupo de estudantes do Colegio Alfredo Gomes no dia 12 de agosto de 1904. A ideia era formar um clube com a garotada que morava no Largo dos Leoes e nas ruas Sao Clemente e Voluntarios da Patria. O nome original era Eletro Club, time com cores alvi-negras, mas sem a estrela solitaria.',
        link: 'https://pt.wikipedia.org/wiki/Botafogo_de_Futebol_e_Regatas',

    },
    {
        nome: 'Vasco',
        fundacao: '1898',
        descricao: 'O Vasco foi fundado como um clube de remo em 1898, por um grupo de 63 rapazes, imigrantes portugueses e luso-descendentes, reunidos no bairro da Saúde. O nome escolhido foi Club de Regatas Vasco da Gama, pois naquele ano eram comemorados os 400 anos da viagem do almirante homônimo à Índia.',
        link: 'https://pt.wikipedia.org/wiki/Club_de_Regatas_Vasco_da_Gama',

    },
    {
        nome: 'São Paulo',
        fundacao: '1554',
        descricao: 'O município foi fundado em 1554 após a construção de um colégio jesuíta realizada por doze padres, dentre eles os padres Manuel da Nóbrega e José de Anchieta. Neste mesmo dia é celebrado pela igreja católica o dia da conversão do apóstolo Paulo, o que deu origem ao nome da cidade.',
        link: 'https://pt.wikipedia.org/wiki/S%C3%A3o_Paulo',

    },
    {
        nome: 'Fortaleza',
        fundacao: '1918',
        descricao: 'O Fortaleza foi fundado em 1918, por Alcides Santos, membro da elite cearense, que se encantou pelo futebol quando estudava no College Stella, na Suíça. O uso do vermelho, do azul e do branco pelo time foi inspirado na bandeira francesa. 2. O Leão é o mascote do Fortaleza',
        link: 'https://pt.wikipedia.org/wiki/Fortaleza',

    },
    {
        nome: 'Cruzeiro',
        fundacao: '1921',
        descricao: 'O Cruzeiro Esporte Clube nasceu através do esforço de desportistas da comunidade italiana em Belo Horizonte, com o nome de Societá Sportiva Palestra Itália, em 2 de janeiro de 1921. Após mais de 100 anos de história, o Clube se transformou em uma das maiores agremiações de futebol do mundo.',
        link: 'https://pt.wikipedia.org/wiki/Cruzeiro_Esporte_Clube',

    },
    {
        nome: 'Bahia',
        fundacao: '1930',
        descricao: 'O clube foi fundado em 1º de janeiro de 1931 exclusivamente para formar uma equipe de futebol masculino em decorrência do fechamento dos departamentos de futebol a Associação Atlética da Bahia e o Clube Bahiano de Tênis em 1930.',
        link: 'https://pt.wikipedia.org/wiki/Esporte_Clube_Bahia#:~:text=Esteve%20no%20clube%20entre%202011,Bahiano%20de%20T%C3%AAnis%20em%201930.',

    },
    {
        nome: 'Atlético MG',
        fundacao: '1908',
        descricao: 'O Atlético-MG foi fundado em 25 de março de 1908, por 22 jovens que se reuniram no Parque Municipal, em Belo Horizonte. O time foi o vencedor da primeira edição do Campeonato Brasileiro, em 1971 - seu único título na competição. Também foi vice-campeão nacional em 1977 (invicto), 80 e 99.',
        link: 'https://pt.wikipedia.org/wiki/Clube_Atl%C3%A9tico_Mineiro',

    },
    {
        nome: 'Internacional',
        fundacao: '1909',
        descricao: 'Foi fundado em 4 de abril de 1909, pelos irmãos José, Henrique Poppe Leão e Luiz Madeira Poppe. O nome Internacional, uma homenagem ao homônimo paulista, indicava a abertura da agremiação a pessoas de todas as origens. A primeira taça veio em 1913, no Campeonato Metropolitano de Porto Alegre.',
        link: 'https://pt.wikipedia.org/wiki/Sport_Club_Internacional',

    },
    {
        nome: 'Bragantino',
        fundacao: '1928',
        descricao: 'Time de futebol profissional, fundado com o nome de Clube Atlético Bragantino, era uma dissidência do Bragança Futebol Clube. Tornaram-se arquirrivais, e em 1931, após derrotar os veteranos do Bragança F.C. e ficar com a Taça Raul Leme, os novatos do Bragantino receberam da imprensa local o apelido de Massa Bruta.',
        link: 'https://pt.wikipedia.org/wiki/Red_Bull_Bragantino',

    },
    {
        nome: 'Atlético Paranaense',
        fundacao: '1924',
        descricao: 'O Clube Atlético Paranaense surgiu da união de duas agremiações: o International e o América. A fusão foi concluída em 26 de março de 1924. O primeiro título da equipe já veio no ano seguinte: o Paranaense de 1925. Foi o primeiro de 21 troféus estaduais do Atlético - mais um Supercampeonato, em 2002.',
        link: 'https://pt.wikipedia.org/wiki/Club_Athletico_Paranaense',

    },
    {
        nome: 'Juventude',
        fundacao: '1913',
        descricao: 'O Esporte Clube Juventude, com sede em Caxias do Sul, Rio Grande do Sul, é um dos clubes mais tradicionais do sul do Brasil. Fundado em 29 de junho de 1913, o Juventude tem uma história rica, marcada por lutas, triunfos e um compromisso inabalável com a comunidade local.',
        link: 'https://pt.wikipedia.org/wiki/Esporte_Clube_Juventude',

    },
    {
        nome: 'Criciúma',
        fundacao: '1947',
        descricao: ' clube era originalmente chamado Comerciário Esporte Clube, mas passou a se chamar Criciúma Esporte Clube em 2 de abril de 1978. A mudança de nome foi feita para atrair torcedores de outros times, como o Metropol, Ouro Preto, Atlético Operário, Próspera e Boa Vista.',
        link: 'https://pt.wikipedia.org/wiki/Crici%C3%BAma_Esporte_Clube#:~:text=Foi%20fundado%20em%2013%20de,S%C3%A9rie%20A%20do%20Campeonato%20Brasileiro.&text=O%20Crici%C3%BAma%20foi%20o%20primeiro,em%201991%2C%20de%20forma%20invicta.',

    },
    {
        nome: 'Grêmio',
        fundacao: '1903',
        descricao: 'O Grêmio Foot-Ball Porto Alegrense foi fundado em 15 de setembro de 1903, em um restaurante da região central de Porto Alegre. A equipe venceu o primeiro campeonato que disputou, a Taça Wanderpreiss, em 1905 - que voltaria a ganhar em outras sete oportunidades.',
        link: 'https://pt.wikipedia.org/wiki/Gr%C3%AAmio_Foot-Ball_Porto_Alegrense',

    },
    {
        nome: 'Vitória',
        fundacao: '1899',
        descricao: 'O Vitória nasceu da iniciativa pioneira dos irmãos Artur e Artêmio Valente juntamente com outros dezessete jovens companheiros. Vindos de uma tradicional família baiana, adquiriram o gosto pelo cricket na Inglaterra, onde estudavam. Ao retornar ao Brasil, trouxeram na bagagem a paixão pelo esporte.',
        link: 'https://pt.wikipedia.org/wiki/Esporte_Clube_Vit%C3%B3ria#:~:text=O%20Vit%C3%B3ria%20nasceu%20da%20iniciativa,bagagem%20a%20paix%C3%A3o%20pelo%20esporte.',

    },
    {
        nome: 'Cuiabá',
        fundacao: '2001',
        descricao: 'Cuiabá Esporte Clube é uma agremiação esportiva brasileira com sede em Cuiabá, no estado de Mato Grosso. O clube foi fundado em 12 de dezembro de 2001 pelo ex-jogador Gaúcho.',
        link: 'https://pt.wikipedia.org/wiki/Cuiab%C3%A1_Esporte_Clube',

    },
    {
        nome: 'Atlético-GO',
        fundacao: '1937',
        descricao: 'O Atlético-GO é um dos pioneiros do futebol goiano, sendo o terceiro clube mais antigo do estado e o seu primeiro campeão. Comprovando ser uma das maiores forças do Centro-Oeste, o Atlético foi campeão estadual 18 vezes e vice-campeão estadual por 18 vezes, além de ser vice da Copa Brasil Central em 1967.',
        link: 'https://pt.wikipedia.org/wiki/Atl%C3%A9tico_Clube_Goianiense#:~:text=O%20Atl%C3%A9tico%2DGO%20%C3%A9%20um,Copa%20Brasil%20Central%20em%201967.',

    }
 
];

 