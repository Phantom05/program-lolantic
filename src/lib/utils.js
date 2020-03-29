



// const selectorEnhancer = (selector, equalityFn) => {
//   let latestResult;
//   return state => {
//     const result = selector(state);
//     if (equalityFn(result, latestResult)) {
//       return latestResult;
//     }
//     return (latestlResult = result);
//   }
// }



// const useSelector = (selector, equalityFn) => {
//   const enhancedSelector = useMemo(
//     () => equalityFn
//       ? selectorEnhancer(selector, equalityFn)
//       : selector,
//     [selector, equalityFn]
//   );
//   return useStrictEqualsSelector(enhancedSelector);
// }