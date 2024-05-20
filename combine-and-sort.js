let items = [
  {
    id: 1,
    status: 'completed',
    name: 'The Lord of the Rings',
  },
  {
    id: 2,
    status: 'in-progress',
    name: 'The Lord of the Files',
  },
  {
    id: 3,
    status: 'not-started',
    name: 'Dune',
  },
  {
    id: 4,
    status: 'not-started',
    name: 'American Gods',
  },
  {
    id: 5,
    status: 'in-progress',
    name: "Ender's Game",
  },
  {
    id: 6,
    status: 'completed',
    name: 'Brave New World',
  },
  {
    id: 7,
    status: 'in-progress',
    name: '1984',
  },
];

function combineAndSort(arr) {
  const combined = arr.reduce(
    (acc, item) => {
      switch (item.status) {
        case 'completed':
          acc[0].books = [...acc[0].books, { id: item.id, name: item.name }];
          return acc;
          break;
        case 'in-progress':
          acc[1].books = [...acc[1].books, { id: item.id, name: item.name }];
          return acc;
          break;
        case 'not-started':
          acc[2].books = [...acc[2].books, { id: item.id, name: item.name }];
          return acc;
          break;
        default:
          return acc;
      }
    },
    [
      {
        status: 'completed',
        books: [],
      },
      {
        status: 'in-progress',
        books: [],
      },
      {
        status: 'completed',
        books: [],
      },
    ]
  );
  const sorted = combined.map((obj) =>
    obj.books.sort((a, z) =>
      a.name.toString().toLowerCase() < z.name.toString().toLowerCase() ? -1 : 1
    )
  );
  return sorted;
}

console.log(combineAndSort(items));
