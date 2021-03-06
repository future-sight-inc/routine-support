module.exports = {
  extends: ["@commitlint/config-conventional"],
  types: {
    feat: "новая функция для пользователя, а не новая функция для сценария сборки",
    fix: "исправление ошибки для пользователя, а не исправление сценариев сборки",
    refactor: "рефакторинг производственного кода",
    chore: "обновление задач gulp и т.д.; без изменения производственного кода",
    docs: "изменения в документации",
    style:
      "форматирование, пропущенные точки с запятой и т.д.; без изменения кода",
    perf: "код улучшен с точки зрения производительности обработки",
    vendor: "версия обновления для зависимостей, пакетов.",
    test: "добавление отсутствующих тестов, рефакторинг тестов; без изменения производственного кода",
  },
  "max-len": 80,
  debug: true,
  lang: "en-US",
};
