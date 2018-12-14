// on cherche le nombre de rats sourds, allant vers le joueur de flûte P,
// soit un rat ~0 placé après P dans la chaîne de caractères,
// ou un rat 0~ placé avant P dans la chaine de caractères

function ratsSourds(ratStr) {
  // RegExp pour renvoyer un tableau qui contient chaque rat et le joueur de flûte
  return ratStr.match(/~0|0~|P/g)
  // filter pour retourner les rats qui vérifient nos conditions
    .filter((rat, idx, thisArr)  => {
    // compare l'index du rat et du joueur de flute
      return  (rat === "~0" && idx > thisArr.indexOf("P")) 
          ||  (rat === "0~" && idx < thisArr.indexOf("P"))
      }).length; // le nombre de rats sourds
}

console.log(ratsSourds("~0 ~0~0 P")); // 0
console.log(ratsSourds("~0 0~~0 P ~0")); // 2
console.log(ratsSourds("P ~0 0~0~ 0~")); // 1
console.log(ratsSourds("0~0~P~0~0")); // 4