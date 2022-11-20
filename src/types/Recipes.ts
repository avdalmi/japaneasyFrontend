export interface Recipe {
    id: number,
    categoryId: number,
    name: string,
    description: string,
    rating: number,
    image: string,
    difficulty: string,
    portions: number,
}