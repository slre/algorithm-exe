const binarySearch = ( arr, min, max, target  ) => {

    let m = Math.floor( ( min + max )/2 );

    if( arr[m] === target ){
        return m;
    }
    else if( arr[m] < target ){
        min = m+1;
        return binarySearch(  arr, min, max, target );
    }
    else {
        m = m-1;
        return binarySearch( arr, min, max, target );
    }
}


arr = [1,2,3,4,12,16,23,34,56,67,78,79,91,101];

binarySearch( arr, 0,arr.length-1,101 );