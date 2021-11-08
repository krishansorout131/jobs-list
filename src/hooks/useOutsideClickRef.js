import { useEffect, useRef } from "react";
function useOutsideClickRef(callback, when) {
const savedCallback = useRef(callback);
const ref = useRef();
useEffect(() => {
savedCallback.current = callback;
});
useEffect(() => {

if (when) {
function handler(event) {
if (ref.current && !ref.current.contains(event.target)) {
// if node doesn't contain event target
savedCallback.current();
}
}
document.addEventListener("click", handler);
return () => {
document.removeEventListener("click", handler);
};
}
}, [when]);
return ref;
}
export default useOutsideClickRef;