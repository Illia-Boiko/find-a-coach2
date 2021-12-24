export const directionColor = (direction) => {
  switch (direction) {
    case 'frontend':
      return 'bg-indigo-200'
    case 'backend':
      return 'bg-red-300'
    case 'career':
      return 'bg-pink-400'
    default:
      return ''
  }
}
