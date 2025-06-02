export function getText(count: number) {
  switch (count) {
    case 0:
      return 'No items left';
    case 1:
      return '1 item left';
    default:
      return `${count} items left`;
  }
}
