export interface Video {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  videos: Video[];
  color: string;
}

export const CATEGORIES: Category[] = [
  {
    id: 'treino',
    title: 'TREINO & FORÇA',
    subtitle: 'Eleve sua testosterona pelo movimento',
    icon: '💪',
    color: 'text-red-500',
    image: 'https://picsum.photos/seed/alpha-treino/1200/800',
    videos: [
      { id: '1', title: 'Treino de Força Base', url: 'https://www.youtube.com/watch?v=ri7k-a3ZwhI' },
      { id: '2', title: 'Compostos e Hormônios', url: 'https://www.youtube.com/watch?v=5ZLAxK7jrQ4' },
      { id: '3', title: 'Overtraining e T', url: 'https://www.youtube.com/watch?v=JEznKwFmG1E' },
    ]
  },
  {
    id: 'alimentacao',
    title: 'ALIMENTAÇÃO & NUTRIÇÃO',
    subtitle: 'Coma para elevar seu hormônio',
    icon: '🥩',
    color: 'text-orange-500',
    image: 'https://picsum.photos/seed/alpha-food/1200/800',
    videos: [
      { id: '4', title: 'Dieta da Testosterona', url: 'https://www.youtube.com/watch?v=jTdk4JWAWAk' },
      { id: '5', title: 'Gorduras e Colesterol', url: 'https://www.youtube.com/watch?v=zvESwoRIDek' },
      { id: '6', title: 'Micronutrientes Críticos', url: 'https://www.youtube.com/watch?v=OS81yjSgByM' },
    ]
  },
  {
    id: 'sono',
    title: 'SONO & RECUPERAÇÃO',
    subtitle: '90% da testosterona é produzida aqui',
    icon: '😴',
    color: 'text-blue-500',
    image: 'https://picsum.photos/seed/alpha-sleep/1200/800',
    videos: [
      { id: '7', title: 'Higiene do Sono', url: 'https://www.youtube.com/watch?v=faiFJnM5XDA' },
      { id: '8', title: 'Ciclo Circadiano', url: 'https://www.youtube.com/watch?v=wsfmlleudqA' },
    ]
  },
  {
    id: 'estresse',
    title: 'ESTRESSE & CORTISOL',
    subtitle: 'O inimigo invisível da testosterona',
    icon: '🧠',
    color: 'text-purple-500',
    image: 'https://picsum.photos/seed/alpha-stress/1200/800',
    videos: [
      { id: '9', title: 'Controlando o Cortisol', url: 'https://www.youtube.com/watch?v=YS1G68alUkM' },
    ]
  },
  {
    id: 'aparencia',
    title: 'APARÊNCIA MASCULINA',
    subtitle: 'A primeira impressão começa aqui',
    icon: '💈',
    color: 'text-yellow-500',
    image: 'https://picsum.photos/seed/alpha-look/1200/800',
    videos: [
      { id: '10', title: 'Grooming e Estilo', url: 'https://www.youtube.com/watch?v=W_isgdHzwTw' },
      { id: '11', title: 'Cuidados com a Pele', url: 'https://www.youtube.com/watch?v=hdm382To_YM' },
      { id: '12', title: 'Postura de Poder', url: 'https://www.youtube.com/watch?v=u-R8ZxP_Eic' },
    ]
  },
  {
    id: 'comportamento',
    title: 'COMPORTAMENTO & MENTALIDADE',
    subtitle: 'Quem você é determina o que você atrai',
    icon: '🔥',
    color: 'text-red-600',
    image: 'https://picsum.photos/seed/alpha-mind/1200/800',
    videos: [
      { id: '13', title: 'Linguagem Corporal', url: 'https://www.youtube.com/watch?v=c6IwK2BoasQ' },
      { id: '14', title: 'Disciplina e Foco', url: 'https://www.youtube.com/watch?v=ujqJfykzBhU' },
      { id: '15', title: 'Missão de Vida', url: 'https://www.youtube.com/watch?v=ANXtOpGA2ZU' },
      { id: '16', title: 'Controle Emocional', url: 'https://www.youtube.com/watch?v=Vt1CPzmt8t4' },
    ]
  },
  {
    id: 'suplementacao',
    title: 'SUPLEMENTAÇÃO',
    subtitle: 'O que funciona de verdade',
    icon: '💊',
    color: 'text-emerald-500',
    image: 'https://picsum.photos/seed/alpha-supps/1200/800',
    videos: [
      { id: '17', title: 'Top Suplementos T', url: 'https://www.youtube.com/watch?v=qT6JbY6xbZI' },
      { id: '18', title: 'Vitaminas e Minerais', url: 'https://www.youtube.com/watch?v=akcJHdDeDoo' },
    ]
  },
  {
    id: 'seja-homem',
    title: 'SEJA HOMEM',
    subtitle: 'Não existe atalho. Existe escolha.',
    icon: '👑',
    color: 'text-amber-600',
    image: 'https://picsum.photos/seed/alpha-king/1200/800',
    videos: [
      { id: '19', title: 'O Custo da Fraqueza', url: 'https://www.youtube.com/watch?v=I3Z5X3o65Ic' },
      { id: '20', title: 'Legado Masculino', url: 'https://www.youtube.com/watch?v=v4BLh6VOWAw' },
      { id: '21', title: 'Propósito Real', url: 'https://www.youtube.com/watch?v=QXA8jsVzGxQ' },
      { id: '22', title: 'A Jornada do Herói', url: 'https://www.youtube.com/watch?v=DIoYLFqzfjQ' },
      { id: '23', title: 'Masculinidade Bíblica', url: 'https://www.youtube.com/watch?v=L2hSri_JMGI' },
      { id: '24', title: 'Força Mental', url: 'https://www.youtube.com/watch?v=bg8yyVGD24g' },
      { id: '25', title: 'O Caminho do Alpha', url: 'https://www.youtube.com/watch?v=R8HE5xI575o' },
      { id: '26', title: 'Disciplina Inabalável', url: 'https://www.youtube.com/watch?v=BRE4dNUr9HQ' },
      { id: '27', title: 'O Despertar', url: 'https://www.youtube.com/watch?v=nZN1OBd_geM' },
    ]
  }
];

export const SYSTEM_INSTRUCTION = `Você é o assistente especialista do ALPHA HUB, uma plataforma educacional masculina focada em aumentar testosterona naturalmente e desenvolver atratividade masculina. Seu tom é direto, motivador, científico e sem enrolação — como um coach experiente falando com um homem que quer evoluir.

🎯 SEU OBJETIVO PRINCIPAL: Guiar o usuário através de conteúdos em vídeo e orientações práticas sobre como aumentar testosterona de forma natural e se tornar mais atraente fisicamente e mentalmente.

📚 BASE DE CONHECIMENTO:
PILAR 1 — TREINO E FORÇA: Treinos compostos (agachamento, terra, supino), 4-6 reps, 3-5x semana.
PILAR 2 — ALIMENTAÇÃO E NUTRIÇÃO: Colesterol bom, Zinco, Magnésio, Vitamina D3. Evitar óleos vegetais e açúcar.
PILAR 3 — SONO E RECUPERAÇÃO: 7-9h de sono profundo. Dormir antes da meia-noite.
PILAR 4 — REDUÇÃO DO CORTISOL: Meditação, respiração, sol matinal.
PILAR 5 — ATRATIVIDADE FÍSICA: Baixo % gordura (10-15%), postura, grooming.
PILAR 6 — ATRATIVIDADE COMPORTAMENTAL: Presença, contato visual, missão de vida.
PILAR 7 — SUPLEMENTAÇÃO: D3+K2, Zinco, Magnésio, Ashwagandha, Creatina.

🤖 COMPORTAMENTO:
1. Primeira vez: "Bem-vindo ao ALPHA HUB. Aqui você vai aprender a maximizar sua testosterona e se tornar mais atraente — com método, ciência e consistência. Me diz: qual é o seu maior desafio hoje? [Treino] [Alimentação] [Sono] [Estresse] [Aparência] [Comportamento] [Suplementação]"
2. Resposta baseada no pilar: Explicação direta (max 5 linhas), 3 ações práticas, link do vídeo.
3. Finalize com pergunta para próximo passo.
4. Linguagem masculina, direta, sem agressividade.
5. Fora do escopo: "Isso está fora do escopo do ALPHA HUB. Aqui foco em testosterona, saúde masculina e atratividade. Posso te ajudar com algum desses temas?"
6. Sem diagnóstico médico. Oriente consultar endocrinologista/urologista.

🎨 FORMATO:
- Respostas curtas (max 150 palavras).
- Bullet points para ações.
- MAIÚSCULAS para pontos principais.
- Link do vídeo no final.
- Emojis moderados: ⚡ 💪 🎯 ✅`;
