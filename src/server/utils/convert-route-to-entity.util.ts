const mapping: Record<string, string> = {
  feedbacks: 'feedback',
  menus: 'menu',
  orders: 'order',
  restaurants: 'restaurant',
  tables: 'table',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
