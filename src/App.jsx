import { Input } from "./components/forms/Input.jsx";
import { Checkbox } from "./components/forms/Checkbox.jsx";
import { ProductCategoryRow } from "./components/products/ProductCategoryRow.jsx";
import { ProductRow } from "./components/products/ProductRox.jsx";
import { useState } from "react";





// Tableau de produits -------------------------------------------------------------------------------------------------
const PRODUCTS = [
    { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
    { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
    { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
    { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
    { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]





// Fonction principale -------------------------------------------------------------------------------------------------
function App() {

    const [search, setSearch] = useState('');
    const [showStockOnly, setShowStockOnly] = useState(false);

    const visibleProducts = PRODUCTS.filter((product) => {

        // Cacher les produits hors stock
        if (showStockOnly && !product.stocked) {
            return false
        }

        // Recherche d'un produit
        if (search && !product.name.toLowerCase().startsWith(search.toLowerCase())) {
            return false
        }

        return true
    })

    return <div className="container my-3" style={ { width: '30%' } }>
        <SearchBar
            search={ search }
            onSearchChange={ setSearch }
            showStockedOnly={ showStockOnly }
            onStockedOnlyChange={ setShowStockOnly }
        />

        <ProductTable
            products={ visibleProducts }
        />
    </div>

}





// Bloc de recherche et de tri -----------------------------------------------------------------------------------------
function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChange }) {

    return <div>
        <div className="mb-3">

            { /* ---------- Barre de recherche ---------- */ }
            <Input
                value={ search }
                onChange={ onSearchChange }
                placeholder="Rechercher..."
            />

            { /* ---------- Checkbox ---------- */ }
            <Checkbox
                id="stocked"
                checked={ showStockedOnly }
                onChange={ onStockedOnlyChange }
                label="N'afficher que les produits en stock"
            />
        </div>
    </div>
}





// Fonction pour l'affichage de la liste par catégorie -----------------------------------------------------------------
function ProductTable({ products }) {

    const rows = []
    let lastCategory = null


    // Tri par catégorie
    for (let product of products) {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    key={ product.category }
                    name={ product.category }
                />
            )
        }

        lastCategory = product.category
        rows.push(
            <ProductRow
                product={ product }
                key={ product.name }
            />
        )
    }


    // Liste des produits
    return <table className="table">
        <thead>
        <tr>
            <th>Nom</th>
            <th>Prix</th>
        </tr>
        </thead>
        <tbody>
        { rows }
        </tbody>
    </table>
}

export default App
