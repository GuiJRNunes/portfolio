import type { MiddlewareHandler } from 'astro';

export const onRequest: MiddlewareHandler = ({ locals }, next) => {
  const map = new Map<string, number>();
  locals.$id = function (prefix: string) {
    const count = (map.get(prefix) ?? 0) + 1;
    map.set(prefix, count);
    return `${prefix}-${count}`;
  }

  return next();
}