/**
 *
 * @param { string } placeholder
 * @param { string } value
 * @param { (s: string) = void } onChange
 *
 */





// Fonction pour afficher uniquement les produits en stock -------------------------------------------------------------
export function Input({ placeholder, value, onChange }) {
    return <div>
        <input
            type="text"
            className="form-comtrol"
            value={ value }
            placeholder={ placeholder }
            onChange={ (e) => onChange(e.target.value) }
        />
    </div>
}