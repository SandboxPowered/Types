type RecipeEvent = (manager: RecipeManager) => void;

type RemoveFilter = {
    output?: string
    domain?: string
    id?: string
    type?: string
}

type Recipe = {
    type: string
    group?: string
    result: any
    [key: string]: any
}

interface RecipeManager {
    remove(filter: RemoveFilter): void
    add(recipe: Recipe): void
}