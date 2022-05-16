export enum USER_ROLES {
  NORMAL = 'NORMAL',
  EVENT = 'EVENT'
}

export type authenticationData = {
  id: string,
}

export type postData = {
  photo: string,
  description: string,
  type: USER_ROLES,
  createAt: number,
}

export type post = postData & { id: string }