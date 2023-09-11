const mangas = [
  {
    id: 1,
    numeroTomo: 1,
    titulo: "Akira",
    categoria: "Ciencia Ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/s213XFd/akira-genero.png",
    stock: 7,
    detalle:
      "Jóvenes problemáticos abarrotan la estación de policía, no reciben ningún tipo de educación y pasan su tiempo en un submundo ilegal de drogas, carreras de motos y peleas.",
  },
  {
    id: 2,
    numeroTomo: 1,
    titulo: "Ao haru ride",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/87JBJF5/ao-haru-ride-genero.png",
    stock: 7,
    detalle:
      "Jóvenes problemáticos abarrotan la estación de policía, no reciben ningún tipo de educación y pasan su tiempo en un submundo ilegal de drogas, carreras de motos y peleas.",
  },
  {
    id: 3,
    numeroTomo: 1,
    titulo: "Atack on titans",
    categoria: "Ciencia ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/3sYYj2p/attack-on-titans-genero.png",
    stock: 7,
    detalle:
      "La trama gira en torno a Eren Jaeger quien después de perder a su madre a manos de los titanes, decide unirse al Ejército de las murallas.",
  },
  {
    id: 4,
    numeroTomo: 1,
    titulo: "Battle royale",
    categoria: "Ciencia ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/hRx1NQQ/battle-royale-genero.png",
    stock: 7,
    detalle:
      "Los jóvenes crecen en un estado totalitario y controlador que promueve la competitividad.",
  },
  {
    id: 5,
    numeroTomo: 1,
    titulo: "Berserk",
    categoria: "Ciencia ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/sH35Dtz/berserk-genero.png",
    stock: 7,
    detalle:
      "sigue la historia de Guts, un mercenario y espadachín con un oscuro destino.",
  },
  {
    id: 6,
    numeroTomo: 1,
    titulo: "Black clover",
    categoria: "Shonen",
    precio: 1500,
    imagen: "https://i.ibb.co/wJZwQB0/black-clover-genero.png",
    stock: 7,
    detalle:
      "Un niño que no tiene el poder de hacer magia lucha por obtener el título de Rey Mago, mientras cuatro antiguos Reyes Magos reaparecen para destruir el Reino del Trébol.",
  },
  {
    id: 7,
    numeroTomo: 1,
    titulo: "Bleach",
    categoria: "Acción",
    precio: 1500,
    imagen: "https://i.ibb.co/x2s91pm/bleach-genero.png",
    stock: 7,
    detalle:
      "se centra en Ichigo Kurosaki, un joven que puede ver a los espíritus.",
  },
  {
    id: 8,
    numeroTomo: 1,
    titulo: "Chis Sweet home",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/wScWvCz/chis-sweet-genero.png",
    stock: 7,
    detalle:
      "Una gatita gris y blanco con rayas negras se aleja un día de su madre y sus hermanos mientras disfruta de una caminata afuera con su familia. ",
  },
  {
    id: 9,
    numeroTomo: 1,
    titulo: "Claymore",
    categoria: "Acción",
    precio: 1500,
    imagen: "https://i.ibb.co/ScmYB2w/claymore-genero.png",
    stock: 7,
    detalle:
      "transcurre en un mundo ficticio cohabitado por la especie humana y por una especie de demonios conocida como Yōma, los cuales son depredadores naturales de los seres humanos",
  },

  {
    id: 10,
    numeroTomo: 1,
    titulo: "Crayon",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/7nsp84Z/crayon-genero.png",
    stock: 7,
    detalle:
      "centrada en la vida de Shin-chan, un niño de cinco años particularmente travieso, ingenioso e inteligente.",
  },
  {
    id: 11,
    numeroTomo: 1,
    titulo: "Death note",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/cwKpDfd/death-note-genero.png",
    stock: 7,
    detalle:
      "Cuando un estudiante japonés se adueña de un cuaderno místico, descubre que tiene la facultad de matar a cualquiera cuyo nombre escriba en el cuaderno.",
  },
  {
    id: 12,
    numeroTomo: 1,
    titulo: "Demon slayer",
    categoria: "Acción",
    precio: 1500,
    imagen: "https://i.ibb.co/Y3WyX3t/demon-slayer-genero.png",
    stock: 7,
    detalle:
      "presenta a un chico que inesperadamente se ve obligado a aprender a matar demonios para salvar lo que queda de su familia. ",
  },
  {
    id: 13,
    numeroTomo: 1,
    titulo: "Doraemon",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/d58h0dd/doraemon-genero.png",
    stock: 7,
    detalle:
      "Doraemon es un enigmático gato-robot que viene del futuro hasta el siglo XX. Una vez allí, comenzará a vivir con la familia Nobi.",
  },
  {
    id: 14,
    numeroTomo: 1,
    titulo: "Doubt",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/GkcKWGs/doubt-genero.png",
    stock: 7,
    detalle:
      "El lobo, un jugador elegido al azar en secreto, debe usar su astucia para sembrar la desconfianza entre los jugadores y, así, derrotándolos uno a uno, alzarse con la victoria.",
  },
  {
    id: 15,
    numeroTomo: 1,
    titulo: "Dr stone",
    categoria: "Ciencia ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/qJ9ShCf/dr-stone-genero.png",
    stock: 7,
    detalle:
      "adolescentes que se ven atrapados en un mundo post-apocalíptico en el que la raza humana se ha convertido en piedra y ellos buscan la manera de revertir la petrificación en la mayor cantidad de personas posibles.",
  },
  {
    id: 16,
    numeroTomo: 1,
    titulo: "Dragon ball Z",
    categoria: "Acción",
    precio: 1500,
    imagen: "https://i.ibb.co/Q96x4LZ/dragon-ball-genero.png",
    stock: 7,
    detalle:
      "se centra en un niño alienígena llamado Goku que es enviado a la Tierra. ",
  },
  {
    id: 17,
    numeroTomo: 1,
    titulo: "Drifting classroom",
    categoria: "Ciencia ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/xqGxtDL/drifting-classroom-genero.png",
    stock: 7,
    detalle:
      "El manga sigue la historia de Sho Takamatsu, un niño que fue transportado a un futuro inhóspito junto con toda su escuela primaria. ",
  },
  {
    id: 18,
    numeroTomo: 1,
    titulo: "Fruits basket",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/Jns26fj/fruits-basket-genero.png",
    stock: 7,
    detalle:
      "La familia de Yuki guarda un extraño secreto: si alguien del sexo opuesto abraza a uno de ellos, este se transformará en un animal del zodíaco chino.",
  },
  {
    id: 19,
    numeroTomo: 1,
    titulo: "Full metal alchemist",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/bLBKm62/fullmetal-genero.png",
    stock: 7,
    detalle:
      "Los hermanos Edward y Alphonse se valen de la alquimia para revivir a su mamá, pero desatan una devastadora reacción química que mutila sus cuerpos",
  },
  {
    id: 20,
    numeroTomo: 1,
    titulo: "Hamtaro",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/b2ryJhD/hamtaro-genero.png",
    stock: 7,
    detalle:
      "El protagonista de este anime es un pequeño hamster llamado Hamtaro que vive increíbles aventuras con otros de su especie, todo esto mientras su dueña Laura Haruna no lo vigila. ",
  },
  {
    id: 21,
    numeroTomo: 1,
    titulo: "Hello kitty",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/HX0SSD9/hello-kitty-genero.png",
    stock: 7,
    detalle:
      " Kitty es una gatita que vive con su familia, compuesta por su madre, su padre y su hermana gemela Mimmy",
  },
  {
    id: 22,
    numeroTomo: 1,
    titulo: "Remina",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/RY61W86/hellstar-genero.png",
    stock: 7,
    detalle:
      " Remina Oguro, la hija del científico que lo descubrió, se encuentra a sí misma en el centro de la fama y la adoración después de que su padre elige nombrar el planeta con su nombre.",
  },
  {
    id: 23,
    numeroTomo: 1,
    titulo: "Hideout",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/ngLtWWH/hideout-genero.png",
    stock: 7,
    detalle:
      "La decisión de Seiichi es clara: esta noche, matará a su mujer. Lo que en principio parecía un viaje a una isla paradisiáca en busca de inspiración y de reencontrarse como pareja, pronto se convertirá en una verdadera pesadilla.",
  },
  {
    id: 24,
    numeroTomo: 1,
    titulo: "Homunculus",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/c1t8LZM/homunculus-genero.png",
    stock: 7,
    detalle:
      "Lo verdadero y lo irreal se confunden cuando un vagabundo amnésico se despierta de un tratamiento médico con la habilidad de ver los traumas más profundos de la gente. ",
  },
  {
    id: 25,
    numeroTomo: 1,
    titulo: "Hunter X hunter",
    categoria: "Shonen",
    precio: 1500,
    imagen: "https://i.ibb.co/YdVn2gm/hxh-genero.png",
    stock: 7,
    detalle:
      "relatan las aventuras de Gon, mientras que busca convertirse en cazador, uno que sea hábil para encontrar artículos raros e individuos huidizos.",
  },
  {
    id: 26,
    numeroTomo: 1,
    titulo: "Inuyasha",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/qjxW72d/inuyasha-genero.png",
    stock: 7,
    detalle:
      " Kagome Higurashi, una estudiante de 15 años en Tokyo, es transportada al período Sengoku de Japón, donde conoce al mitad perro-demonio.",
  },
  {
    id: 27,
    numeroTomo: 1,
    titulo: "Jojos",
    categoria: "Shonen",
    precio: 1500,
    imagen: "https://i.ibb.co/Ns2J6Xn/jojos-genero.png",
    stock: 7,
    detalle:
      "Varias generaciones de la familia Joestar (todos con el mismo sobrenombre) se enfrentan a villanos sobrenaturales en diferentes épocas. ",
  },
  {
    id: 28,
    numeroTomo: 1,
    titulo: "Kaisama kiss",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/dPvHzSp/kaisama-kiss-genero.png",
    stock: 7,
    detalle:
      "Kamisama Hajimemashita cuenta la historia de Nanami, una chica normal de preparatoria con poca suerte hasta que los labios de un extraño la convierten en la nueva diosa de la tierra del templo Mikage, poniendo su vida patas arriba.",
  },
  {
    id: 29,
    numeroTomo: 1,
    titulo: "Komocha",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/S0DTscd/komocha-genero.png",
    stock: 7,
    detalle:
      "La historia se centra en Sana Kurata, una niña de 11 años perfectamente normal, a excepción de ser hiperactiva y demasiado inquieta",
  },
  {
    id: 30,
    numeroTomo: 1,
    titulo: "Love so life",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/m5F8XLL/love-so-life-genero.png",
    stock: 7,
    detalle:
      " una adolescente que vive en un orfanato y a la que le encantan los niños y que termina trabajando como niñera de dos hermanos gemelos al cuidado de su tío.",
  },
  {
    id: 31,
    numeroTomo: 1,
    titulo: "Made in abyss",
    categoria: "Ciencia ficción",
    precio: 1500,
    imagen: "https://i.ibb.co/LtbFnF5/made-in-abyss-genero.png",
    stock: 7,
    detalle:
      "La serie tiene como protagonista a Riko, una joven huérfana que vive en una ciudad edificada justo encima del Abismo.",
  },
  {
    id: 32,
    numeroTomo: 1,
    titulo: "Maid sama",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/6wsJnNK/maid-sama-genero.png",
    stock: 7,
    detalle:
      " Misaki Ayuzawa toma en sus manos el poder, para hacer sentir seguras a las chicas, convirtiéndose en la presidenta del consejo estudiantil.",
  },
  {
    id: 33,
    numeroTomo: 1,
    titulo: "My Hero academy",
    categoria: "Shonen",
    precio: 1500,
    imagen: "https://i.ibb.co/3f7hWyV/my-h-academy-genero.png",
    stock: 7,
    detalle:
      " acerca de un grupo de estudiantes que se preparan para ser superhéroes.",
  },
  {
    id: 34,
    numeroTomo: 1,
    titulo: "Nana",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/b3mF5xP/nana-genero.png",
    stock: 7,
    detalle:
      "Nana Ōsaki es una cantante punk cuyo único deseo es poder debutar con su grupo y superar a la banda Trapnest, en la cual su exnovio, Ren Honjō, se desempeña como guitarrista.",
  },
  {
    id: 35,
    numeroTomo: 1,
    titulo: "Naruto",
    categoria: "Shonen",
    precio: 1500,
    imagen: "https://i.ibb.co/B2K7shy/naruto-genero.png",
    stock: 7,
    detalle:
      " La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea",
  },
  {
    id: 36,
    numeroTomo: 1,
    titulo: "One piece",
    categoria: "Shonen",
    precio: 1500,
    imagen: "https://i.ibb.co/N3KVhDw/one-piece-genero.png",
    stock: 7,
    detalle:
      "La serie se sitúa en la Gran Era de la Piratería, un mundo poblado por piratas, monstruos y superhéroes.",
  },
  {
    id: 37,
    numeroTomo: 1,
    titulo: "Parasyte",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/WgJC1Jm/parasyte-genero.png",
    stock: 7,
    detalle:
      "Un adolescente combate un violento ataque de parásitos extraterrestres con la ayuda de una dócil criatura que se ha apoderado de su mano derecha. ",
  },
  {
    id: 38,
    numeroTomo: 1,
    titulo: "Pokemon",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/6w0s0hy/pokemon-genero.png",
    stock: 7,
    detalle:
      "Ash desea convertirse en un Maestro Pokémon y Brock en el mejor criador y que en compañía de sus amigos viajan alrededor del mundo ficticio de Pokémon.",
  },
  {
    id: 39,
    numeroTomo: 1,
    titulo: "Promised neverland",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/nfWyph0/promised-neverland-genero.png",
    stock: 7,
    detalle:
      "La obra narra la historia de unos niños huérfanos, liderados por una joven de once años llamada Emma, que tratan de escapar del orfanato en el que vivían engañados y el cual esconde un oscuro secreto.",
  },
  {
    id: 40,
    numeroTomo: 1,
    titulo: "Sailor moon",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/mS7Rcc1/sailor-genero.png",
    stock: 7,
    detalle:
      "La historia se centra en las aventuras de una adolescente llamada Usagi Tsukino, quien se transforma en una poderosa guerrera conocida como Sailor Moon y lucha contra aquellos que buscan destruir el Sistema Solar.",
  },
  {
    id: 41,
    numeroTomo: 1,
    titulo: "Seven deadly",
    categoria: "Acción",
    precio: 1500,
    imagen: "https://i.ibb.co/sbK982M/seven-deadly-genero.png",
    stock: 7,
    detalle:
      " escuadrón de caballeros conocidos como los siete pecados capitales (que actúan como protectores de Britannia), para defenderla de la opresión, y al mismo tiempo buscan la redención por pecados que les confirieron sus títulos.",
  },
  {
    id: 42,
    numeroTomo: 1,
    titulo: "Shiki",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/n3Fmpsp/shiki-genero.png",
    stock: 7,
    detalle:
      "Shiki es un anime de misterio y terror (con vampiros incluidos) que se sitúa en una pequeña aldea alejada de la mano de Dios.",
  },
  {
    id: 43,
    numeroTomo: 1,
    titulo: "Shugo chara",
    categoria: "Fantasia",
    precio: 1500,
    imagen: "https://i.ibb.co/pwKp1pm/shugo-chara-genero.png",
    stock: 7,
    detalle:
      "Hinamori Amu, quien junto con los Guardianes de la Academia Seiyo trata de encontrar una poderosa y vieja reliquia llamada Embrión.",
  },
  {
    id: 44,
    numeroTomo: 1,
    titulo: "Skip beat",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/8dL9jtv/skip-beat.png",
    stock: 7,
    detalle:
      "Kyoko Mogami, una jovencita de 16 años que se escapa de su casa junto a su mejor amigo Shotaro Fuwa, con el propósito que éste consiga alcanzar su mayor sueño",
  },
  {
    id: 45,
    numeroTomo: 1,
    titulo: "The wallflowers",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/gwqRfzx/the-wallflowers-genero.png",
    stock: 7,
    detalle:
      "Sunako Nakahara, una chica que tiene un severo problema de autoestima debido a que cuando iba en secundaria, se le declaró al chico que le gustaba, pero este le respondió que a él no le gustaban las chicas feas.",
  },
  {
    id: 46,
    numeroTomo: 1,
    titulo: "Uzumaki",
    categoria: "Terror",
    precio: 1500,
    imagen: "https://i.ibb.co/wBxR3hW/uzumaki-gnero.png",
    stock: 7,
    detalle:
      " gira en torno a una obsesión malsana y mortal con las espirales.",
  },
  {
    id: 47,
    numeroTomo: 1,
    titulo: "Vampire knight",
    categoria: "Acción",
    precio: 1500,
    imagen: "https://i.ibb.co/S5MXKtP/vampire-knight-genero.png",
    stock: 7,
    detalle:
      "Es un Vampiro sangre pura, perdió a sus padres a los 7 años de edad aunque se cree que fue un suicidio, de ahí surge la teoría de un homicidio.",
  },
  {
    id: 48,
    numeroTomo: 1,
    titulo: "Yotsuba",
    categoria: "Comedia",
    precio: 1500,
    imagen: "https://i.ibb.co/2ZTDkLG/yotsuba-genero.png",
    stock: 7,
    detalle:
      "las aventuras y travesuras de Yotsuba Koiwai, una niña adoptada de cinco años de edad, que es enérgica, alegre, curiosa, rara y peculiar.",
  },
];

export const mockFetch = (idManga) =>
  new Promise((res, rej) => {
    // const condicion = true;

    setTimeout(() => {
      res(idManga ? mangas.find((manga) => manga.id === idManga) : mangas);
    }, 1000);
  });
