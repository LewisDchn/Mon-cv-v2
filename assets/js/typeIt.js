new TypeIt('#subtitle', {
    speed: 50
  })
  .pause(3000)
  .type('Bienvenue sur mon CV Numérique')
  .pause(1300)
  .options({speed: 200})
  .delete(20)
  .options({speed: 50})
  .pause(500)
  .type('dans mon Portfolio.')
  .go();