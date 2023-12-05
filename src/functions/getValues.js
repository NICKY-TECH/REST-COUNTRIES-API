export function nativeFunction(n){
    return Object.entries(n).map(([key, value]) => {
        return { key, value };
      });
}

export function currencyFunction(c){
    Object.entries(c).map(([key, value]) => {
        return { key, value };
      });
}

export function languagesFunction (l){
    Object.entries(l).map(([key, value]) => {
        return { key, value };
      }); 
}