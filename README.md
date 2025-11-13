## Modules

<dl>
<dt><a href="#helpers.module_buildTree">buildTree</a></dt>
<dd><p>Функция преобразования массива изменённых объектов</p>
<p>Изменяет полученный с сервера список изменённых объектов в древовидном виде подобно структуре ldap каталога</p>
</dd>
<dt><a href="#helpers.module_buildTreeFinal">buildTreeFinal</a></dt>
<dd><p>Функция преобразования &quot;dn&quot; объекта</p>
<p>Преобразовывает &quot;dn&quot; объекта в массив узлов начинающегося с самого глубоко-вложенного подобно узлам ldap каталога</p>
</dd>
<dt><a href="#helpers.module_checkCode">checkCode</a></dt>
<dd><p>Функция проверки кода ответа</p>
<p>Обрабатывает код ответа от сервера и обновляет интерфейс пользователя соответствующим образом</p>
</dd>
<dt><a href="#helpers.module_checkCodeAllApi">checkCodeAllApi</a></dt>
<dd></dd>
</dl>

<a name="helpers.module_buildTree"></a>

## buildTree
Функция преобразования массива изменённых объектов

Изменяет полученный с сервера список изменённых объектов в древовидном виде подобно структуре ldap каталога

<a name="helpers.module_buildTree.buildTree"></a>

### buildTree.buildTree(objects) ⇒ <code>Object</code>
Функция преобразования массива изменённых объектов в виде древовидного объекта

**Kind**: static method of [<code>buildTree</code>](#helpers.module_buildTree)  

| Param | Type | Description |
| --- | --- | --- |
| objects | <code>Array</code> | Массив изменённых объектов |

<a name="helpers.module_buildTreeFinal"></a>

## buildTreeFinal
Функция преобразования "dn" объекта

Преобразовывает "dn" объекта в массив узлов начинающегося с самого глубоко-вложенного подобно узлам ldap каталога

<a name="helpers.module_buildTreeFinal.buildTreeFinal"></a>

### buildTreeFinal.buildTreeFinal(objects) ⇒ <code>Object</code>
Функция преобразования массива изменённых объектов в виде древовидного объекта

**Kind**: static method of [<code>buildTreeFinal</code>](#helpers.module_buildTreeFinal)  

| Param | Type | Description |
| --- | --- | --- |
| objects | <code>Array</code> | Массив изменённых объектов |

<a name="helpers.module_checkCode"></a>

## checkCode
Функция проверки кода ответа

Обрабатывает код ответа от сервера и обновляет интерфейс пользователя соответствующим образом

<a name="helpers.module_checkCode.checkCode"></a>

### checkCode.checkCode(res, error_401, error_404, error_500, error, setOpenModal, setMessageModal, setStatusCopyProc) ⇒ <code>boolean</code>
Функция проверки кода ответа

**Kind**: static method of [<code>checkCode</code>](#helpers.module_checkCode)  

| Param | Type | Description |
| --- | --- | --- |
| res | <code>Object</code> | Объект ответа на запрос |
| error_401 | <code>string</code> | Текст ошибки |
| error_404 | <code>string</code> | Текст ошибки |
| error_500 | <code>string</code> | Текст ошибки |
| error | <code>string</code> | Текст ошибки |
| setOpenModal | <code>function</code> | Функция изменения значения атома состояния - открыто/закрыто модальное окно |
| setMessageModal | <code>function</code> | Функция изменения атома состояния - текст сообщения для пользователя |
| setStatusCopyProc | <code>function</code> | Функция изменения атома состояния - статус запущенного процесс |

<a name="helpers.module_checkCodeAllApi"></a>

## checkCodeAllApi
<a name="helpers.module_checkCodeAllApi.checkCodeAllApi"></a>

### checkCodeAllApi.checkCodeAllApi(response, error, error_401, error_404, error_500, setMessageModal, setOpenModalState) ⇒ <code>boolean</code>
Функция проверки кода статуса ответа для запросов без процесса

**Kind**: static method of [<code>checkCodeAllApi</code>](#helpers.module_checkCodeAllApi)  

| Param | Type | Description |
| --- | --- | --- |
| response | <code>Object</code> | Объект ответа на запрос |
| error | <code>string</code> | Текст ошибки |
| error_401 | <code>string</code> | Текст ошибки |
| error_404 | <code>string</code> | Текст ошибки |
| error_500 | <code>string</code> | Текст ошибки |
| setMessageModal | <code>function</code> | Функция изменения атома состояния - текст сообщения для пользователя |
| setOpenModalState | <code>function</code> | Функция изменения атома состояния - скрытие / показ модального окна |

