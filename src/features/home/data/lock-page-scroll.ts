const LOCKED = [
  'overflow',
  'overscroll-behavior',
  'position',
  'top',
  'left',
  'right',
  'width',
] as const;

function clearLock(node: HTMLElement) {
  LOCKED.forEach((key) => {
    node.style.removeProperty(key);
  });
}

function blockScroll(event: Event) {
  event.preventDefault();
}

export function lockPageScroll() {
  const html = document.documentElement;
  const body = document.body;
  const scrollY = window.scrollY;
  html.style.overflow = 'hidden';
  html.style.overscrollBehavior = 'none';
  body.style.overflow = 'hidden';
  body.style.overscrollBehavior = 'none';
  body.style.position = 'fixed';
  body.style.top = `-${scrollY}px`;
  body.style.left = '0';
  body.style.right = '0';
  body.style.width = '100%';
  document.addEventListener('wheel', blockScroll, { passive: false });
  document.addEventListener('touchmove', blockScroll, { passive: false });
  return scrollY;
}

export function unlockPageScroll(scrollY: number) {
  document.removeEventListener('wheel', blockScroll);
  document.removeEventListener('touchmove', blockScroll);
  clearLock(document.documentElement);
  clearLock(document.body);
  window.scrollTo(0, scrollY);
}
