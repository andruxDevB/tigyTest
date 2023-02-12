export default () => ({
  mobile: false,
  items: defaultMenus,
  itemsAdmin: [...defaultMenus, navAdmin],
})

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

const navAdmin = {
  label: 'Trabajadores',
  link: '/friends',
  icon: 'UserGroup',
}
