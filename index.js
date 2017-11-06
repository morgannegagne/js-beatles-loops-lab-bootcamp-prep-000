function theBeatlesPlay(musicians, instruments){
  var sentences = []
  for (var i=0; i < musicians.length; i++){
    sentences.push(`${musicians[i]} plays the ${instruments[i]}`)
  }
  return sentences
}
