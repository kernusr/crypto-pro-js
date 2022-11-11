import { TagsTranslations } from './tags-translations';

export const SUBJECT_TAGS_TRANSLATIONS: TagsTranslations[] = [
  { possibleNames: ['UnstructuredName'], translation: 'Неструктурированное имя' },
  { possibleNames: ['CN'], translation: 'Владелец' },
  { possibleNames: ['SN'], translation: 'Фамилия' },
  { possibleNames: ['G'], translation: 'Имя Отчество' },
  { possibleNames: ['C'], translation: 'Страна' },
  { possibleNames: ['S'], translation: 'Регион' },
  { possibleNames: ['STREET'], translation: 'Адрес' },
  { possibleNames: ['O'], translation: 'Компания' },
  { possibleNames: ['OU'], translation: 'Отдел/подразделение' },
  { possibleNames: ['T'], translation: 'Должность' },
  { possibleNames: ['ОГРН', 'OGRN'], translation: 'ОГРН' },
  { possibleNames: ['ОГРНИП', 'OGRNIP'], translation: 'ОГРНИП' },
  { possibleNames: ['СНИЛС', 'SNILS'], translation: 'СНИЛС' },
  { possibleNames: ['ИНН', 'ИННФЛ', 'ИНН ФЛ', 'INN', 'ИНН физического лица'], translation: 'ИНН' },
  { possibleNames: ['ИННЮЛ', 'ИНН ЮЛ', 'INN LE', 'INNLE', 'ИНН организации'], translation: 'ИНН ЮЛ' },
  { possibleNames: ['E'], translation: 'Email' },
  { possibleNames: ['L'], translation: 'Город' },
];
