// Dados do negócio em um lugar só.
// Valor null = ainda não confirmado pelo Aldir. O componente <Dado> marca
// visualmente no site o que está pendente, para nada falso ir ao ar.

export type Pendente = null;

export const empresa = {
  nome: 'Feltrin',
  nomeCompleto: 'Feltrin Espumas e Estofados',
  razaoSocial: null as string | null,
  cnpj: null as string | null,
  endereco: null as string | null,
  cidade: null as string | null,
  horario: null as string | null,
  email: null as string | null,
  telefone: '(11) 97681-7498',
  whatsapp: '5511976817498',
  anosMercado: null as string | null,
  instagram: null as string | null,
  mapsUrl: null as string | null,
};

export const numeros = {
  clientesAtivos: null as string | null,
  metrosCubicosMes: null as string | null,
  cidadesEntrega: null as string | null,
  prazoCorte: null as string | null,
  prazoEntrega: null as string | null,
  raioEntrega: null as string | null,
};

// Monta o link do WhatsApp com mensagem já contextualizada pela seção de origem.
export function zap(mensagem: string): string {
  return `https://wa.me/${empresa.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

// Tabela técnica. As densidades e espessuras precisam ser confirmadas com o
// Aldir antes de publicar: linha com `confirmado: false` aparece esmaecida.
export const densidades = [
  {
    cod: 'D18',
    uso: 'Encosto e almofada solta de baixo uso',
    espessuras: null as string | null,
    confirmado: false,
  },
  {
    cod: 'D20',
    uso: 'Encosto de sofá e cabeceira estofada',
    espessuras: null as string | null,
    confirmado: false,
  },
  {
    cod: 'D23',
    uso: 'Assento de uso leve e poltrona de quarto',
    espessuras: null as string | null,
    confirmado: false,
  },
  {
    cod: 'D26',
    uso: 'Assento residencial de uso diário',
    espessuras: null as string | null,
    confirmado: false,
  },
  {
    cod: 'D28',
    uso: 'Assento de sofá de sala, uso diário pesado',
    espessuras: null as string | null,
    confirmado: false,
  },
  {
    cod: 'D33',
    uso: 'Assento de alta durabilidade e uso comercial leve',
    espessuras: null as string | null,
    confirmado: false,
  },
  {
    cod: 'D45',
    uso: 'Uso comercial pesado, banco e assento técnico',
    espessuras: null as string | null,
    confirmado: false,
  },
];

export const depoimentos = [
  {
    texto: null as string | null,
    nome: null as string | null,
    negocio: null as string | null,
    cidade: null as string | null,
    foto: 'img/prova-cliente-01.png',
  },
  {
    texto: null as string | null,
    nome: null as string | null,
    negocio: null as string | null,
    cidade: null as string | null,
    foto: 'img/prova-cliente-02.png',
  },
  {
    texto: null as string | null,
    nome: null as string | null,
    negocio: null as string | null,
    cidade: null as string | null,
    foto: 'img/prova-cliente-03.png',
  },
];

export const trabalhos = [
  {
    foto: 'img/trabalho-01.png',
    legenda: null as string | null,
    alt: 'Sofá de três lugares reformado com espuma cortada sob medida',
  },
  {
    foto: 'img/trabalho-02.png',
    legenda: null as string | null,
    alt: 'Cabeceira estofada produzida sob medida',
  },
  {
    foto: 'img/trabalho-03.png',
    legenda: null as string | null,
    alt: 'Poltrona reformada com espuma de alta densidade',
  },
  {
    foto: 'img/trabalho-04.png',
    legenda: null as string | null,
    alt: 'Assento de banco corrido estofado sob medida',
  },
];
