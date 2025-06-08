import { IProduct } from "../types";

const mockProducts: IProduct[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  name: `Produto ${i + 1}`,
  image: "123",
  infos: [
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
    {
      title: `titulo ${i + 1}`,
      description: `description ${i + 1}`,
    },
  ],
  description: `Descrição do produto ${i + 1}`,
  technicalSpecification:
    "O sabor de sorvete de flocos, conhecido por sua combinação deliciosa de baunilha cremosa com pedaços crocantes de chocolate, tem uma história fascinante que remonta ao início do século XX. Diz-se que a ideia surgiu em uma pequena sorveteria na Itália, onde um mestre sorveteiro buscava criar uma nova experiência gustativa para seus clientes. Inspirado pela textura e sabor dos tradicionais doces italianos, ele decidiu misturar pedaços de chocolate em seu sorvete de baunilha.",
}));

export const productService = {
  getAll: async (): Promise<IProduct[]> => {
    await new Promise((res) => setTimeout(res, 500));
    return mockProducts;
  },
  getById: async (id: string): Promise<IProduct | null> => {
    try {
      await new Promise((res) => setTimeout(res, 500));
      const response = mockProducts.find((p) => p.id === id) ?? null;
      //const response: Response = await fetch(`/api/products/${id}`);
      //if (!response.ok) return null;

      if (!response) return null;
      //const data = await response.json();
      const data = response;
      return data;
    } catch (e) {
      console.error("Erro ao buscar produto", e);
      return null;
    }
  },
};
