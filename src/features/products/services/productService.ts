import { texts } from "../texts";
import { IPokemon, IProduct, IProductList, IProductSummary } from "../types";

const BASE_URL = "https://pokeapi.co/api/v2/pokemon";

export const productService = {
  getAllProducts: async (limit = 12, offset = 0): Promise<IProductList> => {
    try {
      const response = await fetch(
        `${BASE_URL}?limit=${limit}&offset=${offset}`
      );

      if (!response.ok) throw new Error(texts.ptBR.productList.getAllError);

      const data = await response.json();

      const productList: IProductSummary[] = await Promise.all(
        data.results.map(async (pokemon: IPokemon) => {
          try {
            const response = await fetch(pokemon.url);

            if (!response.ok) {
              throw new Error(
                `${texts.ptBR.productList.getDetailError} ${pokemon.name}`
              );
            }

            const details = await response.json();
            return {
              id: String(details.id),
              name: pokemon.name,
              description: `${texts.ptBR.productDetail.infos[4].item} ${
                details.types[0]?.type.name ||
                texts.ptBR.productDetail.infos[4].description
              }`,
              image: details.sprites.front_default,
            };
          } catch (error) {
            console.error(error);
            return {
              id: "",
              name: pokemon.name,
              description: texts.ptBR.productList.detailError,
              image: "",
            };
          }
        })
      );

      return {
        products: productList,
        total: data.count,
      };
    } catch (error) {
      console.error(texts.ptBR.productList.productError, error);
      throw new Error(texts.ptBR.productList.productError);
    }
  },

  getProductById: async (id: string): Promise<IProduct | null> => {
    try {
      const response = await fetch(`${BASE_URL}/${id}/`);

      if (!response.ok) throw new Error(texts.ptBR.productList.productError);

      const data = await response.json();

      const product = {
        id: String(data.id),
        name: data.name,
        description: `${texts.ptBR.productDetail.infos[4].item} ${
          data.types[0]?.type.name ||
          texts.ptBR.productDetail.infos[4].description
        }`,
        image: data.sprites.front_default,
        technicalSpecification: texts.ptBR.productDetail.descriptionInfo,
        infos: [
          {
            title: texts.ptBR.productDetail.infos[0].item,
            description: `${data.height} ${texts.ptBR.productDetail.infos[0].description}`,
          },
          {
            title: texts.ptBR.productDetail.infos[1].item,
            description: `${data.weight} ${texts.ptBR.productDetail.infos[1].description}`,
          },
          {
            title: texts.ptBR.productDetail.infos[2].item,
            description: `${data.species.name}`,
          },
          {
            title: texts.ptBR.productDetail.infos[3].item,
            description: `${
              data?.past_abilities[0]?.generation?.name
                ? data.past_abilities[0].generation.name
                : texts.ptBR.productDetail.infos[3].description
            }`,
          },
        ],
      };

      data.types.map(
        (item: { slot: number; type: { name: string; url: string } }) => {
          product.infos.push({
            title: texts.ptBR.productDetail.infos[4].item,
            description: item.type.name,
          });
        }
      );

      return product;
    } catch (error) {
      console.error(texts.ptBR.productList.getDetailError, error);
      throw new Error(texts.ptBR.productList.getProductError);
    }
  },
};
