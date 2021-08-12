// // server.js
// const FakeServer = require('fake-json-api-server/src/nodeServer')

// const startServer = () =>
//   new FakeServer({
//     baseApiUrl: '/jsonapi/',
//     port: 9000,
//     resources: {
//       article: {
//         data: [
//           {
//             type: 'article',
//             id: '1',
//             attributes: { title: 'Article 1' }
//           },
//           {
//             type: 'article',
//             id: '2',
//             attributes: { title: 'Article 2' }
//           },
//           {
//             type: 'article',
//             id: '3',
//             attributes: { title: 'Article 3' }
//           }
//         ]
//       }
//     }
//   })

// startServer()
// {
//     'article' : [
//         {
//             type: 'article',
//             id: '1',
//             attributes: { title: 'Article 1' }
//         },
//         {
//             type: 'article',
//             id: '2',
//             attributes: { title: 'Article 2' }
//         },
//         {
//             type: 'article',
//             id: '3',
//             attributes: { title: 'Article 3' }
//         }
//     ];
// }
export default {
  articles: [
    {
      posts: [
        { id: 1, title: 'json-server', author: 'typicode' }
      ],
      comments: [
        { id: 1, body: 'some comment 1', postId: 1 },
        { id: 2, body: 'some comment 2', postId: 1 },
        { id: 3, body: 'some comment 3', postId: 1 },
        { id: 4, body: 'some comment 4', postId: 1 }
      ],
      profile: { name: 'typicode' }
    }
  ]
}
