const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
    console.log("🌱 Iniciando seed de artigos via Prisma...\n");

    const articles = [
        {
            title: 'O Impacto das Queimadas na Biodiversidade da Amazônia',
            slug: 'impacto-queimadas-biodiversidade-amazonia',
            summary: 'Como os recentes incêndios florestais estão afetando a fauna e flora local de forma irreversível nas áreas mais densas da floresta.',
            content: `A Amazônia abriga a maior biodiversidade do planeta, com milhões de espécies de plantas, animais e microorganismos que dependem do equilíbrio delicado desse ecossistema. No entanto, as queimadas, muitas vezes provocadas para expansão agrícola e pecuária, têm devastado habitats inteiros de forma alarmante.

As Vítimas Diretas

Animais de médio e grande porte, como onças, antas e macacos, são forçados a fugir de suas áreas naturais, perdendo território e fontes de alimento. Espécies menos móveis, como preguiças e filhotes, frequentemente não conseguem escapar das chamas, resultando em mortalidade em massa.

Insetos essenciais para a polinização, como abelhas nativas e borboletas, também são vítimas diretas. Sua perda compromete a reprodução de inúmeras espécies vegetais, criando um efeito cascata que se espalha por todo o ecossistema.

O Colapso da Cadeia Alimentar

A destruição da flora endêmica causa um desequilíbrio profundo na cadeia alimentar. Árvores frutíferas que alimentavam dezenas de espécies são reduzidas a cinzas. Sem alimento, herbívoros migram ou morrem de fome, afetando os predadores que deles dependem.

Esse desequilíbrio pode levar décadas para ser revertido, quando possível. Algumas espécies de árvores amazônicas levam mais de 100 anos para atingir a maturidade, tornando a recuperação um processo extremamente longo.

Espécies Perdidas Antes de Serem Descobertas

Especialistas alertam que, se o ritmo atual de queimadas continuar, espécies ainda não descobertas pela ciência podem ser extintas antes mesmo de serem catalogadas. Estudos sugerem que apenas 10% da biodiversidade amazônica foi cientificamente descrita.

A perda dessas espécies representa não apenas uma tragédia ecológica, mas também a perda de potenciais descobertas médicas e científicas. Muitos medicamentos modernos foram desenvolvidos a partir de compostos encontrados em plantas tropicais.

A Urgência da Conservação

A proteção da Amazônia não é apenas uma questão ambiental, mas uma necessidade para a sobrevivência humana. A floresta regula o clima global, produz oxigênio e armazena bilhões de toneladas de carbono. Sua destruição acelera as mudanças climáticas e compromete o futuro do planeta.`,
            imageUrl: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&auto=format&fit=crop'
        },
        {
            title: 'Dicas Práticas para Prevenção de Incêndios Florestais',
            slug: 'dicas-praticas-prevencao-incendios-florestais',
            summary: 'Pequenas atitudes no dia a dia podem ajudar a evitar grandes tragédias. Veja o que você pode fazer.',
            content: `A prevenção é a ferramenta mais eficaz contra incêndios florestais. Pequenas atitudes individuais, quando multiplicadas por milhões de pessoas, podem fazer uma diferença significativa na proteção de nossos biomas. Aqui estão as principais medidas que todos podem adotar:

1. Descarte Correto de Cigarros

Nunca jogue bitucas de cigarro em rodovias, acostamentos ou áreas com vegetação. Uma simples bituca acesa pode iniciar um incêndio devastador em condições de seca. Sempre apague completamente o cigarro e descarte em local apropriado.

Em áreas rurais, onde não há lixeiras, guarde a bituca em um recipiente até encontrar um local adequado para descarte. Essa pequena ação pode salvar hectares de floresta.

2. Cuidados com Fogueiras em Acampamentos

Se você pratica camping, siga estas regras essenciais:
- Faça fogueiras apenas em áreas designadas e autorizadas
- Mantenha a fogueira pequena e sempre supervisionada
- Tenha água abundante por perto para emergências
- Antes de dormir ou sair, apague completamente a fogueira com água
- Certifique-se de que as cinzas estão frias ao toque
- Cubra a área com terra para evitar reignição

Lembre-se: ventos podem reacender brasas aparentemente apagadas horas depois.

3. Diga Não aos Balões

Soltar balões é crime ambiental (Lei Federal nº 9.605/98) e uma das principais causas de incêndios florestais no Brasil. Os balões caem acesos em áreas de mata, frequentemente em locais de difícil acesso para combate.

Além do risco de incêndio, balões causam acidentes aéreos e podem cair em residências, causando tragédias. Denuncie a fabricação e soltura de balões às autoridades ambientais.

4. Mantenha Terrenos Limpos

Proprietários rurais e moradores de áreas periurbanas devem:
- Manter terrenos roçados, especialmente na época de seca
- Remover acúmulo de folhas secas, galhos e lixo
- Criar aceiros (faixas de terra limpa) ao redor da propriedade
- Evitar queimar lixo doméstico ou restos de poda
- Usar alternativas à queima para limpeza de terrenos

5. Atenção Especial em Períodos de Seca

Durante a estação seca, redobre os cuidados:
- Evite qualquer tipo de queima
- Não solte fogos de artifício
- Tenha cuidado ao usar equipamentos que geram faíscas
- Mantenha mangueiras e pontos de água acessíveis
- Conheça os números de emergência (193 - Bombeiros)

6. Educação e Conscientização Comunitária

Compartilhe essas informações com familiares, amigos e vizinhos. A conscientização coletiva é fundamental para proteger nossos biomas. Organize ou participe de campanhas de educação ambiental em sua comunidade.

Ensine as crianças desde cedo sobre a importância da prevenção de incêndios e o respeito pela natureza.

Conclusão

Cada pessoa tem um papel importante na prevenção de incêndios florestais. Suas ações individuais, por menores que pareçam, contribuem para a proteção de milhares de hectares de floresta, incontáveis espécies de animais e plantas, e o futuro do nosso planeta.`,
            imageUrl: 'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?w=800&auto=format&fit=crop'
        },
        {
            title: 'Tecnologia no Combate ao Fogo: Satélites e IA',
            slug: 'tecnologia-combate-fogo-satelites-ia',
            summary: 'Como o INPE e outras organizações estão utilizando inteligência artificial para prever e detectar focos de incêndio.',
            content: `A tecnologia tem se tornado a maior aliada das brigadas de incêndio e agências ambientais no combate aos incêndios florestais. Nos últimos anos, avanços significativos em monitoramento por satélite e inteligência artificial revolucionaram a forma como detectamos e respondemos a focos de incêndio.

Monitoramento por Satélite em Tempo Real

O Instituto Nacional de Pesquisas Espaciais (INPE) opera um sistema sofisticado de monitoramento de queimadas através de satélites que orbitam a Terra. Esses satélites capturam imagens em diferentes comprimentos de onda, permitindo a detecção de focos de calor mesmo através de nuvens de fumaça.

O sistema processa dados de múltiplos satélites, incluindo:
- Aqua e Terra (NASA) - passam sobre o Brasil 4 vezes ao dia
- NOAA-20 e NPP (NOAA) - fornecem dados térmicos em alta resolução
- Sentinel-2 (ESA) - oferece imagens ópticas detalhadas
- GOES-16 - proporciona monitoramento contínuo

Essa redundância garante que nenhum foco significativo passe despercebido.

Inteligência Artificial na Detecção Precoce

Algoritmos de aprendizado de máquina agora processam os gigabytes de imagens de satélite recebidos diariamente. Esses sistemas de IA são treinados para:

1. Distinguir focos de incêndio de outras fontes de calor
2. Prever a propagação do fogo baseado em condições meteorológicas
3. Identificar padrões suspeitos que indicam queimadas intencionais
4. Priorizar alertas baseado no risco e valor ecológico da área

A precisão desses sistemas tem melhorado drasticamente. Em 2025, a taxa de falsos positivos caiu para menos de 3%, economizando recursos e permitindo respostas mais rápidas a ameaças reais.

Alertas Automáticos e Resposta Rápida

Quando um foco de incêndio é detectado, o sistema gera automaticamente alertas que são enviados para:
- Brigadas de incêndio locais
- Órgãos ambientais estaduais e federais
- Prefeituras das regiões afetadas
- Proprietários de terra cadastrados

Essa resposta imediata pode ser a diferença entre conter um pequeno foco ou enfrentar um megaincêndio. Estudos mostram que cada hora economizada no tempo de resposta pode reduzir a área queimada em até 40%.

Drones e Robótica

Complementando a vigilância por satélite, drones equipados com câmeras térmicas são usados para:
- Mapear a extensão de incêndios em andamento
- Localizar focos residuais após aparente extinção
- Guiar equipes de combate para áreas críticas
- Avaliar danos e planejar recuperação

Alguns projetos piloto já testam drones autônomos capazes de lançar supressores de fogo em locais inacessíveis.

Modelagem Preditiva

Supercomputadores agora processam dados meteorológicos, históricos de queimadas, umidade da vegetação e atividade humana para criar mapas de risco diários. Esses modelos preditivos permitem:

- Posicionamento estratégico de equipes em áreas de alto risco
- Alertas preventivos para populações em risco
- Planejamento antecipado de recursos e equipamentos
- Campanhas educativas direcionadas

Big Data e Integração de Fontes

A integração de múltiplas fontes de dados cria uma visão abrangente:
- Dados de satélite
- Estações meteorológicas terrestres
- Relatórios de campo
- Denúncias de cidadãos via aplicativos
- Sensores IoT em áreas protegidas

Algoritmos de big data correlacionam essas informações para identificar padrões e tendências impossíveis de detectar manualmente.

O Fator Humano

Apesar de todos os avanços tecnológicos, o elemento humano permanece crucial. Tecnologia não substitui brigadistas treinados, comunidades conscientes e políticas públicas efetivas. A tecnologia amplifica e potencializa o trabalho humano, mas não o elimina.

O Futuro do Combate a Incêndios

Pesquisadores trabalham em:
- Satélites com resolução ainda maior e menor latência
- IA capaz de prever incêndios dias antes de ocorrerem
- Redes de sensores terrestres de baixo custo
- Sistemas de supressão automatizados
- Integração com mudanças climáticas e modelos de vegetação

A combinação de tecnologia avançada, ciência sólida e ação humana coordenada oferece esperança na luta contra incêndios florestais. O investimento contínuo nessas tecnologias é essencial para proteger nossos preciosos biomas para as gerações futuras.`,
            imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop'
        }
    ];

    let successCount = 0;

    for (const article of articles) {
        try {
            // Verificar se artigo já existe
            const existing = await prisma.article.findUnique({
                where: { slug: article.slug }
            });

            if (existing) {
                console.log(`⏭️  Artigo já existe: "${article.title}"`);
                continue;
            }

            // Criar novo artigo
            await prisma.article.create({
                data: article
            });

            console.log(`✅ Artigo criado: "${article.title}"`);
            successCount++;
        } catch (error) {
            console.error(`❌ Erro ao criar artigo "${article.title}":`, error.message);
        }
    }

    console.log(`\n✨ Seed finalizado! ${successCount} artigo(s) foi/foram criado(s).`);
}

main()
    .catch((e) => {
        console.error('🚨 Erro durante o seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });

