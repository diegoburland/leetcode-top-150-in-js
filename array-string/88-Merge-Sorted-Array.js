
// Se te dan dos arreglos de enteros, nums1 y nums2, ordenados en orden no decreciente, y dos enteros, m y n, 
// que representan el número de elementos en nums1 y nums2, respectivamente.

// Debes fusionar nums1 y nums2 en un solo arreglo ordenado en orden no decreciente.

// El arreglo final ordenado no debe ser devuelto por la función, sino que debe almacenarse dentro del arreglo nums1.
// Para acomodar esto, nums1 tiene una longitud de m + n, donde los primeros m elementos denotan los elementos que deben 
// fusionarse, y los últimos n elementos están establecidos en 0 y deben ser ignorados. nums2 tiene una longitud de n.

const merge = function(nums1, m, nums2, n) {
    // first apunta al último elemento inicial de nums1.
    let first = m - 1;
    // second apunta al último elemento de nums2.
    let second = n - 1;

    // Empieza desde el final de nums1 y recorre hacia atrás.
    for(let i = m + n - 1; i >= 0; i--){
        // Si ya no hay elementos en nums2 para comparar, termina el bucle.
        if(second < 0){
            break;
        }

        // Compara elementos de nums1 y nums2 desde el final.
        if (nums1[first] > nums2[second]){
            // Si el elemento en nums1 es mayor, lo mueve hacia el final de nums1.
            nums1[i] = nums1[first];
            // Disminuye el índice de referencia en nums1.
            first--;
        } else {
            // Si el elemento en nums2 es mayor o igual, lo mueve hacia el final de nums1.
            nums1[i] = nums2[second];
            // Disminuye el índice de referencia en nums2.
            second--;
        }
    }

    // Devuelve nums1, que ahora contiene los elementos fusionados y ordenados.
    return nums1;
};