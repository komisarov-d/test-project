export const adjustEmail = (stringValue: string) => stringValue.trim().toLowerCase();

export const camelToSnakeCase = (str: string) => str.replace(/[A-Z]/g, (letter: string) => `_${letter.toLowerCase()}`);

export const escape = (str: string) => str.replace(/[\\$'"]/g, '\\$&');