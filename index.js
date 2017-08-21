function getFirstSelector(selector){
  return document.querySelector(`${selector}`)
}
function nestedTarget(){
    return document.getElementById('nested').querySelector('div.target')

}
function deepestChild(){
  const child = document.getElementById('grand-node').getElementsByTagName('div')[3]
  return child

}
function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list')

  for (let i = 0; i < lis.length; i++ ) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML + n)
  }
}

deepestChild()
