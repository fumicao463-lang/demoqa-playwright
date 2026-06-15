import * as path from 'path';

export const ROOT_DIR = path.resolve(__dirname, '..');

export const STORAGE_STATE = path.join(ROOT_DIR, 'playwright', '.auth', 'user.json');
