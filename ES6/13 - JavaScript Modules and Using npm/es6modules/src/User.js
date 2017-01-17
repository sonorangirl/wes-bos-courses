import slug from 'slug';
import base64 from 'base-64';
import { url } from './config';

// Default export for User
export default function User(name, email, website) {
	return { name, email, website };
}

// Named export for creating a url for user
export function createUrl(name) {
	return `${url}/users/${slug(name)}`;
}

// Named export for getting a users gravatar
export function gravatar(email) {
	const baseNum = base64.encode(email);
	return `https://www.gravatar.com/avatar/${baseNum}`;
}





