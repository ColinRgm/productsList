/**
 *
 * @param { boolean } checked
 * @param { (v: boolean) => void } onChange
 * @param { string } label
 * @param { string } id
 *
 */

// Function pour la Checkbox -------------------------------------------------------------------------------------------
export function Checkbox({ checked, onChange, label, id }) {
    return <div className="form-check">
        <input
            type="checkbox"
            className="form-check-input"
            checked={ checked }
            onChange={ (e) => onChange(e.target.checked) }
        />
        <label
            htmlFor={ id }
            className="form-check-label">{ label }
        </label>
    </div>
}