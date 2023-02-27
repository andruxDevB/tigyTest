export default () => ({
  mobile: false,
  items: [...defaultMenus, gifMenu],
  itemsAdmin: [...defaultMenus, ...navAdmin],
})

const gifMenu = {
  label: 'Premios',
  link: '/gifs',
  icon: 'GiftIcon',
}

const defaultMenus = [
  {
    label: 'Tigy Line',
    link: '/',
    icon: 'HomeIcon',
  },
  {
    label: 'Mi Perfil',
    link: '/profile',
    icon: 'UserCircle',
  },
]

const navAdmin = [
  {
    label: 'Colaboradores',
    link: '/friends',
    icon: 'UserGroup',
  },
]
