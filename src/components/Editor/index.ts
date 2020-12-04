import Editor from './Editor.vue'

export function interopDefault (promise: Promise<any>) {
  return promise.then(m => m.default)
}

export const MESSAGES = {
  ui: {
    blockTunes: {
      toggler: {
        'Click to tune': 'Нажмите, чтобы настроить',
        'or drag to move': 'или перетащите'
      }
    },
    inlineToolbar: {
      converter: {
        'Convert to': 'Конвертировать в'
      }
    },
    toolbar: {
      toolbox: {
        Add: 'Добавить'
      }
    }
  },

  toolNames: {
    Text: 'Параграф',
    Heading: 'Заголовок',
    List: 'Список',
    Warning: 'Примечание',
    Checklist: 'Чеклист',
    Quote: 'Цитата',
    Code: 'Код',
    Delimiter: 'Разделитель',
    'Raw HTML': 'HTML-фрагмент',
    Table: 'Таблица',
    Link: 'Ссылка',
    Marker: 'Маркер',
    Bold: 'Полужирный',
    Italic: 'Курсив',
    InlineCode: 'Моноширинный'
  },

  tools: {
    link: {
      'Add a link': 'Вставьте ссылку'
    },

    stub: {
      'The block can not be displayed correctly.': 'Блок не может быть отображен'
    },

    warning: {
      Title: 'Название',
      Message: 'Сообщение'
    }
  },

  blockTunes: {
    delete: {
      Delete: 'Удалить'
    },

    moveDown: {
      'Move down': 'Переместить вниз'
    },

    moveUp: {
      'Move up': 'Переместить вверх'
    }
  }
}

export default Editor
