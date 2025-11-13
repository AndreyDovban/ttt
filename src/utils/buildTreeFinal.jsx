/**
 * Функция преобразования "dn" объекта
 *
 * Преобразовывает "dn" объекта в массив узлов начинающегося с самого глубоко-вложенного подобно узлам ldap каталога
 *
 * @module helpers/buildTreeFinal
 */

/** Функция для преобразования "dn" в массив узлов начинающегося с самого глубоко-вложенного */
import { createIndex } from './createIndex';

function insertIntoTree(tree, pathComponents, value) {
	let node = tree;
	const len = pathComponents.length;

	// Проходим по каждому компоненту кроме последнего
	for (let i = 0; i < len - 1; i++) {
		const part = pathComponents[i]; // Получаем компонент вида DC=value
		const key = part.trim(); // Используем сам компонент как ключ
		if (!node[key]) {
			node[key] = { hashIndex: pathComponents.slice(0, i + 1), open: false }; // Если ключа ещё нет, создаём новый пустой объект
		}
		node = node[key]; // Переходим глубже
	}

	// Добавляем последний компонент с объектом restore
	const finalKey = pathComponents[len - 1].trim();
	if (!node[finalKey]) {
		node[finalKey] = {
			restore: value,
			open: false,
			change: value.change_type,
			obj_name: value.obj_name,
			hashIndex: pathComponents.slice(0, len),
		};
	} else {
		if (node[finalKey]['restore']) {
			node[finalKey]['restore']['changed_attributes'] = node[finalKey]['restore']['changed_attributes'].concat(
				value['changed_attributes'],
			);
		} else {
			node[finalKey]['restore'] = value;
		}
		node[finalKey]['open'] = false;
		node[finalKey]['change'] = value.change_type;
		node[finalKey]['obj_name'] = value.obj_name;
		node[finalKey]['hashIndex'] = pathComponents.slice(0, len);
	}
}

/**
 * Функция преобразования массива изменённых объектов в виде древовидного объекта
 * @param {Array} objects Массив изменённых объектов
 * @returns {Object}
 */
export function buildTreeFinal(objects) {
	const tree = {};

	for (const entry of objects) {
		insertIntoTree(tree, createIndex(entry.obj_name), entry);
	}

	return tree;
}
