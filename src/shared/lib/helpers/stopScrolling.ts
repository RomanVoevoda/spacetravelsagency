export function stopScrolling() {
  document.body.style.overflow === "hidden"
  ?
  document.body.style.overflow = "scroll"
  :
  document.body.style.overflow = "hidden"
}