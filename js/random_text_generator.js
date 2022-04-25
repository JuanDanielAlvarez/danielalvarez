document.addEventListener("DOMContentLoaded", function() {
  const words = ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam blandit diam id metus tempus, ut mattis ex laoreet. Integer sagittis condimentum sapien, et lacinia augue accumsan eget. Donec scelerisque tellus lorem. Aliquam erat volutpat. Mauris sed mi id odio imperdiet pretium id ac justo. Phasellus sed hendrerit enim. Curabitur viverra, justo at vestibulum hendrerit, \nleo libero tincidunt lectus, nec hendrerit ligula neque eget felis. \nMauris id erat vitae elit cursus finibus. Etiam sed dui ex. Suspendisse vulputate lacus arcu, sed lacinia mi bibendum et. Sed sagittis enim sem, nec pharetra risus volutpat ac.",
  "Aenean elementum convallis neque quis venenatis. Maecenas eros odio, dignissim at molestie sed, vulputate a dolor. Ut tristique massa eget ligula venenatis, ornare rhoncus nulla sodales. Ut metus ex, placerat ac nunc sed, volutpat ullamcorper est. Donec dignissim nibh ac cursus ultricies. Mauris nulla libero, tristique sed ante sit amet, varius dignissim justo. \nDonec nibh augue, facilisis vel dignissim et, accumsan a tellus. Sed elit nisl, convallis a dui eget, porta congue leo. Mauris et feugiat libero, ac dignissim diam. \n\n\n\nAenean pellentesque purus sit amet vehicula vulputate. Duis sed lorem eget erat fringilla scelerisque.",
  "Etiam sed nulla ac velit lobortis lobortis id nec arcu. Cras euismod sit amet lectus eget convallis. Morbi non justo eu nibh consectetur sagittis vitae a diam. In lobortis eget lorem eget ullamcorper. Etiam at dui risus. Aliquam a orci molestie, tristique est sollicitudin, tincidunt ligula. \nSed ullamcorper ante nisl, imperdiet lobortis dui aliquet quis. Nullam sagittis urna nisl, ac tempus lacus mattis sit amet. In hac habitasse platea dictumst. Phasellus viverra sapien quis orci dictum sagittis. Phasellus vel tincidunt neque.",
  "Nullam facilisis diam eget sapien laoreet lacinia id vel neque. Nam quis enim fringilla, pretium lectus eget, fringilla dui.\n Ut a velit congue, viverra magna eget, ullamcorper ante. Sed porttitor ultrices risus, viverra iaculis ex fringilla id. Aenean tincidunt quam erat, eget ornare diam aliquet non. Aliquam tempor ornare metus, pharetra porttitor lorem vulputate venenatis. Vestibulum dapibus fermentum viverra. Nullam ac massa ultrices, fermentum magna sed, pellentesque enim. Donec nisl lacus, aliquet a pulvinar at, tempor at urna. Aenean auctor, neque eu cursus tincidunt, felis dolor blandit elit, sit amet bibendum arcu est ut est. Morbi hendrerit diam in sem congue mollis. Proin id dolor tellus. Vestibulum dolor ante, imperdiet vel porta sit amet, elementum eu nunc. Sed non felis quis lacus gravida pulvinar. \nNullam aliquet sed ex et tincidunt. Duis gravida, erat in ultricies cursus, orci urna tempus turpis, ut congue lacus urna vehicula ante.",
  "Nullam sit amet ex in leo aliquam condimentum a sed purus. Nam arcu erat, ultricies eu ultrices sollicitudin, lobortis id neque. Curabitur placerat varius justo ac pretium. Maecenas eu volutpat quam, et cursus magna. Cras congue faucibus tellus, non placerat nulla. Duis pharetra neque rutrum eleifend pharetra. Quisque id felis quis enim aliquam fringilla bibendum id urna. Nulla facilisi. Donec pellentesque sit amet eros a consectetur. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin vel sollicitudin eros.",
  "Nulla nec suscipit felis, sed tempor urna. Ut ut posuere eros. Phasellus ac nisl neque. Etiam finibus sapien arcu. Nulla faucibus non eros a mollis.\n Donec condimentum mauris sit amet ex maximus commodo non et velit. Sed pellentesque ex a turpis laoreet sollicitudin. Nam aliquet mi augue, id vehicula lorem tempus at. Nam scelerisque purus sit amet augue venenatis, viverra consequat turpis dignissim. Etiam dapibus enim fringilla ultrices molestie. Aenean pellentesque nisl vitae consectetur faucibus. Aliquam posuere dui et lacinia interdum. Aliquam ut velit mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
  "Praesent et sagittis sapien. Etiam ipsum lacus, aliquam eu feugiat sit amet, ultrices vitae lectus. Praesent a luctus sem, eu aliquet neque. Fusce ac purus dui. \n\nMauris eros libero, luctus et nulla vitae, fermentum pellentesque lacus. Aenean imperdiet fermentum enim, quis tempor est tincidunt eu.\n Etiam congue, tellus id pharetra vehicula, nulla tortor pharetra magna, vitae blandit lectus ante non ligula. Maecenas convallis eros libero, non ultricies risus euismod\n eget. Morbi pulvinar at ipsum a semper. Proin quis efficitur ante, ut mattis ante. Curabitur eu nisl ut ante mollis ultricies nec vitae purus. Nam hendrerit vitae diam porttitor euismod. Vestibulum faucibus laoreet justo non tincidunt. Suspendisse aliquet malesuada nisi. Mauris porttitor erat ipsum, dignissim pulvinar nisi elementum id. Duis ullamcorper ex vel nulla accumsan eleifend.",
  "Nullam condimentum eros risus, eget luctus felis bibendum vel. Morbi viverra nulla quam, non ultrices massa ornare vestibulum. Proin interdum nisl id porttitor elementum. Vestibulum a ante ultricies, mollis mauris at, cursus lectus. Nunc laoreet tellus id urna rutrum maximus. Sed tortor sem, volutpat eget ullamcorper sit amet, pulvinar vitae sem. Donec eget erat convallis, scelerisque nunc quis, placerat justo. Sed vel varius mi. Morbi nec blandit est, eget tempor lectus. \nNulla ut tortor mi. Maecenas in odio ac erat vestibulum posuere ac vitae sapien. Sed aliquet tortor at sapien volutpat, id luctus augue pharetra. Etiam interdum porta lobortis. Phasellus odio mi, efficitur at elementum vitae, ullamcorper ultricies augue. Ut sed eros non elit molestie elementum id sit amet leo.",
  "Mauris tristique ante quis velit tristique, vitae euismod libero fringilla. \n\nFusce tristique, urna non rhoncus semper, dui risus luctus libero, non lobortis ex lorem vel libero. Pellentesque porta malesuada scelerisque. Nulla blandit pharetra lectus, sit amet blandit nulla dictum sit amet. Nullam at felis pharetra, egestas eros in, efficitur neque. Nam pharetra pellentesque iaculis. Phasellus quis arcu nec justo hendrerit feugiat et consectetur dui. Phasellus interdum felis id tincidunt commodo. Vivamus tellus velit, blandit id diam ultricies, lacinia blandit felis. Ut vestibulum turpis massa, a aliquet lectus aliquet eget. Duis suscipit hendrerit erat, in molestie felis accumsan eget. Nunc fermentum sit amet quam sed fermentum. Cras rhoncus vestibulum orci, sed posuere nunc. Nullam quis tellus a dui fringilla viverra non vel nisl."]


  let randomString = ""

  const createRandomString = () => {
    randomString = ""
    for(var i = 0; i<3; i++){
      randomString += words[Math.floor(Math.random() * words.length)] + " "
    }
    elements = document.getElementsByClassName("random-text")
    Array.prototype.forEach.call(elements, function(e){e.innerText = randomString;})
  }

  var intervalID = setInterval(createRandomString, [100]);

});

