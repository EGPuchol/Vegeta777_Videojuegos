const mongoose = require("mongoose");

const Videojuego = require("../api/models/videojuegos.models");

const DB_URL = process.env.DB_URL;

const arrayVideojuegos = [
    {
      "imagen": "https://zelda.nintendo.com/breath-of-the-wild/assets/media/wallpapers/mobile-1.jpg",
      "nombre": "The Legend of Zelda: Breath of the Wild",
      "categoria": "Aventura",
      "votos": 1523
    },
    {
      "imagen": "https://i.pinimg.com/736x/25/68/01/256801b2f79a64c4fb33bdd82151b52d.jpg",
      "nombre": "Red Dead Redemption 2",
      "categoria": "Acción-Aventura",
      "votos": 1897
    },
    {
      "imagen": "https://i.pinimg.com/736x/5d/8a/41/5d8a41501af6aab5d2e754de44f58834.jpg",
      "nombre": "The Witcher 3: Wild Hunt",
      "categoria": "RPG",
      "votos": 2134
    },
    {
      "imagen": "https://static.posters.cz/image/750/posters/super-mario-odyssey-collage-i50045.jpg",
      "nombre": "Super Mario Odyssey",
      "categoria": "Plataforma",
      "votos": 1765
    },
    {
      "imagen": "https://cdn2.steamgriddb.com/grid/d582f69751cae025cdf6c66c487ea294.png",
      "nombre": "Dark Souls III",
      "categoria": "RPG",
      "votos": 1456
    },
    {
      "imagen": "https://m.media-amazon.com/images/I/51MFu2e82VL._AC_UF894,1000_QL80_.jpg",
      "nombre": "Grand Theft Auto V",
      "categoria": "Acción-Aventura",
      "votos": 2345
    },
    {
      "imagen": "https://static.posters.cz/image/750/posters/uncharted-4-a-thief-s-end-i28402.jpg",
      "nombre": "Uncharted 4: A Thief's End",
      "categoria": "Acción-Aventura",
      "votos": 1987
    },
    {
      "imagen": "https://ramenparados.com/wp-content/uploads/2020/12/persona-5-strikers-vertical.jpg",
      "nombre": "Persona 5",
      "categoria": "RPG",
      "votos": 1768
    },
    {
      "imagen": "https://m.media-amazon.com/images/I/81F6sDfTglL._AC_UF1000,1000_QL80_.jpg",
      "nombre": "Overwatch",
      "categoria": "FPS",
      "votos": 2145
    },
    {
      "imagen": "https://worldgames.com.co/wp-content/uploads/2023/07/1b9f772d10ae2cfce18fab1b05705810.png",
      "nombre": "Minecraft",
      "categoria": "Sandbox",
      "votos": 1956
    },
    {
      "imagen": "https://www.planetadelibros.com/usuaris/libros/fotos/331/original/portada_horizon-zero-dawn-n-0103__202106291323.jpg",
      "nombre": "Horizon Zero Dawn",
      "categoria": "Acción-Aventura",
      "votos": 1678
    },
    {
      "imagen": "https://cdn11.bigcommerce.com/s-hfy8688lak/images/stencil/1280x1280/products/898/2061/c4e7fd24d9f76119fc3b807d9520c43c__62821.1670600294.jpg?c=1",
      "nombre": "Final Fantasy XV",
      "categoria": "RPG",
      "votos": 1987
    },
    {
      "imagen": "https://i.pinimg.com/originals/8a/fa/e8/8afae807dd7ab615840488229bf81cf5.jpg",
      "nombre": "Fortnite",
      "categoria": "Battle Royale",
      "votos": 2567
    },
    {
      "imagen": "https://m.media-amazon.com/images/M/MV5BYzYyYjdmMTUtNGEwMi00YjQ3LThlZmYtZjUyNDkwYzBjOGE1XkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_.jpg",
      "nombre": "Bloodborne",
      "categoria": "RPG",
      "votos": 1765
    },
    {
      "imagen": "https://uvejuegos.com/img/caratulas/67277/warzone.jpg",
      "nombre": "Call of Duty: Warzone",
      "categoria": "FPS",
      "votos": 2345
    },
    {
      "imagen": "https://i.ebayimg.com/images/g/o50AAOSwRQxj21-T/s-l1600.jpg",
      "nombre": "The Last of Us Part II",
      "categoria": "Acción-Aventura",
      "votos": 1987
    },
    {
      "imagen": "https://esports.as.com/2021/07/09/fifa/FIFA_1481261889_713645_1024x1280.png",
      "nombre": "FIFA 22",
      "categoria": "Deportes",
      "votos": 2134
    },
    {
      "imagen": "https://i.3djuegos.com/juegos/15916/assassin__039_s_creed_odyssey/fotos/ficha/assassin__039_s_creed_odyssey-4576854.jpg",
      "nombre": "Assassin's Creed Odyssey",
      "categoria": "Acción-Aventura",
      "votos": 1876
    },
    {
      "imagen": "https://media.graphassets.com/resize=fit:clip,height:1920,width:1080/output=format:webp/jlUrpqJsQRKZSEWBc4jC",
      "nombre": "Rocket League",
      "categoria": "Deportes",
      "votos": 1654
    },
    {
      "imagen": "https://static.displate.com/270x380/displate/2023-06-12/6e217abc7f5bb5d0dc56e68752193a11_5c51574f5f2f216f9ef25a0d08fa6400.jpg",
      "nombre": "Counter-Strike: Global Offensive",
      "categoria": "FPS",
      "votos": 2345
    },
    {
      "imagen": "https://i.pinimg.com/474x/2e/b8/f2/2eb8f2e12a58c48cc5074d4526cf589a.jpg",
      "nombre": "League of Legends",
      "categoria": "MOBA",
      "votos": 2876
    },
    {
      "imagen": "https://i.etsystatic.com/11277520/r/il/bd236d/1676005621/il_570xN.1676005621_gt1d.jpg",
      "nombre": "Super Smash Bros. Ultimate",
      "categoria": "Lucha",
      "votos": 1765
    },
    {
      "imagen": "https://i.pinimg.com/originals/55/b6/b6/55b6b674e593eaff4ad4ec6a7ffaf638.jpg",
      "nombre": "Among Us",
      "categoria": "Party",
      "votos": 2456
    },
    {
      "imagen": "https://i.3djuegos.com/juegos/15953/doom_eternal/fotos/ficha/doom_eternal-5197092.jpg",
      "nombre": "Doom Eternal",
      "categoria": "FPS",
      "votos": 1987
    },
    {
      "imagen": "https://assetsio.gnwcdn.com/co39vc.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "nombre": "Hades",
      "categoria": "RPG",
      "votos": 1987
    },
    {
      "imagen": "https://areajugones.sport.es/wp-content/uploads/2019/08/538006-apex-legends-xbox-one-front-cover.jpg",
      "nombre": "Apex Legends",
      "categoria": "Battle Royale",
      "votos": 2145
    },
    {
      "imagen": "https://media.vandal.net/m/75962/genshin-impact-20209417573364_1.jpg",
      "nombre": "Genshin Impact",
      "categoria": "RPG",
      "votos": 2345
    },
    {
      "imagen": "https://uvejuegos.com/img/caratulas/46219/Project-Zomboid-B.jpg",
      "nombre": "Project Zomboid",
      "categoria": "Party",
      "votos": 2456
    },
    {
      "imagen": "https://media.vandal.net/m/78531/valorant-202052910331074_1.jpg",
      "nombre": "Valorant",
      "categoria": "FPS",
      "votos": 1987
    },
    {
      "imagen": "https://media.vandal.net/m/65557/animal-crossing-new-horizons-202011012375667_1.jpg",
      "nombre": "Animal Crossing: New Horizons",
      "categoria": "Simulación",
      "votos": 1987
    },
    {
      "imagen": "https://m.media-amazon.com/images/I/81bJYiDsCSS._AC_UF1000,1000_QL80_.jpg",
      "nombre": "Pokémon Sword and Shield",
      "categoria": "RPG",
      "votos": 1987
    },
    {
      "imagen": "https://cdn.cdkeys.com/700x700/media/catalog/product/t/o/tom_clancy_s_rainbow_six_siege_pc_eu_.jpg",
      "nombre": "Rainbow Six Siege",
      "categoria": "FPS",
      "votos": 2345
    },
    {
      "imagen": "https://i.pinimg.com/originals/09/8c/a9/098ca9ddec4a3731a11e4cb0510b4f1b.jpg",
      "nombre": "Ghost of Tsushima",
      "categoria": "Acción-Aventura",
      "votos": 1987
    },
    {
      "imagen": "https://m.media-amazon.com/images/I/81Dfrv5Em3L._AC_UF894,1000_QL80_.jpg",
      "nombre": "Destiny 2",
      "categoria": "FPS",
      "votos": 1987
    },
    {
      "imagen": "https://sm.ign.com/ign_es/game/m/mortal-kom/mortal-kombat-11_d1sx.jpg",
      "nombre": "Mortal Kombat 11",
      "categoria": "Lucha",
      "votos": 1876
    },
    {
      "imagen": "https://image.api.playstation.com/vulcan/ap/rnd/202011/0516/moEBb5teD6EE0DH0jbfHl1Dn.jpg",
      "nombre": "NBA 2K21",
      "categoria": "Deportes",
      "votos": 1678
    },
    {
      "imagen": "https://i.pinimg.com/originals/87/a5/48/87a548659ce51db6d5e9f5c71a935b53.jpg",
      "nombre": "Minecraft Dungeons",
      "categoria": "RPG",
      "votos": 1987
    },
    {
      "imagen": "https://wallpaperswide.com/download/the_elder_scrolls_v_skyrim-wallpaper-768x1024.jpg",
      "nombre": "The Elder Scrolls V: Skyrim",
      "categoria": "RPG",
      "votos": 2345
    },
    {
      "imagen": "https://i.3djuegos.com/juegos/16436/super_mario_maker_2/fotos/ficha/super_mario_maker_2-4869775.jpg",
      "nombre": "Super Mario Maker 2",
      "categoria": "Plataforma",
      "votos": 1987
    },
    {
      "imagen": "https://cdn2.steamgriddb.com/grid/1a1ec01f6458adecccb605200d42f47c.png",
      "nombre": "Sea of Thieves",
      "categoria": "Aventura",
      "votos": 1987
    },
    {
      "imagen": "https://uvejuegos.com/img/caratulas/53880/boxart_1173.jpg",
      "nombre": "Smite",
      "categoria": "Battle Royale",
      "votos": 1987
    },
    {
      "imagen": "https://assetsio.gnwcdn.com/co30ya.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "nombre": "Rust",
      "categoria": "Sandbox",
      "votos": 1876
    },
    {
      "imagen": "https://uvejuegos.com/img/caratulas/45512/terraria-2d-new.jpg",
      "nombre": "Terraria",
      "categoria": "Sandbox",
      "votos": 1897
    },
    {
      "imagen": "https://i.3djuegos.com/juegos/12790/dead_by_daylight/fotos/ficha/dead_by_daylight-3434306.webp",
      "nombre": "Dead by Daylight",
      "categoria": "Horror",
      "votos": 1876
    },
    {
      "imagen": "https://sm.ign.com/t/ign_es/screenshot/default/wwe2k22-ag-2d-fob-flat-pegi-16_bpex.1080.jpg",
      "nombre": "WWE 2K22",
      "categoria": "FPS",
      "votos": 1897
    },
    {
      "imagen": "https://assetsio.gnwcdn.com/co1njn.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "nombre": "PlayerUnknown's Battlegrounds",
      "categoria": "Battle Royale",
      "votos": 2134
    },
    {
      "imagen": "https://i.pinimg.com/736x/59/1e/1d/591e1de1c239d88f49ad63d1be7e2b17.jpg",
      "nombre": "Diablo II",
      "categoria": "Party",
      "votos": 2345
    },
    {
      "imagen": "https://assetsio.gnwcdn.com/co5u9i.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "nombre": "Roblox",
      "categoria": "Sandbox",
      "votos": 1897
    },
    {
      "imagen": "https://uvejuegos.com/img/caratulas/62911/boxart_6832.jpg",
      "nombre": "Fall Guys: Ultimate Knockout",
      "categoria": "Party",
      "votos": 1897
    },
    {
      "imagen": "https://assetsio.gnwcdn.com/co3h3l.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
      "nombre": "The Sims 4",
      "categoria": "Simulación",
      "votos": 1876
    }
  ]
  
mongoose.connect(DB_URL).then(async ()=> {
    const allVideojuegos = await Videojuego.find();
    if(allVideojuegos.length > 0) {
        await Videojuego.collection.drop();
        console.log("Videojuegos borrados");
    }
})
.catch((error)=> console.log("Error borrando videojuegos", error))
.then(async () => {
    const videojuegoMap = arrayVideojuegos.map((videojuego)=> new Videojuego(videojuego));
    await Videojuego.insertMany(videojuegoMap);
    console.log("Videojuegos añadidos correctamente");
})
.catch((error)=> console.log("Error al añadir los videojuegos", error))
.finally(()=> mongoose.disconnect())