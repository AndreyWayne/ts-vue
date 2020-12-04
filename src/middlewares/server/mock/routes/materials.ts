// import { Error, Material } from '@cybersport/specifications'
//
// import { Route } from '../api'
// import db from '../db'
//
// const materials: Route<'materials'> = {
//   getMaterialBySlug(req, res) {
//     const { slug } = req.params
//
//     const error: Error = {
//       errors: [
//         {
//           code: '404',
//           status: 'Not Found',
//           title: 'Not Found',
//         },
//       ],
//     }
//
//     if (!slug) {
//       return res.status(404).json(error)
//     }
//
//     const materials = db.get('materials').value()
//
//     const data = materials.find((material: Material) => {
//       return material.attributes.slug === slug
//     })
//
//     if (!data) {
//       return res.status(404).json(error)
//     }
//
//     res.json({ data })
//   },
//
//   getMaterialsMainPage(_req, res) {
//     const data = db.get('materials').value()
//     res.json({ data })
//   },
//
//   postMaterials(req, res) {
//     const data = db.get('materials').value()
//     const newMaterial = req.body
//
//     if (!newMaterial?.attributes.slug) {
//       return res.status(400).json({
//         errors: [
//           {
//             code: '400',
//             status: 'Bad Request',
//             title: 'Missing slug',
//           },
//         ],
//       })
//     }
//
//     newMaterial.id = Math.floor(Math.random() * (10000 - 100) + 100)
//     data.push(newMaterial)
//
//     db.set('materials', data).write()
//     res.json(newMaterial)
//   },
//
//   patchMaterialBySlug(req, res) {
//     const { slug } = req.params
//     const updatedMaterial = req.body
//
//     const error: Error = {
//       errors: [
//         {
//           code: '404',
//           status: 'Not Found',
//           title: 'Not Found',
//         },
//       ],
//     }
//
//     if (!slug) {
//       return res.status(404).json(error)
//     }
//
//     const materials = db
//       .get('materials')
//       .value()
//       .map((current: Material) => {
//         if (current.attributes.slug === slug) return updatedMaterial
//         return current
//       })
//
//     db.set('materials', materials).write()
//
//     res.json(updatedMaterial)
//   },
// }
//
// export const defaultState: Material[] = [
//   // Новость - стандартный.
//   {
//     id: 1,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 2,
//         longTitle: 'Counter-Strike: Global Offensive',
//         shortTitle: 'CS:GO',
//       },
//
//       leadText: 'Cybersport.ru собрал всю ключевую информацию о тайтле.',
//
//       publishedAt: 1591630493,
//       title: 'Смесь из Assassin’s Creed и The Witcher 3 в Японии — что мы знаем о Ghost of Tsushima',
//
//       type: 1,
//       slug: 'smes-iz-assassin-s-creed-i-the-witcher-3-v-yaponii-chto-my-znaem-o-ghost-of-tsushima',
//     },
//   },
//   // Интервью - лонгрид.
//   {
//     id: 2,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 1,
//         longTitle: 'Dota 2',
//         shortTitle: 'D2',
//       },
//
//       leadText:
//         'Офлейнер состава OG по Dota 2 Себастьян Ceb Дебс рассказал, что он до сих пор полон мотивации выигрывать. В интервью для командного канала он отметил, что другие коллективы обязаны доказать, что способны победить OG',
//
//       publishedAt: 1591630493,
//       title: 'Ceb: «Мы верим, что победим. А вы уже должны доказать обратное»',
//
//       type: 2,
//       slug: 'ceb-my-verim-chto-pobedim-a-vy-uzhe-dolzhny-dokazat-obratnoe',
//     },
//   },
//   // Лонгрид - лонгрид.
//   {
//     id: 3,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 1,
//         longTitle: 'Dota 2',
//         shortTitle: 'D2',
//       },
//
//       leadText:
//         'Игроки в Dota 2 Илья Lil Ильюк и Владислав Petushara Козловский зарегистрировали микс MEMENAME для игры в открытых отборочных OMEGA League для Восточной Европы. Вместе с ними в составе также выступают Егор Ark Жаботинский, Кирилл Sunlight Качинский и Владислав Suzuya Семёнов.',
//
//       publishedAt: 1591630493,
//       title: 'Lil собрал команду с Petushara для отборочных на OMEGA League',
//
//       type: 3,
//       slug: 'lil-sobral-komandu-s-petushara-dlya-otborochnyh-na-omega-league',
//     },
//   },
//   // Видео - стандартный.
//   {
//     id: 4,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 2,
//         longTitle: 'Counter-Strike: Global Offensive',
//         shortTitle: 'CS:GO',
//       },
//
//       leadText:
//         '27 июля в 12:00 мск VP.Prodigy и Natus Vincere встретятся в матче плей-офф OGA Dota PIT 2020 Season 2 для Европы и СНГ. Аналитики БК Parimatch полагают, что состав Виталия Save- Мельника окажется сильнее оппонента.',
//
//       publishedAt: 1591630493,
//       title: 'VP.Prodigy или Natus Vincere — кто пройдет в полуфинал OGA Dota PIT 2020 Season 2?',
//
//       type: 4,
//       slug: 'vp-prodigy-ili-natus-vincere-kto-proydet-v-polufinal-oga-dota-pit-2020-season-2',
//     },
//   },
//   // Косплей - стандартный.
//   {
//     id: 5,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 2,
//         longTitle: 'Counter-Strike: Global Offensive',
//         shortTitle: 'CS:GO',
//       },
//
//       leadText:
//         '26 июля в 13:00 мск Team LDLC сыграет против CR4ZY в полуфинале Eden Arena: Malta Vibes. Week 4 по CS:GO. Эксперты Parimatch считают, что оба коллектива имеют равные шансы на победу в противостоянии.',
//
//       publishedAt: 1591630493,
//       title: 'Аналитики не смогли определить фаворита в матче LDLC против CR4ZY на Eden Arena: Malta Vibes',
//
//       type: 5,
//       slug: 'analitiki-ne-smogli-opredelit-favorita-v-matche-ldlc-protiv-cr4zy-na-eden-arena-malta-vibes',
//     },
//   },
//   // Статьи - стандартный.
//   {
//     id: 6,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 2,
//         longTitle: 'Counter-Strike: Global Offensive',
//         shortTitle: 'CS:GO',
//       },
//
//       leadText:
//         'В ночь на 24 июля Valve выпустила патч для CS:GO, в котором скорректировала регистрацию урона от боевых гранат и «декоя». Разработчики также обновили список карт в официальном матчмейкинге — убрали Chlorine и Jungle, но добавили Mutiny и Swamp в режимы Casual, Deathmatch и Scrimmage.',
//
//       publishedAt: 1591630493,
//       title: 'В CS:GO убрали урон у ложных гранат и обновили маппул в официальном матчмейкинге',
//
//       type: 6,
//       slug: 'v-cs-go-ubrali-uron-u-lozhnyh-granat-i-obnovili-mappul-v-oficialnom-matchmeykinge',
//     },
//   },
//   // Рецензия - рецензия.
//   {
//     id: 7,
//     type: 'material',
//
//     attributes: {
//       discipline: {
//         id: 2,
//         longTitle: 'Counter-Strike: Global Offensive',
//         shortTitle: 'CS:GO',
//       },
//
//       leadText:
//         'Завершилось голосование за главную легенду составов Natus Vincere по Counter-Strike 1.6 и CS:GO на Cybersport.ru. 35% пользователей портала посчитали, что этого звания заслуживает бывший капитан команды Даниил Zeus Тесленко.',
//
//       publishedAt: 1591630493,
//       title: 'Пользователи Cybersport.ru выбрали Zeus главной легендой NAVI в Counter‑Strike',
//
//       type: 7,
//       slug: 'polzovateli-cybersport-ru-vybrali-zeus-glavnoy-legendoy-navi-v-counter-strike',
//     },
//   },
// ]
//
// export default materials
