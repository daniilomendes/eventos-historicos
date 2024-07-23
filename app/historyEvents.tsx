import { HistoricalEvent } from "./components/MapsApp";

const eventsData: HistoricalEvent[] = [
  {
    id: 1,
    title: "Desembarques na Normandia (Dia D)",
    description:
      "As forças aliadas desembarcaram nas praias da Normandia, França, em 6 de junho de 1944, marcando uma virada crucial na Segunda Guerra Mundial.",
    position: [49.4144, -0.8322],
    category: "Guerra",
  },
  {
    id: 2,
    title: "Conclusão do teto da Capela Sistina",
    description:
      "Michelangelo completou o teto da Capela Sistina na Cidade do Vaticano em 1512.",
    position: [41.9029, 12.4545],
    category: "Arte",
  },
  {
    id: 3,
    title: "Invenção do Telefone",
    description:
      "Alexander Graham Bell patenteou o telefone nos Estados Unidos em 1876.",
    position: [38.8977, -77.0365],
    category: "Ciência",
  },
  {
    id: 4,
    title: "Índia ganha independência",
    description:
      "A Índia conquistou a independência do domínio britânico em 15 de agosto de 1947.",
    position: [28.6139, 77.209],
    category: "Política",
  },
  {
    id: 5,
    title: "Primeiro Concílio de Nicéia",
    description:
      "O primeiro concílio ecumênico da igreja cristã foi realizado em Nicéia (hoje Iznik, Turquia) em 325 DC.",
    position: [40.4286, 29.7215],
    category: "Religião",
  },
  {
    id: 6,
    title: "Primeira Copa do Mundo FIFA",
    description:
      "A primeira Copa do Mundo FIFA foi realizada no Uruguai, com a vitória do país anfitrião em 1930.",
    position: [-34.9011, -56.1645],
    category: "Esporte",
  },
  {
    id: 7,
    title: "Construção da Ópera de Sydney",
    description: "A Sydney Opera House foi inaugurada em 1973 na Austrália",
    position: [-33.8568, 151.2153],
    category: "Outro",
  },
  {
    id: 8,
    title: "Genocídio de Ruanda",
    description:
      "O genocídio de Ruanda foi um massacre em massa de tutsis em Ruanda durante um período de 100 dias em 1994.",
    position: [-1.9403, 29.8739],
    category: "Guerra",
  },
  {
    id: 9,
    title: "Descoberta de petróleo na Arábia Saudita",
    description:
      "Quantidades comerciais de petróleo foram descobertas em Dhahran, Arábia Saudita, em 1938.",
    position: [26.2361, 50.0393],
    category: "Ciência",
  },
  {
    id: 10,
    title: "Proclamação da Independência do Brasil",
    description:
      "O Brasil declarou sua independência de Portugal em 7 de setembro de 1822.",
    position: [-15.7934, -47.8822],
    category: "Política",
  },
  {
    id: 11,
    title: "Queda do Muro de Berlim",
    description:
      "O Muro de Berlim, um símbolo da Guerra Fria, foi derrubado em 9 de novembro de 1989, levando à reunificação alemã.",
    position: [52.5163, 13.3777],
    category: "Política",
  },
  {
    id: 12,
    title: "Assinatura da Carta Magna",
    description:
      "O rei João da Inglaterra assinou a Carta Magna, documento que limita o seu poder e estabelece o princípio de que todos estão sujeitos à lei, em 15 de junho de 1215.",
    position: [51.1797, -0.4439],
    category: "Política",
  },
  {
    id: 13,
    title: "Hiroshima e Nagasaki",
    description:
      "Os Estados Unidos lançaram bombas atômicas nas cidades japonesas de Hiroshima e Nagasaki em agosto de 1945, levando à rendição do Japão na Segunda Guerra Mundial.",
    position: [34.3853, 132.4553], // Hiroshima
    category: "Guerra",
  },
  {
    id: 14,
    title: "Descoberta da Insulina",
    description:
      "A insulina foi descoberta por Frederick Banting e Charles Best em Toronto, Canadá, em 1921, revolucionando o tratamento do diabetes.",
    position: [43.661, -79.3957],
    category: "Ciência",
  },
  {
    id: 15,
    title: "Conquista Espanhola do Império Asteca",
    description:
      "Hernán Cortés e seus homens conquistaram o Império Asteca em 1521, marcando um evento significativo na colonização espanhola das Américas.",
    position: [19.4326, -99.1332],
    category: "Guerra",
  },
  {
    id: 16,
    title: "Fundação das Nações Unidas",
    description:
      "As Nações Unidas foram fundadas em 24 de outubro de 1945, após a Segunda Guerra Mundial, para prevenir conflitos futuros e promover a cooperação internacional.",
    position: [40.7489, -73.968],
    category: "Política",
  },
  {
    id: 17,
    title: "Primeiro Transplante de Coração",
    description:
      "O primeiro transplante de coração entre humanos foi realizado pelo Dr. Christiaan Barnard na Cidade do Cabo, África do Sul, em 3 de dezembro de 1967.",
    position: [-33.9249, 18.4241],
    category: "Ciência",
  },
  {
    id: 18,
    title: "Revolução Francesa",
    description:
      "A Revolução Francesa, um período de convulsão social e política na França, começou com a tomada da Bastilha em 14 de julho de 1789.",
    position: [48.8566, 2.3522],
    category: "Política",
  },
  {
    id: 19,
    title: "Batalha de Adwa",
    description:
      "As forças etíopes derrotaram as tropas italianas na Batalha de Adwa em 1 de março de 1896, garantindo a independência da Etiópia.",
    position: [14.04, 38.2844],
    category: "Guerra",
  },
  {
    id: 20,
    title: "Revolução Egípcia de 2011",
    description:
      "A Revolução Egípcia de 2011, parte da Primavera Árabe, começou em 25 de janeiro de 2011, levando à deposição do Presidente Hosni Mubarak.",
    position: [30.0444, 31.2357],
    category: "Política",
  },
  {
    id: 21,
    title: "Descoberta da Pedra de Roseta",
    description:
      "A Pedra de Roseta, chave para decifrar os antigos hieróglifos egípcios, foi descoberta no Egito em 1799.",
    position: [31.1981, 29.9192],
    category: "Outro",
  },
  {
    id: 22,
    title: "Erupção do Krakatoa",
    description:
      "A erupção catastrófica do vulcão Krakatoa ocorreu na Indonésia em 27 de agosto de 1883.",
    position: [-6.1025, 105.4233],
    category: "Outro",
  },
  {
    id: 23,
    title: "Construção da Grande Muralha",
    description:
      "A construção da Grande Muralha da China, como é conhecida hoje, começou por volta do século 7 aC para proteger contra invasões.",
    position: [40.4319, 116.5704],
    category: "Outro",
  },
  {
    id: 24,
    title: "A Grande Fome Irlandesa",
    description:
      "A Grande Fome Irlandesa, causada pela praga da batata, resultou na morte de aproximadamente um milhão de pessoas de 1845 a 1849.",
    position: [53.3498, -6.2603],
    category: "Outro",
  },
  {
    id: 25,
    title: "Invenção da Imprensa",
    description:
      "Johannes Gutenberg inventou a imprensa em Mainz, Alemanha, por volta de 1440, revolucionando a difusão da informação.",
    position: [49.9929, 8.2473],
    category: "Ciência",
  },
  {
    id: 26,
    title: "Batalha de Isandlwana",
    description:
      "A Batalha de Isandlwana em 22 de janeiro de 1879 foi uma derrota significativa para o Império Britânico nas mãos das forças Zulu.",
    position: [-28.3536, 30.6537],
    category: "Guerra",
  },
  {
    id: 27,
    title: "Primeiros Jogos Olímpicos da Era Moderna",
    description:
      "Os primeiros Jogos Olímpicos da era moderna foram realizados em Atenas, Grécia, em 1896.",
    position: [37.9838, 23.7275],
    category: "Esporte",
  },
  {
    id: 28,
    title: "Conclusão da Ferrovia Transcontinental",
    description:
      "A Ferrovia Transcontinental nos Estados Unidos foi concluída em 10 de maio de 1869, conectando as costas leste e oeste por via férrea pela primeira vez.",
    position: [41.0192, -112.1231],
    category: "Outro",
  },
  {
    id: 29,
    title: "Tratado de Waitangi",
    description:
      "O Tratado de Waitangi foi assinado em 6 de fevereiro de 1840, marcando o início da colonização britânica da Nova Zelândia.",
    position: [-35.2623, 174.122],
    category: "Política",
  },
  {
    id: 30,
    title: "Renascença",
    description:
      "O Renascimento foi um período de intenso desenvolvimento artístico e cultural que começou na Itália no século XIV e se espalhou por toda a Europa.",
    position: [43.7696, 11.2558],
    category: "Arte",
  },
  {
    id: 31,
    title: "A libertação de Nelson Mandela da prisão",
    description:
      "Nelson Mandela foi libertado em 11 de fevereiro de 1990, após 27 anos de prisão, marcando um passo significativo para o fim do apArteheid na África do Sul.",
    position: [-33.9249, 18.4241], // Cidade do Cabo, África do Sul
    category: "Política",
  },
  {
    id: 32,
    title: "Batalha de Al-Qadisiyyah",
    description:
      "A Batalha de Al-Qadisiyyah em 636 dC viu o exército árabe muçulmano derrotar as forças persas sassânidas, levando à conquista islâmica da Pérsia.",
    position: [32.0575, 47.2635], // Perto do atual Iraque, historicamente significativo para a história árabe do Norte da África
    category: "Guerra",
  },
  {
    id: 33,
    title: "Grande Zimbábue",
    description:
      "O Grande Zimbabué foi construído entre os séculos XI e XV e foi a capital do Reino do Zimbabué durante o final da Idade do Ferro do país.",
    position: [-20.2686, 30.9309], // Zimbábue
    category: "Outro",
  },
  {
    id: 34,
    title: "Descoberta da Tumba de Tutancâmon",
    description:
      "HoGuerrad CArteer descobriu a tumba intacta do Faraó Tutancâmon em novembro de 1922, fornecendo uma visão imensa da cultura e história egípcia antiga.",
    position: [25.7402, 32.6014], // Vale dos Reis, Egito
    category: "Outro",
  },
  {
    id: 35,
    title: "Batalha de Adowa",
    description:
      "A Batalha de Adowa em 1º de março de 1896 viu as forças etíopes derrotarem os militares italianos, garantindo a soberania da Etiópia.",
    position: [14.9482, 38.7749], // Adowa, Etiópia
    category: "Guerra",
  },
  {
    id: 36,
    title: "Abertura do Canal de Suez",
    description:
      "O Canal de Suez no Egito foi inaugurado em 17 de novembro de 1869, conectando o Mar Mediterrâneo ao Mar Vermelho e encurtando significativamente as rotas comerciais.",
    position: [30.5852, 32.2654], // Canal de Suez, Egito
    category: "Outro",
  },
  {
    id: 37,
    title: "Genocídio de Ruanda",
    description:
      "O Genocídio de Ruanda foi um massacre em massa de tutsis em Ruanda durante um período de 100 dias, de 7 de abril a meados de julho de 1994.",
    position: [-1.9403, 29.8739], // Ruanda
    category: "Guerra",
  },
  {
    id: 38,
    title: "Peregrinação de Mansa Musa",
    description:
      "Mansa Musa, imperador do Mali, fez a sua peregrinação a Meca em 1324, demonstrando a riqueza e grandeza do seu império.",
    position: [12.6392, -8.0029], // Mali
    category: "Religião",
  },
  {
    id: 39,
    title: "Independência de Gana",
    description:
      "Gana se tornou o primeiro país da África Subsaariana a conquistar a independência do domínio colonial em 6 de março de 1957.",
    position: [5.6037, -0.187], // Accra, Gana
    category: "Política",
  },
  {
    id: 40,
    title: "Batalha de Isandlwana",
    description:
      "Em 22 de janeiro de 1879, as forças Zulu derrotaram as tropas britânicas na Batalha de Isandlwana durante a Guerra Anglo-Zulu.",
    position: [-28.3536, 30.6537], // África do Sul
    category: "Guerra",
  },
  {
    id: 41,
    title: "A Abertura da Universidade de Tombuctu",
    description:
      "A Universidade de Tombuctu, uma das universidades mais antigas do mundo, foi um centro intelectual e espiritual nos séculos XV e XVI, atraindo estudiosos de todo o mundo islâmico.",
    position: [16.7666, -3.0026], // Tombuctu, Mali
    category: "Ciência",
  },
  {
    id: 42,
    title: "Descoberta de diamantes em Kimberley",
    description:
      "Diamantes foram descobertos em Kimberley em 1867, provocando uma corrida aos diamantes e a criação da De Beers Consolidated Mines Limited em 1888.",
    position: [-28.7282, 24.7499], // Kimberley, África do Sul
    category: "Outro",
  },
  {
    id: 43,
    title: "Construção da Barragem Alta de Aswan",
    description:
      "O Egito construiu a represa de Assuã entre 1960 e 1970, que controlou as enchentes, proporcionou maior armazenamento de água para irrigação e gerou energia hidrelétrica.",
    position: [23.97, 32.88], // Aswan, Egito
    category: "Outro",
  },
  {
    id: 44,
    title: "Incidente Fashoda",
    description:
      "O Incidente Fashoda de 1898 foi o clímax das disputas territoriais imperiais entre a Grã-Bretanha e a França na África Oriental, quase levando à Guerra.",
    position: [9.8894, 32.2039], // Fashoda, Sudão do Sul
    category: "Política",
  },
  {
    id: 45,
    title: "Guerra de Independência da Argélia",
    description:
      "A Guerra de Independência da Argélia foi travada entre a França e a Frente de Libertação Nacional da Argélia de 1954 a 1962, levando a Argélia a conquistar a sua independência.",
    position: [36.7372, 3.0863], // Argélia
    category: "Guerra",
  },
  {
    id: 46,
    title: "A descoberta de Lucy",
    description:
      "Em 1974, a descoberta do hominídeo 'Lucy' na Etiópia forneceu evidências críticas da evolução humana inicial.",
    position: [11.3548, 40.6822], // Hadar, Etiópia
    category: "Ciência",
  },
  {
    id: 47,
    title: "Batalha de Mogadíscio",
    description:
      "A Batalha de Mogadíscio em 1993 foi um confronto entre as forças dos Estados Unidos e os milicianos somalis, que mais tarde foi retratado no filme 'Black Hawk Down'.",
    position: [2.0469, 45.3182], // Mogadíscio, Somália
    category: "Guerra",
  },
  {
    id: 48,
    title: "Reinado do Rei Shaka Zulu",
    description:
      "Shaka Zulu tornou-se rei da nação Zulu em 1816 e transformou-a em um império formidável através de suas inovações militares e liderança.",
    position: [-28.7998, 32.0383], // Zululândia, África do Sul
    category: "Política",
  },
  {
    id: 49,
    title: "A corrida pela África",
    description:
      "A corrida pela África foi a invasão, anexação e divisão do território africano pelas potências europeias durante o período do Novo Imperialismo, entre 1881 e 1914.",
    position: [9.145, 40.4897], // Localização geral para África
    category: "Política",
  },
  {
    id: 50,
    title: "A Abolição da Escravatura na Mauritânia",
    description:
      "A Mauritânia foi o último país a abolir a escravatura em 1981, tornando a prática ilegal.",
    position: [18.0735, -15.9582], // Nouakchott, Mauritânia
    category: "Política",
  },
  {
    id: 51,
    title: "Independência do Brasil",
    description:
      "O Brasil declarou sua independência de Portugal em 7 de setembro de 1822, tornando-se o Império do Brasil.",
    position: [-15.7934, -47.8822], // Brasília, Brasil
    category: "Política",
  },
  {
    id: 52,
    title: "Batalha de Ayacucho",
    description:
      "A Batalha de Ayacucho, em 9 de dezembro de 1824, foi um encontro militar decisivo durante a Guerra da Independência do Peru. Ela efetivamente encerrou o domínio espanhol na América do Sul.",
    position: [-13.1588, -74.2239], // Ayacucho, Peru
    category: "Guerra",
  },
  {
    id: 53,
    title: "Guerra de Independência Argentina",
    description:
      "Começando em 1810 com a Revolução de Maio, a Argentina travou uma série de batalhas contra o domínio espanhol, culminando na independência em 1818.",
    position: [-34.6037, -58.3816], // Buenos Aires, Argentina
    category: "Guerra",
  },
  {
    id: 54,
    title: "A Libertação do Chile",
    description:
      "Lideradas por Bernardo O'Higgins e José de San MArteín, as forças chilenas garantiram a independência da Espanha com a vitória na Batalha de Maipú em 5 de abril de 1818.",
    position: [-33.4869, -70.7678], // Santiago, Chile
    category: "Guerra",
  },
  {
    id: 55,
    title: "Revolução de Outubro",
    description:
      "A Revolução de Outubro, também conhecida como Revolução Bolchevique, derrubou o Governo Provisório Russo e deu origem à União Soviética em 1917.",
    position: [59.9343, 30.3351], // São Petersburgo, Rússia
    category: "Política",
  },
  {
    id: 56,
    title: "A Batalha de Stalingrado",
    description:
      "Uma das batalhas mais mortíferas da história da humanidade, a Batalha de Stalingrado, de 23 de agosto de 1942 a 2 de fevereiro de 1943, foi um ponto de viragem na Segunda Guerra Mundial, marcando o declínio das potências do Eixo.",
    position: [48.708, 44.5133], // Stalingrado (agora Volgogrado), Rússia
    category: "Guerra",
  },
  {
    id: 57,
    title: "A Fuga de Yuri Gagarin",
    description:
      "Yuri Gagarin se tornou o primeiro humano a viajar para o espaço sideral e orbitar a EArteh em 12 de abril de 1961, significando uma conquista significativa para o programa espacial soviético.",
    position: [55.7558, 37.6173], // Moscou, Rússia
    category: "Ciência",
  },
  {
    id: 58,
    title: "A Queda da União Soviética",
    description:
      "A dissolução da União Soviética ocorreu em 26 de dezembro de 1991, marcando o fim da Guerra Fria e resultando na independência de 15 repúblicas.",
    position: [55.7558, 37.6176], // Moscou, Rússia
    category: "Política",
  },
  {
    id: 59,
    title: "Primeira Guerra da Independência da Índia",
    description:
      "A Primeira Guerra da Independência da Índia, também conhecida como Motim dos Sepoys, começou em 1857 como uma rebelião contra o governo da Companhia Britânica das Índias Orientais.",
    position: [28.7041, 77.1025], // Nova Delhi, Índia
    category: "Guerra",
  },
  {
    id: 60,
    title: "Massacre de Jallianwala Bagh",
    description:
      "O Massacre de Jallianwala Bagh de 1919 envolveu tropas britânicas atirando contra uma grande multidão de indianos desarmados em Amritsar, Punjab, aumentando significativamente o movimento de independência indiana.",
    position: [31.62, 74.8765], // Amritsar, Índia
    category: "Política",
  },
  {
    id: 61,
    title: "Dandi Marcha",
    description:
      "A Marcha Dandi, ou Salt Satyagraha, foi um protesto não violento liderado por Mahatma Gandhi em 1930 contra o imposto britânico sobre o sal na Índia colonial.",
    position: [20.9517, 72.9324], // Dandi, Índia
    category: "Política",
  },
  {
    id: 62,
    title: "Lei de Independência da Índia de 1947",
    description:
      "A Lei da Independência da Índia foi aprovada pelo Parlamento Britânico, que dividiu a Índia Britânica em dois novos domínios independentes da Índia e do Paquistão.",
    position: [28.6143, 77.1994], // Nova Delhi, Índia
    category: "Política",
  },
  {
    id: 63,
    title: "Primeiro satélite da Índia, Aryabhata",
    description:
      "A Índia lançou seu primeiro satélite, Aryabhata, em 1975, marcando um marco em seu programa espacial.",
    position: [13.0621, 77.4748], // Bangalore, Índia
    category: "Ciência",
  },
  {
    id: 64,
    title: "Fundação de São Petersburgo",
    description:
      "O czar Pedro, o Grande, fundou a cidade de São Petersburgo em 1703, que mais tarde se tornou a capital do Império Russo por mais de dois séculos.",
    position: [59.9343, 30.3351], // São Petersburgo, Rússia
    category: "Política",
  },
  {
    id: 65,
    title: "Tratado de Kuchuk-Kainarji",
    description:
      "O Tratado de Kuchuk-Kainarji em 1774 concluiu a Guerra Russo-Turca (1768-1774), marcando a ascensão da Rússia como uma grande potência europeia.",
    position: [45.3333, 36.4539], // Perto de Kuchuk-Kainarji, Crimeia
    category: "Política",
  },
  {
    id: 66,
    title: "Emancipação dos Servos",
    description:
      "Em 1861, o czar Alexandre II emitiu a Reforma de Emancipação, libertando milhões de servos e mudando profundamente a sociedade russa.",
    position: [55.7558, 37.6173], // Moscou, Rússia
    category: "Política",
  },
  {
    id: 67,
    title: "Revolta do Encouraçado Potemkin",
    description:
      "A tripulação do encouraçado russo Potemkin rebelou-se em 1905, um evento chave no prelúdio da Revolução Russa.",
    position: [44.6167, 33.5254], // Mar Negro, perto de Odessa
    category: "Guerra",
  },
  {
    id: 68,
    title: "Lançamento do Sputnik",
    description:
      "A União Soviética lançou o Sputnik 1, o primeiro satélite artificial do mundo, em 1957, iniciando a era espacial e a corrida espacial.",
    position: [45.9646, 63.3052], // Cosmódromo de Baikonur, Cazaquistão
    category: "Ciência",
  },
  {
    id: 69,
    title: "Academia de Ciências de São Petersburgo",
    description:
      "Fundada por Pedro, o Grande, em 1724, a Academia de Ciências de São Petersburgo foi uma das primeiras instituições científicas na Rússia, promovendo o desenvolvimento da Ciência e da aprendizagem.",
    position: [59.9398, 30.3146], // São Petersburgo, Rússia
    category: "Ciência",
  },
  {
    id: 70,
    title: "Tabela Periódica de Mendeleev",
    description:
      "Dmitri Mendeleev criou a Tabela Periódica dos Elementos em 1869, revolucionando a química com sua lei periódica para organizar os elementos.",
    position: [55.7517, 37.6178], // Moscou, Rússia
    category: "Ciência",
  },
  {
    id: 71,
    title: "Abertura da Galeria Tretyakov",
    description:
      "A Galeria Tretyakov, inaugurada em 1856, abriga uma das maiores coleções de belas artes russas do mundo.",
    position: [55.7415, 37.6208], // Moscou, Rússia
    category: "Arte",
  },
  {
    id: 72,
    title: "Primeiro Ballet Estatal Russo",
    description:
      "O Balé Mariinsky, fundado na década de 1740 em São Petersburgo, é uma das principais companhias de balé do mundo, contribuindo enormemente para a arte do balé.",
    position: [59.9251, 30.2956], // São Petersburgo, Rússia
    category: "Arte",
  },
  {
    id: 73,
    title: "Condicionamento Clássico de Pavlov",
    description:
      "O trabalho de Ivan Pavlov sobre o condicionamento clássico começou na década de 1890, que se tornou um dos estudos mais famosos da ciência comportamental.",
    position: [59.9419, 30.2982], // São Petersburgo, Rússia
    category: "Ciência",
  },
  {
    id: 74,
    title: "Principia Mathematica de Isaac Newton",
    description:
      "Sir Isaac Newton publicou 'Philosophiæ Naturalis Principia Mathematica' em 1687, lançando as bases para a mecânica clássica.",
    position: [52.2053, 0.1218], // Cambridge, Reino Unido
    category: "Ciência",
  },
  {
    id: 75,
    title: "Estabelecimento da Royal Society",
    description:
      "A Royal Society, uma associação de cientistas eminentes, recebeu um castelo real do rei Carlos II em 1660.",
    position: [51.5058, -0.1374], // Londres, Reino Unido
    category: "Ciência",
  },
  {
    id: 76,
    title: "A Primeira Exposição da Royal Academy",
    description:
      "A Royal Academy of Artes realizou sua primeira exposição em 1769, promovendo as artes do design na Grã-Bretanha por meio de educação e exposições.",
    position: [51.5091, -0.1393], // Londres, Reino Unido
    category: "Arte",
  },
  {
    id: 77,
    title: "A Origem das Espécies, de Charles Darwin",
    description:
      "O livro de Charles Darwin, publicado em 1859, introduziu a teoria científica da evolução pela seleção natural.",
    position: [51.5118, -0.1445], // Londres, Reino Unido
    category: "Ciência",
  },
  {
    id: 78,
    title: "Abertura da Tate Gallery",
    description:
      "A Tate Gallery, agora conhecida como Tate Britain, foi inaugurada em 1897 e hoje é uma das galerias de arte mais importantes do Reino Unido.",
    position: [51.4911, -0.1278], // Londres, Reino Unido
    category: "Arte",
  },
];

export default eventsData;
