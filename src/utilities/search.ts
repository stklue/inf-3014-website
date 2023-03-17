import { furnitures, decors, kitchenware } from "./products"

export const getProduct = (id: number) => {
    let out = [];
    out = furnitures.filter(p => p.id === id)
    out = decors.filter(p => p.id === id)
    out = kitchenware.filter(p => p.id === id)
    return out[0];
}