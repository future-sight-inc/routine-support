# Routine Support Web

Веб-приложение программного комплекса **Routine Support**

## Стек технологий

- React
- TypeScript
- Redux
- StoryBook
- ESLint
- Husky

## Как запустить проект

1. Установить зависимости:

```bash
yarn install
```

2. Запросить файл с переменными окружения (.env)
3. Разместить файл в директории apps/server
4. Открыть Google Chrome в специальном режиме:
   Для Windows:

```shell
chrome.exe --user-data-dir="C://Chrome dev session" --disable-web-security
```

Для MacOs:

```bash
open -na Google\ Chrome --args --user-data-dir=/tmp/temporary-chrome-profile-dir --disable-web-security
```

5. Запустить сервер:

```bash
  yarn start:server
```

6. Запустить веб:

```bash
  yarn start:web
```

После запуска фронт будет доступен по адресу http://localhost:4200

## Как работать над проектом

Для работы над проектом необходим доступ к макетам дизайн системы.
Макеты доступны по [ссылке](https://www.figma.com/file/9m90Pt3GJW8lUrbEAxQhwV/Routine-support?node-id=1%3A3).

Процесс работы над задачей состоит из следующих шагов:

1. Открытие задачи на доске в Trello со статусом **Opened**.
2. Открытие ветки под задачу в проекте. Название ветки должно быть в формате **<task-id>**. Например: 22.
3. Перевод задачи на доске в статус **In progress**
4. Коммит. Текст коммита должен соответствовать правилам, изложенным в пункте "Соглашения по коммитам"
5. Открытие pull request (PR). PR должен быть из **ветки задачи** в **develop** ветку Заголовок PR должен быть в формате **Resolve <task-id>**. Например: _45: Storybook heroku deploy_.
6. Сдача задачи на код ревью. Переведите задачу в колонку _Code review_ и приложите PR: откройте задачу в Trello, в пункте "Улучшения" нажмите GitHub, затем "Вложить pull-запрос". В PR поставьте в качестве ревьюеров разработчиков из вашего направления.
7. Прохождение код ревью. Когда все вопросы по код ревью будут решены, слейте задачу в **develop**.
8. Переведите задачу в колонку **Completed**.

## Соглашения по коммитам

- В коммитах используются префиксы в следующем формате: _<prefix-name>: commit message_. Используем следующие префиксы:
  - feat: новая функция для пользователя, а не новая функция для сценария сборки
  - fix: исправление ошибки для пользователя, а не исправление сценариев сборки
  - refactor: рефакторинг производственного кода
  - chore: обновление задач gulp и т.д.; без изменения производственного кода
  - docs: изменения в документации
  - style: форматирование, пропущенные точки с запятой и т.д.; без изменения кода
  - perf: код улучшен с точки зрения производительности обработки
  - vendor: версия обновления для зависимостей, пакетов.
  - test: добавление отсутствующих тестов, рефакторинг тестов; без изменения производственного кода
- Сообщение коммита должно отражать то, какие правки были внесены в проект.

Хорошее сообщение:

```
feat: add submit button
```

Плохое сообщение:

```
fix: fix some bugs
```

## Соглашения по стилизации кода

В проекте настроен линтер и прекоммит хуки, поэтому git не позволит сделать коммит нарушающий соглашения.

- Никаких any. В случае, если есть сомнение относительно какого-либо момента тогда, стоит обсудить вопрос с одним из разработчиков направления.
- Никаких var.
- Функции записываются в стрелочном виде.
- Используем табы.
- Переменные должны отражать смысл в своем названии.
- На один файл одна компонента.
- Константы именуются в верхнем регистре, например: SOME_CONSTANT.
- Интерфейсы именуем без префикса "I".

## Пример реализации компоненты React в соответствии с соглашениями

```tsx
import * as styles from "./Loader.module.css";

interface Props {
  isLoading: boolean;
}

const Loader: React.FC<Props> = ({ isLoading }) => {
  const LOADING_TEXT = "Loading...";

  if (isLoading) {
    return <p className={styles.loadingText}>{LOADING_TEXT}</p>;
  }

  return null;
};
```

## Соглашения по стилям

В проекте настроен линтер стилей и прекоммит хуки, поэтому git не позволит сделать коммит нарушающий соглашения.

- Никаких использований цвета напрямую, все цвета должны быть вынесены в переменные в файл ./styles/colors.css.
- Никаких идентификаторов.
- Классы пишем через camel case: loadingText.
- Никаких important!. Если сверстать без использования important! невозможно, тогда необходимо оставить в коде комментарий, чтобы решить вопрос на PR.
- Корневой элемент компоненты должен брать стили из класса root. Например:

```tsx
const Wrapper: React.FC = ({ children }) => {
  return <div className={styles.root}>{children}</div>;
};
```

- Breakpoints должны использоваться из файла ./styles/breakpoints.css.
