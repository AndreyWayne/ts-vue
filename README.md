# cybersport-front
> Фронтенд для cybersport.ru

## Установка
```
yarn install
```

## Разработка
```
yarn dev
```

## Разработка с режимом MOCK
```
yarn dev:mock
```

## Сборка
```
yarn build
```

## Запуск сборки
```
yarn start
```

## Линтинг
```
yarn lint
```

только код
```
yarn lint:script
```

только стили
```
yarn lint:style
```

чтобы автоматически исправить
```
yarn lint:fix
```

## Генераторы
сгенерировать компонент (обязательно в PascalCase)
```
yarn generate:component MyComponent
```

сгенерировать страницу (обязательно все маленькими буквами)
```
yarn generate:page mypage
```

## Тестирование
```
yarn test
```

## Storybook
```sh
yarn storybook:dev      # Разработка
yarn storybook:build    # Сборка
```

## Docker
```sh
docker-compose -f docker/docker-compose.dev.yml up                          # Разработка
docker build -t cybersport-front -f docker/Dockerfile .                     # Сборка образа
docker run -it -p 8080:80 --rm --name cybersport-front cybersport-front     # Запуск образа
```

## Авторизация в NPM
Данные для входа: https://confluence.esforce.net/pages/viewpage.action?pageId=135462930
```
npm login --registry "https://verdaccio.sel.esforce.net"
```
