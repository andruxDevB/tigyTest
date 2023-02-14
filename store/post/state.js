export default () => ({
  types: {
    GRATITUDE_SENT: [2, 16],
    GRATITUDE_RECIVED: [3, 17],
    GRATITUDE_WITH_REWARD: [11, 14],
    GRATITUDE_GIVE_HELP: ['9-1', '10-1', '11-1', '9-2', '10-2', '11-2'],
  },
  share: [
    { label: 'Personal', id: 1 },
    { label: 'Mis colaboradores', id: 2 },
    { label: 'Mis grupo', id: 3 },
    { label: 'Ciudad', id: 4 },
    { label: 'País', id: 5 },
    { label: 'Todos', id: 6 },
  ],
})
