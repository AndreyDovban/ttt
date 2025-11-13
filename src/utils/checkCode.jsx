/**
 * Функция проверки кода ответа
 *
 * @module helpers/checkCode
 */

/**
 * Функция проверки кода ответа
 *
 * Обрабатывает код ответа от сервера и обновляет интерфейс пользователя соответствующим образом
 * @param {Object} res Объект ответа на запрос
 * @param {string} error_401 Текст ошибки
 * @param {string} error_404 Текст ошибки
 * @param {string} error_500 Текст ошибки
 * @param {string} error Текст ошибки
 * @param {function } setOpenModal Функция изменения значения атома состояния - открыто/закрыто модальное окно
 * @param {function} setMessageModal Функция изменения атома состояния - текст сообщения для пользователя
 * @param {function} setStatusCopyProc Функция изменения атома состояния - статус запущенного процесс
 * @returns {boolean}
 */
export function checkCode(
	res,
	error_401,
	error_404,
	error_500,
	error,
	setOpenModal,
	setMessageModal,
	setStatusCopyProc,
) {
	if (res.status === 401) {
		setOpenModal(true);
		setMessageModal(error_401);
		setStatusCopyProc(false);
		return true;
	}
	if (res.status === 404) {
		setOpenModal(true);
		setMessageModal(error_404);
		setStatusCopyProc(false);
		return true;
	}
	if (res.status === 500) {
		setOpenModal(true);
		setMessageModal(error_500);
		setStatusCopyProc(false);
		return true;
	}
	if (res.status !== 200) {
		setOpenModal(true);
		setMessageModal(error);
		setStatusCopyProc(false);
		return true;
	}
	if (res.status === 200) {
		return false;
	}
}
