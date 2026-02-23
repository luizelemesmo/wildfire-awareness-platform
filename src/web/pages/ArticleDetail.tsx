import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet-async";
import { api } from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ArrowLeft, Calendar } from "lucide-react";

interface Article {
    id: number;
    title: string;
    slug: string;
    summary: string;
    content: string;
    imageUrl: string | null;
    publishedAt: string;
    createdAt: string;
}

const ArticleDetail = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [article, setArticle] = useState<Article | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setIsLoading(true);
                const response = await api.get<Article>(`/articles/${id}`);
                setArticle(response.data);
            } catch (error) {
                console.error("Error fetching article:", error);
                toast({
                    title: "Erro ao carregar artigo",
                    description: "Não foi possível carregar o artigo. Redirecionando...",
                    variant: "destructive",
                });
                setTimeout(() => navigate("/artigos"), 2000);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchArticle();
        }
    }, [id, navigate, toast]);

    return (
        <>
            <Helmet>
                <title>{article ? `${article.title} - Artigos` : "Carregando..."}</title>
                <meta
                    name="description"
                    content={article?.summary || "Leia este artigo sobre conscientização ambiental e prevenção de queimadas"}
                />
            </Helmet>

            <div className="min-h-screen bg-background flex flex-col">
                <Header />

                <main className="flex-1 pt-32 pb-24">
                    <div className="container mx-auto px-6">
                        <Button
                            variant="ghost"
                            onClick={() => navigate("/artigos")}
                            className="mb-8 text-cream-muted hover:text-primary"
                        >
                            <ArrowLeft className="mr-2 w-4 h-4" />
                            Voltar para artigos
                        </Button>

                        {isLoading ? (
                            <div className="max-w-4xl mx-auto">
                                <Skeleton className="w-full h-96 rounded-lg mb-8" />
                                <Skeleton className="h-12 w-3/4 mb-4" />
                                <Skeleton className="h-6 w-1/4 mb-8" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-full mb-2" />
                                <Skeleton className="h-4 w-2/3 mb-2" />
                            </div>
                        ) : article ? (
                            <article className="max-w-4xl mx-auto">
                                {article.imageUrl && (
                                    <div className="w-full h-96 rounded-lg overflow-hidden mb-8">
                                        <img
                                            src={article.imageUrl}
                                            alt={article.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                )}

                                <div className="flex items-center text-sm text-primary mb-4 font-medium tracking-wider">
                                    <Calendar className="w-4 h-4 mr-2" />
                                    Publicado em {format(new Date(article.publishedAt), "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}
                                </div>

                                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground tracking-wide mb-6">
                                    {article.title}
                                </h1>

                                {article.summary && (
                                    <p className="text-xl text-cream-muted mb-8 leading-relaxed border-l-4 border-primary pl-6 italic">
                                        {article.summary}
                                    </p>
                                )}

                                <div className="prose prose-lg prose-invert max-w-none">
                                    <div className="text-cream-muted leading-relaxed whitespace-pre-wrap">
                                        {article.content}
                                    </div>
                                </div>

                                <div className="mt-12 pt-8 border-t border-border">
                                    <Button
                                        variant="outline"
                                        onClick={() => navigate("/artigos")}
                                        className="text-primary border-primary hover:bg-primary hover:text-background"
                                    >
                                        <ArrowLeft className="mr-2 w-4 h-4" />
                                        Ver mais artigos
                                    </Button>
                                </div>
                            </article>
                        ) : (
                            <div className="text-center py-20">
                                <p className="text-cream-muted text-lg">Artigo não encontrado.</p>
                            </div>
                        )}
                    </div>
                </main>

                <Footer />
            </div>
        </>
    );
};

export default ArticleDetail;
