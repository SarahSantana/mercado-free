import { Product } from "../types";

const mockProducts: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: String(i + 1),
  name: `Produto ${i + 1}`,
  image: "123",
  description: `Descrição do produto ${i + 1}`,
}));

export const productService = {
  getAll: async (): Promise<Product[]> => {
    await new Promise((res) => setTimeout(res, 500));
    return mockProducts;
  },
  getById: async (id: string): Promise<Product | null> => {
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
