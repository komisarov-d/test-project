import lodash from 'lodash';

// eslint-disable-next-line @typescript-eslint/ban-types
export const camelKeys = (object: object) => lodash.mapKeys(object, (_value, key) => lodash.camelCase(key));
