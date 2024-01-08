// Dada una matriz de enteros nums ordenada en orden no decreciente,
// elimina los duplicados en el lugar de tal manera que cada elemento único
// aparezca solo una vez. El orden relativo de los elementos debe mantenerse
// igual. Luego, devuelve la cantidad de elementos únicos en nums.

// Considera que el número de elementos únicos de nums sea k. Para que tu
// solución sea aceptada, necesitas hacer lo siguiente:

// Cambia la matriz nums de tal manera que los primeros k elementos de nums
// contengan los elementos únicos en el orden en que estaban presentes
// inicialmente en nums. Los elementos restantes de nums no son importantes,
// así como el tamaño de nums.

// Devuelve k.

const removeDuplicates = function(nums) {
    // k es el contador para los elementos únicos.
    let k = 1;

    // Recorre cada elemento del arreglo empezando desde el segundo elemento.
    for(let i = 1; i < nums.length; i++){
        // Compara el elemento actual con el último elemento único encontrado.
        if(nums[k - 1] < nums[i]){
            // Si el elemento actual es mayor, lo asigna a la posición k.
            nums[k] = nums[i];
            // Incrementa k, indicando un nuevo elemento único.
            k++;
        }
    }

    // Devuelve la cantidad de elementos únicos encontrados.
    return k;
};
