/**
 *
 * Ligne de tableau avec le nom de la catégorie
 *
 * @param { string } name
 *
 */
export function ProductCategoryRow({ name }) {
    return <tr>
        <td
            colSpan={ 2 }>
            <strong>{ name }</strong>
        </td>
    </tr>
}