/**
 * Функция проверки кода статуса ответа для запросов без процесса
 *
 * @module helpers/checkCodeAllApi
 */

/**
 * Функция проверки кода статуса ответа для запросов без процесса
 * @param {Object} response Объект ответа на запрос
 * @param {string} error Текст ошибки
 * @param {string} error_401 Текст ошибки
 * @param {string} error_404 Текст ошибки
 * @param {string} error_500 Текст ошибки
 * @param {function} setMessageModal Функция изменения атома состояния - текст сообщения для пользователя
 * @param {function} setOpenModalState Функция изменения атома состояния - скрытие / показ модального окна
 * @returns {boolean}
 */
export function checkCodeAllApi(response, error, error_401, error_404, error_500, setOpenModalState, setMessageModal) {
	if (response.status === 401) {
		setMessageModal(error_401);
		setOpenModalState(true);
		return true;
	}
	if (response.status === 404) {
		setMessageModal(error_404);
		setOpenModalState(true);
		return true;
	}
	if (response.status === 500) {
		setMessageModal(error_500);
		setOpenModalState(true);
		return true;
	}
	if (response.status !== 200) {
		setMessageModal(error);
		setOpenModalState(true);
		return true;
	}
	if (response.status === 200) {
		return false;
	}
}
