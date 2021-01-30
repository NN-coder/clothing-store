type ClothingSubcategory = 'jeans' | 'shorts' | 'hoodies' | 'T-Shirts';
type ShoesSubcategory = 'sneakers' | 'boots' | 'shoes' | 'socks';
type AccessoriesSubcategory = 'hats' | 'watches' | 'wallets' | 'sunglasses';

export type Subcategory = ClothingSubcategory | ShoesSubcategory | AccessoriesSubcategory;
export type Category = 'clothing' | 'shoes' | 'accessories';
export type Gender = 'men' | 'women';

interface Item {
  category: Category;
  subcategory: Subcategory;
  gender: Gender;
  title: string;
  price: number;
  img: string;
  color: string;
  id: string;
}

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

export type ProductsItem = ClothingItem | ShoesItem | AccessoriesItem;
export type Products = ProductsItem[];
