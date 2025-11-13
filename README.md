## Modules

<dl>
<dt><a href="#module_helpers/buildTree">helpers/buildTree</a></dt>
<dd><p>Функция преобразования массива изменённых объектов</p>
</dd>
<dt><a href="#module_helpers/buildTreeFinal">helpers/buildTreeFinal</a></dt>
<dd><p>Функция преобразования &quot;dn&quot; объекта</p>
</dd>
<dt><a href="#module_helpers/checkCode">helpers/checkCode</a></dt>
<dd><p>Функция проверки кода ответа</p>
</dd>
<dt><a href="#helpers.checkCodeAllApi

Функция проверки кода статуса ответа для запросов без процессаmodule_">helpers.checkCodeAllApi

Функция проверки кода статуса ответа для запросов без процесса</a></dt>
<dd></dd>
</dl>

<a name="module_helpers/buildTree"></a>

## helpers/buildTree
Функция преобразования массива изменённых объектов

<a name="module_helpers/buildTree.buildTree"></a>

### helpers/buildTree.buildTree(objects) ⇒ <code>Object</code>
Функция преобразования массива изменённых объектов в виде древовидного объекта

Изменяет полученный с сервера список изменённых объектов в древовидном виде подобно структуре ldap каталога

**Kind**: static method of [<code>helpers/buildTree</code>](#module_helpers/buildTree)  

| Param | Type | Description |
| --- | --- | --- |
| objects | <code>Array</code> | Массив изменённых объектов |

<a name="module_helpers/buildTreeFinal"></a>

## helpers/buildTreeFinal
Функция преобразования "dn" объекта

<a name="module_helpers/buildTreeFinal.buildTreeFinal"></a>

### helpers/buildTreeFinal.buildTreeFinal(objects) ⇒ <code>Object</code>
Функция преобразования массива изменённых объектов в виде древовидного объекта

Преобразовывает "dn" объекта в массив узлов начинающегося с самого глубоко-вложенного подобно узлам ldap каталога

**Kind**: static method of [<code>helpers/buildTreeFinal</code>](#module_helpers/buildTreeFinal)  

| Param | Type | Description |
| --- | --- | --- |
| objects | <code>Array</code> | Массив изменённых объектов |

<a name="module_helpers/checkCode"></a>

## helpers/checkCode
Функция проверки кода ответа

<a name="module_helpers/checkCode.checkCode"></a>

### helpers/checkCode.checkCode(res, error_401, error_404, error_500, error, setOpenModal, setMessageModal, setStatusCopyProc) ⇒ <code>boolean</code>
Функция проверки кода ответа

Обрабатывает код ответа от сервера и обновляет интерфейс пользователя соответствующим образом

**Kind**: static method of [<code>helpers/checkCode</code>](#module_helpers/checkCode)  

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

<a name="helpers.checkCodeAllApi

Функция проверки кода статуса ответа для запросов без процессаmodule_"></a>

## helpers.checkCodeAllApi

Функция проверки кода статуса ответа для запросов без процесса
