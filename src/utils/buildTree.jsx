/**
 * Функция преобразования массива изменённых объектов
 *
 * Изменяет полученный с сервера список изменённых объектов в древовидном виде подобно структуре ldap каталога
 *
 * @module helpers.buildTree
 */

/**
 * Функция преобразования массива изменённых объектов в виде древовидного объекта
 * @param {Array} objects Массив изменённых объектов
 * @returns {Object}
 */
export function buildTree(objects) {
	const tree = {};

	objects.forEach(obj => {
		let arr = obj.obj_name.split(',');

		let dc = '';

		arr = arr.filter(el => {
			if (/dc=/.test(el)) {
				dc += `${el},`;
				return false;
			} else {
				return true;
			}
		});

		dc = dc.substring(0, dc.length - 1);
		arr.push(dc);

		arr.reverse();

		let currentNode = tree;

		for (let i = 0; i < arr.length; i++) {
			if (!currentNode[arr[i]]) {
				if (i == arr.length - 1) {
					currentNode[arr[i]] = {
						hashIndex: arr.slice(0, i + 1),
						obj_name: obj.obj_name,
						change: obj.change_type,
						open: false,
					};
				} else {
					currentNode[arr[i]] = { hashIndex: arr.slice(0, i + 1), open: false };
				}
			}

			currentNode = currentNode[arr[i]];
		}
	});

	return tree;
}
