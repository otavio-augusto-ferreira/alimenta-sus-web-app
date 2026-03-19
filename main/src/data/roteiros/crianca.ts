import { PerguntaTriagem } from "../../types/triagem";

export const roteiroCrianca: PerguntaTriagem[] = [
  {
    id: 1,
    pergunta: "Ontem a criança consumiu feijão?",
    subtexto: "",
    opcoes: ["Sim", "Não", "Não sei"],
    sim: {
      tipo: "estrategia",
      intro: "Muito bem! Manter o feijão no prato ajuda no crescimento, previne anemia e fortalece a saúde da criança.",
      cards: [
        { titulo: "A - Variar tipos de feijão e leguminosas", texto: "Vale experimentar feijão preto, fradinho, lentilha, grão-de-bico ou ervilha para ampliar o repertório alimentar.", recurso: "Vídeo curto: 'Outras leguminosas no dia a dia'." },
        { titulo: "B - Variar preparações", texto: "O feijão pode entrar em sopas, pastas, baião de dois ou misturado a outras preparações.", recurso: "Infográfico: 'Feijão além do arroz'." },
        { titulo: "C - Aumentar praticidade", texto: "Deixar o feijão de molho, usar panela de pressão e congelar porções facilita o preparo da semana.", recurso: "Vídeo curto: 'Como preparar feijão para a semana'." },
        { titulo: "D - Envolvimento da família", texto: "Quando a família come feijão junto, a criança aprende pelo exemplo.", recurso: "Imagem: 'Refeição em família'." }
      ],
      ctaTexto: "✨ Continue assim! Que tal testar uma nova forma de preparar feijão esta semana?",
      btnAmareloTexto: "Ideias para variar o feijão"
    },
    nao: {
      tipo: "obstaculo",
      intro: "Tudo bem! O feijão faz parte da comida do brasileiro e ajuda a criança a crescer forte e saudável. Vamos pensar em como incluir o feijão nas refeições?",
      cards: [
        { titulo: "A - Recusa da criança", texto: "É comum a criança recusar feijão nessa fase. Continue oferecendo todos os dias, em pequenas quantidades, sem forçar, sem castigos ou recompensas.", recurso: "Card educativo: 'Oferecer sem forçar ajuda a criança a aceitar'." },
        { titulo: "B - Pouca variedade no preparo", texto: "Você pode variar o tipo de feijão e também usar lentilha, grão-de-bico ou ervilha. Mudar a forma de preparo ajuda na aceitação.", recurso: "Vídeo curto: 'Vários tipos de feijão no prato'." },
        { titulo: "C - Falta de tempo ou habilidade para cozinhar", texto: "Deixar o feijão de molho, usar panela de pressão e congelar porções facilita o preparo da semana.", recurso: "Vídeo curto: 'Como preparar feijão para a semana'." },
        { titulo: "D - Falta de hábito", texto: "É muito importante manter uma dieta saudável, mantendo as refeições principais (almoço e jantar) incluído arroz e feijão.", recurso: "Imagem ilustrativa de família reunida almoçando." }
      ],
      ctaTexto: "Que tal escolher uma forma de colocar o feijão no almoço ou jantar todos os dias?",
      checklist: ["Feijão tradicional", "Outras leguminosas", "Preparações variadas"],
      btnAmareloTexto: "Ver preparos simples com feijão"
    },
    naoSei: {
      intro: "Não tem problema não saber! Acompanhar a alimentação da criança é um aprendizado diário.",
      tituloCard: "Por que o feijão é importante?",
      textoCard: "O feijão e outras leguminosas (lentilha, grão-de-bico) são ricos em ferro e fibras. Eles ajudam a prevenir a anemia e dão energia para a criança brincar e se desenvolver.",
      tags: ["🩸 Previne Anemia", "💪 Energia", "🤎 Fibras"],
      ctaTexto: "Que tal observar hoje se o feijão vai fazer parte do pratinho?",
      btnAmareloTexto: "Ver preparos simples com feijão"
    }
  },
  {
    id: 2,
    pergunta: "Ontem a criança consumiu bebidas adoçadas?",
    subtexto: "(refrigerante, suco de caixinha, suco em pó, água de coco de caixinha, xaropes, suco com adição de açúcar)",
    opcoes: ["Sim", "Não", "Não sei"],
    sim: {
      tipo: "obstaculo",
      intro: "Vamos conversar sobre as bebidas do dia a dia? Algumas parecem práticas, mas não ajudam na saúde da criança.",
      cards: [
        { titulo: "A - Costume com refrigerantes e sucos prontos", texto: "Essas bebidas têm açúcar e aditivos e não são indicadas para crianças.", recurso: "Card: 'Bebidas adoçadas não são saudáveis'." },
        { titulo: "B - Pedido frequente da criança", texto: "Evitar ter essas bebidas em casa ajuda muito. Pais e responsáveis são referência.", recurso: "Áudio curto para responsáveis." },
        { titulo: "C - Substituições possíveis", texto: "O ideal é oferecer água ao longo do dia. Que tal levar uma garrafa de água sempre que for sair?", recurso: "Imagem ilustrativa de garrafa de água." }
      ],
      ctaTexto: "Que tal trocar as bebidas adoçadas por água no dia a dia?",
      btnAmareloTexto: "Dicas para incentivar o consumo de água"
    },
    nao: {
      tipo: "estrategia",
      intro: "Parabéns! Evitar bebidas adoçadas protege a saúde e ajuda a criança a gostar de alimentos naturais.",
      cards: [
        { titulo: "A - Manter a água como principal bebida", texto: "Continue oferecendo água ao longo do dia, especialmente após brincadeiras.", recurso: "Imagem: 'Garrafinha de água'." },
        { titulo: "B - Atenção à publicidade", texto: "Algumas bebidas parecem saudáveis, mas também são adoçadas. Vale sempre observar.", recurso: "Card educativo." },
        { titulo: "C - Sucos naturais e água de coco", texto: "Sucos naturais e água de coco são alternativas boas para refrescos, mas não devem ser prioridade nem substituto de água.", recurso: "Imagem ilustrativa: Copo de suco e coco." }
      ],
      ctaTexto: "✨ Continue com esse cuidado!",
      btnAmareloTexto: "Mais dicas de bebidas saudáveis"
    },
    naoSei: {
      intro: "Entender o que a criança bebe é importante para proteger a saúde dos dentinhos e do corpo todo.",
      tituloCard: "Cuidado com o açúcar escondido",
      textoCard: "Bebidas como sucos de caixinha, achocolatados e refrigerantes contêm muito açúcar e conservantes, que podem prejudicar o crescimento e o apetite para comidas saudáveis.",
      tags: ["💧 Água é vida", "🦷 Saúde Dental", "🛡️ Imunidade"],
      ctaTexto: "Na dúvida, a água é sempre a melhor e mais segura opção!",
      btnAmareloTexto: "Dicas para incentivar o consumo de água"
    }
  },
  {
    id: 3,
    pergunta: "Ontem a criança consumiu ultraprocessados?",
    subtexto: "(salgadinhos de pacote, biscoitos recheados, macarrão instantâneo, salsicha, nuggets, etc.)",
    opcoes: ["Sim", "Não", "Não sei"],
    sim: {
      tipo: "obstaculo",
      intro: "Alguns alimentos são muito práticos, mas não ajudam no crescimento saudável da criança. Que tal pensarmos em outras estratégias?",
      cards: [
        { titulo: "A - Falta de tempo", texto: "Comida caseira também pode ser rápida, prática e é muito mais saudável.", recurso: "Card: 'Comida de verdade'." },
        { titulo: "B - Uso como recompensa", texto: "Ultraprocessados não devem ser prêmio ou castigo.", recurso: "Imagem ilustrativa com símbolo de proibido." },
        { titulo: "C - Falta de estimulação", texto: "Estimule o consumo de frutas na sobremesa e lanches da tarde.", recurso: "Link de receita saudável." },
        { titulo: "D - Costume de comer ultraprocessados", texto: "Evite a compra constante desses produtos, escolha opções naturais e saudáveis.", recurso: "Imagem de opções de 'snacks' saudáveis." }
      ],
      ctaTexto: "Que tal planejar refeições com comida caseira?",
      btnAmareloTexto: "Planejar refeições"
    },
    nao: {
      tipo: "estrategia",
      intro: "Muito bom! Evitar ultraprocessados ajuda a formar hábitos saudáveis. Confiram algumas estratégias para cultivar esses hábitos.",
      cards: [
        { titulo: "A - Incentivar hábitos saudáveis", texto: "Manter comida caseira e frutas disponíveis facilita escolhas saudáveis.", recurso: "Imagem de 'snacks' saudáveis." },
        { titulo: "B - Identificar alimentos ultraprocessados", texto: "Leia os rótulos sempre que possível, ingredientes com nomes estranhos podem indicar que o produto é ultraprocessado.", recurso: "Infográfico sobre rótulos." },
        { titulo: "C - Fazer receitas novas", texto: "Tente explorar novas receitas para evitar que a criança fique enjoada de comer comidas caseiras.", recurso: "Link para receitas saudáveis." }
      ],
      ctaTexto: "✨ Continue assim!",
      btnAmareloTexto: "Dicas para manter a rotina saudável"
    },
    naoSei: {
      intro: "Muitos produtos de mercado enganam pelas embalagens coloridas, mas podem ser ultraprocessados.",
      tituloCard: "O que são alimentos ultraprocessados?",
      textoCard: "São produtos fabricados com muitos aditivos, corantes, açúcar e gordura (como biscoitos recheados, salgadinhos e salsicha). Eles não oferecem os nutrientes que a criança precisa para crescer.",
      tags: ["🍎 Prefira In Natura", "👀 Olho no rótulo", "🌱 Comida de verdade"],
      ctaTexto: "Descasque mais e desembale menos!",
      btnAmareloTexto: "Dicas para manter a rotina saudável"
    }
  },
  {
    id: 4,
    pergunta: "Ontem a criança consumiu legumes e verduras?",
    subtexto: "",
    opcoes: ["Sim", "Não", "Não sei"],
    sim: {
      tipo: "estrategia",
      intro: "Ótimo! Legumes e verduras ajudam a proteger a saúde. Que tal manter essa prática usando mais estratégias?",
      cards: [
        { titulo: "A - Incentivar hábitos saudáveis", texto: "Variar cores e preparações mantém o interesse da criança.", recurso: "Imagem ilustrativa." },
        { titulo: "B - Fazer receitas novas", texto: "Fazer receitas novas pode ajudar a criança a não enjoar de comer vegetais.", recurso: "Link para receitas saudáveis." },
        { titulo: "C - Congelar legumes e vegetais", texto: "A opção de congelar legumes e vegetais cozidos é uma ótima opção para quando estiver precisando de praticidade.", recurso: "Link para receitas saudáveis." }
      ],
      ctaTexto: "",
      btnAmareloTexto: "Continue a manter essa alimentação!"
    },
    nao: {
      tipo: "obstaculo",
      intro: "Legumes e verduras ajudam no crescimento e deixam o prato mais colorido e divertido para as crianças. Que tal colocá-los na dieta?",
      cards: [
        { titulo: "A - A criança recusa a comer", texto: "A recusa será muito comum no início. Continue oferecendo sem obrigar até ela se acostumar.", recurso: "Card educativo." },
        { titulo: "B - Falta de tempo", texto: "Que tal preparar e congelar os legumes? Assim é só descongelar e colocar no prato. Super prático e simples.", recurso: "Vídeo sobre 'como congelar legumes'." },
        { titulo: "C - Falta de costume", texto: "As crianças repetem o que elas veem. Se a família tem o costume de comer legumes diariamente, a criança também irá comer.", recurso: "Imagem sobre a importância da família." }
      ],
      ctaTexto: "Vamos tentar colocar mais cor no prato hoje?",
      btnAmareloTexto: "Ideias de preparos com legumes"
    },
    naoSei: {
      intro: "As verduras e os legumes são a principal fonte de vitaminas da refeição principal.",
      tituloCard: "Prato colorido é prato nutritivo",
      textoCard: "Eles fortalecem a imunidade, evitam doenças e ajudam a criança a crescer. Tente incluir pelo menos um tipo de legume no almoço e no jantar.",
      tags: ["🥗 Vitaminas", "🛡️ Imunidade forte", "🥕 Fibras"],
      ctaTexto: "Observe hoje as cores do pratinho!",
      btnAmareloTexto: "Ideias de preparos com legumes"
    }
  },
  {
    id: 5,
    pergunta: "Ontem a criança consumiu frutas?",
    subtexto: "",
    opcoes: ["Sim", "Não", "Não sei"],
    sim: {
      tipo: "estrategia",
      intro: "🍎 Parabéns! Comer frutas ajuda no crescimento e no intestino.",
      cards: [
        { titulo: "A - Aumentar a diversidade", texto: "Quanto maior a variedade de frutas, maior a diversidade de nutrientes.", recurso: "Lista de frutas." },
        { titulo: "B - Incentivar a autonomia da criança", texto: "Manter frutas ao alcance da criança ajuda na escolha e no consumo.", recurso: "Card educativo." },
        { titulo: "C - Consumir junto com a família", texto: "Quando a família consome frutas junto, a criança aprende pelo exemplo.", recurso: "Imagem lúdica." }
      ],
      ctaTexto: "✨ Continue com esse cuidado diário!",
      btnAmareloTexto: "Variar frutas da semana"
    },
    nao: {
      tipo: "obstaculo",
      intro: "As frutas ajudam no funcionamento do intestino, dão energia e fazem parte de uma alimentação saudável para a criança. Vamos pensar juntos em como oferecer frutas todos os dias?",
      cards: [
        { titulo: "A - Recusa ou pouco interesse", texto: "A recusa é comum. Continue oferecendo frutas diariamente, mesmo que a criança consuma pequenas quantidades, respeitando a aceitação.", recurso: "Card: 'Oferecer sempre, respeitando a criança'." },
        { titulo: "B - Pouca variedade de frutas", texto: "Variar as frutas amplia os sabores e os nutrientes. Valorize frutas da região e da época.", recurso: "Infográfico: 'Frutas do Brasil'." },
        { titulo: "C - Preferência por doces", texto: "Oferecer frutas como sobremesa ajuda a substituir doces e guloseimas.", recurso: "Card educativo." }
      ],
      ctaTexto: "Que tal garantir fruta todos os dias nas refeições ou nos lanches?",
      checklist: ["In natura", "Em salada de frutas", "Misturada com iogurte natural"],
      btnAmareloTexto: "Formas práticas de oferecer frutas"
    },
    naoSei: {
      intro: "As frutas são sobremesas naturais perfeitas e lanchinhos rápidos cheios de saúde.",
      tituloCard: "A força das frutas",
      textoCard: "As frutas são fundamentais para o bom funcionamento do intestino da criança e fornecem energia natural (sem açúcar industrializado) para o dia a dia.",
      tags: ["🍌 Energia", "💩 Intestino Feliz", "🍊 Vitaminas"],
      ctaTexto: "Sempre que puder, deixe frutas lavadas à vista!",
      btnAmareloTexto: "Formas práticas de oferecer frutas"
    }
  },
  {
    id: 6,
    pergunta: "A criança costuma comer em frente à TV, celular ou tablet?",
    subtexto: "",
    opcoes: ["Sim", "Não", "Não sei"],
    sim: {
      tipo: "obstaculo",
      intro: "O ambiente onde a criança se alimenta influencia quanto e como ela come. Vamos conversar sobre isso?",
      cards: [
        { titulo: "A - Uso de telas durante as refeições", texto: "Evitar TV, celular ou tablet ajuda a criança a prestar atenção na comida e perceber a saciedade.", recurso: "Card educativo: 'Hora de comer sem telas'." },
        { titulo: "B - Falta de rotina antes das refeições", texto: "Criar uma rotina antes de comer, como guardar brinquedos e lavar as mãos, ajuda a criança a se preparar para a refeição.", recurso: "Checklist ilustrado." },
        { titulo: "C - Comer fora de um local definido", texto: "Organizar um local fixo para as refeições, de preferência à mesa, ajuda a criar o hábito.", recurso: "Imagem: 'Lugar da refeição'." },
        { titulo: "D - Uso de brincadeiras para distrair", texto: "Brincadeiras para distrair enquanto come podem prejudicar a relação da criança com a alimentação.", recurso: "Áudio educativo para responsáveis." }
      ],
      ctaTexto: "Que tal combinar refeições sem telas e com mais atenção?",
      btnAmareloTexto: "Organizar rotina das refeições"
    },
    nao: {
      tipo: "estrategia",
      intro: "Muito bem! Comer com atenção ajuda a criança a perceber a saciedade.",
      cards: [
        { titulo: "A - Manter refeições em companhia", texto: "Comer junto com a família fortalece vínculos e hábitos saudáveis.", recurso: "Dica textual." },
        { titulo: "B - Respeitar horários e intervalos", texto: "Evitar beliscos entre as refeições ajuda a manter o apetite.", recurso: "Infográfico." },
        { titulo: "C - Incentivar a mastigação e o comer devagar", texto: "Comer devagar ajuda a criança a perceber sabores e texturas.", recurso: "Card educativo." }
      ],
      ctaTexto: "✨ Continue mantendo esse ambiente tranquilo nas refeições.",
      btnAmareloTexto: "Manter bons hábitos à mesa"
    },
    naoSei: {
      intro: "Às vezes, na correria, deixamos as telas ligadas para facilitar, mas a hora de comer merece atenção plena.",
      tituloCard: "Comer sem distrações",
      textoCard: "Quando a criança come assistindo TV ou usando celular, ela não presta atenção no prato, não mastiga direito e pode comer além do necessário sem perceber que já está cheia.",
      tags: ["📵 Sem Telas", "🧠 Atenção Plena", "🍽️ Saciedade"],
      ctaTexto: "A refeição é um ótimo momento para conversar em família!",
      btnAmareloTexto: "Organizar rotina das refeições"
    }
  }
];