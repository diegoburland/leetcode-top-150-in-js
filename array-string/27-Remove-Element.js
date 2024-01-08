// Dada una matriz de enteros nums y un entero val, elimina todas las ocurrencias de val en nums en el lugar. 
// El orden de los elementos puede cambiar. Luego devuelve el número de elementos en nums que no son iguales a val.

// Considera que el número de elementos en nums que no son iguales a val sea k. 
// Para que tu solución sea aceptada, necesitas hacer lo siguiente:

// Cambia la matriz nums de tal manera que los primeros k elementos de nums contengan los elementos que no son iguales a val. 
// Los elementos restantes de nums no son importantes, así como el tamaño de nums.
// Devuelve k.


const removeElement = (nums, val) => {
    // k es el contador para los elementos que no son iguales a val.
    let k = 0;

    // Recorre cada elemento del arreglo nums.
    for( let i = 0; i < nums.length; i++){
        // Verifica si el elemento actual no es igual a val.
        if(nums[i] !== val){
            // Si el elemento es diferente de val, lo mueve al inicio del arreglo.
            nums[k] = nums[i];
            // Incrementa k, indicando un nuevo elemento que no es val.
            k++;
        }
    }

    // Devuelve la cantidad de elementos que no son iguales a val.
    return k;
} 