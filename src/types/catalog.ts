interface Item {
  gender: 'male' | 'female';
  title: string;
  price: number;
  img: string;
  id: string;
}

type ClothingSubcategory = 'jeans' | 'shorts' | 'hoodies' | 'T-Shirts';
type ShoesSubcategory = 'sneakers' | 'boots' | 'shoes' | 'socks';
type AccessoriesSubcategory = 'hats' | 'watches' | 'wallets' | 'sunglasses';

interface ClothingItem extends Item {
  category: 'clothing';
  subcategory: ClothingSubcategory;
}
interface ShoesItem extends Item {
  category: 'shoes';
  subcategory: ShoesSubcategory;
}
interface AccessoriesItem extends Item {
  category: 'accessories';
  subcategory: AccessoriesSubcategory;
}

export type CatalogItem = ClothingItem | ShoesItem | AccessoriesItem;
export type ProductCatalog = CatalogItem[];

type Loading = { status: 'loading'; value: null };
type Failure = { status: 'failure'; value: Error };
type Success = { status: 'success'; value: ProductCatalog };

export type CatalogState = Loading | Failure | Success;
